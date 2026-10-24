import { Logos } from "./Logos";
import type { Dictionary } from "@/i18n/dictionaries/en";

export default function LogoCloud({ dict }: { dict: Dictionary["logoCloud"] }) {
  return (
    <section
      id="logo-cloud"
      aria-label="Company logos"
      className="mt-24 flex animate-slide-up-fade flex-col items-center justify-center gap-y-6 text-center sm:mt-32"
      style={{ animationDuration: "1500ms" }}
    >
      <p className="text-lg font-medium tracking-tighter text-gray-800 dark:text-gray-200">
        {dict.title}
      </p>
      <div className="grid grid-cols-2 gap-10 gap-y-4 text-gray-900 md:grid-cols-4 md:gap-x-20 dark:text-gray-200">
        <Logos.Biosynthesis className="w-28" />
        <Logos.AltShift className="w-28" />
        <Logos.Capsule className="w-28" />
        <Logos.Catalog className="w-28" />
        <Logos.Cloudline className="w-28" />
        <Logos.FocalPoint className="w-28" />
        <Logos.Interlock className="w-28" />
        <Logos.Sisyphus className="w-28" />
      </div>
    </section>
  );
}
