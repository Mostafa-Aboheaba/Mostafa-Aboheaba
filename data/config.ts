export const siteConfig = {
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || "G-NBH30ZVQC9", // Add your Google Analytics ID here (e.g., "G-XXXXXXXXXX")
};

export const personalInfo = {
  name: "Mostafa Aboheaba",
  title: "Senior Mobile Software Engineer",
  tagline: "Building exceptional mobile experiences with cutting-edge technology",
  bio: "Passionate Senior Mobile Software Engineer with extensive experience in developing high-performance mobile applications. Specialized in cross-platform development and native mobile solutions.",
  about:
    "I am a Mobile Software Engineer specialized in building stable, scalable, business-driven mobile apps using Flutter.\n" +
    "I focus on:\n" +
    "• Clean Architecture & modular codebases\n" +
    "• Advanced state management (Bloc & Riverpod)\n" +
    "• High-performance, permission-based apps\n" +
    "• Multi-environment setups (prod/stg/dev/test)\n" +
    "• CI/CD pipelines using Azure DevOps & Fastlane\n" +
    "• Secure payment integrations (Mada, HyperPay, Apple Pay, Google Pay)",
  location: "Alexandria, Egypt",
  yearsOfExperience: "5+",
  email: "mostafa.khalile.aboheaba@gmail.com",
  github: "Mostafa-Aboheaba",
  linkedin: "mostafa-khalile",
  whatsapp: "+201028325558", // WhatsApp phone number with country code
  photo: "/profile-photo.png", // Path to your profile photo in the public folder
  cv: "/Mostafa-Aboheaba.pdf", // Path to your CV PDF file in the public folder
  stats: {
    experience: "5+",
    projects: "20+",
  },
};

export const skills = [
  { name: "Flutter", level: 85 },
  { name: "Swift", level: 50 },
  { name: "Kotlin", level: 50 },
  { name: "TypeScript", level: 90 },
  { name: "JavaScript", level: 95 },
  { name: "iOS Development", level: 85 },
  { name: "Android Development", level: 85 },
  { name: "Firebase", level: 80 },
  { name: "GraphQL", level: 70 },
  { name: "REST APIs", level: 90 },
  { name: "Git", level: 90 },
];

export const blogPosts = [
  {
    id: 1,
    title: "كيف تخلّصت من فوضى الـ Environments… واكتشفت أقوى سر في إدارة التطبيقات؟",
    excerpt: "تعرف على كيفية إدارة البيئات في تطبيقاتك بأسلوب مبتكر وفعال لتحسين الأداء وتقليل التكلفة.",
    date: "November 17, 2025",
    readTime: "10 min read",
    category: "Flutter Flavors",
    url: "https://www.linkedin.com/pulse/%D9%83%D9%8A%D9%81-%D8%AA%D8%AE%D9%84%D8%B5%D8%AA-%D9%85%D9%86-%D9%81%D9%88%D8%B6%D9%89-%D8%A7%D9%84%D9%80-environments-%D9%88%D8%A7%D9%83%D8%AA%D8%B4%D9%81%D8%AA-%D8%A3%D9%82%D9%88%D9%89-%D8%B3%D8%B1-%D9%81%D9%8A-aboheaba-1rxyf/?trackingId=4jKqcHzhSj%2BFACeoBuYC1A%3D%3D",
  },
  {
    id: 2,
    title: "عشان أهم من الشغل تظبيط الشغل",
    excerpt: "تعالى أقولك على خطوات مهمة وتخليك مرتاح فأى مشروع ومع أى تيم لو عملتها مع كل feature تشتغل عليها هترتاح جدا عشان زى ماللى قبلنا قالوا ",
    date: "February 20, 2025",
    readTime: "8 min read",
    category: "Work Methodology & Best Practices",
    url: "#https://www.linkedin.com/pulse/%D8%B9%D8%B4%D8%A7%D9%86-%D8%A3%D9%87%D9%85-%D9%85%D9%86-%D8%A7%D9%84%D8%B4%D8%BA%D9%84-%D8%AA%D8%B8%D8%A8%D9%8A%D8%B7-mostafa-aboheaba-mirrf/",
  },
  {
    id: 3,
    title: "Building Scalable Mobile Architecture Patterns",
    excerpt: "Explore architectural patterns that help build maintainable and scalable mobile applications.",
    date: "2024-03-10",
    readTime: "10 min read",
    category: "Architecture",
    url: "#",
  },
  {
    id: 4,
    title: "Mastering State Management in Mobile Apps",
    excerpt: "A deep dive into state management solutions for modern mobile applications.",
    date: "2024-04-05",
    readTime: "7 min read",
    category: "State Management",
    url: "#",
  },
];

