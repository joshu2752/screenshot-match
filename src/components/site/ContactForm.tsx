import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL, projectTypes } from "@/lib/site-content";

const field =
  "w-full border-0 border-b border-input bg-transparent px-0 py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none transition-colors";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const type = String(data.get("type") ?? "");
    const message = String(data.get("message") ?? "").trim();
    const subject = `New project: ${type} — ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nProject type: ${type}\n\n${message}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-8">
      <div className="grid gap-8 md:grid-cols-2">
        <label className="grid gap-1">
          <span className="label-mono text-muted-foreground">Your name</span>
          <input name="name" required maxLength={100} className={field} placeholder="Jane Doe" />
        </label>
        <label className="grid gap-1">
          <span className="label-mono text-muted-foreground">Email</span>
          <input
            name="email"
            type="email"
            required
            maxLength={200}
            className={field}
            placeholder="jane@brand.com"
          />
        </label>
      </div>
      <label className="grid gap-1">
        <span className="label-mono text-muted-foreground">Project type</span>
        <select name="type" required defaultValue="" className={field}>
          <option value="" disabled className="bg-card">
            Choose one
          </option>
          {projectTypes.map((t) => (
            <option key={t} value={t} className="bg-card">
              {t}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-1">
        <span className="label-mono text-muted-foreground">Tell me about your idea</span>
        <textarea
          name="message"
          required
          rows={4}
          maxLength={2000}
          className={`${field} resize-none`}
          placeholder="Product, story, audience, references, deadline…"
        />
      </label>
      <div className="flex flex-wrap items-center gap-5">
        <Button type="submit" variant="hero" size="xl">
          Send Project Brief <ArrowUpRight />
        </Button>
        <p className="text-sm text-muted-foreground">
          {sent ? "Your email app should open with the brief ready to send." : `Or email ${CONTACT_EMAIL}`}
        </p>
      </div>
    </form>
  );
}
