import { ImageResponse } from "next/server";
import { OgImage } from "./OgImage";
import { getNewsBySlug } from "@/app/utils/news";

// Route segment config
export const runtime = "nodejs";

// Image metadata
export const alt = "Frontendówka";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image({ params }: { params: { slug: string } }) {
  const meta = getNewsBySlug(params.slug);

  return new ImageResponse(
    (
      <OgImage>
        <p style={{ fontSize: 60, color: "#fce746", fontWeight: 800 }}>
          FRONTENDÓWKA {meta?.slug}
        </p>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {meta?.ogTitles.map((title) => (
            <li
              key={title}
              style={{ fontSize: 30, color: "#fff", margin: "18px 0" }}
            >
              {title}
            </li>
          ))}
        </ul>
      </OgImage>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
