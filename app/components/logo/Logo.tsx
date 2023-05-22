import Image from "next/image";

export const Logo = ({ width = 240 }) => {
  return (
    <Image
      src="/assets/logo.svg"
      width={width}
      height={width / 8}
      alt="Główne logo strony"
    />
  );
};
