import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Balancer from "react-wrap-balancer";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale } from "@/i18n/config";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);

  return buildMetadata({
    locale,
    path: "/changelog",
    title: dict.meta.changelog.title,
    description: dict.meta.changelog.description,
  });
}

export default async function Changelog({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);

  return (
    <main
      className="mx-auto mt-36 max-w-3xl animate-slide-up-fade px-3"
      style={{
        animationDuration: "600ms",
        animationFillMode: "backwards",
      }}
    >
      <div className="text-center">
        <h1 className="inline-block bg-gradient-to-t from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-5xl dark:from-gray-50 dark:to-gray-300">
          {dict.changelog.title}
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          <Balancer>{dict.changelog.description}</Balancer>
        </p>
      </div>
      <div className="mt-28">
        {dict.changelog.entries.map((entry) => (
          <div
            key={entry.version}
            className="relative my-20 flex flex-col justify-center gap-x-14 border-b border-gray-200 md:flex-row dark:border-gray-800"
          >
            <div className="mb-4 md:mb-10 md:w-1/3">
              <div className="sticky top-24 flex items-center space-x-2 md:block md:space-x-0 md:space-y-1.5">
                <span className="inline-flex items-center rounded-lg bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-700/10 dark:bg-emerald-500/20 dark:text-emerald-400 dark:ring-emerald-400/10">
                  {entry.version}
                </span>
                <span className="block whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                  {entry.date}
                </span>
              </div>
            </div>
            <div className="mb-12">
              <h2 className="text-lg font-semibold normal-case tracking-tight text-gray-900 dark:text-gray-50">
                {entry.heading}
              </h2>
              <p className="mb-8 mt-3 leading-7 text-gray-600 dark:text-gray-400">
                {entry.summary}
              </p>

              {entry.highlights.length > 0 && (
                <>
                  <h3 className="mb-4 text-sm font-semibold normal-case tracking-tight text-gray-900 dark:text-gray-50">
                    {dict.changelog.highlightsLabel}
                  </h3>
                  <ul className="mb-8 ml-[30px] list-['–__'] space-y-1 leading-8 text-gray-600 dark:text-gray-400">
                    {entry.highlights.map((item) => (
                      <li key={item.label}>
                        <span className="font-semibold text-gray-900 dark:text-gray-50">
                          {item.label}:
                        </span>{" "}
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {entry.fixes.length > 0 && (
                <>
                  <h3 className="mb-4 text-sm font-semibold normal-case tracking-tight text-gray-900 dark:text-gray-50">
                    {dict.changelog.fixesLabel}
                  </h3>
                  <ul className="mb-8 ml-[30px] list-['–__'] space-y-1 leading-8 text-gray-600 dark:text-gray-400">
                    {entry.fixes.map((item) => (
                      <li key={item.label}>
                        <span className="font-semibold text-gray-900 dark:text-gray-50">
                          {item.label}:
                        </span>{" "}
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
