# Content Collection Guide

This guide will help you replace all the placeholder content in your personal branding website with your actual information.

## 📝 How to Update Content

All content is stored in the `data/config.ts` file. Simply edit that file with your information.

---

## 1. Personal Information

### Location: `data/config.ts` → `personalInfo` object

```typescript
export const personalInfo = {
  name: "Your Name",                    // Your full name or preferred display name
  title: "Senior Mobile Software Engineer",  // Your professional title
  tagline: "Building exceptional mobile experiences...",  // A catchy one-liner about what you do
  bio: "Passionate Senior Mobile Software Engineer...",  // 2-3 sentences about yourself
  location: "Your City, Country",      // e.g., "San Francisco, USA" or "London, UK"
  yearsOfExperience: "5+",             // Your years of experience (e.g., "8", "10+")
  email: "your.email@example.com",     // Your professional email
  github: "your-github-username",       // Just the username, not the full URL
  linkedin: "your-linkedin-profile",    // Just the profile ID (part after /in/)
  twitter: "your-twitter-handle",       // Just the handle without @
};
```

### Example:
```typescript
export const personalInfo = {
  name: "John Doe",
  title: "Senior Mobile Software Engineer",
  tagline: "Building exceptional mobile experiences with cutting-edge technology",
  bio: "Passionate Senior Mobile Software Engineer with 8+ years of experience in developing high-performance mobile applications. Specialized in React Native and Flutter, with a strong focus on user experience and performance optimization.",
  location: "San Francisco, USA",
  yearsOfExperience: "8+",
  email: "john.doe@example.com",
  github: "johndoe",
  linkedin: "johndoe",
  twitter: "johndoe",
};
```

---

## 2. Skills & Technologies

### Location: `data/config.ts` → `skills` array

Update the skills array with your actual skills and proficiency levels (0-100).

```typescript
export const skills = [
  { name: "React Native", level: 90 },
  { name: "Flutter", level: 85 },
  // Add or modify skills here
];
```

### Example:
```typescript
export const skills = [
  { name: "React Native", level: 95 },
  { name: "Flutter", level: 90 },
  { name: "Swift", level: 85 },
  { name: "Kotlin", level: 88 },
  { name: "TypeScript", level: 92 },
  { name: "JavaScript", level: 95 },
  { name: "iOS Development", level: 85 },
  { name: "Android Development", level: 87 },
  { name: "Firebase", level: 80 },
  { name: "GraphQL", level: 75 },
  { name: "REST APIs", level: 90 },
  { name: "Git", level: 90 },
];
```

---

## 3. Tech Blog Posts

### Location: `data/config.ts` → `blogPosts` array

Add your actual blog posts. You can link to external platforms (Medium, Dev.to, Hashnode, etc.) or your own blog.

```typescript
export const blogPosts = [
  {
    id: 1,
    title: "Your Blog Post Title",
    excerpt: "A brief description of what the post is about...",
    date: "2024-01-15",  // Format: YYYY-MM-DD
    readTime: "5 min read",
    category: "React Native",  // Category/topic
    url: "https://your-blog-url.com/post",  // Link to your blog post
  },
  // Add more posts...
];
```

### Example:
```typescript
export const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React Native Performance Optimization",
    excerpt: "Learn essential techniques to optimize React Native apps for better performance and user experience.",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "React Native",
    url: "https://medium.com/@johndoe/react-native-performance",
  },
  {
    id: 2,
    title: "Flutter vs React Native: A Comprehensive Comparison",
    excerpt: "An in-depth analysis of Flutter and React Native to help you choose the right framework.",
    date: "2024-02-20",
    readTime: "8 min read",
    category: "Mobile Development",
    url: "https://dev.to/johndoe/flutter-vs-react-native",
  },
  // Add up to 4-6 featured posts
];
```

---

## 4. Work Experience

### Location: `data/config.ts` → `workExperience` array

Add your work experience entries in reverse chronological order (most recent first).

```typescript
export const workExperience: WorkExperience[] = [
  {
    id: 1,
    title: "Your Job Title",
    company: "Company Name",
    type: "Full-time", // Options: "Full-time" | "Part-time" | "Freelance" | "Contract"
    location: "City, Country",
    startDate: "Month Year", // e.g., "March 2024"
    endDate: "Present", // or "Month Year" for past positions
    description: "Brief description of your role and responsibilities...",
    achievements: [
      "Achievement 1",
      "Achievement 2",
      // Add more achievements
    ],
    technologies: ["Flutter", "Dart", "Firebase"], // Technologies used
    companyLogo: "/companies/company-logo.png", // Optional: path to company logo
    icon: "💼", // Optional: emoji icon if no logo
  },
  // Add more experiences...
];
```

