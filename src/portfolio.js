/* Change this file to update your personal portfolio content. */

// Website related settings
const settings = {
  isSplash: true,
};

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
    url: "https://adarsh-fpga.github.io/adarsh-portfolio/",
  },
};

// Home Page
const greeting = {
  title: "Adarsh Kumar Thakur",
  logo_name: "Adarsh FPGA",
  subTitle:
    "VLSI and FPGA Engineer experienced in RTL design, verification, FPGA prototyping, AXI protocols, and SoC integration using Verilog/SystemVerilog.",
  resumeLink: "",
  portfolio_repository: "https://github.com/adarsh-fpga/adarsh-portfolio",
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
        "SystemVerilog/UVM verification with assertions, scoreboards, and functional coverage.",
        "AXI and AXI4-Stream protocol work for integrated digital systems.",
        "Hands-on experience with secure hardware blocks and embedded digital systems.",
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
        "FPGA synthesis, implementation, timing analysis, and hardware validation.",
        "Vivado-based IP packaging, bitstream generation, and FPGA prototyping.",
        "Simulation and debugging with QuestaSim, ModelSim, and ActiveHDL.",
        "Analog and mixed-signal support analysis using LTspice.",
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
        "Embedded C and C++ development for hardware-software interfaces.",
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
      website_link: "https://crrit.delhi.gov.in/",
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
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Training",
  description:
    "My experience spans FPGA crypto engine design, RTL development, AXI verification, secure hardware modules, and SoC integration across VLSI and FPGA workflows.",
  header_image_path: "experience.svg",
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
            "Worked on FPGA crypto engine design and verification. Integrated AES, SHA-256, HMAC, ECDSA, and TRNG modules. Contributed to AXI verification and SoC integration for secure hardware platforms.",
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
            "Worked on digital design and AXI4-Stream verification. Built SystemVerilog testbenches and strengthened skills in RTL design, computer architecture, SoC design, and FPGA tool flows.",
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
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_fpga.svg",
    description:
      "Feel free to reach out for VLSI, FPGA, RTL design, verification, AXI, SoC integration, or embedded systems opportunities.",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Chennai, Tamil Nadu, India",
    locality: "Chennai",
    country: "India",
    region: "Tamil Nadu",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
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
