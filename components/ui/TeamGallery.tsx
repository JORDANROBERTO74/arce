import { InstaxImage } from "./InstaxImage";
import type { Dictionary } from "@/i18n/dictionaries/en";

export default function TeamGallery({ dict }: { dict: Dictionary["about"] }) {
  const topRow = [
    { ...dict.gallery[0], className: "w-[25rem] -rotate-6 sm:-ml-10", width: 640, height: 427 },
    { ...dict.gallery[1], className: "w-[15rem] rotate-3", width: 640, height: 853 },
    { ...dict.gallery[2], className: "-mr-10 w-[15rem] rotate-1", width: 640, height: 960 },
  ];

  const bottomRow = [
    { ...dict.gallery[3], className: "-ml-16 w-[25rem] rotate-1", width: 640, height: 360 },
    { ...dict.gallery[4], className: "-mt-10 w-[15rem] -rotate-3", width: 640, height: 965 },
    { ...dict.gallery[5], className: "-mr-20 -mt-2 w-[30rem] rotate-[8deg]", width: 1920, height: 1281 },
  ];

  const founders = { ...dict.gallery[6], className: "w-full rotate-1", width: 1819, height: 998 };

  return (
    <section
      aria-labelledby="teamwork-title"
      className="mx-auto mt-5 max-w-4xl animate-slide-up-fade"
      style={{
        animationDuration: "600ms",
        animationDelay: "200ms",
        animationFillMode: "backwards",
      }}
    >
      <div className="mt-20">
        <div className="flex w-full flex-col items-center justify-between md:flex-row">
          {topRow.map((image) => (
            <InstaxImage
              key={image.src}
              className={image.className}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              caption={image.caption}
            />
          ))}
        </div>
        <div className="mt-8 hidden w-full justify-between gap-4 md:flex">
          {bottomRow.map((image) => (
            <InstaxImage
              key={image.src}
              className={image.className}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              caption={image.caption}
            />
          ))}
        </div>
      </div>
      <div className="mt-28">
        <div className="flex w-full flex-col items-center justify-between md:flex-row">
          <InstaxImage
            className={founders.className}
            src={founders.src}
            alt={founders.alt}
            width={founders.width}
            height={founders.height}
            caption={founders.caption}
          />
        </div>
      </div>
    </section>
  );
}
