import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Globe as Linkedin,
  ExternalLink,
  Download,
  Menu,
  X,
  Briefcase,
  GraduationCap,
  Code,
  Award,
  Terminal,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";
import profileImg from "./assets/EDS00522 square.jpg";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const EXPERIENCE = [
  {
    role: "Full Stack Developer — Internship",
    org: "PT. Multirasa Nusantara (Yoshinoya)",
    dates: "Aug 2025 — Aug 2026",
    points: [
      "Developed an internal promotion portal with division-based access controls.",
      "Architected custom database structures for the internal web platform.",
      "Integrated the new system with existing corporate infrastructure.",
      "Presented technical demonstrations of application features to end-users.",
      "Assisted with store opening and closing operations in Surabaya.",
    ],
  },
  {
    role: "Full Stack Developer — Internship",
    org: "Fenix Event Organizer",
    dates: "Jan 2026 — Jul 2026",
    points: [
      "Analysed business needs to define technical requirements.",
      "Developed a Laravel-based vendor management and digital RSVP system.",
      "Architected custom database structures for event operations.",
      "Developed full-stack web architectures with API integrations.",
    ],
  },
  {
    role: "Senior Digital Marketing Assistant",
    org: "iSTTS",
    dates: "May 2023 — Jun 2025",
    points: [
      "Managed end-to-end digital content production and compelling copywriting.",
      "Analysed performance metrics to optimize digital marketing strategies.",
      "Coordinated content publication data across all study programs.",
      "Conducted direct promotional presentations at various high schools.",
    ],
  },
  {
    role: "Core Team — Freelance",
    org: "Exquisite Organizer",
    dates: "May 2025 — Present",
    points: [
      "Directed morning event operations as Groom In-Charge and managed Front of House duties for evening sessions.",
      "Worked efficiently within assigned roles while proactively backing up on-site crew as needed.",
      "Delivered rapid, effective problem-solving with clients and vendors.",
    ],
  },
  {
    role: "Core Team — Freelance",
    org: "Fenix Event Organizer",
    dates: "Nov 2022 — May 2026",
    points: [
      "Executed core duties as Groom In-Charge for morning sessions and managed Front of House operations for evening sessions.",
      "Adapted quickly to on-site role rotations: VIP family, runner, layout, and backstage management.",
      "Proactively coordinated with internal crew, vendors, and clients for seamless execution.",
    ],
  },
  {
    role: "Public Relations — Contract",
    org: "Google Developer Student Club",
    dates: "Sep 2023 — Sep 2024",
    points: [
      "Managed communications and outreach to secure keynote speakers.",
      "Led end-to-end sponsorship pitching and funding negotiations.",
    ],
  },
];

const PROJECTS = [
  {
    title: "Internal Promotion Portal",
    org: "PT. Multirasa Nusantara (Yoshinoya)",
    description:
      "A division-based internal portal for managing store promotions, built with custom database architecture and integrated into existing corporate infrastructure.",
    tags: ["Laravel", "PHP", "MySQL", "Access Control", "SMTP Mail Services"],
    images: [],
  },
  {
    title: "Vendor Management & Digital RSVP System",
    org: "Fenix Event Organizer",
    description:
      "A Laravel-based platform handling vendor coordination and digital RSVP flows for live events, connected to external services via API integrations.",
    tags: ["Laravel", "PHP", "MySQL", "Midtrans Payment", "Fontee WhatsApp API", "Google Maps API"],
    images: [
      "/assets/projects/fenix1.png",
      "/assets/projects/fenix2.png",
      "/assets/projects/fenix3.png",
      "/assets/projects/fenix4.png",
    ],
  },
  {
    title: "Gugudrive — Cloud Storage Service",
    org: "iSTTS — Cloud Computing Class Project",
    description:
      "A containerized Laravel cloud storage platform enabling secure file management, orchestrated with Kubernetes (GKE) and integrated with Google Cloud Storage for scalable object storage.",
    tags: ["Laravel", "Kubernetes", "Docker", "Google Cloud Platform", "GCP Storage", "MySQL"],
    images: [
      "/assets/projects/gugu1.png",
      "/assets/projects/gugu2.png",
    ],
  },
  {
    title: "Lara Coffee — B2B Coffee Bean Ordering Platform",
    org: "iSTTS — Visual Programming Class Project",
    description:
      "A Laravel-based multi-role platform for coffee bean distribution featuring RBAC middleware for Admin, Supplier, and Manager roles, integrated with RajaOngkir API for dynamic shipping rates and Google Maps API for location tracking.",
    tags: ["Laravel", "PHP", "MySQL", "RajaOngkir API", "Google Maps API", "Middleware"],
    images: [
      "/assets/projects/lara1.png",
      "/assets/projects/lara2.png",
      "/assets/projects/lara3.png",
    ],
  },
];

