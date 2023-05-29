import { ImageResponse } from "next/server";
import { OgImage } from "../components/og/OgImage";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Dziś się nauczyłem";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Image generation
export default function Image() {
  return new ImageResponse(
    (
      <OgImage>
        <p
          style={{
            fontSize: 80,
            marginTop: "5%",
          }}
        >
          Dziś się nauczyłem
        </p>
        <p
          style={{
            fontSize: 50,
            color: "#fce746",
          }}
        >
          Małe przydatne rzeczy z frontu
        </p>
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
