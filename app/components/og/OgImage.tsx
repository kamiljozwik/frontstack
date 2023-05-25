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
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          textAlign: "center",
          marginTop: "10%",
        }}
      >
        <LogoSvg width={300} />
        {children}
      </div>
    </div>
  );
};
