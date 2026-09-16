"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const projectImages = [
  "/images/agv/agv-base-01.jpeg",
  "/images/agv/agv-base-02.jpeg",
  "/images/agv/agv-base-03.jpeg",
  "/images/agv/agv-base-04.jpeg",
  "/images/agv/agv-base-05.jpeg",
  "/images/agv/agv-base-06.jpeg",
  "/images/agv/agv-base-07.jpeg",
];

const imageLabel = (index: number) => `Project Image ${String(index + 1).padStart(2, "0")}`;

export function AgvGallery() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    let frameId: number | undefined;

    const updateActiveImage = () => {
      frameId = undefined;
      const gallery = galleryRef.current;

      if (!gallery) {
        return;
      }

      const bounds = gallery.getBoundingClientRect();
      const scrollDistance = Math.max(gallery.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(Math.max(-bounds.top / scrollDistance, 0), 0.9999);
      const nextIndex = Math.floor(progress * projectImages.length);

      setActiveIndex((currentIndex) => (currentIndex === nextIndex ? currentIndex : nextIndex));
    };

    const requestUpdate = () => {
      if (frameId === undefined) {
        frameId = window.requestAnimationFrame(updateActiveImage);
      }
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);

      if (frameId !== undefined) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {projectImages.map((src, index) => (
          <figure className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50" key={src}>
            <Image
              alt={`${imageLabel(index)} of the Vision & IMU Based AGV`}
              className="aspect-[4/3] w-full object-contain"
              height={1200}
              sizes="(min-width: 640px) 45vw, 100vw"
              src={src}
              width={1600}
            />
            <figcaption className="border-t border-slate-200 px-4 py-3 text-sm font-medium text-slate-600">
              {imageLabel(index)}
            </figcaption>
          </figure>
        ))}
      </div>
    );
  }

  return (
    <div className="relative mt-10 h-[500vh] sm:h-[560vh]" ref={galleryRef}>
      <div className="sticky top-20 flex h-[calc(100svh-6rem)] min-h-[30rem] items-center">
        <figure className="w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-950 shadow-sm">
          <div className="relative aspect-[4/3] max-h-[calc(100svh-12rem)] min-h-[18rem]">
            <Image
              alt={`${imageLabel(activeIndex)} of the Vision & IMU Based AGV`}
              className="object-contain"
              fill
              priority={activeIndex === 0}
              sizes="(min-width: 1024px) 72rem, 100vw"
              src={projectImages[activeIndex]}
            />
          </div>
          <figcaption className="flex items-center justify-between gap-4 border-t border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-200 sm:px-5">
            <div>
              <p className="font-semibold text-white">Vision & IMU Based AGV</p>
              <p className="mt-0.5 text-xs text-slate-400">AGV / AMR · Perception · Localization · Navigation · Motion Control</p>
            </div>
            <p aria-label={`${imageLabel(activeIndex)} of ${projectImages.length}`} className="shrink-0 font-mono text-xs text-slate-300">
              {String(activeIndex + 1).padStart(2, "0")} / {String(projectImages.length).padStart(2, "0")}
            </p>
          </figcaption>
          <ol aria-label="Project image progress" className="flex justify-center gap-2 border-t border-slate-800 px-4 py-3">
            {projectImages.map((src, index) => (
              <li aria-current={index === activeIndex ? "step" : undefined} key={src}>
                <span className={`block size-2 rounded-full ${index === activeIndex ? "bg-white" : "bg-slate-600"}`}>
                  <span className="sr-only">{index === activeIndex ? `${imageLabel(index)}, current` : imageLabel(index)}</span>
                </span>
              </li>
            ))}
          </ol>
        </figure>
      </div>
    </div>
  );
}
