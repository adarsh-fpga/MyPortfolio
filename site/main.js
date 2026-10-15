(() => {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const root = document.documentElement;
  const css = (name) => getComputedStyle(root).getPropertyValue(name).trim();

  /* ---------- theme ---------- */
  $("#themeToggle").addEventListener("click", () => {
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
    drawWave(true);
  });

  /* ---------- mobile menu ---------- */
  const menuBtn = $("#menuBtn"), navLinks = $("#navLinks");
  const setMenu = (open) => { navLinks.classList.toggle("open", open); menuBtn.setAttribute("aria-expanded", open); };
  menuBtn.addEventListener("click", () => setMenu(!navLinks.classList.contains("open")));
  $$("a", navLinks).forEach((a) => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (e) => e.key === "Escape" && setMenu(false));

  /* ---------- scroll: progress, nav, to-top ---------- */
  const nav = $("#nav"), bar = $("#progress"), toTop = $("#toTop");
  const onScroll = () => {
    const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
    bar.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    nav.classList.toggle("scrolled", y > 20);
    toTop.classList.toggle("show", y > innerHeight);
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop.addEventListener("click", () => scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" }));

  /* ---------- active section in nav ---------- */
  const links = new Map($$("a", navLinks).map((a) => [a.getAttribute("href").slice(1), a]));
  const secObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        links.forEach((a) => a.classList.remove("active"));
        const a = links.get(en.target.id);
        if (a) a.classList.add("active");
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  $$("main section[id]").forEach((s) => secObs.observe(s));

  /* ---------- reveal + counters ---------- */
  const revObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add("in");
      $$("[data-count]", en.target).forEach(countUp);
      revObs.unobserve(en.target);
    });
  }, { threshold: 0, rootMargin: "0px 0px -8% 0px" });
  $$(".reveal").forEach((el, i) => {
    el.style.transitionDelay = (i % 4) * 70 + "ms";
    revObs.observe(el);
  });
  function countUp(el) {
    const end = parseFloat(el.dataset.count), dec = (el.dataset.count.split(".")[1] || "").length;
    const suf = el.dataset.suffix || "";
    if (reduce) { el.textContent = end.toFixed(dec) + suf; return; }
    const t0 = performance.now(), dur = 1400;
    const step = (t) => {
      const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      el.textContent = (end * e).toFixed(dec) + (p === 1 ? suf : "");
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /* ---------- typed roles ---------- */
  const roles = ["RTL Design Engineer", "Design Verification · UVM", "FPGA Prototyping & STA", "Hardware Security · PQC", "RISC-V SoC Integration"];
  const typed = $("#typed");
  if (!reduce) {
    let r = 0, i = roles[0].length, del = true;
    const tick = () => {
      const word = roles[r];
      i += del ? -1 : 1;
      typed.textContent = word.slice(0, i);
      let wait = del ? 35 : 70;
      if (!del && i === word.length) { del = true; wait = 1800; }
      else if (del && i === 0) { del = false; r = (r + 1) % roles.length; wait = 300; }
      setTimeout(tick, wait);
    };
    setTimeout(tick, 2200);
  }

  /* ---------- PCB trace background ---------- */
  const cv = $("#traces"), ctx = cv.getContext("2d");
  let W = 0, H = 0, traces = [], pulses = [], heroVisible = true, mouse = { x: -999, y: -999 };
  const G = 32;
  function buildTraces() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    W = cv.clientWidth; H = cv.clientHeight;
    cv.width = W * dpr; cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    traces = []; pulses = [];
    const n = Math.round((W * H) / 26000);
    for (let k = 0; k < n; k++) {
      let x = Math.round((Math.random() * W) / G) * G, y = Math.round((Math.random() * H) / G) * G;
      const pts = [[x, y]];
      let dir = Math.floor(Math.random() * 4);
      const segs = 2 + Math.floor(Math.random() * 4);
      for (let s = 0; s < segs; s++) {
        const len = G * (1 + Math.floor(Math.random() * 5));
        const d = [[1, 0], [0, 1], [-1, 0], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]][dir];
        const diag = dir > 3;
        x += d[0] * (diag ? len * 0.5 : len); y += d[1] * (diag ? len * 0.5 : len);
        pts.push([x, y]);
        dir = diag ? Math.floor(Math.random() * 4) : (Math.random() < 0.35 ? 4 + Math.floor(Math.random() * 4) : (dir + (Math.random() < 0.5 ? 1 : 3)) % 4);
      }
      let L = 0; const acc = [0];
      for (let p = 1; p < pts.length; p++) { L += Math.hypot(pts[p][0] - pts[p - 1][0], pts[p][1] - pts[p - 1][1]); acc.push(L); }
      traces.push({ pts, acc, L });
    }
    for (let k = 0; k < Math.round(traces.length * 0.45); k++) pulses.push(newPulse());
  }
  const newPulse = () => ({ t: traces[Math.floor(Math.random() * traces.length)], d: 0, v: 0.8 + Math.random() * 1.6 });
  function pointAt(tr, d) {
    for (let p = 1; p < tr.pts.length; p++) {
      if (d <= tr.acc[p]) {
        const f = (d - tr.acc[p - 1]) / (tr.acc[p] - tr.acc[p - 1] || 1);
        const a = tr.pts[p - 1], b = tr.pts[p];
        return [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f];
      }
    }
    return tr.pts[tr.pts.length - 1];
  }
  function drawTraces() {
    const rgb = css("--pulse");
    ctx.clearRect(0, 0, W, H);
    ctx.lineWidth = 1.2;
    for (const tr of traces) {
      const near = Math.hypot(tr.pts[0][0] - mouse.x, tr.pts[0][1] - mouse.y) < 180;
      ctx.strokeStyle = `rgba(${rgb},${near ? 0.32 : 0.12})`;
      ctx.beginPath(); ctx.moveTo(tr.pts[0][0], tr.pts[0][1]);
      for (let p = 1; p < tr.pts.length; p++) ctx.lineTo(tr.pts[p][0], tr.pts[p][1]);
      ctx.stroke();
      ctx.fillStyle = `rgba(${rgb},${near ? 0.6 : 0.25})`;
      for (const e of [tr.pts[0], tr.pts[tr.pts.length - 1]]) { ctx.beginPath(); ctx.arc(e[0], e[1], 2.6, 0, 7); ctx.fill(); }
    }
    for (const p of pulses) {
      for (let k = 0; k < 10; k++) {
        const d = p.d - k * 4; if (d < 0) break;
        const [x, y] = pointAt(p.t, d);
        ctx.fillStyle = `rgba(${rgb},${0.9 * (1 - k / 10)})`;
        ctx.beginPath(); ctx.arc(x, y, 2.2 - k * 0.15, 0, 7); ctx.fill();
      }
    }
  }
  function loopTraces() {
    if (heroVisible && !document.hidden) {
      for (let i = 0; i < pulses.length; i++) {
        pulses[i].d += pulses[i].v;
        if (pulses[i].d > pulses[i].t.L + 40) pulses[i] = newPulse();
      }
      drawTraces();
    }
    requestAnimationFrame(loopTraces);
  }
  buildTraces();
  if (reduce) drawTraces(); else requestAnimationFrame(loopTraces);
  let rs; addEventListener("resize", () => { clearTimeout(rs); rs = setTimeout(() => { buildTraces(); drawTraces(); drawWave(true); }, 150); });
  const hero = $(".hero");
  new IntersectionObserver(([e]) => (heroVisible = e.isIntersecting)).observe(hero);
  hero.addEventListener("pointermove", (e) => { const r = cv.getBoundingClientRect(); mouse = { x: e.clientX - r.left, y: e.clientY - r.top }; });
  hero.addEventListener("pointerleave", () => (mouse = { x: -999, y: -999 }));

  /* ---------- chip pins + tilt ---------- */
  const chip = $("#chip");
  $$(".pins", chip).forEach((p) => { for (let i = 0; i < 9; i++) p.appendChild(document.createElement("span")); });
  const pins = $$(".pins span", chip);
  if (!reduce) {
    setInterval(() => {
      const p = pins[Math.floor(Math.random() * pins.length)];
      p.classList.add("on"); setTimeout(() => p.classList.remove("on"), 600);
    }, 140);
    const hv = $(".hero-visual");
    hv.addEventListener("pointermove", (e) => {
      const r = chip.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      chip.style.transform = `rotateY(${x * 16}deg) rotateX(${-y * 16}deg)`;
    });
    hv.addEventListener("pointerleave", () => (chip.style.transform = ""));
  }

  /* ---------- waveform viewer ---------- */
  const wsvg = $("#waveSvg"), plot = $(".wave-plot"), wcur = $("#waveCursor"), wtime = $("#waveTime");
  const P = 24, ROW = 30, TOP = 6;               // px per clock, row height
  const hash = (n) => { n = (n ^ 61) ^ (n >>> 16); n = n + (n << 3); n ^= n >>> 4; n = Math.imul(n, 0x27d4eb2d); return (n ^ (n >>> 15)) >>> 0; };
  const rst = (c) => (c % 96) >= 3;
  const valid = (c) => rst(c) && hash(c * 7 + 1) % 10 < 7;
  const ready = (c) => rst(c) && hash(c * 13 + 5) % 10 < 8;
  const done = (c) => rst(c) && c % 16 === 15;
  const word = (c) => hash(c * 31 + 9).toString(16).padStart(8, "0").toUpperCase();
  // data bus value at cycle c: last word accepted on a valid&&ready handshake
  const dataAt = (c) => { for (let k = c; k > c - 64; k--) if (valid(k) && ready(k)) return k; return -1; };
  let off = 0, lastT = 0, wvVisible = false;
  function lvl(row, hi) { return TOP + row * ROW + (hi ? 7 : 23); }
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
  function drawWave(force) {
    const w = plot.clientWidth; if (!w) return;
    const c0 = Math.floor(off / P) - 1, c1 = Math.ceil((off + w) / P) + 1;
    let clk = "";
    for (let c = c0; c <= c1; c++) {
      const x = c * P - off, h = lvl(0, 1), l = lvl(0, 0);
      clk += `M${x},${l}L${x},${h}L${x + P / 2},${h}L${x + P / 2},${l}L${x + P},${l}`;
    }
    // bus row 4
    const yT = lvl(4, 1), yB = lvl(4, 0), yM = (yT + yB) / 2;
    let bus = "", labels = "", segStart = c0, cur = dataAt(c0);
    const flush = (endC) => {
      const xa = segStart * P - off, xb = endC * P - off;
      bus += `M${xa + 3},${yT}L${xb - 3},${yT}L${xb},${yM}L${xb - 3},${yB}L${xa + 3},${yB}L${xa},${yM}Z`;
      if (cur >= 0 && xb - xa > 88) labels += `<text x="${(xa + xb) / 2}" y="${yM + 3.5}" text-anchor="middle">32'h${word(cur)}</text>`;
      else if (cur < 0 && xb - xa > 30) labels += `<text x="${(xa + xb) / 2}" y="${yM + 3.5}" text-anchor="middle">x</text>`;
    };
    for (let c = c0 + 1; c <= c1; c++) {
      const v = dataAt(c);
      if (v !== cur) { flush(c); segStart = c; cur = v; }
    }
    flush(c1 + 1);
    wsvg.innerHTML =
      `<path class="clk" d="${clk}"/>` +
      `<path d="${digital(1, rst, c0, c1)}"/>` +
      `<path d="${digital(2, valid, c0, c1)}"/>` +
      `<path d="${digital(3, ready, c0, c1)}"/>` +
      `<path class="bus" d="${bus}"/>${labels}` +
      `<path d="${digital(5, done, c0, c1)}"/>`;
  }
  function loopWave(t) {
    if (wvVisible && !document.hidden && t - lastT > 33) {
      off += ((t - lastT) / 1000) * 40; lastT = t; drawWave();
    } else if (!wvVisible) lastT = t;
    requestAnimationFrame(loopWave);
  }
  drawWave();
  new IntersectionObserver(([e]) => (wvVisible = e.isIntersecting)).observe($("#wave"));
  if (!reduce) requestAnimationFrame(loopWave);
  plot.addEventListener("pointermove", (e) => {
    const x = e.clientX - plot.getBoundingClientRect().left;
    wcur.style.left = x + "px";
    wtime.textContent = `t = ${(((off + x) / P) * 10).toFixed(1)} ns`;
  });

  /* ---------- skills floorplan ---------- */
  const blocks = [
    { n: "RTL Design", tag: "core", c: "#22d3ee", g: "1 / span 3", r: "1 / span 2",
      pts: ["Synthesizable RTL in Verilog, SystemVerilog and VHDL", "Datapath and FSM design for crypto engines (SHA-256, HMAC, AES, ECDSA)", "Micro-architecture with timing and area in mind", "Advanced digital design and computer architecture"],
      chips: ["Verilog", "SystemVerilog", "VHDL", "FSM", "Pipelining"] },
    { n: "Verification", tag: "dv", c: "#a78bfa", g: "4 / span 3", r: "1 / span 2",
      pts: ["UVM environments: agents, sequences, scoreboards", "SystemVerilog Assertions (SVA) for protocol checks", "Constrained-random stimulus with functional and code coverage closure", "HW–SW co-verification on a RISC-V SoC"],
      chips: ["UVM", "SVA", "Coverage", "Constrained-random", "QuestaSim"] },
    { n: "FPGA & STA", tag: "impl", c: "#34d399", g: "1 / span 2", r: "3",
      pts: ["FPGA synthesis, implementation and bitstream generation", "Static timing analysis and timing closure", "On-board validation and hardware debug", "Packaging RTL as reusable Vivado IP"],
      chips: ["Vivado", "Vitis", "STA", "Timing closure", "IP packaging"] },
    { n: "Protocols", tag: "bus", c: "#fbbf24", g: "3 / span 2", r: "3",
      pts: ["AXI4 and AXI4-Stream design and verification", "UART, GPIO, timers and memory interfaces", "Protocol compliance checking with assertions", "Built a configurable AXI4-Stream VIP"],
      chips: ["AXI4", "AXI4-Stream", "UART", "GPIO"] },
    { n: "SoC & Embedded", tag: "soc", c: "#60a5fa", g: "5 / span 2", r: "3",
      pts: ["RISC-V SoC integration of custom accelerators", "Embedded C/C++ drivers and bring-up", "Biometric sensor integration (GT521F32)", "Python for scripting and test automation"],
      chips: ["RISC-V", "C", "C++", "Python"] },
    { n: "Hardware Security", tag: "sec", c: "#f472b6", g: "1 / span 4", r: "4",
      pts: ["FIDO2 / WebAuthn authenticator hardware", "Classical crypto: SHA-256, HMAC, AES-GCM/ECB/CBC/CTR, ECDSA", "Post-quantum: ML-KEM (Kyber) and ML-DSA (Dilithium)", "Relying-party and FIDO2 server for end-to-end testing"],
      chips: ["FIDO2", "AES", "ECDSA", "ML-KEM", "ML-DSA"] },
    { n: "EDA Tools", tag: "eda", c: "#94a3b8", g: "5 / span 2", r: "4",
      pts: ["Xilinx Vivado and Vitis", "Siemens QuestaSim and ModelSim", "Aldec Active-HDL", "LTspice for analog simulation"],
      chips: ["Vivado", "Vitis", "QuestaSim", "ModelSim", "Active-HDL", "LTspice"] },
  ];
  const fg = $("#floorGrid"), fd = $("#floorDetail");
  blocks.forEach((b, i) => {
    const btn = document.createElement("button");
    btn.className = "blk-btn"; btn.setAttribute("role", "tab"); btn.id = "blk-" + i;
    btn.style.cssText = `--c:${b.c};grid-column:${b.g};grid-row:${b.r}`;
    btn.innerHTML = `<span class="bi">u_${b.tag}</span><span class="bn">${b.n}</span>`;
    btn.addEventListener("click", () => selectBlock(i));
    btn.addEventListener("keydown", (e) => {
      const k = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
      if (k) { e.preventDefault(); const j = (i + k + blocks.length) % blocks.length; selectBlock(j); fg.children[j].focus(); }
    });
    fg.appendChild(btn);
  });
  function selectBlock(i) {
    const b = blocks[i];
    $$(".blk-btn", fg).forEach((el, j) => { el.setAttribute("aria-selected", i === j); el.tabIndex = i === j ? 0 : -1; });
    fd.style.setProperty("--c", b.c);
    fd.setAttribute("aria-labelledby", "blk-" + i);
    fd.innerHTML = `<div class="fade-in"><p class="mono dim small">instance u_${b.tag}</p><h3><i></i>${b.n}</h3>
      <ul class="pts">${b.pts.map((p) => `<li>${p}</li>`).join("")}</ul>
      <ul class="chips">${b.chips.map((c) => `<li>${c}</li>`).join("")}</ul></div>`;
  }
  selectBlock(0);

  /* ---------- architecture diagram ---------- */
  const arch = {
    crypto: ["Crypto engine", "my core contribution", "Designed in Verilog: SHA-256, HMAC, AES (GCM/ECB/CBC/CTR) and ECDSA, plus post-quantum ML-KEM and ML-DSA. Packaged as Vivado IP with an AXI interface, synthesized and timing-closed on FPGA."],
    cpu: ["RISC-V core", "integration · co-verification", "The crypto core is integrated with a RISC-V SoC. I ran HW–SW co-verification so firmware and RTL were checked together."],
    mem: ["Memory", "integration", "On-chip memory integrated on the AXI fabric alongside the crypto engine and peripherals."],
    uart: ["UART", "integration", "Serial interface integrated into the SoC as part of the Vivado IP-based system."],
    gpio: ["GPIO · Timers", "integration", "GPIO and timer peripherals integrated on the AXI fabric for control and timing."],
    dv: ["UVM environment", "verification", "UVM testbench with SVA, scoreboards and functional coverage. AXI / AXI4-Stream verified with constrained-random tests to coverage closure."],
    bio: ["Fingerprint sensor", "biometrics", "Integrated a GT521F32 fingerprint sensor to enable biometric user verification. The authenticator talks to a relying-party and FIDO2 server that I built and deployed, with a web interface for testing."],
  };
  const info = $("#archInfo"), blks = $$("#archSvg .blk");
  function showArch(k) {
    const [t, role, d] = arch[k];
    blks.forEach((b) => b.classList.toggle("sel", b.dataset.k === k));
    info.innerHTML = `<div class="fade-in"><p class="mono">${role}</p><h3>${t}</h3><p>${d}</p></div>`;
  }
  blks.forEach((b) => {
    ["mouseenter", "focus", "click"].forEach((ev) => b.addEventListener(ev, () => showArch(b.dataset.k)));
    b.addEventListener("keydown", (e) => (e.key === "Enter" || e.key === " ") && showArch(b.dataset.k));
  });
  showArch("crypto");

  /* ---------- project filters + tilt ---------- */
  $$(".filter").forEach((f) => f.addEventListener("click", () => {
    $$(".filter").forEach((x) => x.classList.toggle("active", x === f));
    $$("#projectGrid .proj").forEach((p) => p.classList.toggle("hidden", f.dataset.f !== "all" && p.dataset.cat !== f.dataset.f));
  }));
  if (!reduce && matchMedia("(hover: hover)").matches) {
    $$(".tilt").forEach((card) => {
      card.addEventListener("pointermove", (e) => {
        const r = card.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
        card.style.setProperty("--mx", x + "px"); card.style.setProperty("--my", y + "px");
        card.style.transform = `perspective(800px) rotateY(${(x / r.width - 0.5) * 6}deg) rotateX(${-(y / r.height - 0.5) * 6}deg) translateY(-4px)`;
      });
      card.addEventListener("pointerleave", () => (card.style.transform = ""));
    });
  }

  /* ---------- copy email ---------- */
  const toast = $("#toast");
  const showToast = (m) => { toast.textContent = m; toast.classList.add("show"); setTimeout(() => toast.classList.remove("show"), 1800); };
  $("#copyEmail").addEventListener("click", async (e) => {
    const email = e.currentTarget.dataset.email;
    try { await navigator.clipboard.writeText(email); $("#copyLabel").textContent = "copied ✓"; showToast("Email copied to clipboard"); }
    catch { location.href = "mailto:" + email; }
    setTimeout(() => ($("#copyLabel").textContent = "copy"), 2000);
  });

  // re-align deep links once fonts and images have settled the layout
  addEventListener("load", () => {
    const t = location.hash && document.getElementById(location.hash.slice(1));
    if (t) t.scrollIntoView();
  });

  $("#year").textContent = new Date().getFullYear();
})();