export const projects = [
  {
    id: 1,
    name: "Wichey",
    description: "The best app for selecting your lovely ingredients to eat your favorite sandwich in a few minutes. Please select the items from your home to receive the hot, juicy, and tasty sandwich from our mouse watering items (Smashed burger, Crispy chicken, yummy sauces, etc.).",
    technologies: ["Flutter", "Dart", "Clean Architecture", "Bloc", "CI/CD", "Azure DevOps", "Fastlane", "Performance Optimization"],
    githubUrl: "#",
    liveUrl: "https://wichey.com/",
    image: "/projects/wichey.png",
  },
  {
    id: 2,
    name: "Tech Time",
    description: "Tech Time is a single booking application for everyday needs. The easiest platform to book your services from multiple places in different businesses. Book your services and save your time using technology.",
    technologies: ["Flutter", "Dart", "Clean Architecture", "Bloc", "CI/CD", "Azure DevOps", "Fastlane", "Performance Optimization"],
    githubUrl: "#",
    liveUrl: "https://techtime.app/",
    image: "/projects/tech-time.png",
  },
  {
    id: 3,
    name: "Shaety - شقتى",
    description: "Shaety is the first and largest company specialized in reselling luxury residential units in Alexandria. A real estate management and booking application that allows users to browse properties, filter by multiple criteria, add favorites, compare properties, and seamlessly discover properties with integrated Google Maps, location services, and payment gateways.",
    technologies: ["Flutter", "Dart", "Clean Architecture", "Bloc", "Google Maps", "Payment Gateways", "Location Services", "REST APIs", "Permission-based Access Control"],
    githubUrl: "#",
    liveUrl: "https://apps.apple.com/us/app/shaety-%D8%B4%D9%82%D8%AA%D9%89/id6474905739",
    image: "/projects/shaety.png",
  },
  {
    id: 4,
    name: "SchoolEveryWhere",
    description: "A massive web-based school management system that improves the way schools are managed. A complete school solution that facilitates and enhances day-to-day operations, supporting multiple education systems (American, British, National, etc.). Features flexible scheduling, real-time communication, and multi-language support (Arabic, English, French, German). Serves 60+ schools with a scalable SaaS architecture.",
    technologies: ["Flutter", "Dart", "SaaS", "Flutter Flavors", "Android Build Variants", "iOS Schemes", "CI/CD", "Azure DevOps", "Fastlane", "TDD", "CLI Tools", "Real-time Chat", "Voice Recording"],
    githubUrl: "#",
    liveUrl: "https://play.google.com/store/apps/developer?id=widehorizons&hl=en_US&gl=US",
    image: "/projects/school-everywhere.png",
  },
];

export interface WorkExperience {
  id: number;
  title: string;
  company: string;
  type: "Full-time" | "Part-time" | "Freelance" | "Contract";
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
  achievements: string[];
  technologies: string[];
  companyLogo?: string;
  icon?: string;
}

