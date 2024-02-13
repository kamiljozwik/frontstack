import { PropsWithChildren } from "react";
import { LogoSvg } from "../logo/LogoSvg";

export const OgImage = ({ children }: PropsWithChildren) => {
  return (
    <div
      style={{
        backgroundColor: "rgb(20,30,48)",
        backgroundImage: `url(https://www.frontstack.pl/blog/og/og-image-background.jpg)`,
        color: "#fff",
        width: "100%",
        height: "100%",
        display: "flex",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          textAlign: "center",
          marginTop: "5%",
          padding: "0 20px",
        }}
      >
        <LogoSvg width={300} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            top: "20%",
          }}
        >
          <p style={{ fontSize: (children as string).length < 30 ? 90 : 70 }}>
            {children}
          </p>
        </div>
      </div>
    </div>
  );
};
