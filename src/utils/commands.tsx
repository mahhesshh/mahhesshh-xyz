import React from "react";

import {
  FaCode,
  FaFire,
  FaGithub,
  FaGlobe,
  FaLightbulb,
  FaNpm,
  FaRocket,
} from "react-icons/fa";

interface CommandItem {
  command: string;
  output: JSX.Element | string;
}

export const getOutput = (
  command: string,
  setCommand: React.Dispatch<React.SetStateAction<CommandItem[]>>
): JSX.Element | string => {
  switch (command.toLowerCase()) {
    case "sudo rm -rf /*":
      const closeWindow = () => {
        const newWindow = window.open("about:blank", "_blank");
        if (newWindow) {
          newWindow.close();
        }

        window.close();
        window.location.href = "about:blank";
        window.history.back();
      };

      closeWindow();
      return <></>;
    case "blogs":
      window.open("https://mahhesshh.medium.com", "_blank");
      return "Opening blogs in a new tab...";
    case "help":
      return (
        <div className="flex flex-col space-y-1">
          <span className="text-[#58a6ff]">Available commands:</span>
          {[
            { cmd: "🌟 about", desc: "Learn more about me" },
            { cmd: "🌐 socials", desc: "Find me on the web" },
            { cmd: "💻 skills", desc: "Check out my technical skills" },
            { cmd: "🚀 projects", desc: "View some of my cool projects" },
            { cmd: "📄 resume", desc: "Take a look at my resume" },
            { cmd: "💼 experience", desc: "Explore my professional journey" },
            { cmd: "🎯 goals", desc: "Discover my aspirations" },
            { cmd: "🧹 clear", desc: "Clear the terminal" },
            { cmd: "✍️ blogs", desc: "Nothing meaningful here :)" },
            { cmd: "⚠️ sudo rm -rf /*", desc: "Try at your own risk!" },
          ].map(({ cmd, desc }) => (
            <div key={cmd} className="flex">
              <span className="text-[#f0883e] w-44">{cmd}</span>
              <span className="text-[#8b949e]">- {desc}</span>
            </div>
          ))}
        </div>
      );
    case "about":
      return (
        <div className="space-y-2">
          <p>
            Hey there! Thanks for your interest in getting to know me better.
          </p>
          <p>
            I'm <span className="text-[#f0883e]">Mahesh Dhakad, </span>
             Security researcher and Penetration tester with a strong focus on bug bounty hunting, web application security, and cloud security 
            
            .
          </p>
          <p>
            I'm a huge <span className="text-[#f0883e]">VAPT enthusiast</span>{" "}
            and I enjoy exploring vulnerabilities, breaking systems to make them stronger, and sharing knowledge through
            <span className="text-[#f0883e]"> CTFs, talks, and community events</span>. With experience in Web Security, OSINT, and threat analysis, I bring both technical depth and investigative skills to my work
          </p>
          <p>
            I'm Passionate about Web3 and blockchain security. When
            I explore smart contract auditing and decentralized systems.
            Outside of this I contribute to 
            <span className="text-[#f0883e]"> Cyber Security clubs </span> and <span className="text-[#f0883e]"> The Hackers Meetup</span> 
          </p>
        </div>
      );
    case "socials":
      return (
        <div className="space-y-2">
          <p>Social life? What’s that? I live in terminals, logs, and between the WAF :) ...</p>
          <p>
            But if you really want to track me down online, here’s where you can find me:
          </p>
          <div className="flex flex-col space-y-1">
            <div className="flex">
              <span className="text-[#f0883e] w-24">GitHub</span>
              <a
                href="https://github.com/mahhesshh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#58a6ff]"
              >
                mahhesshh
              </a>
            </div>
            <div className="flex">
              <span className="text-[#f0883e] w-24"> X </span>
              <a
                href="https://x.com/maxeshdkd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#58a6ff]"
              >
                maxeshdkd
              </a>
            </div>
            <div className="flex">
              <span className="text-[#f0883e] w-24">LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/mahesh-dhakad/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#58a6ff]"
              >
                Mahesh Dhakad
              </a>
            </div>
            <div className="flex">
              <span className="text-[#f0883e] w-24">Email</span>
              <a href="mailto:maheshdkd47@gmail.com" className="text-[#58a6ff]">
                maheshdkd47@gmail.com
              </a>
            </div>
            <div className="flex">
              <span className="text-[#f0883e] w-24">Instagram</span>
              <a
                href="https://instagram.com/maheshdkd._"
                className="text-[#58a6ff]"
              >
                @maheshdkd._
              </a>
            </div>
          </div>
          <p>Feel free to reach out! I'm most responsive on X/Github.</p>
        </div>
      );
    case "skills":
      return (
        <div className="space-y-2">
          <div>
            <span className="text-[#f0883e]">
              Languages (in order of proficiency):
            </span>
            <p className="text-[#8b949e]">
              Python, Bash, C, C++
            </p>
          </div>
          <div>
            <span className="text-[#f0883e]">Security & OSINT:</span>
            <p className="text-[#8b949e]">
              Bug Bounty, Penetration Testing, Web Application Security, API Security, Cloud Security, Network Security, Vulnerability Assessment, Threat Hunting, Open-Source Intelligence (OSINT), Digital Forensics, Capture the Flag (CTF) Challenges
            </p>
          </div>
          <div>
            <span className="text-[#f0883e]">Tools: </span>
            <p className="text-[#8b949e]">Burp Suite, Nmap, Metasploit, Nikto, SQLmap, XSSor, Ghauri, JWT Toolkit, Amass, Subfinder, Sublist3r, Nuclei, Dirsearch, Recon-ng, Shodan, Maltego, Wireshark, Hydra, Gobuster</p>
          </div>
          <div>
            <span className="text-[#f0883e]">DevOps & Cloud (Security Focused):</span>
            <p className="text-[#8b949e]">
              Docker, Kubernetes, AWS (EC2, S3, Lambda, IAM, CloudWatch, ECS, EKS), Google Cloud Security, GitHub Actions (CI/CD Security), Terraform (basic)
            </p>
          </div>
          
        </div>
      );
    case "projects":
      return (
        <div className="space-y-4 mt-4">
          {[
            {
              name: "Automation Bug Bounty (COMING SOON)",
              desc: "Bug Bounty Automation is a Dockerized security automation system that integrates 25+ tools for recon, vulnerability detection, and exploitation. Controlled via Discord/Telegram bots, it streamlines bug hunting with modules for subdomain discovery, exposed keys, misconfiguration detection, and risk scoring. Built to save time and enhance efficiency for bug bounty hunters and penetration testers.",
              github: "https://github.com/mahhesshh",
              
            },
            {
              name: "blacklist3r",
              desc: "Subdomain Enumeration tool that enumerates Subdomain from various sources.",
              github: "https://github.com/mahhesshh/blacklist3r",
              
            },
            {
              name: "DarkMonster",
              desc: "The Telegram Dark Web Search Bot is a Python-based tool that allows users to search .onion websites from Telegram using Tor-enabled search engines like Ahmia, DuckDuckGo, and Torch. By leveraging the Telegram Bot API and routing through the Tor network, this bot provides a simple and interactive way to query .onion links and retrieve search results",
              github: "https://github.com/mahhesshh/DarkMonster",
            },
            {
              name: "Secure-file-Storage-project-with-AES",
              desc: "Secure File Storage with AES is a Web3-based decentralized storage project that integrates AES-256 encryption with blockchain-backed file management. It ensures confidentiality, integrity, and tamper-proof access through decentralized infrastructure. Designed to showcase secure storage in a trustless, distributed environment.",
              github: "https://github.com/mahhesshh/Secure-file-Storage-project-with-AES",
            },
            {
              name: "webPulse",
              desc: "WebPulse is a high-speed, multi-threaded domain status checker designed By me to scan domains from an input file and categorize them based on HTTP status codes (200, 301, 403, 401, 404, 501). It saves the results in separate files within a specified folder and provides a real-time progress bar",
              github: "https://github.com/mahhesshh/WebPulse",
            },
            
          ].map((project, index) => (
            <div
              key={index}
              className="border border-[#30363d] rounded-md p-4 bg-[#0d1117]"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-[#f0883e] text-lg font-semibold">
                    {project.name}
                  </h3>
                  <p className="text-[#8b949e] mt-1">{project.desc}</p>
                </div>
                <div className="flex space-x-2">
                  
                  
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#58a6ff] hover:text-[#58a6ff] transition-colors"
                    >
                      <FaGithub size={24} />
                    </a>
                  )}
                  
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    case "clear":
      setCommand([]);
      return "";
    case "resume":
      window.open("https://mahhesshh.xyz/resume.pdf", "_blank");
      return "Opening resume in a new tab...";
    case "experience":
      return (
        <div className="space-y-6">
          
          {[
            {
              company: "Freelancer",
              role: "Bug Bounty Hunter",
              location: "Remote, India",
              date: "Aug 2024 - Present",
              description: [
                "I am a freelance bug bounty hunter, identifying and responsibly disclosing vulnerabilities in Web applications. I actively participate in security programs on platforms like Bugcrowd, HackerOne, and private/self-hosted programs, helping organizations strengthen their defenses.",
              ],

              icon: <FaCode className="text-[#f0883e] text-4xl" />,
            },
            {
              company: "Hacktify",
              role: "Security Intern",
              location: "Remote, India",
              date: "July 2024 - Aug 2024",
              description: [
                "Was responsible for Performing real-world penetration testing and suggesting mitigation strategies.",
                 "Participated in advanced CTF challenges to sharpen offensive security skills.",
              ],

              icon: <FaCode className="text-[#f0883e] text-4xl" />,
            },
            {
              company: "Rinex AI",
              role: "PT intern",
              location: "Remote, India",
              date: "Nov 2025 - Dec 2025",
              description:
             [
                "Conducted VAPT on company websites and authored detailed reports.",
                "Utilized industry-standard tools for testing and risk assessment.",
               
              ],
              icon: <FaCode className="text-[#f0883e] text-4xl" />,
            },
          ].map((job, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-r from-[#1a1b26] to-[#24283b] rounded-lg p-6 shadow-lg border border-[#30363d] overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#f0883e] to-[#ff4d4d] opacity-10 rounded-bl-full"></div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">{job.icon}</div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-[#f0883e] text-xl font-bold">
                      {job.company}
                    </h3>
                    <span className="text-[#8b949e] text-sm">{job.date}</span>
                  </div>
                  <p className="text-[#58a6ff] font-semibold mb-1">
                    {job.role}
                  </p>
                  <p className="text-[#8b949e] text-sm mb-2">{job.location}</p>
                  <p className="text-[#8b949e] mb-4">{job.description}</p>
                  <div className="space-y-2">
                    
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#f0883e] to-[#ff4d4d]"></div>
            </div>
          ))}
        </div>
      );
   case "goals":
  return (
    <div className="space-y-2">
      <p>
        The future in cybersecurity is full of challenges and opportunities, and
        I’m excited to embrace them! While I can’t predict exactly where my path
        will lead, I have some guiding principles and areas of interest:
      </p>
      <ul className="list-disc list-inside text-[#8b949e]">
        <li>
          Contribute to{" "}
          <span className="text-[#f0883e]">safer digital ecosystems</span> by
          finding and reporting vulnerabilities
        </li>
        <li>
          Pursue{" "}
          <span className="text-[#f0883e]">freelance bug bounty programs</span>{" "}
          on platforms like{" "}
          <span className="text-[#f0883e]">HackerOne</span>,{" "}
          <span className="text-[#f0883e]">Bugcrowd</span>, and{" "}
          <span className="text-[#f0883e]">self-hosted programs</span>
        </li>
        <li>
          Explore cutting-edge domains like{" "}
          <span className="text-[#f0883e]">AI security</span>,{" "}
          <span className="text-[#f0883e]">Blockchain</span>, and{" "}
          <span className="text-[#f0883e]">Cloud Infrastructure</span>
        </li>
      </ul>
      <p>
        I’m open to wherever curiosity and opportunities lead me. That’s the
        beauty of this journey—it’s full of surprises and constant learning!
        I think You are looking for this Shit "IESCTF{I_4M_4N0NYM0US}"
      </p>
    </div>
  );

    default:
      return (
        <div>
          <span className="text-[#f97583]">Command not found.</span>
          <br />
          Type <span className="text-[#f0883e]">help</span> to see available
          commands.
        </div>
      );
  }
};
