"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { localeCookie, localeNames, locales, type Locale } from "@/i18n/config";
import { cx } from "@/lib/utils";

export function LocaleSwitcher({
  locale,
  label,
  className,
}: {
  locale: Locale;
  label: string;
  className?: string;
}) {
  const pathname = usePathname() ?? `/${locale}`;
  const suffix = pathname.split("/").slice(2).join("/");

  // Remember the locale the visitor is browsing so a later visit to "/" does
  // not override an explicit choice.
  useEffect(() => {
    document.cookie = `${localeCookie}=${locale}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
  }, [locale]);

  return (
    <div
      className={cx("flex items-center gap-1 text-xs font-semibold", className)}
      aria-label={label}
      role="group"
    >
      {locales.map((code) => (
        <Link
          key={code}
          href={`/${code}${suffix ? `/${suffix}` : ""}`}
          hrefLang={code}
          aria-current={code === locale ? "true" : undefined}
          className={cx(
            "rounded-full px-2.5 py-1 uppercase transition",
            code === locale
              ? "bg-emerald-600 text-white"
              : "text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50",
          )}
        >
          {code}
          <span className="sr-only"> — {localeNames[code]}</span>
        </Link>
      ))}
    </div>
  );
}
