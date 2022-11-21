import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: "slim" | "medium" | "large";
  variant?: "default" | "primary" | "destructive" | "monochrome";
  fullWidth?: boolean;
  modifier?: "plain" | "outline";
  loading?: boolean;
}

/**
 *
 * variant;
 * - default
 * - primary
 * - destructive
 * - monochrome
 *
 * modifier;
 * - outline
 * - plain
 *
 * size;
 * - slim
 * - medium (default)
 * - large
 *
 * Other states;
 * - loading
 * - disabled
 * - fullWidth
 */

export const Button = ({
  children,
  size = "medium",
  variant = "default",
  fullWidth,
  disabled,
  modifier,
  loading,
}: ButtonProps) => {
  const border =
    disabled && variant === "default"
      ? "border-borderDisabled"
      : variant === "default" || variant === "monochrome"
      ? "border-gray-400"
      : undefined;

  const background =
    variant === "default" || variant === "monochrome"
      ? "bg-white"
      : variant === "primary"
      ? "bg-primary"
      : "bg-destructive";

  let textColor =
    variant === "default"
      ? "text-text"
      : variant !== "monochrome"
      ? "text-white"
      : "";

  if (
    modifier === "plain" &&
    (variant === "destructive" || variant === "primary")
  ) {
    textColor = `text-${variant}`;
  }

  return (
    <button
      className={classNames(
        "rounded-md relative",
        border && `border ${border}`,
        background,
        textColor,

        variant === "default" && "shadow-button",

        // Modifiers
        modifier === "outline" &&
          "bg-transparent border border-current shadow-[0_0_0_1px_currentColor]",
        modifier === "outline" &&
          variant === "destructive" &&
          "text-destructive",
        modifier === "outline" && variant === "primary" && "text-primary",

        modifier === "plain" &&
          "shadow-none bg-transparent border-none px-2 py-1 text-sm",

        // Sizes overrides
        size === "slim" && "text-sm",
        size === "medium" && "text-sm",
        size === "large" && "text-base",
        modifier !== "plain" && size === "slim" && "px-3 py-[3px]",
        modifier !== "plain" && size === "medium" && "px-4 py-2",
        modifier !== "plain" && size === "large" && "px-6 py-3",
        fullWidth && "w-full",

        // Disabled
        disabled && "bg-surfaceDisabled text-textDisabled"
      )}
    >
      <span
        className={classNames(
          "leading-[1.25rem]",
          loading && "text-transparent"
        )}
      >
        {children}
      </span>
      {loading && (
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block w-4 h-4">
          <svg
            className="animate-spin"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-current"
              d="M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"
            ></path>
          </svg>
          <span className="sr-only">Loading</span>
        </span>
      )}
    </button>
  );
};
