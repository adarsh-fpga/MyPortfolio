# Adarsh Kumar Thakur — Portfolio

Personal portfolio for RTL design, design verification and FPGA roles.
Live at **https://adarsh-fpga.github.io/MyPortfolio/**

## Structure

Plain HTML, CSS and JavaScript — no build step.

```
site/
  index.html     page content (edit text here)
  styles.css     theme tokens, layout, animations
  main.js        interactions: PCB-trace canvas, waveform viewer, skills floorplan, SoC diagram
  assets/        images, resume PDF, certificates
  404.html       redirects old routes (/experience, /projects, …) to the matching section
```

## Run locally

```bash
python -m http.server 8000 -d site
```

## Deploy

Every push to `master` runs `.github/workflows/deploy.yml`, which publishes `site/` to the `gh-pages` branch.

To update the resume, replace `site/assets/docs/adarsh_kumar_thakur_resume.pdf`.
