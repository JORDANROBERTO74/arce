"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArceLogo } from "@/components/ArceLogo";
import { Button } from "@/components/Button";
import { ArrowAnimated } from "@/components/ui/ArrowAnimated";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale } from "@/i18n/config";

export default function NotFound() {
  const params = useParams<{ locale: string }>();
  const locale =
    params?.locale && isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);

  return (
    <div className="flex h-screen flex-col items-center justify-center px-3 text-center">
      <Link href={`/${locale}`} aria-label={dict.common.brand}>
        <ArceLogo className="text-3xl" />
      </Link>
      <p className="mt-6 text-4xl font-semibold text-emerald-600 sm:text-5xl dark:text-emerald-500">
        404
      </p>
      <h1 className="mt-4 text-2xl font-semibold text-gray-900 dark:text-gray-50">
        {dict.notFound.title}
      </h1>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        {dict.notFound.text}
      </p>
      <Button asChild className="group mt-8" variant="light">
        <Link href={`/${locale}`}>
          {dict.notFound.cta}
          <ArrowAnimated
            className="stroke-gray-900 dark:stroke-gray-50"
            aria-hidden="true"
          />
        </Link>
      </Button>
    </div>
  );
}
