// Each course is framed as a "route" on the departure board —
// a code, a destination (the skill), and a gate (the outcome).
const courses = [
  {
    code: "PY-101",
    title: "Python",
    gate: "Programming Foundations",
    duration: "8 weeks",
    level: "Beginner → Intermediate",
    blurb:
      "Core syntax, data structures, OOP and automation scripts, built through live coding sessions every class.",
  },
  {
    code: "JV-102",
    title: "Java",
    gate: "Backend Engineering",
    duration: "10 weeks",
    level: "Beginner → Intermediate",
    blurb:
      "OOP fundamentals, collections, and Spring basics — the groundwork most enterprise backend roles ask for.",
  },
  {
    code: "FS-201",
    title: "Full Stack Development",
    gate: "MERN & Deployment",
    duration: "16 weeks",
    level: "Intermediate",
    blurb:
      "React front ends, Node/Express APIs, databases and deployment — one project shipped end to end.",
  },
  {
    code: "DM-110",
    title: "Digital Marketing",
    gate: "Growth & Campaigns",
    duration: "6 weeks",
    level: "Beginner",
    blurb:
      "SEO, paid ads, social strategy and analytics — run a real campaign brief inside the course.",
  },
  {
    code: "DA-210",
    title: "Data Analyst",
    gate: "Excel, SQL & BI",
    duration: "10 weeks",
    level: "Beginner → Intermediate",
    blurb:
      "Clean, query and visualise data with SQL, Excel and dashboards recruiters actually screen for.",
  },
  {
    code: "DS-310",
    title: "Data Science",
    gate: "Statistics & ML",
    duration: "14 weeks",
    level: "Intermediate",
    blurb:
      "Statistics, Python for data science, and machine learning models — from notebook to insight.",
  },
  {
    code: "AI-320",
    title: "Artificial Intelligence",
    gate: "ML & Applied AI",
    duration: "12 weeks",
    level: "Intermediate → Advanced",
    blurb:
      "Neural networks, applied ML workflows and working with modern AI tools and APIs.",
  },
  {
    code: "UX-140",
    title: "UI / UX Design",
    gate: "Product Design",
    duration: "8 weeks",
    level: "Beginner → Intermediate",
    blurb:
      "Research, wireframes, Figma prototypes and usability testing — a portfolio-ready case study by the end.",
  },
  {
    code: "GD-130",
    title: "Graphic Designing",
    gate: "Visual Communication",
    duration: "6 weeks",
    level: "Beginner",
    blurb:
      "Typography, layout and brand identity using industry-standard design tools.",
  },
  {
    code: "VE-150",
    title: "Video Editing",
    gate: "Post-Production",
    duration: "6 weeks",
    level: "Beginner",
    blurb:
      "Cuts, colour, sound and export pipelines for reels, YouTube and client work.",
  },
];

export default courses;
