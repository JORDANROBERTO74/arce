import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Balancer from "react-wrap-balancer";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import Benefits from "@/components/ui/Benefits";
import TeamGallery from "@/components/ui/TeamGallery";
import { cx } from "@/lib/utils";
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
    path: "/about",
    title: dict.meta.about.title,
    description: dict.meta.about.description,
  });
}

export default async function About({
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
    <main className="mt-36 flex flex-col overflow-hidden px-3">
      <section
        aria-labelledby="about-overview"
        className="animate-slide-up-fade"
        style={{
          animationDuration: "600ms",
          animationFillMode: "backwards",
        }}
      >
        <Badge>{dict.about.badge}</Badge>
        <h1
          id="about-overview"
          className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-gray-50 dark:to-gray-300"
        >
          <Balancer>{dict.about.title}</Balancer>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-700 dark:text-gray-400">
          {dict.about.description}
        </p>
      </section>
      <TeamGallery dict={dict.about} />
      <Benefits dict={dict.about} />
      <section aria-labelledby="vision-title" className="mx-auto mt-40">
        <h2
          id="vision-title"
          className="inline-block bg-gradient-to-t from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent md:text-5xl dark:from-gray-50 dark:to-gray-300"
        >
          {dict.about.visionTitle}
        </h2>
        <div className="mt-6 max-w-prose space-y-4 text-gray-600 dark:text-gray-400">
          <p className="text-lg leading-8">{dict.about.visionP1}</p>
          <p className="text-lg leading-8">{dict.about.visionP2}</p>
          <p
            className={cx(
              "w-fit rotate-3 font-handwriting text-3xl text-emerald-600 dark:text-emerald-400",
            )}
          >
            {dict.about.signature}
          </p>
        </div>
        <Button className="mt-32 h-10 w-full shadow-xl shadow-emerald-500/20">
          {dict.about.rolesCta}
        </Button>
      </section>
    </main>
  );
}
