import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a192f]/80 backdrop-blur border-b border-[#233554]">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
          <a href="#hero" className="text-xl font-bold tracking-tight text-white">Samba Siva Reddy Koki</a>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#about" className="hover:text-accent transition">About</a>
            <a href="#projects" className="hover:text-accent transition">Projects</a>
            <a href="#experience" className="hover:text-accent transition">Experience</a>
            <a href="#cv" className="hover:text-accent transition">CV</a>
            <a href="#contact" className="hover:text-accent transition">Contact</a>
          </div>
          <div className="flex gap-4 items-center">
            <a href="https://github.com/SambaSivaReddyKoki" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-xl hover:text-accent transition"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/sambasivareddykoki/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-xl hover:text-accent transition"><FaLinkedin /></a>
          </div>
        </div>
      </nav>
      <main className="pt-20">
        <section id="hero" className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 text-white">Hi, I&apos;m <span className="text-accent">Samba Siva Reddy Koki</span></h1>
          <h2 className="text-xl sm:text-2xl font-medium mb-6 text-accent">Full Stack Developer</h2>
          <p className="max-w-xl text-lg text-gray-300 mb-8">
            I build accessible, scalable web applications with React, Next.js, and more. Passionate about clean code, performance, and user experience.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <a href="#projects" className="px-6 py-2 rounded border border-accent text-accent font-semibold hover:bg-accent hover:text-[#0a192f] transition">View Projects</a>
            <a href="#contact" className="px-6 py-2 rounded border border-accent text-accent font-semibold hover:bg-accent hover:text-[#0a192f] transition">Contact Me</a>
          </div>
        </section>
        <section id="about" className="py-20 max-w-3xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-4 text-accent">About Me</h3>
          <p className="mb-6 text-lg text-gray-300">
            Empathetic and detail-oriented Full Stack Software Engineer with 2+ years of experience developing scalable, user-centric applications. Proficient in React, Next.js, TypeScript, and cloud-based deployments (AWS/GCP). Passionate about improving user experience through thoughtful design and reliable engineering. Known for writing clean, testable code and thriving in collaborative Agile teams focused on continuous delivery and impact.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-2 text-accent">Frontend</h4>
              <ul className="list-disc list-inside text-gray-300">
                <li>React.js</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>Redux</li>
                <li>HTML5, CSS3</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-accent">Backend</h4>
              <ul className="list-disc list-inside text-gray-300">
                <li>Node.js</li>
                <li>Ruby on Rails</li>
                <li>Express</li>
                <li>.NET Core</li>
                <li>NestJS</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-accent">DevOps & Cloud</h4>
              <ul className="list-disc list-inside text-gray-300">
                <li>AWS (EC2, S3, Lambda)</li>
                <li>GCP</li>
                <li>Azure Blob</li>
                <li>Firebase</li>
                <li>Docker</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-accent">Databases & Tools</h4>
              <ul className="list-disc list-inside text-gray-300">
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>GitHub, Postman, Figma</li>
                <li>Jest, Cypress, Swagger</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="projects" className="py-20 max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8 text-accent">Projects</h3>
          <div className="bg-[#112240] rounded-lg shadow p-6 flex flex-col md:flex-row gap-6 items-center">
            <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80" alt="Task Management App Screenshot" width={400} height={192} className="rounded shadow max-h-48 object-cover w-full md:w-1/3" />
            <div className="flex-1">
              <h4 className="text-xl font-bold mb-2 text-white">CollaborativeTaskFlow</h4>
              <span className="text-sm text-accent mb-2 block">React.js, Ruby on Rails, PostgreSQL, JWT, RESTful APIs</span>
              <a href="https://github.com/SambaSivaReddyKoki/CollaborativeTaskFlow" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline text-sm mb-2 inline-block">GitHub Link</a>
              <p className="mb-2 text-gray-300">Developed a comprehensive team collaboration and task management platform that enables project teams to create, assign, and track tasks with real-time updates and visual progress tracking.</p>
              <h5 className="font-semibold mb-1 text-accent">Key Features:</h5>
              <ul className="list-disc list-inside text-gray-300 mb-2 text-sm">
                <li>JWT-based Authentication, Kanban Board, Real-time Task Tracking</li>
                <li>Project Management, User Assignment, Responsive Design</li>
              </ul>
              <h5 className="font-semibold mb-1 text-accent">Technical Achievements:</h5>
              <ul className="list-disc list-inside text-gray-300 mb-2 text-sm">
                <li>Full-Stack Development, API Architecture, Database Design</li>
                <li>State Management, CORS, Deployment Pipelines</li>
              </ul>
              <h5 className="font-semibold mb-1 text-accent">Business Impact:</h5>
              <ul className="list-disc list-inside text-gray-300 text-sm">
                <li>Streamlined workflow, improved transparency, enhanced collaboration, reduced overhead</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="experience" className="py-20 max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8 text-accent">Experience</h3>
          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-bold text-white">Full Stack Engineer <span className="text-accent">@ FyndMe (Remote)</span></h4>
              <span className="text-sm text-gray-400">Jun 2025 – Present</span>
              <ul className="list-disc list-inside text-gray-300 text-sm mt-2">
                <li>Shipped patient-facing features from wireframe to production</li>
                <li>Built responsive UI components with React, Next.js, Tailwind CSS</li>
                <li>Developed RESTful and GraphQL APIs for scheduling and profiles</li>
                <li>Wrote unit and integration tests with Jest and Cypress</li>
                <li>Optimized performance and reduced form abandonment by 27%</li>
                <li>Deployed services using AWS Lambda and monitored uptime</li>
                <li>Participated in agile rituals and conducted code reviews</li>
                <li>Led development of a telehealth platform for mental health services</li>
                <li>Architected scalable microservices with Node.js and Next.js</li>
                <li>Integrated third-party EHR and insurance APIs</li>
                <li>Implemented real-time chat and video features</li>
                <li>Improved deployment speed by 40% with CI/CD automation</li>
                <li>Mentored junior engineers and led code reviews</li>
                <li>Collaborated with clinicians to design patient-centric features</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Custom Software Engineering Analyst <span className="text-accent">@ Accenture (Hyderabad, India)</span></h4>
              <span className="text-sm text-gray-400">Oct 2021 – Aug 2023</span>
              <ul className="list-disc list-inside text-gray-300 text-sm mt-2">
                <li>Built enterprise-grade UI components with React and Vanilla JS</li>
                <li>Reduced backend latency by 25% through optimized SQL scripting</li>
                <li>Integrated REST APIs and ensured cross-browser compatibility</li>
                <li>Created CI/CD pipelines with GitHub Actions and Docker</li>
                <li>Collaborated with QA and DevOps on test automation</li>
                <li>Documented code and architecture decisions for releases</li>
                <li>Conducted UAT sessions and deployed frontend bundles</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Digital Twin Systems Engineering Assistant <span className="text-accent">@ NIAR – Wichita State University</span></h4>
              <span className="text-sm text-gray-400">Mar 2025 – May 2025</span>
              <ul className="list-disc list-inside text-gray-300 text-sm mt-2">
                <li>Designed simulation-ready components with CATIA V5</li>
                <li>Produced compliance documentation for FAA requirements</li>
                <li>Improved geometry workflows and reduced modeling time</li>
                <li>Collaborated with research teams on digital twin projects</li>
                <li>Supported data integration for simulation environments</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">.NET Intern <span className="text-accent">@ Coreapps Technologies (India)</span></h4>
              <span className="text-sm text-gray-400">Jan 2021 – Sep 2021</span>
              <ul className="list-disc list-inside text-gray-300 text-sm mt-2">
                <li>Developed secure admin dashboards with ASP.NET Core MVC</li>
                <li>Automated deployments and backups via PowerShell</li>
                <li>Built API documentation using Swagger and authored test cases</li>
                <li>Collaborated with senior engineers on backend features</li>
                <li>Supported QA with test automation and bug fixes</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="cv" className="py-20 max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8 text-accent">📄 View My Resume / CV</h3>
          <div className="w-full bg-[#112240] rounded shadow p-8 prose prose-blue dark:prose-invert overflow-x-auto" style={{ maxHeight: 600 }}>
            <h2 className="text-2xl font-bold mb-2 text-white">Samba Siva Reddy Koki</h2>
            <div className="mb-2 text-sm text-gray-400">
              Wichita, KS | ksambasivareddy568@gmail.com | +1-940-629-4710<br />
              <a href="https://www.linkedin.com/in/sambasivareddykoki/" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a> | <a href="https://github.com/SambaSivaReddyKoki" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <h3 className="font-semibold mt-4 mb-1 text-accent">Professional Summary</h3>
            <p className="text-gray-300">Empathetic and detail-oriented Full Stack Software Engineer with 2+ years of experience developing scalable, user-centric applications. Proficient in React, Next.js, TypeScript, and cloud-based deployments (AWS/GCP). Passionate about improving user experience through thoughtful design and reliable engineering. Known for writing clean, testable code and thriving in collaborative Agile teams focused on continuous delivery and impact.</p>
            <h3 className="font-semibold mt-4 mb-1 text-accent">Technical Skills</h3>
            <ul className="columns-2 text-sm text-gray-300">
              <li><b>Languages:</b> JavaScript, TypeScript, Ruby, Python, Java, SQL</li>
              <li><b>Frontend:</b> React.js, Next.js, Tailwind CSS, Redux, HTML5, CSS3</li>
              <li><b>Backend:</b> Node.js, Ruby on Rails, Express, .NET Core, NestJS</li>
              <li><b>Tools:</b> GitHub, Postman, Docker, Figma, GitHub Actions</li>
              <li><b>Testing:</b> Jest, Cypress, Swagger, Unit & Integration Testing</li>
              <li><b>Databases:</b> PostgreSQL, MongoDB, MySQL</li>
              <li><b>Cloud/DevOps:</b> AWS (EC2, S3, Lambda), GCP, Azure Blob, Firebase</li>
              <li><b>Soft Skills:</b> Collaboration, Communication, Initiative, Problem-Solving, Agile/Scrum</li>
            </ul>
            <h3 className="font-semibold mt-4 mb-1 text-accent">Education</h3>
            <ul className="text-sm text-gray-300">
              <li><b>M.S. in Computing</b> – Wichita State University, Wichita, KS | Aug 2023 – May 2025</li>
              <li><b>B.Tech in Electronics & Communication Engineering</b> – St. Ann’s College of Engineering & Technology, India | 2017 – 2021</li>
            </ul>
            <h3 className="font-semibold mt-4 mb-1 text-accent">Certifications</h3>
            <ul className="text-sm text-gray-300">
              <li>Supervised Machine Learning – Coursera</li>
              <li>MongoDB for Developers – GreatLearning</li>
              <li>LangChain for LLM Applications – DeepLearning.ai</li>
              <li>J.P. Morgan Software Engineering Simulation – Forage</li>
            </ul>
          </div>
          <a
            href="/resume.pdf"
            download
            className="mt-4 inline-block px-6 py-2 bg-accent text-[#0a192f] rounded font-semibold hover:bg-white hover:text-accent transition shadow"
          >
            Download CV
          </a>
          <span className="block text-xs text-gray-500 mt-2">Last Updated: <time dateTime="2024-07-22">July 22, 2024</time></span>
        </section>
        <section id="contact" className="py-20 max-w-2xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8 text-accent">Contact</h3>
          <div className="flex flex-col gap-2 items-center mb-6 w-full">
            <a href="mailto:ksambasivareddy568@gmail.com" className="text-accent hover:underline text-lg break-all">ksambasivareddy568@gmail.com</a>
            <a href="https://www.linkedin.com/in/sambasivareddykoki/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline text-lg">LinkedIn</a>
            <a href="https://github.com/SambaSivaReddyKoki" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline text-lg">GitHub</a>
          </div>
          <form className="w-full bg-[#112240] rounded-lg shadow p-6 flex flex-col gap-4">
            <h4 className="text-lg font-semibold mb-2 text-accent">Send me a message</h4>
            <input type="text" name="name" placeholder="Your Name" className="px-4 py-2 rounded border border-[#233554] bg-[#0a192f] text-white w-full" />
            <input type="email" name="email" placeholder="Your Email" className="px-4 py-2 rounded border border-[#233554] bg-[#0a192f] text-white w-full" />
            <textarea name="message" placeholder="Your Message" rows={4} className="px-4 py-2 rounded border border-[#233554] bg-[#0a192f] text-white w-full" />
            <button type="submit" className="w-full px-6 py-2 bg-accent text-[#0a192f] rounded font-semibold hover:bg-white hover:text-accent transition shadow">Send</button>
            <span className="text-xs text-gray-500">(Form not yet functional. You can email me directly!)</span>
          </form>
        </section>
      </main>
      <footer className="py-8 flex flex-col items-center w-full border-t border-[#233554] mt-auto px-2 sm:px-6 bg-[#0a192f]">
        <div className="flex gap-4 mb-2 flex-wrap justify-center">
          <a href="https://www.linkedin.com/in/sambasivareddykoki/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">LinkedIn</a>
          <a href="https://github.com/SambaSivaReddyKoki" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">GitHub</a>
        </div>
        <span className="text-sm mb-2 text-center text-gray-400">© {new Date().getFullYear()} Samba Siva Reddy Koki. All rights reserved.</span>
      </footer>
    </>
  );
}
