"use client";

import { useEffect, useState, type CSSProperties, type ComponentType } from "react";
import { motion, type Variants } from "framer-motion";
import {
  ChevronRight,
  Code2,
  ExternalLink,
  Mail,
  MapPin,
  Menu,
  Phone,
  Terminal,
  X,
} from "lucide-react";
import {
  SiCss,
  SiExpress,
  SiDocker,
  SiFigma,
  SiGit,
  SiGithub,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiSupabase,
  SiPostman,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import {
  portfolioData,
  type SkillIconKey,
  type SocialIconKey,
} from "./portfolio-data";

type IconProps = {
  className?: string;
  style?: CSSProperties;
};

const SKILL_ICON_MAP: Record<SkillIconKey, ComponentType<IconProps>> = {
  react: SiReact,
  html5: SiHtml5,
  css: SiCss,
  javascript: SiJavascript,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  node: SiNodedotjs,
  express: SiExpress,
  java: FaJava,
  php: SiPhp,
  python: SiPython,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  supabase: SiSupabase,
  firebase: SiFirebase,
  mongodb: SiMongodb,
  git: SiGit,
  github: SiGithub,
  vscode: Code2,
  figma: SiFigma,
  docker: SiDocker,
  postman: SiPostman,
};

const SOCIAL_ICON_MAP: Record<SocialIconKey, ComponentType<IconProps>> = {
  github: SiGithub,
  linkedin: FaLinkedinIn,
};

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const STAGGER: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const typingCycles =
    portfolioData.hero.typingCycles?.length
      ? portfolioData.hero.typingCycles
      : [{ prefix: "Hi, I'm ", highlight: "Your Name" }];
  const [cycleIndex, setCycleIndex] = useState(0);
  const activeCycle = typingCycles[cycleIndex];
  const headlineText = `${activeCycle.prefix}${activeCycle.highlight}`;
  const [typedHeadline, setTypedHeadline] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", ...portfolioData.sections];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    const handleWindowMouseMove = (event: MouseEvent) => {
      root.style.setProperty("--cursor-x", `${event.clientX}px`);
      root.style.setProperty("--cursor-y", `${event.clientY}px`);
    };

    window.addEventListener("mousemove", handleWindowMouseMove, { passive: true });

    const targets = Array.from(document.querySelectorAll<HTMLElement>(".cursor-glow-target"));
    const targetHandlers = targets.map((target) => {
      const handleTargetMouseMove = (event: MouseEvent) => {
        const rect = target.getBoundingClientRect();
        target.style.setProperty("--mx", `${event.clientX - rect.left}px`);
        target.style.setProperty("--my", `${event.clientY - rect.top}px`);
      };

      target.addEventListener("mousemove", handleTargetMouseMove, { passive: true });
      return { target, handleTargetMouseMove };
    });

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
      targetHandlers.forEach(({ target, handleTargetMouseMove }) => {
        target.removeEventListener("mousemove", handleTargetMouseMove);
      });
    };
  }, []);

  useEffect(() => {
    const hasTypedFullPhrase = !isDeleting && typedHeadline === headlineText;
    const hasDeletedFullPhrase = isDeleting && typedHeadline.length === 0;

    let delay = isDeleting ? 45 : 85;
    if (hasTypedFullPhrase) {
      delay = 1300;
    } else if (hasDeletedFullPhrase) {
      delay = 250;
    }

    const timer = window.setTimeout(() => {
      if (hasTypedFullPhrase) {
        setIsDeleting(true);
        return;
      }

      if (hasDeletedFullPhrase) {
        setIsDeleting(false);
        setCycleIndex((prev) => (prev + 1) % typingCycles.length);
        return;
      }

      setTypedHeadline((prev) => {
        if (isDeleting) {
          return prev.slice(0, -1);
        }

        return headlineText.slice(0, prev.length + 1);
      });
    }, delay);

    return () => window.clearTimeout(timer);
  }, [headlineText, isDeleting, typedHeadline, typingCycles.length]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const SCROLL_OFFSET = 88;
      window.scrollTo({
        top: element.offsetTop - SCROLL_OFFSET,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="cursor-glow-stage min-h-screen bg-[#0a0a0f] text-gray-100 font-sans selection:bg-blue-500/30 selection:text-blue-100">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div
            className="text-xl font-bold tracking-tight text-gray-100 cursor-pointer hover:text-blue-400 transition-colors flex items-center gap-2"
            onClick={() => scrollTo("home")}
          >
            <Terminal className="w-5 h-5 text-blue-500" />
            <span>{portfolioData.brandInitials}</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
            {portfolioData.sections.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`capitalize transition-colors hover:text-gray-100 ${
                  activeSection === item ? "text-blue-400" : ""
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 transition-colors"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden max-w-5xl mx-auto px-6 pb-4 pt-1 border-t border-white/5">
            <div className="flex flex-col gap-1 text-sm font-medium text-gray-400">
              {portfolioData.sections.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className={`text-left capitalize px-2 py-2 rounded-md transition-colors hover:text-gray-100 hover:bg-white/5 ${
                    activeSection === item ? "text-blue-400 bg-blue-500/10" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-24 pb-24 space-y-32">
        <section id="home" className="min-h-[80vh] flex flex-col justify-center relative">
          <motion.div initial="hidden" animate="visible" variants={STAGGER} className="space-y-6 z-10">
            <motion.div
              variants={FADE_UP}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              {portfolioData.hero.availabilityText}
            </motion.div>

            <motion.h1 variants={FADE_UP} className="text-5xl md:text-7xl font-bold tracking-tight text-white min-h-[1.25em]">
              {typedHeadline.slice(0, activeCycle.prefix.length)}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                {typedHeadline.slice(activeCycle.prefix.length)}
              </span>
              <span className="ml-1 inline-block h-[0.9em] w-[2px] bg-blue-400/70 animate-pulse align-middle" />
            </motion.h1>

            <motion.p variants={FADE_UP} className="max-w-xl text-gray-500 leading-relaxed text-lg">
              {portfolioData.hero.summary}
            </motion.p>

            <motion.div variants={FADE_UP} className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => scrollTo(portfolioData.hero.primaryCta.target)}
                className="cursor-glow-target px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-md transition-all flex items-center gap-2 group"
              >
                {portfolioData.hero.primaryCta.label}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo(portfolioData.hero.secondaryCta.target)}
                className="cursor-glow-target px-6 py-3 bg-transparent border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/5 text-gray-300 font-medium rounded-md transition-all"
              >
                {portfolioData.hero.secondaryCta.label}
              </button>
            </motion.div>
          </motion.div>

          <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0" />
        </section>

        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={FADE_UP}
          className="scroll-mt-24 space-y-8"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <span className="text-blue-500 font-mono text-sm font-normal">{portfolioData.about.sectionNumber}</span>{" "}
              {portfolioData.about.sectionTitle}
            </h2>
            <div className="h-px w-32 bg-gradient-to-r from-blue-500/50 to-transparent" />
          </div>

          <div className="prose prose-invert prose-lg max-w-none text-gray-400">
            {portfolioData.about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={FADE_UP}
          className="scroll-mt-24 space-y-8"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <span className="text-blue-500 font-mono text-sm font-normal">{portfolioData.experience.sectionNumber}</span>{" "}
              {portfolioData.experience.sectionTitle}
            </h2>
            <div className="h-px w-32 bg-gradient-to-r from-blue-500/50 to-transparent" />
          </div>

          <div className="relative border-l border-white/10 ml-3 md:ml-4 space-y-12 pb-4">
            {portfolioData.experience.items.map((item, index) => (
              <div key={index} className="relative pl-8 md:pl-10">
                <div
                  className={
                    item.highlighted
                      ? "absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                      : "absolute w-3 h-3 border-2 border-blue-500/50 bg-[#0a0a0f] rounded-full -left-[6.5px] top-1.5"
                  }
                />
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-100">{item.title}</h3>
                  <span className="text-sm font-mono text-blue-400 mt-1 sm:mt-0">{item.period}</span>
                </div>
                <h4 className="text-gray-400 font-medium mb-4">{item.organization}</h4>
                <p className="text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={FADE_UP}
          className="scroll-mt-24 space-y-8"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <span className="text-blue-500 font-mono text-sm font-normal">{portfolioData.skills.sectionNumber}</span>{" "}
              {portfolioData.skills.sectionTitle}
            </h2>
            <div className="h-px w-32 bg-gradient-to-r from-blue-500/50 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioData.skills.categories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="cursor-glow-target p-6 rounded-lg border border-white/5 bg-white/[0.02] hover:border-blue-500/20 transition-colors"
              >
                <h3 className="text-sm font-mono text-gray-400 mb-6 uppercase tracking-wider">{category.title}</h3>
                <div className="grid grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => {
                    const Icon = SKILL_ICON_MAP[item.icon];

                    return (
                      <div key={itemIndex} className="flex flex-col items-center gap-2 group">
                        <Icon
                          className="w-8 h-8 group-hover:scale-110 transition-transform"
                          style={{ color: item.color }}
                        />
                        <span className="text-xs text-gray-500">{item.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={FADE_UP}
          className="scroll-mt-24 space-y-8"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <span className="text-blue-500 font-mono text-sm font-normal">{portfolioData.projects.sectionNumber}</span>{" "}
              {portfolioData.projects.sectionTitle}
            </h2>
            <div className="h-px w-32 bg-gradient-to-r from-blue-500/50 to-transparent" />
          </div>

          <div className="grid grid-cols-1 gap-6">
            {portfolioData.projects.items.map((project, i) => (
              <div
                key={i}
                className="cursor-glow-target group relative p-8 rounded-lg bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] hover:border-blue-500/30 transition-all duration-300 flex flex-col md:flex-row gap-6 md:items-center justify-between"
              >
                <div className="space-y-4 flex-1">
                  <h3 className="text-xl font-bold text-gray-100 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm md:text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-2.5 py-1 text-xs font-mono text-blue-300 bg-blue-500/10 rounded border border-blue-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4 md:flex-col md:justify-center">
                  <a
                    href={project.github}
                    className="p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-md transition-all"
                  >
                    <SiGithub className="w-5 h-5" />
                  </a>
                  <a
                    href={project.demo}
                    className="p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-md transition-all"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={FADE_UP}
          className="scroll-mt-24 space-y-8"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <span className="text-blue-500 font-mono text-sm font-normal">{portfolioData.contact.sectionNumber}</span>{" "}
              {portfolioData.contact.sectionTitle}
            </h2>
            <div className="h-px w-32 bg-gradient-to-r from-blue-500/50 to-transparent" />
          </div>

          <div className="max-w-xl space-y-8">
            <p className="text-gray-400">{portfolioData.contact.message}</p>

            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href={`mailto:${portfolioData.contact.email}`} className="hover:text-blue-300 transition-colors">
                  {portfolioData.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>{portfolioData.contact.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>{portfolioData.contact.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-6 pt-6">
              {portfolioData.contact.socials.map((social, index) => {
                const Icon = SOCIAL_ICON_MAP[social.icon];

                return (
                  <a
                    key={index}
                    href={social.href}
                    className="text-gray-500 hover:text-blue-400 transition-colors p-2 hover:bg-blue-500/10 rounded-full"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="py-6 text-center text-sm font-mono text-gray-600 border-t border-white/5">
        <p>{portfolioData.footerText}</p>
      </footer>
    </div>
  );
}
