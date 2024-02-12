import { PropsWithChildren } from "react";
import { LogoSvg } from "../logo/LogoSvg";

export const OgImage = ({ children }: PropsWithChildren) => {
  return (
    <div
      style={{
        backgroundColor: "rgb(20,30,48)",
        backgroundImage:
          "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(24,24,24,1) 80%)",
        color: "#fff",
        width: "100%",
        height: "100%",
        display: "flex",
        // justifyContent: "center",
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
          <p style={{ fontSize: (children as string).length < 30 ? 80 : 60 }}>
            {children}
          </p>
        </div>
      </div>
    </div>
  );
};
