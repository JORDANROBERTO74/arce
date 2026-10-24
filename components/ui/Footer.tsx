import { RiArrowRightUpLine } from "@remixicon/react";
import Link from "next/link";
import { ArceLogo } from "../ArceLogo";
import ThemeSwitch from "../ThemeSwitch";
import { site } from "@/config/site";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

export default function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const year = new Date().getFullYear();

  const columns = [
    {
      title: dict.footer.productTitle,
      items: [
        { label: dict.footer.product.enterprise, href: "#", external: false },
        { label: dict.footer.product.pricing, href: `/${locale}/pricing`, external: false },
        { label: dict.footer.product.docs, href: "#", external: false },
        { label: dict.footer.product.changelog, href: `/${locale}/changelog`, external: false },
      ],
    },
    {
      title: dict.footer.resourcesTitle,
      items: [
        { label: dict.footer.resources.faqs, href: `/${locale}/pricing#faq-title`, external: false },
        { label: dict.footer.resources.github, href: "#", external: true },
        { label: dict.footer.resources.discord, href: "#", external: true },
        { label: dict.footer.resources.youtube, href: "#", external: true },
      ],
    },
    {
      title: dict.footer.companyTitle,
      items: [
        { label: dict.footer.company.about, href: `/${locale}/about`, external: false },
        { label: dict.footer.company.careers, href: "#", external: true },
        { label: dict.footer.company.contact, href: "#", external: false },
        { label: dict.footer.company.status, href: "#", external: false },
      ],
    },
    {
      title: dict.footer.legalTitle,
      items: [
        { label: dict.footer.legal.imprint, href: "#", external: false },
        { label: dict.footer.legal.privacy, href: "#", external: false },
        { label: dict.footer.legal.terms, href: "#", external: false },
        { label: dict.footer.legal.dpa, href: "#", external: false },
      ],
    },
  ];

  return (
    <footer id="footer">
      <div className="mx-auto max-w-6xl px-3 pb-8 pt-16 sm:pt-24 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-20">
          <div className="space-y-8">
            <ArceLogo className="text-3xl" />
            <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
              {dict.footer.tagline}
            </p>
            <div className="flex space-x-6">
              <ThemeSwitch />
            </div>
            <div></div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-14 sm:gap-8 md:grid-cols-2 xl:col-span-2 xl:mt-0">
            <div className="grid grid-cols-2 gap-8">
              {columns.slice(0, 2).map((column) => (
                <FooterColumn key={column.title} column={column} />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-8">
              {columns.slice(2).map((column) => (
                <FooterColumn key={column.title} column={column} />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 sm:mt-20 sm:flex-row lg:mt-24 dark:border-gray-800">
          <p className="text-sm leading-5 text-gray-500 dark:text-gray-400">
            &copy; {year} {site.legalName}. {dict.footer.copyright}
          </p>
          <div className="rounded-full border border-gray-200 py-1 pl-1 pr-2 dark:border-gray-800">
            <div className="flex items-center gap-1.5">
              <div className="relative size-4 shrink-0">
                <div className="absolute inset-[1px] rounded-full bg-emerald-500/20 dark:bg-emerald-600/20" />
                <div className="absolute inset-1 rounded-full bg-emerald-600 dark:bg-emerald-500" />
              </div>
              <span className="text-xs text-gray-700 dark:text-gray-50">
                {dict.footer.status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  column,
}: {
  column: {
    title: string;
    items: { label: string; href: string; external: boolean }[];
  };
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
        {column.title}
      </h3>
      <ul role="list" className="mt-6 space-y-4" aria-label={column.title}>
        {column.items.map((item) => (
          <li key={item.label} className="w-fit">
            <Link
              className="flex rounded-md text-sm text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
            >
              <span>{item.label}</span>
              {item.external && (
                <div className="ml-1 aspect-square size-3 rounded-full bg-gray-100 p-px dark:bg-gray-500/20">
                  <RiArrowRightUpLine
                    aria-hidden="true"
                    className="size-full shrink-0 text-gray-900 dark:text-gray-300"
                  />
                </div>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