### Company Logos (Optional)

1. Create a `public/companies/` folder
2. Add company logo images (PNG, JPG, or SVG)
3. Reference them in the `companyLogo` field (e.g., `/companies/ntg.png`)
4. If no logo is available, use the `icon` field with an emoji

### Example:
```typescript
export const workExperience: WorkExperience[] = [
  {
    id: 1,
    title: "Mobile App Engineer",
    company: "NTG Clarity",
    type: "Full-time",
    location: "Cairo, Egypt",
    startDate: "March 2024",
    endDate: "Present",
    description: "Contributing to developing and enhancing the NTG application using Flutter...",
    achievements: [
      "Developed the Elm Employee Hub App",
      "Implemented over 50 functions for comprehensive staff management",
      "Ensured performance scalability and enterprise-level quality standards",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "REST APIs", "MVVM"],
    companyLogo: "/companies/ntg.png",
  },
  // Add more experiences...
];
```

---

## 5. Projects Portfolio

### Location: `data/config.ts` → `projects` array

Add your actual projects with descriptions, technologies used, and links.

```typescript
export const projects = [
  {
    id: 1,
    name: "Project Name",
    description: "A detailed description of what the project does and its key features...",
    technologies: ["React Native", "TypeScript", "Firebase"],  // Array of tech used
    githubUrl: "https://github.com/username/project",  // GitHub repository URL
    liveUrl: "https://your-project-demo.com",  // Live demo URL (if available)
    image: "/placeholder-project-1.jpg",  // Optional: path to project image
  },
  // Add more projects...
];
```

### Example:
```typescript
export const projects = [
  {
    id: 1,
    name: "E-Commerce Mobile App",
    description: "A full-featured e-commerce mobile application with real-time inventory management, payment integration using Stripe, and comprehensive user analytics. Built with React Native and Firebase.",
    technologies: ["React Native", "TypeScript", "Firebase", "Stripe"],
    githubUrl: "https://github.com/johndoe/ecommerce-app",
    liveUrl: "https://ecommerce-demo.app",
    image: "/ecommerce-app.jpg",
  },
  {
    id: 2,
    name: "Fitness Tracking App",
    description: "Cross-platform fitness tracking application with personalized workout plans, progress tracking, and social features. Supports both iOS and Android with a single codebase.",
    technologies: ["Flutter", "Dart", "Firebase", "GraphQL"],
    githubUrl: "https://github.com/johndoe/fitness-app",
    liveUrl: "https://fitness-app-demo.com",
    image: "/fitness-app.jpg",
  },
  // Add 3-6 featured projects
];
```

---

## 5. Project Images (Optional)

If you want to add project images:

1. Place your images in the `public/` folder
2. Update the `image` property in each project object with the path (e.g., `/my-project.jpg`)
3. The images will be accessible at the root path

---

## 📋 Quick Checklist

- [ ] Update `personalInfo` with your details
- [ ] Update `skills` array with your technologies and proficiency levels
- [ ] Add your work experience to `workExperience` array
- [ ] Add company logos to `public/companies/` folder (optional)
- [ ] Add your blog posts to `blogPosts` array
- [ ] Add your projects to `projects` array
- [ ] Update social media links (GitHub, LinkedIn, Twitter)
- [ ] Add project images (optional)
- [ ] Test the website locally (`npm run dev`)
- [ ] Review all sections for accuracy

---

## 💡 Tips

1. **Keep it concise**: Your bio should be 2-3 sentences. Blog excerpts should be 1-2 sentences.
2. **Be honest**: Set accurate skill levels (0-100%) based on your actual proficiency.
3. **Showcase your best work**: Include 3-6 of your best projects that demonstrate your skills.
4. **Update regularly**: Keep your blog posts and projects up to date as you create new content.
5. **Professional email**: Use a professional email address for contact.

---

## 🚀 After Updating

1. Save the `data/config.ts` file
2. The changes will automatically reflect in your website
3. Test locally: `npm run dev`
4. Deploy when ready!

---

## Need Help?

If you need help customizing anything beyond the content, feel free to ask!

