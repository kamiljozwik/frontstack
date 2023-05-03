import React from "react";

type Props = {
  /** Example: https://vimeo.com/823271250/a8a3b2650f?share=copy */
  videoLink: string;
  title?: string;
};

export const Vimeo = ({ videoLink, title = "" }: Props) => {
  const videoId = videoLink
    .split("vimeo.com/")[1]
    .split("?")[0]
    .replace("/", "?h=");

  return (
    <div>
      <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
        <iframe
          src={`https://player.vimeo.com/video/${videoId}&amp;badge=0&amp;autopause=0&amp;player_id=0&amp`}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={title}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </div>
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  );
};
