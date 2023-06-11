import Image from "next/image";
import React from "react";

interface IconProps {
  src: string;
  height: number;
  width: number;
  alt: string;
}

const Icon: React.FC<IconProps> = ({ src, height, width, alt }) => {
  return <Image priority src={src} height={height} width={width} alt={alt} />;
};

export default Icon;
