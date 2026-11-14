import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { nav } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open ? "bg-background/85 backdrop-blur-md border-b" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="size-2 rounded-full bg-rec animate-rec" aria-hidden />
          <span className="font-display text-2xl tracking-wide">Ajibola Joshua</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="label-mono text-muted-foreground transition-colors hover:text-primary"
            >
              {n.label}
            </a>
          ))}
          <Button asChild variant="hero" size="sm" className="rounded-sm px-4">
            <a href="#contact">Start a Project</a>
          </Button>
        </nav>
        <button
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t px-5 pb-6 pt-3 md:hidden">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="font-display py-2 text-3xl"
            >
              {n.label}
            </a>
          ))}
          <Button asChild variant="hero" size="lg" className="mt-3">
            <a href="#contact" onClick={() => setOpen(false)}>
              Start a Project
            </a>
          </Button>
        </nav>
      )}
    </header>
  );
}
