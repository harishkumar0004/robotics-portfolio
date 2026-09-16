"use client";

import { useState } from "react";

import { agvProjectVideos } from "@/data/agvProjectVideos";

export function AgvVideoShowcase() {
  const [activeVideoId, setActiveVideoId] = useState(agvProjectVideos[0].id);
  const activeVideo = agvProjectVideos.find((video) => video.id === activeVideoId) ?? agvProjectVideos[0];

  return (
    <section aria-labelledby="project-videos-heading" className="mt-16 border-t border-slate-200 pt-12">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Vision &amp; IMU Based AGV</p>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950" id="project-videos-heading">
        Project Videos
      </h3>

      <div className="mt-8 overflow-hidden rounded-lg border border-slate-200 bg-slate-950 shadow-sm">
        <video
          aria-describedby="active-video-title"
          className="aspect-video w-full bg-slate-950"
          controls
          key={activeVideo.id}
          playsInline
          preload="metadata"
        >
          <source src={activeVideo.src} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className="border-t border-slate-700 px-4 py-4 sm:px-5">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Now showing</p>
          <p className="mt-1 text-base font-semibold text-white" id="active-video-title">{activeVideo.title}</p>
        </div>
      </div>

      <div aria-label="Select project video" className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-5" role="group">
        {agvProjectVideos.map((video) => {
          const isActive = video.id === activeVideo.id;

          return (
            <button
              aria-pressed={isActive}
              className={`min-h-11 rounded-md border px-3 py-2 text-left text-sm font-semibold outline-none transition-[background-color,border-color,box-shadow] duration-200 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 ${
                isActive
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50"
              }`}
              key={video.id}
              onClick={() => setActiveVideoId(video.id)}
              type="button"
            >
              {isActive && <span aria-hidden="true" className="mr-1.5">✓</span>}
              {video.title}
              {isActive && <span className="sr-only">, currently selected</span>}
            </button>
          );
        })}
      </div>
    </section>
  );
}
