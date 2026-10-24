import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/ui/Hero";
import LogoCloud from "@/components/ui/LogoCloud";
import { GlobalDatabase } from "@/components/ui/GlobalDatabase";
import CodeExample from "@/components/ui/CodeExample";
import Features from "@/components/ui/Features";
import Cta from "@/components/ui/Cta";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/config/site";
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
    title: dict.meta.home.title,
    description: dict.meta.home.description,
  });
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);

  const software = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: site.name,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    url: site.url,
    description: dict.meta.home.description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free Starter plan",
    },
  };

  return (
    <main className="flex flex-col overflow-hidden">
      <Hero locale={locale} dict={dict.hero} />
      <LogoCloud dict={dict.logoCloud} />
      <GlobalDatabase dict={dict.globalDatabase} />
      <CodeExample dict={dict.codeExample} />
      <Features dict={dict.features} />
      <Cta dict={dict.cta} />
      <JsonLd data={software} />
    </main>
  );
}
