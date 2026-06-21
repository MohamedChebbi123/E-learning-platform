"use client";


import { useState, useEffect, useRef } from "react";
import {
  BookOpen,
  Menu,
  X,
  LogIn,
  UserPlus,
  GraduationCap,
  Video,
  FileText,
  Award,
  Users,
  Trophy,
  BookMarked,
  Star,
  TrendingUp,
  Clock,
  BarChart3,
  Rocket,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Quote,
  ArrowRight,
  Sun,
  Moon,
} from "lucide-react";

import { useThemeStore } from "@/store/theme";

/**
 * EduPlatform — Landing Page
 * ---------------------------------------------------------
 * Design language: "annotated course catalog"
 * - Paper-warm neutrals instead of dark-navy/violet gradients
 * - Fraunces (display serif) for headlines, Inter for body,
 *   JetBrains Mono for ledger-style labels, stats and prices
 * - Torn-paper divider as the page's signature motif
 * - Course cards styled like library index cards
 *
 * Fonts (Fraunces / Inter / JetBrains Mono) and lucide-react
 * are assumed to be available in the host app. If not, add to
 * index.html:
 * <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
 */

// ---------------------------------------------------------------
// Shared content
// ---------------------------------------------------------------

const NAV_LINKS = [
  { label: "Courses", href: "#courses" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

const FEATURES = [
  {
    icon: Video,
    title: "Video lessons",
    description:
      "Bite-sized, expert-led video lectures you can pause, rewind, and rewatch as many times as it takes.",
  },
  {
    icon: FileText,
    title: "Practice quizzes",
    description:
      "Short quizzes after every module so you find the gaps in your understanding before the exam does.",
  },
  {
    icon: Award,
    title: "Certificates",
    description:
      "A shareable certificate the moment you finish — proof of work you can add to your resume or LinkedIn.",
  },
  {
    icon: Users,
    title: "Expert instructors",
    description:
      "Courses taught by people who've actually shipped the work, not just narrated a slide deck.",
  },
];

const STATS = [
  { icon: Users, value: "10K+", label: "Students enrolled" },
  { icon: BookMarked, value: "500+", label: "Courses available" },
  { icon: Trophy, value: "50+", label: "Expert instructors" },
  { icon: TrendingUp, value: "95%", label: "Satisfaction rate" },
];

const COURSES = [
  {
    title: "Full-Stack Web Development",
    instructor: "Maria Chen",
    rating: 4.9,
    reviews: 1284,
    price: "$49",
    level: "Beginner",
    duration: "32h",
    tag: "Bestseller",
  },
  {
    title: "Data Science & Machine Learning",
    instructor: "David Okafor",
    rating: 4.8,
    reviews: 942,
    price: "$59",
    level: "Intermediate",
    duration: "41h",
    tag: "New",
  },
  {
    title: "UI/UX Design Foundations",
    instructor: "Sofia Reyes",
    rating: 4.7,
    reviews: 763,
    price: "$39",
    level: "Beginner",
    duration: "18h",
    tag: "Popular",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "I went from knowing nothing about code to shipping my first freelance project in four months. The pacing made it feel possible.",
    name: "Amara Whitfield",
    role: "Frontend Developer",
  },
  {
    quote:
      "The quizzes after each lesson are what actually made things stick. I stopped just nodding along to videos and started retaining it.",
    name: "Tom Bellweather",
    role: "Data Analyst",
  },
  {
    quote:
      "Instructors here clearly do the work they teach. That changes how you explain trade-offs, not just syntax.",
    name: "Priya Natarajan",
    role: "Product Designer",
  },
];

const FOOTER_LINKS = {
  Platform: ["Courses", "Pricing", "About", "Careers"],
  Resources: ["Blog", "Guides", "Help Center", "Community"],
  Legal: ["Privacy", "Terms", "Cookie Policy"],
};

// ---------------------------------------------------------------
// Small building blocks
// ---------------------------------------------------------------

/** Ledger-style small-caps label used as a section eyebrow */
function MarginNote({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
      <span className="h-px w-5 bg-primary" />
      {children}
    </span>
  );
}

/** Signature torn-paper divider between sections */
function TornDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div
      className={`relative h-10 w-full overflow-hidden ${flip ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <path
          d="M0,8 L40,14 L80,4 L120,18 L160,6 L200,16 L240,2 L280,20 L320,9 L360,15 L400,3 L440,19 L480,7 L520,13 L560,1 L600,17 L640,8 L680,14 L720,4 L760,18 L800,6 L840,16 L880,2 L920,20 L960,9 L1000,15 L1040,3 L1080,19 L1120,7 L1160,13 L1200,8 L1200,40 L0,40 Z"
          className="fill-background"
        />
      </svg>
    </div>
  );
}

function StarRating({ rating }: { rating: number }) {
  const full = Math.round(rating);
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={
            i < full
              ? "fill-accent text-accent"
              : "fill-transparent text-border dark:text-foreground/30"
          }
        />
      ))}
    </div>
  );
}

// ---------------------------------------------------------------
// Sections
// ---------------------------------------------------------------

function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useThemeStore();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <BookOpen size={18} />
          </span>
          <span
            className="text-lg font-semibold text-foreground"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            Eduline
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Auth buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-card hover:text-primary"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-foreground transition-all hover:bg-card">
            <LogIn size={16} />
            Login
          </button>
          <button className="flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:scale-105 hover:brightness-110">
            <UserPlus size={16} />
            Register
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex items-center justify-center rounded-lg p-2 text-foreground md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                {theme === "dark" ? "Light" : "Dark"} Mode
              </button>
              <button className="flex items-center justify-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground">
                <LogIn size={16} />
                Login
              </button>
              <button className="flex items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                <UserPlus size={16} />
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-br from-background via-card to-border/40"
    >
      {/* faint ruled-paper lines, signature texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.15]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent 0, transparent 35px, hsl(var(--border)) 35px, hsl(var(--border)) 36px)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col items-center justify-center gap-10 px-6 py-24 text-center md:flex-row md:text-left">
        <div className="flex-1">
          <MarginNote>Lesson 01 — Welcome</MarginNote>

          <h1
            className="mt-4 text-4xl leading-[1.08] text-foreground sm:text-5xl md:text-6xl"
            style={{ fontFamily: "Fraunces, serif", fontWeight: 600 }}
          >
            Learn skills that{" "}
            <span className="relative inline-block text-primary">
              actually stick
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 8"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M0,5 Q50,0 100,5 T200,5"
                  fill="none"
                  stroke="#E8633A"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:mx-0 md:text-lg">
            Project-based courses, taught by people who've done the work,
            with quizzes and certificates built in — so progress is something
            you can prove, not just feel.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:items-start md:justify-start">
            <button className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:brightness-110">
              Get Started
              <ArrowRight size={16} />
            </button>
            <button className="flex items-center gap-2 rounded-xl border border-border bg-white/50 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-all hover:scale-105 hover:bg-white dark:bg-white/5 dark:hover:bg-white/10">
              <BookOpen size={16} />
              Browse Courses
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 font-mono text-xs text-muted-secondary md:justify-start">
            <GraduationCap size={14} />
            No credit card required · Cancel anytime
          </div>
        </div>

        {/* Illustration placeholder — styled like a stacked course card */}
        <div className="relative flex-1">
          <div className="relative mx-auto aspect-square max-w-sm">
            <div className="absolute inset-4 rotate-3 rounded-2xl border border-border bg-card dark:bg-card/80" />
            <div className="absolute inset-4 -rotate-2 rounded-2xl border border-border bg-background shadow-xl" />
            <div className="absolute inset-4 flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-white/70 backdrop-blur dark:bg-white/5">
              <GraduationCap size={56} className="text-primary" />
              <span className="font-mono text-xs uppercase tracking-widest text-muted-secondary">
                Course preview
              </span>
            </div>
          </div>
        </div>
      </div>

      <TornDivider />
    </section>
  );
}

function Features() {
  return (
    <section id="about" className="bg-background px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-xl">
          <MarginNote>What's included</MarginNote>
          <h2
            className="mt-3 text-3xl text-foreground sm:text-4xl"
            style={{ fontFamily: "Fraunces, serif", fontWeight: 600 }}
          >
            Everything you need, nothing you don't
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-transform group-hover:scale-110">
                  <Icon size={20} />
                </div>
                <h3
                  className="mt-4 text-lg text-foreground"
                  style={{ fontFamily: "Fraunces, serif", fontWeight: 600 }}
                >
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  return (
    <section className="border-y border-border bg-card px-6 py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
        {STATS.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
              <Icon size={22} className="text-accent" />
              <span
                className="text-3xl text-foreground"
                style={{ fontFamily: "Fraunces, serif", fontWeight: 600 }}
              >
                {stat.value}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted-secondary">
                {stat.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function CourseCard({ course }: { course: (typeof COURSES)[number] }) {
  return (
    <div className="group relative rounded-xl border border-border bg-background shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:bg-card">
      {/* "punched hole" index-card detail */}
      <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border border-border bg-background dark:bg-card" />

      {/* Thumbnail placeholder */}
      <div className="relative flex h-40 items-center justify-center rounded-t-xl bg-gradient-to-br from-primary to-primary/60 text-primary-foreground/40">
        <Video size={36} />
        <span className="absolute left-3 top-3 rounded-full bg-accent px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-accent-foreground">
          {course.tag}
        </span>
      </div>

      <div className="p-5">
        <h3
          className="text-lg text-foreground"
          style={{ fontFamily: "Fraunces, serif", fontWeight: 600 }}
        >
          {course.title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          By {course.instructor}
        </p>

        <div className="mt-3 flex items-center gap-2">
          <StarRating rating={course.rating} />
          <span className="font-mono text-xs text-muted-secondary">
            {course.rating} ({course.reviews})
          </span>
        </div>

        <div className="mt-4 flex items-center gap-4 font-mono text-xs text-muted-secondary">
          <span className="flex items-center gap-1">
            <Clock size={13} />
            {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <BarChart3 size={13} />
            {course.level}
          </span>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-dashed border-border pt-4">
          <span
            className="font-mono text-lg text-primary"
            style={{ fontWeight: 600 }}
          >
            {course.price}
          </span>
          <button className="rounded-lg bg-foreground px-4 py-2 text-xs font-semibold text-background transition-all hover:scale-105">
            Enroll now
          </button>
        </div>
      </div>
    </div>
  );
}

function PopularCourses() {
  return (
    <section id="courses" className="bg-background px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <MarginNote>The catalog</MarginNote>
            <h2
              className="mt-3 text-3xl text-foreground sm:text-4xl"
              style={{ fontFamily: "Fraunces, serif", fontWeight: 600 }}
            >
              Popular courses this term
            </h2>
          </div>
          <a
            href="#courses"
            className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            View all courses
            <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-8 pt-2 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-card px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-xl">
          <MarginNote>Notes from the margins</MarginNote>
          <h2
            className="mt-3 text-3xl text-foreground sm:text-4xl"
            style={{ fontFamily: "Fraunces, serif", fontWeight: 600 }}
          >
            What students are saying
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-xl border border-border bg-background p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <Quote size={20} className="text-accent" />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                {t.quote}
              </p>
              <div className="mt-5 flex items-center gap-3 border-t border-dashed border-border pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-mono text-sm font-semibold text-primary-foreground">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="font-mono text-xs text-muted-secondary">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/60 px-6 py-20 text-center">
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent 0, transparent 35px, hsl(var(--background)) 35px, hsl(var(--background)) 36px)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-background/15">
          <Rocket size={26} className="text-primary-foreground" />
        </span>
        <h2
          className="text-3xl text-primary-foreground sm:text-4xl"
          style={{ fontFamily: "Fraunces, serif", fontWeight: 600 }}
        >
          Start learning today
        </h2>
        <p className="max-w-md text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
          Join thousands of students building real, provable skills — one
          module at a time.
        </p>
        <button className="mt-2 flex items-center gap-2 rounded-xl bg-background px-7 py-3 text-sm font-semibold text-foreground shadow-lg transition-all hover:scale-105">
          Get Started Free
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="pricing" className="bg-card px-6 pt-16 text-muted-foreground">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <BookOpen size={18} />
              </span>
              <span
                className="text-lg font-semibold text-foreground"
                style={{ fontFamily: "Fraunces, serif" }}
              >
                Eduline
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-secondary">
              Project-based courses for skills that hold up outside the
              classroom.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-muted-foreground/20 text-muted-foreground transition-all hover:scale-105 hover:border-primary hover:text-primary"
                  aria-label="social link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-mono text-xs uppercase tracking-widest text-muted-secondary">
                {heading}
              </h4>
              <ul className="mt-4 flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-muted-foreground/20 py-6 sm:flex-row">
          <p className="font-mono text-xs text-muted-secondary">
            © {new Date().getFullYear()} Eduline. All rights reserved.
          </p>
          <p className="font-mono text-xs text-muted-secondary">
            Made for people who finish what they start.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ---------------------------------------------------------------
// Page
// ---------------------------------------------------------------

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <StatsBar />
        <PopularCourses />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}