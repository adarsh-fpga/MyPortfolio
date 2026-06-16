/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Adarsh's Portfolio",
  description:
    "Passionate VLSI and FPGA Engineer specializing in digital design, verification, and secure hardware systems with hands-on experience in Verilog, SystemVerilog, AXI protocols, FPGA implementation, and SoC integration.",
  og: {
    title: "Adarsh Thakur Portfolio",
    type: "website",
    url: "https://adarsh-fpga.github.io/masterPortfolio/",
  },
};

//Home Page
const greeting = {
  title: "Adarsh Thakur",
  logo_name: "AdarshThakur",
  subTitle:
    "Passionate VLSI and FPGA Engineer specializing in digital design, verification, and secure hardware systems with hands-on experience in Verilog, SystemVerilog, AXI protocols, FPGA implementation, and SoC integration.",
  resumeLink: "",
  portfolio_repository: "https://github.com/adarsh-fpga/masterPortfolio",
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
      title: "VLSI & FPGA Design",
      fileName: "FullStackImg",
      skills: [
        "⚡ Designing and implementing RTL modules in Verilog, SystemVerilog, and VHDL for FPGA and ASIC targets",
        "⚡ Building secure hardware accelerators integrating SHA-256, AES, HMAC, ECDSA, and TRNG crypto engines",
        "⚡ SoC integration with RISC-V cores, AXI interconnects, UART, GPIO, timers, and memory interfaces",
        "⚡ FPGA synthesis, implementation, static timing analysis, and hardware validation using Xilinx Vivado",
      ],
      softwareSkills: [
        {
          skillName: "Verilog",
          fontAwesomeClassname: "vscode-icons:file-type-verilog",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "VHDL",
          fontAwesomeClassname: "vscode-icons:file-type-vhdl",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#A8B9CC",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#00599C",
          },
        },
      ],
    },
    {
      title: "Verification & Validation",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing SystemVerilog verification environments with assertions, scoreboards, and functional coverage",
        "⚡ UVM-based verification with constrained-random stimulus, coverage-driven verification, and protocol checking",
        "⚡ Verifying AXI and AXI4-Stream protocols using assertion-based and constrained-random verification techniques",
        "⚡ Hardware-Software co-verification for integrated SoC platforms",
      ],
      softwareSkills: [
        {
          skillName: "SystemVerilog",
          fontAwesomeClassname: "vscode-icons:file-type-systemverilog",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "UVM",
          fontAwesomeClassname: "carbon:chip",
          style: {
            color: "#6929C4",
          },
        },
        {
          skillName: "AXI Protocol",
          fontAwesomeClassname: "mdi:swap-horizontal-bold",
          style: {
            color: "#0288D1",
          },
        },
        {
          skillName: "Functional Coverage",
          fontAwesomeClassname: "mdi:chart-box-outline",
          style: {
            color: "#43A047",
          },
        },
      ],
    },
    {
      title: "EDA Tools & Technologies",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Proficient with Xilinx Vivado for FPGA synthesis, implementation, IP packaging, and bitstream generation",
        "⚡ Simulation and debugging using QuestaSim, ModelSim, and ActiveHDL",
        "⚡ Analog circuit simulation and analysis using LTspice",
        "⚡ Experience with digital design, communication protocols, and computer architecture fundamentals",
      ],
      softwareSkills: [
        {
          skillName: "Vivado",
          fontAwesomeClassname: "simple-icons:xilinx",
          style: {
            color: "#E01F27",
          },
        },
        {
          skillName: "ModelSim",
          fontAwesomeClassname: "carbon:data-vis-1",
          style: {
            color: "#005AA0",
          },
        },
        {
          skillName: "QuestaSim",
          fontAwesomeClassname: "carbon:data-vis-4",
          style: {
            color: "#00B4D8",
          },
        },
        {
          skillName: "LTspice",
          fontAwesomeClassname: "mdi:sine-wave",
          style: {
            color: "#8B0000",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
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
        "⚡ CGPA: 7.11/10",
        "⚡ Studied core subjects including VLSI Design, Digital System Design, Computer Architecture, Low Power VLSI, Verilog HDL, Signal and Systems, and Microprocessors & Microcontrollers.",
        "⚡ Gained strong foundation in digital electronics, hardware description languages, and embedded systems design.",
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
        "⚡ CGPA: 7.00/10",
        "⚡ Built foundational knowledge in electronics, communication systems, and circuit design.",
        "⚡ Developed practical skills in electronic devices, analog and digital circuits, and lab-based experimentation.",
      ],
      website_link: "https://crrit.delhi.gov.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "PG Diploma in VLSI",
      subtitle: "- CDAC Hyderabad (MeitY)",
      logo_path: "cdac_logo.png",
      certificate_link: "",
      alt_name: "CDAC",
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
      subtitle: "- TIMTS and AICRA",
      logo_path: "coursera_logo.png",
      certificate_link: "",
      alt_name: "TIMTS and AICRA",
      color_code: "#0C9D5899",
    },
    {
      title: "Digital Systems: From Logic Gates to Processors",
      subtitle: "- Online Course",
      logo_path: "coursera_logo.png",
      certificate_link: "",
      alt_name: "Digital Systems",
      color_code: "#00000099",
    },
    {
      title: "Introduction to Electronics",
      subtitle: "- Online Course",
      logo_path: "coursera_logo.png",
      certificate_link: "",
      alt_name: "Electronics",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I have experience working as a VLSI/FPGA Design and Verification Engineer at CDAC, India's premier R&D organization. My work focuses on secure hardware design, RTL development, FPGA implementation, SoC integration, and SystemVerilog-based verification.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Project Engineer (R&D)",
          company: "CDAC Chennai",
          company_url: "https://www.cdac.in/",
          logo_path: "cdac_logo.png",
          duration: "Apr 2024 - Present",
          location: "Chennai, Tamil Nadu, India",
          description:
            "Designed and implemented a hardware crypto engine integrating SHA-256, HMAC, AES, ECDSA, and TRNG modules in Verilog. Integrated crypto core with FPGA and SoC platforms for secure authentication systems. Performed FPGA synthesis, STA, and hardware validation. Packaged RTL as Vivado IP and integrated AXI, UART, GPIO, timers, and memory interfaces. Integrated hardware with RISC-V SoC and performed HW-SW co-verification. Developed SystemVerilog verification environments with assertions, scoreboards, and functional coverage. Verified AXI/AXI4-Stream protocols using constrained-random verification techniques.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "VLSI Trainee",
          company: "CDAC Hyderabad",
          company_url: "https://www.cdac.in/",
          logo_path: "cdac_logo.png",
          duration: "Sep 2023 - Feb 2024",
          location: "Hyderabad, Telangana, India",
          description:
            "Specialized in Digital Design, Computer Architecture, SoC Design, Verilog, SystemVerilog, FPGA tools, C, and Python. Developed AXI4-Stream verification testbench using SystemVerilog. Worked on end-to-end verification methodologies and protocol validation.",
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
    "My projects focus on FPGA-based system design, RTL design and verification, AXI protocol verification, secure hardware accelerators, SoC integration, and embedded digital systems.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_adarsh.png",
    description:
      "Feel free to reach out for collaborations, FPGA/VLSI discussions, RTL design, verification projects, or embedded system development opportunities.",
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
    location_map_link: "https://maps.app.goo.gl/Chennai",
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
