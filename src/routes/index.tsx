import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight, Check, Play } from "lucide-react";
import heroImg from "@/assets/hero-cinematic.jpg";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ContactForm } from "@/components/site/ContactForm";
import {
  clients,
  faqs,
  process,
  reasons,
  reel,
  services,
  toolkit,
} from "@/lib/site-content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ajibola Joshua — AI Video Creator & Cinematic Producer" },
      {
        name: "description",
        content:
          "AI video creator making product commercials, UGC ads, spokesperson videos, book trailers, 3D Bible stories, explainers, SaaS demos and real estate promos.",
      },
      { property: "og:title", content: "Ajibola Joshua — AI Video Creator & Cinematic Producer" },
      {
        property: "og:description",
        content:
          "Turning creative ideas into powerful visual experiences with AI-powered commercials, trailers, explainers and more.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const pad = (n: number) => String(n).padStart(2, "0");

function Index() {
  return (
    <div id="top" className="min-h-screen overflow-x-clip">
      <SiteHeader />
      <Hero />
      <Marquee />
      <Work />
      <Services />
      <Toolkit />
      <Clients />
      <Process />
      <Why />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="film-grain relative flex min-h-[100svh] items-end overflow-hidden">
      <img
        src={heroImg}
        alt="Filmmaker silhouetted before a glowing cinematic projection"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover animate-flicker"
      />
      <div className="absolute inset-0 bg-scrim/35" />
      <div className="absolute inset-0 bg-scrim-bottom" />

      <div className="label-mono absolute right-5 top-24 hidden flex-col items-end gap-1 text-foreground/70 md:right-8 md:flex">
        <span className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-rec animate-rec" /> REC
        </span>
        <span>00:00:24:12</span>
        <span>4K · 24FPS</span>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-40 md:px-8 md:pb-24">
        <p className="label-mono mb-6 animate-rise text-primary">
          AI Video Creator · AI Video Ads Specialist · Cinematic Video Producer
        </p>
        <h1 className="font-display max-w-5xl animate-rise text-6xl [animation-delay:120ms] sm:text-7xl md:text-8xl lg:text-[8.5rem]">
          Turning creative ideas into <span className="text-amber">powerful visual</span>{" "}
          experiences.
        </h1>
        <div className="mt-10 grid animate-rise gap-8 [animation-delay:240ms] md:grid-cols-12 md:items-end">
          <p className="max-w-xl text-lg leading-relaxed text-foreground/80 md:col-span-7">
            I create engaging AI-powered videos that help brands promote products, authors bring
            stories to life, and creators connect with their audiences.
          </p>
          <div className="flex flex-wrap gap-3 md:col-span-5 md:justify-end">
            <Button asChild variant="hero" size="xl">
              <a href="#work">
                <Play className="fill-current" /> Explore My Work
              </a>
            </Button>
            <Button asChild variant="frame" size="xl">
              <a href="#contact">
                Start a Project <ArrowUpRight />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Product Commercials",
    "UGC Ads",
    "Book Trailers",
    "3D Bible Stories",
    "AI Spokespersons",
    "Explainers",
    "SaaS Demos",
    "Real Estate Films",
  ];
  const row = [...items, ...items];
  return (
    <div className="border-y bg-card py-5">
      <div className="flex w-max animate-marquee gap-10">
        {row.map((t, i) => (
          <span key={i} className="font-display flex items-center gap-10 text-3xl md:text-4xl">
            <span className={i % 2 ? "text-outline" : ""}>{t}</span>
            <span className="text-primary">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Work() {
  return (
    <section id="work" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-28 md:px-8">
      <SectionHeading index="01" label="Showreel" title={<>Selected <br />frames</>}>
        From realistic AI commercials to cinematic book trailers and animated Bible stories — I
        combine storytelling, advanced AI tools and professional editing into videos worth
        watching.
      </SectionHeading>
      <div className="grid gap-5 md:grid-cols-6">
        {reel.map((r, i) => (
          <figure
            key={r.title}
            className={cn(
              "viewfinder group relative overflow-hidden rounded-sm bg-card shadow-frame",
              r.tall ? "aspect-[4/5] md:col-span-2" : "aspect-[16/10] md:col-span-4",
            )}
          >
            <img
              src={r.img}
              alt={r.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-scrim-card" />
            <div className="absolute left-0 top-0 flex size-full items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow">
                <Play className="size-6 fill-current" />
              </span>
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-4 p-6">
              <div>
                <p className="label-mono mb-2 text-primary">SC {pad(i + 1)} · {r.tag}</p>
                <p className="font-display text-3xl md:text-4xl">{r.title}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-t bg-projector py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading index="02" label="Services" title={<>What I <br />create</>}>
          AI-powered video production for brands, businesses, authors, educators, organizations and
          content creators.
        </SectionHeading>
        <ol className="border-t">
          {services.map((s, i) => (
            <li
              key={s.title}
              className="group grid gap-3 border-b py-8 transition-colors hover:bg-card/60 md:grid-cols-12 md:gap-8 md:px-4"
            >
              <span className="label-mono text-muted-foreground md:col-span-1 md:pt-3">
                {pad(i + 1)}
              </span>
              <h3 className="font-display text-3xl transition-colors group-hover:text-primary md:col-span-5 md:text-4xl">
                {s.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground md:col-span-5 md:pt-2">{s.body}</p>
              <ArrowDownRight className="hidden size-6 text-muted-foreground transition-all group-hover:-rotate-90 group-hover:text-primary md:col-span-1 md:block md:justify-self-end" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Toolkit() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-28 md:px-8">
      <SectionHeading index="03" label="Creative toolkit" title={<>The gear <br />behind the frame</>}>
        Modern AI tools and professional editing software — chosen per project to fit its creative
        direction, visual requirements and intended outcome.
      </SectionHeading>
      <div className="grid gap-px overflow-hidden rounded-sm border bg-border sm:grid-cols-2 lg:grid-cols-5">
        {toolkit.map((t, i) => (
          <div key={t.name} className="group bg-background p-6 transition-colors hover:bg-card">
            <p className="label-mono mb-8 text-muted-foreground">T/{pad(i + 1)}</p>
            <p className="mb-2 text-lg font-bold transition-colors group-hover:text-primary">
              {t.name}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">{t.use}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Clients() {
  return (
    <section className="border-y bg-card py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading index="04" label="Who I work with" title={<>Built for <br />storytellers</>} />
        <div className="grid gap-x-10 md:grid-cols-2">
          {clients.map((c) => (
            <div key={c.who} className="flex gap-5 border-t py-6">
              <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
              <div>
                <p className="text-xl font-bold">{c.who}</p>
                <p className="mt-1 text-muted-foreground">{c.what}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-28 md:px-8">
      <SectionHeading index="05" label="Production process" title={<>From brief <br />to final cut</>}>
        Every project starts with understanding your vision, objectives and intended audience.
      </SectionHeading>
      <div className="sprockets mb-8" />
      <div className="grid gap-8 md:grid-cols-5">
        {process.map((p, i) => (
          <div key={p.title} className="relative">
            <p className="font-display text-outline mb-4 text-7xl">{pad(i + 1)}</p>
            <h3 className="mb-3 text-lg font-bold">{p.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{p.body}</p>
          </div>
        ))}
      </div>
      <div className="sprockets mt-8" />
    </section>
  );
}

function Why() {
  return (
    <section className="border-t bg-projector py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-12 md:px-8">
        <div className="md:col-span-6">
          <p className="label-mono mb-5 text-primary">SC 06 · Why work with me</p>
          <h2 className="font-display text-5xl md:text-7xl">
            A good video should do more than <span className="text-amber">look good.</span>
          </h2>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
            It should communicate a message, capture attention, and leave a lasting impression —
            giving your audience an experience worth remembering.
          </p>
        </div>
        <ul className="grid content-start gap-0 md:col-span-6">
          {reasons.map((r) => (
            <li key={r} className="flex items-start gap-4 border-b py-5 text-lg">
              <Check className="mt-1 size-5 shrink-0 text-primary" />
              {r}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-4xl scroll-mt-20 px-5 py-28 md:px-8">
      <p className="label-mono mb-5 text-primary">SC 07 · FAQ</p>
      <h2 className="font-display mb-12 text-5xl md:text-7xl">Questions, answered</h2>
      <Accordion type="single" collapsible className="border-t">
        {faqs.map((f, i) => (
          <AccordionItem key={f.q} value={`f-${i}`}>
            <AccordionTrigger className="py-6 text-lg font-semibold hover:no-underline hover:text-primary">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="film-grain scroll-mt-16 border-t bg-card py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <p className="label-mono mb-5 flex items-center gap-2 text-primary">
            <span className="size-2 rounded-full bg-rec animate-rec" /> Now booking
          </p>
          <h2 className="font-display text-6xl md:text-8xl">
            Let's bring your <span className="text-amber">vision</span> to life.
          </h2>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
            Have an idea for a product ad, cinematic trailer, animated story, business explainer or
            promotional video? I'd love to hear about it.
          </p>
        </div>
        <div className="md:col-span-7 md:pt-4">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="font-display text-3xl">Ajibola Joshua</p>
        <p className="label-mono text-muted-foreground">
          AI Video Creator · © {new Date().getFullYear()} · Fade to black
        </p>
      </div>
    </footer>
  );
}