export const workExperience: WorkExperience[] = [
 
  {
    id: 2,
    title: "Cross Platform Mobile App Developer",
    company: "Watania KSA - El mohtawa",
    type: "Full-time",
    location: "Egypt",
    startDate: "September 2023",
    endDate: "Present",
    description: "Supporting the entire application lifecycle from concept to release, producing fully functional mobile applications with clean code.",
    achievements: [
      "Support the entire application lifecycle (concept, design, test, release and support)",
      "Produce fully functional mobile applications writing clean code",
      "Gather specific requirements and suggest solutions",
      "Write unit and UI tests to identify malfunctions",
      "Troubleshoot and debug to optimize performance",
      "Design interfaces to improve user experience",
      "Research and suggest new mobile products, applications and protocols",
    ],
    technologies: ["Flutter", "Dart", "Unit Testing", "UI Testing", "Clean Code", "REST APIs"],
  },
  {
    id: 3,
    title: "Cross Platform Mobile App Developer",
    company: "Wide Horizons",
    type: "Part-time",
    location: "Alexandria, Egypt",
    startDate: "October 2021",
    endDate: "August 2023",
    description: "Worked on bug fixing and maintenance of Flutter applications for school management systems, serving about 60 school accounts. Improved and added features while converting codebase to SaaS architecture.",
    achievements: [
      "Worked on Bug fixing and Maintenance of a Flutter application for the main product school management system serving about 60 School accounts",
      "Improved and added many features to 'School everywhere' like Chat, Voice Recording and others",
      "Converted the Code base to be used as a SaaS with flutter flavors, android build variants, Ios Schemes and built separated CLI to handle adding new accounts",
      "Worked on CI/CD for the new Saas to manage code quality, coverage and Automated deployment for both Android and IOS",
      "Working on V2 of 'school everywhere' SMS & LMS which has a new UI/UX, maintained code with good coverage of TDD with SaaS concepts",
    ],
    technologies: ["Flutter", "Dart", "SaaS", "CI/CD", "TDD", "Flutter Flavors", "Build Variants", "REST APIs"],
  },
  {
    id: 4,
    title: "Cross Platform Mobile App Developer",
    company: "Wichey",
    type: "Part-time",
    location: "Egypt",
    startDate: "August 2022",
    endDate: "August 2023",
    description: "Developed Wichey app, the best app for selecting ingredients to create your favorite sandwich in a few minutes.",
    achievements: [
      "Developed Wichey app for selecting ingredients to create favorite sandwiches",
      "Implemented user-friendly interface for ingredient selection",
      "Created seamless ordering experience for customers",
    ],
    technologies: ["Flutter", "Dart", "Mobile Development", "REST APIs"],
  },
  {
    id: 1,
    title: "Cross Platform Mobile App Developer",
    company: "Shaety - شقتي",
    type: "Part-time",
    location: "Egypt",
    startDate: "August 2022",
    endDate: "August 2023",
    description: "Developed a real estate management and booking application using Flutter for both Android and iOS platforms.",
    achievements: [
      "Developed a real estate management and booking application using Flutter for both Android and iOS",
      "Implemented permission-based access control and dynamic UI rendering based on user roles and API-driven permissions",
      "Integrated Google Maps, location services, and payment gateways for seamless property discovery and transactions",
    ],
    technologies: ["Flutter", "Dart", "Google Maps", "Payment Gateways", "REST APIs", "Location Services"],
  },
  {
    id: 5,
    title: "Cross Platform Mobile App Developer",
    company: "Con-Point",
    type: "Full-time",
    location: "KSA",
    startDate: "March 2022",
    endDate: "June 2022",
    description: "Involved in developing Beauty Point and Shave Point applications, which are point of sale systems for beauty salons and barber shops with vendor dashboard apps and client booking apps.",
    achievements: [
      "Involved in Beauty Point Application which is a Beauty salons point of sale system with a vendor dashboard app and a client booking app",
      "Involved in Shave Point Application which is a Barber shops point of sale system with a vendor dashboard app and a client booking app",
      "Responsible for Applications Stores accounts Management for both Android and IOS deployment for Most applications",
      "Working on Increasing Coverage of code TDD and Working on setting CI/CD and crash analysis for all Project Repositories",
    ],
    technologies: ["Flutter", "Dart", "TDD", "CI/CD", "Crash Analysis", "App Store Management", "REST APIs"],
  },
  {
    id: 6,
    title: "Cross Platform Mobile App Developer",
    company: "TechTime",
    type: "Full-time",
    location: "Alexandria, Egypt",
    startDate: "February 2021",
    endDate: "March 2022",
    description: "Developed Tech Time app which is a single booking application for everyday needs using Flutter.",
    achievements: [
      "Developed Tech Time app which is a single booking application for everyday needs using Flutter",
      "Worked full-time from February 2021 to August 2021",
      "Continued part-time from August 2021 to March 2022",
    ],
    technologies: ["Flutter", "Dart", "Mobile Development", "REST APIs"],
  },
  {
    id: 7,
    title: "Part Time Cross Platform Mobile App Developer",
    company: "Q-Vision",
    type: "Part-time",
    location: "Alexandria, Egypt",
    startDate: "September 2020",
    endDate: "November 2020",
    description: "Led a software development team to develop a Hiring Mobile application based on KSA and 2030 vision.",
    achievements: [
      "Lead a software development team to develop a Hiring Mobile application based on KSA and 2030 vision",
      "Participated and consulted in roaya-al Mustaqbal ksa Governmental mobile app for vision 2030 hiring system using Flutter",
    ],
    technologies: ["Flutter", "Dart", "Team Leadership", "Government Projects", "REST APIs"],
  },
  {
    id: 8,
    title: "Cross Platform Mobile App Developer",
    company: "Vid Egypt (Inspia)",
    type: "Full-time",
    location: "Alexandria, Egypt",
    startDate: "March 2019",
    endDate: "March 2020",
    description: "Learned Dart syntax and Flutter framework in a week and started working on company projects, developing various Flutter mobile applications.",
    achievements: [
      "Learned Dart syntax and Flutter framework in a week and started working on company projects",
      "Developed a Flutter mobile application that allows technicians to Make actions on assigned tasks for them and to facilitate workflow (Upkeep KSA)",
      "Participated in Flutter mobile application that allows the owner of a maintenance company to follow the workflow of his company and technicians (Upkeep KSA)",
      "Participated in Flutter E-commerce mobile application that allows to buy and sell handicrafts products",
      "Developed Flutter mobile application that controls Egypt orthodontists Society meetings, journals and doctor information and their clinics (EOS)",
    ],
    technologies: ["Flutter", "Dart", "E-commerce", "Mobile Development", "REST APIs"],
  },
  {
    id: 9,
    title: "Front End Developer & Cross Platform Mobile App Developer",
    company: "Sourcya",
    type: "Full-time",
    location: "Egypt",
    startDate: "September 2017",
    endDate: "December 2018",
    description: "Started internship to improve skills and help colleagues. Worked on web applications and Hybrid mobile applications using Angular 5 and Ionic 3.",
    achievements: [
      "Started My Internship to Improve my skills and help my other colleagues",
      "Worked on web applications and Hybrid mobile applications using Angular 5 and Ionic 3",
      "Developed an indoor tool to manage work log Integrated with our jira server and using Pomodoro technique (Outa) an Ionic mobile application",
      "Developed an Ionic mobile application for a logistic services Company based on KSA called Glencee",
      "Participated in a fleet management system web based application using google maps traccar open source API and Angular called Nabtrack",
    ],
    technologies: ["Angular 5", "Ionic 3", "JavaScript", "TypeScript", "Google Maps", "REST APIs", "Jira Integration"],
  },
];

