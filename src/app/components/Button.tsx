import classNames from "classnames";
import React from "react";

interface ButtonProps {
  href: string;
  bgColor: string;
  textColor: string;
  children?: React.ReactNode;
  size: string;
  icon: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  href,
  bgColor,
  textColor,
  size,
  children,
  icon,
}) => {
  return (
    <a
      href={href}
      className={classNames(
        `bg-${bgColor} text-${textColor} flex items-center justify-center rounded-md px-10 py-2 font-bold`,
        {
          "text-xs": size === "sm",
          "text-base": size === "base",
          "text-xl": size === "lg",
        }
      )}
    >
      {children}
      <span className="ml-3 text-xs">{icon}</span>
    </a>
  );
};

export default Button;