const EDUCATION = [
  {
    school: "Institut Sains & Teknologi Terpadu Surabaya (iSTTS)",
    degree: "S.Kom. Business Information Systems — Enterprise Information System",
    meta: "GPA 3.52 / 4.00",
    dates: "Aug 2022 — Aug 2026",
  },
  {
    school: "SMAK Saint Hendrikus Surabaya",
    degree: "Social Science",
    meta: "Grade 88.4 / 100",
    dates: "Jul 2018 — May 2021",
  },
];

const CERTIFICATIONS = [
  {
    name: "Google Cloud Computing Foundations Certificate",
    issuer: "Google",
    dates: "Issued Nov 2024",
  },
  {
    name: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding",
    dates: "Issued Jun 2023",
  },
];

const SKILL_GROUPS = [
  {
    label: "Languages",
    tone: "teal",
    items: ["PHP", "Python", "JavaScript", "TypeScript", "Java", "Kotlin", "HTML", "CSS"],
  },
  {
    label: "Frameworks & Libraries",
    tone: "teal",
    items: ["Laravel", "React", "jQuery", "Bootstrap", "Tailwind CSS"],
  },
  {
    label: "Platforms, Cloud & DevOps",
    tone: "teal",
    items: [
      "Docker",
      "Kubernetes",
      "Google Cloud Platform",
      "GCP Storage",
      "Git & GitHub",
      "MySQL",
      "PostgreSQL",
      "Firebase",
    ],
  },
  {
    label: "Creative & Live Event Tools",
    tone: "fuchsia",
    items: ["Adobe Premiere Pro", "CapCut", "MS Clipchamp", "Virtual DJ", "OBS", "vMix", "Resolume"],
  },
  {
    label: "On-Site & Collaboration",
    tone: "fuchsia",
    items: ["Event Operations", "Vendor Coordination", "Public Speaking", "Sponsorship Pitching"],
  },
];

const toneClasses = {
  teal: "border-teal-400/25 bg-teal-400/[0.06] text-teal-300 hover:border-teal-400/60 hover:bg-teal-400/10",
  fuchsia:
    "border-fuchsia-400/25 bg-fuchsia-400/[0.06] text-fuchsia-300 hover:border-fuchsia-400/60 hover:bg-fuchsia-400/10",
};

function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const handler = () => {
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, [ids]);
  return active;
}

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SectionHeading({ index, title }) {
  return (
    <div className="mb-10 flex items-baseline gap-3">
      <span className="font-mono text-sm text-teal-400/70">{index}</span>
      <h2 className="font-mono text-2xl font-semibold text-zinc-100 sm:text-3xl">{title}</h2>
      <span className="h-px flex-1 bg-zinc-800" />
    </div>
  );
}

