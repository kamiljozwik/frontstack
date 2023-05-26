"use client";

// import { useState } from "react";
import NextImage from "next/image";

type YouTubeLazyLoadProps = {
  id: string;
  title?: string;
  thumbnailOverride?: {
    url?: string;
  };
};

export function YouTubeLazyLoad({
  id,
  title,
  thumbnailOverride,
}: YouTubeLazyLoadProps) {
  // cant use hooks in server rendered MDX - find a better way to lazy load video.
  // const [showVideo, setShowVideo] = useState(false);

  return (
    <div style={{ marginBottom: "24px" }}>
      {true ? (
        <iframe
          width={560}
          height={315}
          src={`https://www.youtube-nocookie.com/embed/${id}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title || "Youtube video"}
        />
      ) : (
        <button
          type="button"
          // onClick={() => setShowVideo(true)}
          className="group relative aspect-[16/9] w-full"
          aria-label={`Play video ${title}`}
        >
          <NextImage
            src={
              thumbnailOverride?.url ||
              `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
            }
            alt=""
            layout="fill"
            className="h-full w-full"
            loading="lazy"
          />
          <div className="relative grid place-items-center text-xl text-white opacity-90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 32 32"
              className="h-2/5 w-1/2 transform transition group-hover:scale-105"
            >
              <path
                fill="currentColor"
                d="M7 28a1 1 0 0 1-1-1V5a1 1 0 0 1 1.482-.876l20 11a1 1 0 0 1 0 1.752l-20 11A1 1 0 0 1 7 28Z"
              />
            </svg>
          </div>
        </button>
      )}
    </div>
  );
}
