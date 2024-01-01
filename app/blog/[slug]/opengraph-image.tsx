import { ImageResponse } from "next/og";
import { OgImage } from "@/app/components/og/OgImage";
import { getPostBySlug } from "@/app/utils/blog";

// Route segment config
export const runtime = "nodejs";

// Image metadata
export const alt = "Post na blogu";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image({ params }: { params: { slug: string } }) {
  const meta = getPostBySlug(params.slug);

  return new ImageResponse(
    (
      <OgImage>
        <p style={{ fontSize: 20, color: "#fce746" }}>BLOG</p>
        <p style={{ fontSize: 60 }}>{meta?.title}</p>
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
