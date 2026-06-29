/* Change this file to update your personal portfolio content. */

// Website related settings
const settings = {
  isSplash: true,
};

const publicUrl = process.env.PUBLIC_URL || "";

// SEO related settings
const seo = {
  title: "Adarsh Kumar Thakur | VLSI & FPGA Engineer",
  description:
    "VLSI and FPGA Engineer experienced in RTL design, verification, FPGA prototyping, AXI protocols, and SoC integration using Verilog and SystemVerilog.",
  keywords:
    "VLSI Engineer, FPGA Engineer, RTL Design, UVM, SystemVerilog, Verilog, AXI, Embedded Systems",
  og: {
    title: "Adarsh Kumar Thakur Portfolio",
    type: "website",
    url: "https://adarsh-fpga.github.io/MyPortfolio/",
  },
};

// Home Page
const greeting = {
  title: "Adarsh Kumar Thakur",
  logo_name: "Adarsh Thakur",
  subTitle:
    "VLSI and FPGA Engineer focused on RTL design, SystemVerilog/UVM verification, FPGA prototyping, AXI/AXI4-Stream, crypto accelerators, and RISC-V SoC integration.",
  resumeLink: `${publicUrl}/docs/adarsh_kumar_thakur_resume.pdf`,
  githubProfile: "https://github.com/adarsh-fpga",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/adarsh-fpga",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/adarshthakur01",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:adarshkumarthakur2001@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "Digital Design",
      fileName: "FullStackImg",
      skills: [
        "RTL design using Verilog, SystemVerilog, and VHDL for FPGA and SoC targets.",
        "SystemVerilog/UVM verification with assertions, scoreboards, constrained-random tests, and functional coverage.",
        "AXI and AXI4-Stream protocol work for integrated digital systems.",
        "Advanced digital design fundamentals across computer architecture, protocol design, and low-power VLSI coursework.",
      ],
      softwareSkills: [
        {
          skillName: "Verilog",
          fontAwesomeClassname: "vscode-icons:file-type-verilog",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "SystemVerilog",
          fontAwesomeClassname: "vscode-icons:file-type-systemverilog",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "VHDL",
          fontAwesomeClassname: "vscode-icons:file-type-vhdl",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "UVM",
          fontAwesomeClassname: "carbon:chip",
          style: { color: "#6929C4" },
        },
        {
          skillName: "AXI",
          fontAwesomeClassname: "mdi:swap-horizontal-bold",
          style: { color: "#0288D1" },
        },
      ],
    },
    {
      title: "FPGA Tools",
      fileName: "CloudInfraImg",
      skills: [
        "FPGA synthesis, implementation, static timing analysis, and on-board validation.",
        "Vivado-based RTL packaging as IP, bitstream generation, and FPGA prototyping.",
        "Simulation and debugging with QuestaSim, ModelSim, and ActiveHDL.",
        "Hardware validation across crypto cores, bus interfaces, and board-level test flows.",
      ],
      softwareSkills: [
        {
          skillName: "Vivado",
          fontAwesomeClassname: "simple-icons:xilinx",
          style: { color: "#E01F27" },
        },
        {
          skillName: "QuestaSim",
          fontAwesomeClassname: "carbon:data-vis-4",
          style: { color: "#00B4D8" },
        },
        {
          skillName: "ModelSim",
          fontAwesomeClassname: "carbon:data-vis-1",
          style: { color: "#005AA0" },
        },
        {
          skillName: "ActiveHDL",
          fontAwesomeClassname: "mdi:waveform",
          style: { color: "#455A64" },
        },
        {
          skillName: "LTspice",
          fontAwesomeClassname: "mdi:sine-wave",
          style: { color: "#8B0000" },
        },
        {
          skillName: "STA",
          fontAwesomeClassname: "mdi:timer-check-outline",
          style: { color: "#2E7D32" },
        },
      ],
    },
    {
      title: "Programming & SoC",
      fileName: "DataScienceImg",
      skills: [
        "Embedded C, C++, and Python foundations for hardware-software interface work.",
        "SoC integration with RISC-V cores, memory interfaces, UART, GPIO, and timers.",
        "Hardware-software co-verification for FPGA and SoC platforms.",
        "System-level debugging across RTL, firmware, and board validation flows.",
      ],
      softwareSkills: [
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: { color: "#A8B9CC" },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: { color: "#00599C" },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: { color: "#3776AB" },
        },
        {
          skillName: "RISC-V",
          fontAwesomeClassname: "simple-icons:riscv",
          style: { color: "#283272" },
        },
        {
          skillName: "Embedded Systems",
          fontAwesomeClassname: "mdi:developer-board",
          style: { color: "#009688" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#F05032" },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Chandigarh University",
      subtitle: "B.E. in Electronics and Communication Engineering",
      logo_path: "cu_logo.png",
      alt_name: "Chandigarh University",
      duration: "2020 - 2023",
      descriptions: [
        "CGPA: 7.11/10",
        "Studied VLSI design, digital system design, computer architecture, Verilog HDL, signals and systems, and microprocessors.",
        "Built a strong foundation in digital electronics, hardware description languages, and embedded systems design.",
      ],
      website_link: "https://www.cuchd.in/",
    },
    {
      title: "Chhotu Ram Rural Institute of Technology, Delhi",
      subtitle: "Diploma in Electronics and Communication Engineering",
      logo_path: "crrit_logo.png",
      alt_name: "CRRIT Delhi",
      duration: "2017 - 2020",
      descriptions: [
        "CGPA: 7.00/10",
        "Built foundational knowledge in electronics, communication systems, and circuit design.",
        "Developed practical skills in electronic devices, analog and digital circuits, and lab experimentation.",
      ],
      website_link: "http://www.crritonline.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "PG Diploma in VLSI",
      subtitle: "- CDAC Hyderabad",
      logo_path: "cdac_logo.png",
      certificate_link: "",
      alt_name: "CDAC Hyderabad",
      color_code: "#1F70C199",
    },
    {
      title: "Sensors and Actuators",
      subtitle: "- NPTEL",
      logo_path: "nptel_logo.png",
      certificate_link: "",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Robotics",
      subtitle: "- TIMTS & AICRA",
      logo_path: "certificate_logo.svg",
      certificate_link: "",
      alt_name: "TIMTS & AICRA",
      color_code: "#0C9D5899",
    },
    {
      title: "Digital Systems: Logic Gates to Processors",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        `${publicUrl}/certificates/digital_systems_logic_gates_processors_coursera.pdf`,
      alt_name: "Coursera",
      color_code: "#2A73CC99",
    },
    {
      title: "Introduction to Electronics",
      subtitle: "- Georgia Tech via Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        `${publicUrl}/certificates/introduction_to_electronics_coursera.pdf`,
      alt_name: "Coursera",
      color_code: "#1F70C199",
    },
    {
      title: "Python Basics",
      subtitle: "- University of Michigan via Coursera",
      logo_path: "coursera_logo.png",
      certificate_link: `${publicUrl}/certificates/python_basics_coursera.pdf`,
      alt_name: "Coursera",
      color_code: "#3776AB99",
    },
    {
      title: "Programming Foundations with JavaScript, HTML and CSS",
      subtitle: "- Duke University via Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        `${publicUrl}/certificates/programming_foundations_javascript_html_css_coursera.pdf`,
      alt_name: "Coursera",
      color_code: "#F7B50099",
    },
    {
      title: "Machine Learning",
      subtitle: "- Stanford University via Coursera",
      logo_path: "coursera_logo.png",
      certificate_link: `${publicUrl}/certificates/machine_learning_coursera.pdf`,
      alt_name: "Coursera",
      color_code: "#0056D299",
    },
    {
      title: "Rashtriya Karmayogi Jan Seva Program",
      subtitle: "- iGOT Karmayogi",
      logo_path: "certificate_logo.svg",
      certificate_link:
        `${publicUrl}/certificates/rashtriya_karmayogi_jan_seva_program.pdf`,
      alt_name: "iGOT Karmayogi",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Training",
  description:
    "My experience spans FPGA crypto engine design, RTL development, AXI and AXI4-Stream verification, secure hardware modules, Vivado IP packaging, and RISC-V SoC integration.",
  highlights: [
    "RTL and verification ownership for secure crypto and SoC integration blocks.",
    "Hands-on Vivado IP packaging, synthesis, static timing analysis, and board validation.",
    "Protocol-focused verification across AXI, AXI4-Stream, UART, GPIO, timers, and memory interfaces.",
    "Hardware-software co-verification with embedded C and RISC-V platform integration.",
  ],
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Project Engineer",
          company: "CDAC Chennai",
          company_url: "https://www.cdac.in/",
          logo_path: "cdac_logo.png",
          duration: "Apr 2024 - Present",
          location: "Chennai, Tamil Nadu, India",
          description:
            "Designed and verified a FIDO2 hardware authenticator crypto engine integrating SHA-256, HMAC, AES GCM/ECB/CBC/CTR, ECDSA, and TRNG modules in Verilog. Packaged RTL as Vivado IP, integrated AXI, UART, GPIO, timers, memory, and RISC-V SoC interfaces, and performed synthesis, STA, HW-SW co-verification, and board validation.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Training",
      experiences: [
        {
          title: "VLSI Trainee",
          company: "CDAC Hyderabad",
          company_url: "https://www.cdac.in/",
          logo_path: "cdac_logo.png",
          duration: "Sep 2023 - Feb 2024",
          location: "Hyderabad, Telangana, India",
          description:
            "Specialized in digital design, computer architecture, SoC design, C, Python, Verilog, SystemVerilog, and FPGA tools. Built an end-to-end SystemVerilog AXI4-Stream verification environment with protocol checking and coverage-oriented validation.",
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Selected projects across FPGA-based system design, RTL design and verification, AXI protocol verification, secure hardware acceleration, and embedded digital systems.",
  highlights: [
    "Secure hardware acceleration using cryptographic RTL blocks and FPGA validation flows.",
    "Verification environments built around SystemVerilog, UVM, assertions, scoreboards, and coverage.",
    "Embedded system projects combining sensors, control logic, safety features, and firmware.",
    "Projects are organized for clean documentation, reusable modules, and future repository updates.",
  ],
};

const publicationsHeader = {
  title: "Publications",
  description: "",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_photo.png",
    description:
      "Feel free to reach out for VLSI, FPGA, RTL design, verification, AXI, SoC integration, or embedded systems opportunities.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Chennai, Tamil Nadu, India",
    locality: "Chennai",
    country: "India",
    region: "Tamil Nadu",
    postalCode: "",
    streetAddress: "",
    location_map_link:
      "https://www.google.com/maps/search/?api=1&query=Chennai%2C%20Tamil%20Nadu%2C%20India",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
