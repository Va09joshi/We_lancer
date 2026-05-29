"use client";
import React, { forwardRef } from "react";
import Image from "next/image";
import { clsx } from "clsx";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

// ─── Sub-components ─────────────────────────────────────────

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: "outline" | "default";
  size?: "icon" | "default";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-40",
          variant === "outline" &&
            "border border-[#c7cbdb] bg-white text-[#20294c] shadow-[rgba(32,41,76,0.1)_0px_1px_4px_0px] hover:bg-[#f0f1f5]",
          size === "icon" && "h-10 w-10",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// ─── Carousel Context ────────────────────────────────────────

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

interface CarouselProps {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) throw new Error("useCarousel must be used within a <Carousel />");
  return context;
}

// ─── Carousel Root ───────────────────────────────────────────

const Carousel = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
  const [carouselRef, api] = useEmblaCarousel(
    { ...opts, axis: orientation === "horizontal" ? "x" : "y" },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = React.useCallback(() => api?.scrollNext(), [api]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") { event.preventDefault(); scrollPrev(); }
      else if (event.key === "ArrowRight") { event.preventDefault(); scrollNext(); }
    },
    [scrollPrev, scrollNext]
  );

  React.useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => { api?.off("select", onSelect); };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{ carouselRef, api, opts, orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"), scrollPrev, scrollNext, canScrollPrev, canScrollNext }}
    >
      <div
        ref={ref}
        onKeyDownCapture={handleKeyDown}
        className={clsx("relative", className)}
        role="region"
        aria-roledescription="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
});
Carousel.displayName = "Carousel";

// ─── Carousel Parts ──────────────────────────────────────────

const CarouselContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();
    return (
      <div ref={carouselRef} className="overflow-hidden">
        <div
          ref={ref}
          className={clsx(
            "flex",
            orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);
CarouselContent.displayName = "CarouselContent";

const CarouselItem = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();
    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        className={clsx(
          "min-w-0 shrink-0 grow-0 basis-full",
          orientation === "horizontal" ? "pl-4" : "pt-4",
          className
        )}
        {...props}
      />
    );
  }
);
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={clsx(
          "absolute size-10 rounded-full",
          orientation === "horizontal"
            ? "bottom-0 left-1/2 -translate-x-16 translate-y-4"
            : "-top-12 right-1/2 -translate-x-1/2 rotate-90",
          className
        )}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        {...props}
      >
        <ChevronLeft className="size-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
    );
  }
);
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={clsx(
          "absolute size-10 rounded-full",
          orientation === "horizontal"
            ? "bottom-0 right-1/2 translate-x-16 translate-y-4"
            : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        )}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        <ChevronRight className="size-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    );
  }
);
CarouselNext.displayName = "CarouselNext";

// ─── Data ────────────────────────────────────────────────────

const companies = [
  { name: "Google",    url: "https://res.cloudinary.com/eldoraui/image/upload/v1734066341/Google_fav2wl.svg" },
  { name: "GitHub",    url: "https://res.cloudinary.com/eldoraui/image/upload/v1734066341/GitHub_honend.svg" },
  { name: "Amazon",    url: "https://res.cloudinary.com/eldoraui/image/upload/v1734066178/Amazon_wckqtv.svg" },
  { name: "Netflix",   url: "https://res.cloudinary.com/eldoraui/image/upload/v1734066179/Netflix_skrjyn.svg" },
  { name: "YouTube",   url: "https://res.cloudinary.com/eldoraui/image/upload/v1734066180/YouTube_wknngk.svg" },
  { name: "Instagram", url: "https://res.cloudinary.com/eldoraui/image/upload/v1734066178/Instagram_mo5ttl.svg" },
  { name: "Spotify",   url: "https://res.cloudinary.com/eldoraui/image/upload/v1734066180/Spotify_ocrrnm.svg" },
];

const testimonials = [
  {
    quote: "we_lancer has revolutionized our product pipeline. We're identifying and shipping features faster than ever before.",
    name: "Alex Rivera",
    role: "Head of Product",
  },
  {
    quote: "With we_lancer, we've significantly improved our digital presence. It's like having a world-class studio working around the clock.",
    name: "Samantha Lee",
    role: "Chief Marketing Officer",
  },
  {
    quote: "The AI-driven features from we_lancer transformed how we approach our platform. An absolute game-changer.",
    name: "Raj Patel",
    role: "VP of Engineering",
  },
  {
    quote: "we_lancer's automated deployment pipeline saved us countless hours and dramatically enhanced our launch quality.",
    name: "Emily Chen",
    role: "Security Operations Manager",
  },
  {
    quote: "The continuous delivery capabilities of we_lancer give us peace of mind. We're always a step ahead.",
    name: "Michael Brown",
    role: "Director of IT Security",
  },
  {
    quote: "Compliance mapping and process documentation from we_lancer has streamlined our entire audit workflow.",
    name: "Linda Wu",
    role: "Lead Security Architect",
  },
  {
    quote: "Implementing we_lancer was seamless, and the results were immediate. We're now proactively ahead of our competitors.",
    name: "Carlos Gomez",
    role: "Chief Technology Officer",
  },
];

// ─── Exported Component ──────────────────────────────────────

export function TestimonialsCarousel() {
  return (
    <Carousel opts={{ loop: true }}>
      <div className="relative mx-auto max-w-2xl">
        <CarouselContent>
          {testimonials.map((t, index) => (
            <CarouselItem key={index}>
              <div className="p-2 pb-14 text-center">
                {/* Quote icon */}
                <Quote
                  className="mx-auto my-4 text-[#459af8] opacity-30"
                  size={36}
                  strokeWidth={1.5}
                />

                {/* Quote text */}
                <p className="mx-auto max-w-lg px-8 text-lg font-semibold text-[#20294c] leading-relaxed" style={{ letterSpacing: "-0.02em" }}>
                  &quot;{t.quote}&quot;
                </p>

                {/* Company logo */}
                <div className="mt-8 mb-4">
                  <Image
                    width={0}
                    height={40}
                    src={companies[index % companies.length].url}
                    alt={`${companies[index % companies.length].name} Logo`}
                    className="mx-auto h-[32px] w-auto opacity-60 grayscale"
                    unoptimized
                  />
                </div>

                {/* Author */}
                <h4 className="text-sm font-black text-[#20294c] mt-4" style={{ letterSpacing: "-0.01em" }}>
                  {t.name}
                </h4>
                <span className="text-xs font-medium text-[#979db5]">{t.role}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Edge fade overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-2/12 bg-gradient-to-r from-white" />
        <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-2/12 bg-gradient-to-l from-white" />
      </div>

      {/* Prev / Next arrows */}
      <div className="hidden md:block">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
