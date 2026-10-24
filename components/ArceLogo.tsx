import { cx } from "@/lib/utils";

/**
 * Arce wordmark and glyph. The glyph is a minimal leaf/maple mark that echoes the
 * "Arce" (maple) name; both scale together via the wrapper font size.
 */
export function ArceLogo({ className }: { className?: string }) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-2 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-50",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="flex h-[1.5em] w-[1.5em] items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-sm shadow-emerald-600/30"
      >
        <svg viewBox="0 0 20 20" className="h-[0.9em] w-[0.9em] text-white" fill="currentColor">
          <path d="M10 2.2C7 5.7 4.2 9.1 4.2 13a5.8 5.8 0 0 0 11.6 0c0-3.9-2.8-7.3-5.8-10.8Z" />
          <path
            d="M10 6.4v8.4"
            stroke="white"
            strokeWidth="1.3"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </span>
      <span>Arce</span>
    </span>
  );
}
