(() => {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const root = document.documentElement;

  /* ---------- theme ---------- */
  $("#themeToggle").addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  /* ---------- mobile menu ---------- */
  const menuBtn = $("#menuBtn"), navLinks = $("#navLinks");
  const setMenu = (open) => { navLinks.classList.toggle("open", open); menuBtn.setAttribute("aria-expanded", open); menuBtn.textContent = open ? "Close" : "Menu"; };
  menuBtn.addEventListener("click", () => setMenu(!navLinks.classList.contains("open")));
  $$("a", navLinks).forEach((a) => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (e) => e.key === "Escape" && setMenu(false));

  /* ---------- nav border + active section ---------- */
  const nav = $("#nav");
  const onScroll = () => nav.classList.toggle("scrolled", scrollY > 8);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  const links = new Map($$("a", navLinks).map((a) => [a.getAttribute("href").slice(1), a]));
  const secObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      links.forEach((a) => a.classList.remove("active"));
      const a = links.get(en.target.id);
      if (a) a.classList.add("active");
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  $$("main section[id]").forEach((s) => secObs.observe(s));

  /* ---------- gentle fade-in ---------- */
  if (!reduce) {
    const fadeObs = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("in"); fadeObs.unobserve(en.target); }
    }), { rootMargin: "0px 0px -6% 0px" });
    $$(".section > *:not(h2), .specs").forEach((el) => { el.classList.add("fade"); fadeObs.observe(el); });
  }

  /* ---------- SoC diagram ---------- */
  const arch = {
    crypto: "Crypto engine — my main block. SHA-256, HMAC, AES (GCM/ECB/CBC/CTR) and ECDSA in Verilog, plus ML-KEM and ML-DSA. Packaged as Vivado IP with an AXI interface, verified in UVM, synthesized and timing-closed on FPGA.",
    cpu: "RISC-V core — I integrated the crypto engine with the RISC-V SoC and ran HW–SW co-verification of firmware and RTL together.",
    mem: "Memory — on-chip memory integrated on the AXI fabric alongside the engine and peripherals.",
    uart: "UART — serial peripheral integrated into the Vivado IP-based system.",
    gpio: "GPIO and timers — control and timing peripherals integrated on the AXI fabric.",
    bio: "Fingerprint sensor — I integrated a GT521F32 sensor for biometric user verification. The authenticator is tested end to end against a relying-party and FIDO2 server that I built.",
  };
  const info = $("#archInfo"), blks = $$("#arch .blk");
  const showArch = (k) => { blks.forEach((b) => b.classList.toggle("sel", b.dataset.k === k)); info.textContent = arch[k]; };
  blks.forEach((b) => {
    ["mouseenter", "focus", "click"].forEach((ev) => b.addEventListener(ev, () => showArch(b.dataset.k)));
    b.addEventListener("keydown", (e) => (e.key === "Enter" || e.key === " ") && showArch(b.dataset.k));
  });
  showArch("crypto");

  /* ---------- waveform ---------- */
  const wsvg = $("#waveSvg"), plot = $(".wave-plot"), wcur = $("#waveCursor"), wtime = $("#waveTime");
  const P = 26, ROW = 30, TOP = 6;              // px per clock (10 ns), row height
  const hash = (n) => { n = (n ^ 61) ^ (n >>> 16); n = n + (n << 3); n ^= n >>> 4; n = Math.imul(n, 0x27d4eb2d); return (n ^ (n >>> 15)) >>> 0; };
  const rst = (c) => (c % 96) >= 3;
  const valid = (c) => rst(c) && hash(c * 7 + 1) % 10 < 6;
  const ready = (c) => rst(c) && hash(c * 13 + 5) % 10 < 7;
  const fire = (c) => valid(c) && ready(c);
  const done = (c) => rst(c) && c % 16 === 15;
  const word = (c) => hash(c * 31 + 9).toString(16).padStart(8, "0").toUpperCase();
  const dataAt = (c) => { for (let k = c - 1; k > c - 64; k--) if (fire(k)) return k; return -1; };
  const lvl = (row, hi) => TOP + row * ROW + (hi ? 7 : 23);
  let off = 0;
  function digital(row, fn, c0, c1) {
    let d = "", prev = null;
    for (let c = c0; c <= c1; c++) {
      const x = c * P - off, v = fn(c), y = lvl(row, v);
      if (prev === null) d += `M${x},${y}`;
      else if (v !== prev) d += `L${x},${lvl(row, prev)}L${x},${y}`;
      d += `L${x + P},${y}`;
      prev = v;
    }
    return d;
  }
  function drawWave() {
    const w = plot.clientWidth; if (!w) return;
    const c0 = Math.floor(off / P) - 1, c1 = Math.ceil((off + w) / P) + 1;
    let clk = "", hs = "";
    for (let c = c0; c <= c1; c++) {
      const x = c * P - off;
      clk += `M${x},${lvl(0, 0)}L${x},${lvl(0, 1)}L${x + P / 2},${lvl(0, 1)}L${x + P / 2},${lvl(0, 0)}L${x + P},${lvl(0, 0)}`;
      if (fire(c)) hs += `M${x + P},${lvl(0, 1)}V${lvl(4, 0)}`;   // capture edge
    }
    const yT = lvl(4, 1), yB = lvl(4, 0), yM = (yT + yB) / 2;
    let bus = "", labels = "", seg = c0, cur = dataAt(c0);
    const flush = (end) => {
      const a = seg * P - off, b = end * P - off;
      bus += `M${a + 3},${yT}L${b - 3},${yT}L${b},${yM}L${b - 3},${yB}L${a + 3},${yB}L${a},${yM}Z`;
      if (b - a > 92) labels += `<text x="${(a + b) / 2}" y="${yM + 3.5}" text-anchor="middle">${cur >= 0 ? word(cur) : "xxxxxxxx"}</text>`;
    };
    for (let c = c0 + 1; c <= c1; c++) { const v = dataAt(c); if (v !== cur) { flush(c); seg = c; cur = v; } }
    flush(c1 + 1);
    wsvg.innerHTML = `<path class="hs" d="${hs}"/><path d="${clk}"/><path d="${digital(1, rst, c0, c1)}"/>` +
      `<path d="${digital(2, valid, c0, c1)}"/><path d="${digital(3, ready, c0, c1)}"/>` +
      `<path class="bus" d="${bus}"/>${labels}<path d="${digital(5, done, c0, c1)}"/>`;
  }
  let visible = false, last = 0;
  new IntersectionObserver(([e]) => (visible = e.isIntersecting)).observe($("#wave"));
  function loop(t) {
    if (visible && !document.hidden && t - last > 50) { off += ((t - last) / 1000) * 22; drawWave(); }
    if (t - last > 50 || !visible) last = t;
    requestAnimationFrame(loop);
  }
  drawWave();
  if (!reduce) requestAnimationFrame(loop);
  addEventListener("resize", drawWave);
  plot.addEventListener("pointermove", (e) => {
    const x = e.clientX - plot.getBoundingClientRect().left;
    wcur.style.left = x + "px";
    wtime.textContent = `t = ${(((off + x) / P) * 10).toFixed(1)} ns`;
  });

  /* ---------- project filter ---------- */
  $$(".filter").forEach((f) => f.addEventListener("click", () => {
    $$(".filter").forEach((x) => x.classList.toggle("active", x === f));
    $$("#projectGrid .proj").forEach((p) => (p.hidden = f.dataset.f !== "all" && p.dataset.cat !== f.dataset.f));
  }));

  /* ---------- copy email ---------- */
  const copyBtn = $("#copyEmail");
  copyBtn.addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(copyBtn.dataset.email); copyBtn.textContent = "Copied"; }
    catch { location.href = "mailto:" + copyBtn.dataset.email; }
    setTimeout(() => (copyBtn.textContent = "Copy"), 1800);
  });

  // re-align deep links once fonts and images have settled the layout
  addEventListener("load", () => {
    const t = location.hash && document.getElementById(location.hash.slice(1));
    if (t) t.scrollIntoView();
  });

  $("#year").textContent = new Date().getFullYear();
})();
