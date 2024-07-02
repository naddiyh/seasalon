import React from "react";

interface PrimaryProps {
  children: React.ReactNode;
  fullwidth: boolean;
  onClick?: () => void;
  href?: string;
}

export const PrimaryButton: React.FC<PrimaryProps> = ({
  children,
  onClick,
  fullwidth = false,
  href,
}) => {
  const fullWidth = fullwidth ? "w-full" : "w-fit";

  if (href) {
    return (
      <a
        href={href}
        className={`${fullWidth} items-center justify-center rounded-md border hover:bg-gradient-yellow p-[6px_24px] hover:border-0 text-text-s text-white hover:text-black duration-300
          hover:bg-primary-purple-hover md:text-text-m`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${fullWidth} items-center justify-center rounded-md border hover:bg-gradient-yellow p-[6px_24px] hover:border-0 text-text-s text-white hover:text-black duration-300
        hover:bg-primary-purple-hover md:text-text-m`}
    >
      {children}
    </button>
  );
};
