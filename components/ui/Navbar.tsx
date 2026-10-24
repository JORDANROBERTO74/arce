"use client";

import useScroll from "@/lib/use-scroll";
import { cx } from "@/lib/utils";
import { RiCloseLine, RiMenuLine } from "@remixicon/react";
import Link from "next/link";
import React from "react";
import { ArceLogo } from "../ArceLogo";
import { LocaleSwitcher } from "../LocaleSwitcher";
import { Button } from "../Button";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

export function Navigation({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary["nav"];
}) {
  const scrolled = useScroll(15);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery: MediaQueryList = window.matchMedia("(min-width: 1024px)");
    const handleMediaQueryChange = () => {
      setOpen(false);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    handleMediaQueryChange();

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const links = [
    { href: `/${locale}/about`, label: dict.about },
    { href: `/${locale}/pricing`, label: dict.pricing },
    { href: `/${locale}/changelog`, label: dict.changelog },
  ];

  return (
    <header
      className={cx(
        "fixed inset-x-3 top-4 z-50 mx-auto flex max-w-6xl transform-gpu animate-slide-down-fade justify-center overflow-hidden rounded-xl border border-transparent px-3 py-3 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1.03)] will-change-transform",
        open === true ? "h-64" : "h-16",
        scrolled || open === true
          ? "backdrop-blur-nav max-w-5xl border-gray-100 bg-white/80 shadow-xl shadow-black/5 dark:border-white/15 dark:bg-black/70"
          : "bg-white/0 dark:bg-gray-950/0",
      )}
    >
      <div className="w-full lg:my-auto">
        <div className="relative flex items-center justify-between">
          <Link href={`/${locale}`} aria-label={dict.home}>
            <ArceLogo className="text-2xl" />
          </Link>
          <nav className="hidden lg:absolute lg:left-1/2 lg:top-1/2 lg:block lg:-translate-x-1/2 lg:-translate-y-1/2 lg:transform">
            <div className="flex items-center gap-10 font-medium">
              {links.map((link) => (
                <Link
                  key={link.href}
                  className="px-2 py-1 text-gray-900 dark:text-gray-50"
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <LocaleSwitcher locale={locale} label={dict.language} />
            <Button className="h-10 font-semibold">{dict.demo}</Button>
          </div>
          <div className="flex gap-x-2 lg:hidden">
            <Button>{dict.demoShort}</Button>
            <Button
              onClick={() => setOpen(!open)}
              variant="light"
              className="aspect-square p-2"
              aria-expanded={open}
              aria-label={open ? dict.close : dict.menu}
            >
              {open ? (
                <RiCloseLine aria-hidden="true" className="size-5" />
              ) : (
                <RiMenuLine aria-hidden="true" className="size-5" />
              )}
            </Button>
          </div>
        </div>
        <nav
          className={cx(
            "my-6 flex text-lg ease-in-out will-change-transform lg:hidden",
            open ? "" : "hidden",
          )}
        >
          <ul className="space-y-4 font-medium">
            {links.map((link) => (
              <li key={link.href} onClick={() => setOpen(false)}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
            <li>
              <LocaleSwitcher locale={locale} label={dict.language} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
