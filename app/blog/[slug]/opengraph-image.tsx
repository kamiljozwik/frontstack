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

export default async function Image({ params }: { params: { slug: string } }) {
  const meta = getPostBySlug(params.slug);

  const getInterSemiBold = async () => {
    const response = await fetch(
      "https://www.frontstack.pl/blog/og/Outfit-Bold.ttf"
    );
    const interSemiBold = await response.arrayBuffer();

    return interSemiBold;
  };

  // const interSemiBold = fetch("./Outfit-Bold.ttf").then((res) =>
  //   res.arrayBuffer()
  // );

  return new ImageResponse(
    <OgImage>{meta?.title}</OgImage>,
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: "Outfit",
          data: await getInterSemiBold(),
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
