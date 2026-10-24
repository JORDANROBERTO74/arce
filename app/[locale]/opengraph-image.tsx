import { ImageResponse } from "next/og";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale } from "@/i18n/config";

export const alt = "Arce — the relational data platform for product teams";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : "en");
  const headline = `${dict.hero.title1} ${dict.hero.title2}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0A0A0A",
          padding: "72px 84px",
          position: "relative",
          color: "#FAFAFA",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -160,
            top: -180,
            width: 560,
            height: 560,
            borderRadius: 999,
            backgroundColor: "rgba(5, 150, 105, 0.18)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -120,
            bottom: -180,
            width: 420,
            height: 420,
            borderRadius: 999,
            backgroundColor: "rgba(5, 150, 105, 0.14)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "linear-gradient(135deg, #10B981, #047857)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 700,
              color: "#FFFFFF",
            }}
          >
            A
          </div>
          <div
            style={{
              fontSize: 30,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#D1FAE5",
              display: "flex",
            }}
          >
            Arce
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 84,
              lineHeight: 1.05,
              color: "#FFFFFF",
              fontWeight: 700,
              maxWidth: 900,
              display: "flex",
            }}
          >
            {headline}
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 30,
              color: "#9CA3AF",
              maxWidth: 800,
              display: "flex",
            }}
          >
            {dict.meta.home.description}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 24, color: "#6EE7B7" }}>
          {dict.globalDatabase.badge}
        </div>
      </div>
    ),
    size,
  );
}
