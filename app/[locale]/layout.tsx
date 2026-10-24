import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { ThemeProvider } from "next-themes";
import { Navigation } from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/config/site";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, locales } from "@/i18n/config";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : "en");

  return {
    metadataBase: new URL(site.url),
    title: {
      default: dict.meta.home.title,
      template: "%s",
    },
    description: dict.meta.home.description,
    applicationName: site.name,
    openGraph: {
      type: "website",
      siteName: site.name,
      title: dict.meta.home.title,
      description: dict.meta.home.description,
      url: site.url,
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    url: site.url,
    email: site.email,
    logo: `${site.url}/icon.svg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressCountry: site.address.countryCode,
    },
    sameAs: [site.social.github, site.social.x, site.social.linkedin],
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen scroll-auto antialiased selection:bg-emerald-100 selection:text-emerald-700 dark:bg-gray-950`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          <a
            href="#contenido"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-gray-900 focus:px-4 focus:py-2 focus:text-sm focus:text-white dark:focus:bg-white dark:focus:text-gray-900"
          >
            {dict.common.skip}
          </a>
          <Navigation locale={locale} dict={dict.nav} />
          <div id="contenido">{children}</div>
          <Footer locale={locale} dict={dict} />
          <JsonLd data={organization} />
        </ThemeProvider>
      </body>
    </html>
  );
}
