import {analyzeResumeText } from './analyzer.js';

async function main() {
  try {
    const resumeText = `John Petrov
Frontend Developer | Sofia, Bulgaria | john.petrov@email.com | +359 88 123 4567 | github.com/johnpetrov

Professional Summary:
Detail-oriented Frontend Developer with 2+ years of experience building responsive and accessible web applications. Proficient in JavaScript, React, and CSS, with a strong eye for design and usability. Passionate about clean code, performance optimization, and staying current with evolving frontend technologies.

Skills:
- Languages: JavaScript (ES6+), HTML5, CSS3, TypeScript
- Frameworks/Libraries: React, Next.js, Tailwind CSS, Redux
- Tools: Git, Webpack, Figma, VS Code, Chrome DevTools
- Other: REST APIs, Responsive Design, Agile Methodologies

Work Experience:
Frontend Developer | Creative Solutions Ltd. | Remote | Jan 2023 – Present
- Developed and maintained components using React and Next.js for multiple client-facing projects
- Translated Figma mockups into clean, pixel-perfect responsive pages
- Collaborated closely with designers and backend developers in an agile team environment
- Improved page load performance and accessibility scores across all major web apps

Junior Frontend Developer | WebCraft Studio | Sofia | Jun 2021 – Dec 2022
- Built and maintained landing pages and internal tools using HTML, CSS, and vanilla JavaScript
- Participated in daily standups and sprint planning, contributing to code reviews and QA processes
- Assisted in migrating legacy codebases to modern frontend frameworks

Education:
B.S. in Computer Science | Sofia University | 2021

Languages:
Bulgarian (Native), English (Fluent)

Certifications:
- Responsive Web Design Certification (freeCodeCamp)
- JavaScript Algorithms and Data Structures (freeCodeCamp)

Hobbies:
Coding side projects, hiking in the Rhodope Mountains, and making homemade sourdough.`;
    const jobPostingText = `Frontend Developer
We're looking for a Frontend Developer with a solid understanding of CSS3, JavaScript, and HTML5 to join our team in building modern, high-quality web applications. Familiarity with ReactJS or Next.js is a strong plus. This is a remote role for candidates based in Bulgaria, well-suited for someone who values flexibility, clean code, and is eager to keep learning and improving.

What You'll Do:
- Build responsive, user-friendly interfaces
- Translate Figma designs into pixel-perfect responsive web pages
- Write clean, organised, and maintainable code
- Contribute ideas to improve frontend experience and performance

Requirements:
- 1+ year of professional frontend development experience
- Good knowledge of CSS and JavaScript
- Familiar with Figma and frontend implementation workflows
- Experience with Next.js is a bonus
- Proactive attitude and motivation to learn and grow

What We Offer:
- Fully remote work setup within Bulgaria
- 7-hour workdays with flexible working hours
- 25 days of paid annual leave
- Friendly, collaborative team culture
- Opportunity to grow and work on a variety of modern web projects

About Us:
We are a digital agency delivering tailored software solutions. Our team specialises in building modern web applications and digital platforms for a wide range of industries, using Next.js, Laravel, and Go. We value clean code, thoughtful design, and a proactive approach to problem-solving.`;
    const resultFromText = await analyzeResumeText(resumeText, jobPostingText);
    console.log('Analysis from text:', resultFromText);
  } catch (error) {
    console.error("Error in main:", error);
  }
}

(async () => {
  await main();
})();