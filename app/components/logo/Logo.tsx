import Image from "next/image";

export const Logo = ({ width = 220 }) => {
  return (
    <Image
      src="/assets/logo.svg"
      width={width}
      height={width / 8}
      alt="Główne logo strony"
      className="rounded-sm"
    />
  );
};