export default function App() {
  const [activeModal, setActiveModal] = useState(null); // { images: [], index: 0, title: '' }
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const active = useScrollSpy(NAV_LINKS.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id) => {
    setMenuOpen(false);
    scrollToId(id);
  };

  const openModal = (images, index, title) => {
    setActiveModal({ images, index, title });
  };

  const prevImage = () => {
    if (!activeModal) return;
    setActiveModal((prev) => ({
      ...prev,
      index: (prev.index - 1 + prev.images.length) % prev.images.length,
    }));
  };

  const nextImage = () => {
    if (!activeModal) return;
    setActiveModal((prev) => ({
      ...prev,
      index: (prev.index + 1) % prev.images.length,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "b71af9fe-f04c-4d76-8f7b-e4368024e0d0",
        name: formState.name,
        email: formState.email,
        message: formState.message,
      }),
    });

    const result = await response.json();
    if (result.success) {
      setSent(true);
      setTimeout(() => setSent(false), 3500);
      setFormState({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 font-sans text-zinc-300 antialiased">
      {/* Navbar */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled
            ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800"
            : "bg-transparent border-b border-transparent"
          }`}
      >
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <button
            onClick={() => handleNav("home")}
            className="flex items-center gap-2 font-mono text-sm font-semibold text-zinc-100"
          >
            <Terminal className="h-4 w-4 text-teal-400" />
            Mario Joseph
          </button>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNav(link.id)}
                  className={`rounded-md px-3 py-2 font-mono text-xs transition-colors ${active === link.id
                      ? "text-teal-300"
                      : "text-zinc-400 hover:text-zinc-100"
                    }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNav("contact");
              }}
              className="rounded-md border border-teal-400/40 px-4 py-2 font-mono text-xs text-teal-300 transition-colors hover:bg-teal-400/10"
            >
              Contact me
            </a>
          </div>

          <button
            className="text-zinc-300 md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-zinc-800 bg-zinc-950/95 backdrop-blur-md md:hidden">
            <ul className="flex flex-col px-6 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    className="w-full py-3 text-left font-mono text-sm text-zinc-300 hover:text-teal-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-24"
      >
        <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[36rem] -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />

        <div className="mx-auto w-full max-w-5xl">
          <div className="grid items-center gap-10 md:grid-cols-12">
            <div className="order-first flex justify-center md:order-last md:col-span-5">
              <div className="relative">
                <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-teal-400 to-fuchsia-400 opacity-30 blur-md transition duration-500 hover:opacity-60" />
                <div className="relative h-48 w-48 overflow-hidden rounded-full border-2 border-teal-400/50 bg-zinc-900 shadow-2xl sm:h-60 sm:w-60 md:h-72 md:w-72">
                  <img
                    src={profileImg}
                    alt="Mario Joseph"
                    className="h-full w-full object-cover object-center grayscale contrast-125 transition-all duration-500 hover:grayscale-0"
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-7">
              <p className="mb-4 flex items-center gap-2 font-mono text-sm text-teal-400">
                <span className="text-zinc-600">$</span> Who Am I
              </p>
              <h1 className="font-mono text-4xl font-bold leading-[1.1] text-zinc-100 sm:text-6xl">
                Mario Joseph
              </h1>
              <p className="mt-4 max-w-xl font-mono text-lg text-teal-400 sm:text-xl">
                Full Stack Developer <span className="text-zinc-600">/</span>{" "}
                <span className="text-fuchsia-300">Live Event Operator</span>
              </p>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400">
                Business Information Systems graduate from iSTTS, architecting software systems
                during the weekdays while executing live event operations on weekends.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => handleNav("contact")}
                  className="rounded-md bg-teal-400 px-5 py-3 font-mono text-sm font-medium text-zinc-950 transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Contact me
                </button>
                <a
                  href="/Mario_Joseph_CV.pdf"
                  download="Mario_Joseph_CV.pdf"
                  className="flex items-center gap-2 rounded-md border border-zinc-700 px-5 py-3 font-mono text-sm text-zinc-200 transition-colors hover:border-zinc-500"
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </div>

              <div className="mt-10 flex items-center gap-5">
                <a
                  href="https://www.linkedin.com/in/marjosh"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-500 transition-colors hover:text-teal-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:mariojoseph3939@gmail.com"
                  className="text-zinc-500 transition-colors hover:text-teal-300"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/6282377988005?text=Hi%20Mario,%20I%20saw%20your%20portfolio!"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-500 transition-colors hover:text-teal-300"
                  aria-label="WhatsApp"
                >
                  <Phone className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-5xl px-6">
        {/* About */}
        <section id="about" className="scroll-mt-24 py-20">
          <SectionHeading index="01" title="About" />
          <div className="grid gap-10 md:grid-cols-3">
            <div className="md:col-span-2">
              <p className="max-w-2xl text-base leading-relaxed text-zinc-400">
                I'm a Business Information Systems graduate specializing in Enterprise
                Information Systems at Institut Sains &amp; Teknologi Terpadu Surabaya (iSTTS).
                Across two full-stack internships, I've built internal portals and
                vendor management systems from the database up, designing schemas,
                integrating them into existing infrastructure, and presenting the results
                to the users.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400">
                Outside the codebase, I've spent over three years on event crews. Operating
                Front of House, coordinating vendors, and pitching sponsorships. I'm
                aiming for a career at the intersection of technology and the creative
                industry, where both sides of that experience are useful at once.
              </p>
            </div>
            <div className="space-y-4 rounded-lg border border-zinc-800 bg-zinc-900/40 p-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
                <span className="text-sm text-zinc-400">Surabaya, East Java 60283</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
                <span className="break-all text-sm text-zinc-400">mariojoseph3939@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
                <span className="text-sm text-zinc-400">+62 823 779 880 05</span>
              </div>
              <div className="flex items-start gap-3">
                <Linkedin className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
                <span className="text-sm text-zinc-400">linkedin.com/in/marjosh</span>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-24 py-20">
          <SectionHeading index="02" title="Experience" />
          <div className="relative space-y-10 border-l border-zinc-800 pl-8">
            {EXPERIENCE.map((job, i) => (
              <div key={i} className="relative">
                <span className="absolute -left-[2.05rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-zinc-950 bg-teal-400" />
                <p className="font-mono text-xs text-zinc-500">{job.dates}</p>
                <h3 className="mt-1 text-lg font-semibold text-zinc-100">{job.role}</h3>
                <p className="flex items-center gap-2 text-sm text-fuchsia-300">
                  <Briefcase className="h-3.5 w-3.5" />
                  {job.org}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {job.points.map((pt, j) => (
                    <li key={j} className="flex gap-2 text-sm leading-relaxed text-zinc-400">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-600" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-24 py-20">
          <SectionHeading index="03" title="Projects" />
          <div className="grid gap-6 sm:grid-cols-2">
            {PROJECTS.map((project, i) => (
              <div
                key={i}
                className="group flex flex-col justify-between overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6 transition-all duration-300 hover:border-teal-400/40 hover:bg-zinc-900/60"
              >
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <Code className="h-5 w-5 text-teal-400" />
                    <ExternalLink className="h-4 w-4 text-zinc-600 transition-colors group-hover:text-zinc-400" />
                  </div>

                  <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-teal-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-zinc-500">{project.org}</p>

                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {project.description}
                  </p>

                  {/* Clean Framed Image Preview */}
                  {project.images && project.images.length > 0 && (
                    <div className="mt-5 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950">
                      {/* Browser Header Bar */}
                      <div className="flex items-center justify-between border-b border-zinc-800/80 bg-zinc-900/80 px-3 py-1.5">
                        <div className="flex items-center gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                          <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                        </div>
                        <span className="font-mono text-[10px] text-zinc-500">Preview</span>
                      </div>

                      {/* Main Featured Thumbnail */}
                      <div
                        onClick={() => openModal(project.images, 0, project.title)}
                        className="group/img relative aspect-video cursor-pointer overflow-hidden bg-zinc-900"
                      >
                        <img
                          src={project.images[0]}
                          alt={`${project.title} preview`}
                          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-zinc-950/60 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover/img:opacity-100">
                          <span className="flex items-center gap-2 rounded-full border border-teal-400/40 bg-zinc-900/90 px-3 py-1.5 font-mono text-xs text-teal-300 shadow-lg">
                            <Maximize2 className="h-3.5 w-3.5" />
                            View Screenshots ({project.images.length})
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Tech Tags */}
                <div className="mt-5 flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded border border-teal-400/25 bg-teal-400/[0.06] px-2.5 py-1 font-mono text-[11px] text-teal-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lightbox Modal with Multi-Image Navigation */}
        {activeModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/90 p-4 backdrop-blur-md"
            onClick={() => setActiveModal(null)}
          >
            <div
              className="relative max-w-5xl w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 p-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="mb-3 flex items-center justify-between border-b border-zinc-800/80 pb-3 px-2">
                <div>
                  <h4 className="font-mono text-sm font-semibold text-zinc-100">
                    {activeModal.title}
                  </h4>
                  <p className="font-mono text-xs text-zinc-500">
                    Image {activeModal.index + 1} of {activeModal.images.length}
                  </p>
                </div>
                <button
                  onClick={() => setActiveModal(null)}
                  className="rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Main Image Container */}
              <div className="relative flex items-center justify-center overflow-hidden rounded-xl bg-zinc-950 p-2">
                <img
                  src={activeModal.images[activeModal.index]}
                  alt={`Screenshot ${activeModal.index + 1}`}
                  className="max-h-[75vh] w-auto rounded-lg object-contain shadow-md"
                />

                {/* Left/Right Carousel Controls */}
                {activeModal.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 rounded-full border border-zinc-700 bg-zinc-900/80 p-2 text-zinc-200 backdrop-blur-sm hover:border-teal-400 hover:text-teal-300 transition-all"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 rounded-full border border-zinc-700 bg-zinc-900/80 p-2 text-zinc-200 backdrop-blur-sm hover:border-teal-400 hover:text-teal-300 transition-all"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Selector Strip */}
              {activeModal.images.length > 1 && (
                <div className="mt-4 flex justify-center gap-2 overflow-x-auto pb-1">
                  {activeModal.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() =>
                        setActiveModal((prev) => ({ ...prev, index: idx }))
                      }
                      className={`h-14 w-20 overflow-hidden rounded-lg border-2 transition-all ${activeModal.index === idx
                          ? "border-teal-400 scale-105"
                          : "border-transparent opacity-50 hover:opacity-100"
                        }`}
                    >
                      <img
                        src={img}
                        alt="thumbnail"
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Education & Certifications */}
        <section id="education" className="scroll-mt-24 py-20">
          <SectionHeading index="04" title="Education & Certifications" />
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <h3 className="mb-4 flex items-center gap-2 font-mono text-xs text-zinc-500">
                <GraduationCap className="h-4 w-4" /> Education
              </h3>
              <div className="space-y-4">
                {EDUCATION.map((ed, i) => (
                  <div key={i} className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-5">
                    <p className="font-mono text-xs text-zinc-500">{ed.dates}</p>
                    <h4 className="mt-1 font-semibold text-zinc-100">{ed.school}</h4>
                    <p className="mt-1 text-sm text-zinc-400">{ed.degree}</p>
                    <p className="mt-2 text-sm text-fuchsia-300">{ed.meta}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-4 flex items-center gap-2 font-mono text-xs text-zinc-500">
                <Award className="h-4 w-4" /> Certifications
              </h3>
              <div className="space-y-4">
                {CERTIFICATIONS.map((cert, i) => (
                  <div key={i} className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-5">
                    <p className="font-mono text-xs text-zinc-500">{cert.dates}</p>
                    <h4 className="mt-1 font-semibold text-zinc-100">{cert.name}</h4>
                    <p className="mt-1 text-sm text-teal-300">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-24 py-20">
          <SectionHeading index="05" title="Skills" />
          <div className="space-y-7">
            {SKILL_GROUPS.map((group, i) => (
              <div key={i}>
                <h3 className="mb-3 font-mono text-xs font-semibold text-zinc-400">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, j) => (
                    <span
                      key={j}
                      className={`rounded-md border px-3 py-1.5 font-mono text-xs font-medium transition-colors ${toneClasses[group.tone]}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 py-20 pb-32">
          <SectionHeading index="06" title="Contact" />
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold text-zinc-100">Let's connect</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Whether you have a full-time role, freelance opportunity, or live event project,
                feel free to reach out. I'm available for work in Surabaya and open to remote setups.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-xs text-zinc-400">Name</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="mt-1 w-full rounded-md border border-zinc-800 bg-zinc-900/60 px-4 py-2.5 text-sm text-zinc-100 focus:border-teal-400 focus:outline-none"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block font-mono text-xs text-zinc-400">Email</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="mt-1 w-full rounded-md border border-zinc-800 bg-zinc-900/60 px-4 py-2.5 text-sm text-zinc-100 focus:border-teal-400 focus:outline-none"
                  placeholder="name@example.com"
                />
              </div>
              <div>
                <label className="block font-mono text-xs text-zinc-400">Message</label>
                <textarea
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="mt-1 w-full rounded-md border border-zinc-800 bg-zinc-900/60 px-4 py-2.5 text-sm text-zinc-100 focus:border-teal-400 focus:outline-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-teal-400 py-3 font-mono text-sm font-medium text-zinc-950 hover:bg-teal-300 transition-colors"
              >
                {sent ? "Message Sent!" : "Send Message"}
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800/80 py-8 text-center font-mono text-xs text-zinc-600">
        © {new Date().getFullYear()} Mario Joseph. Built with React & Tailwind CSS.
      </footer>
    </div>
  );
}