import { ReactNode } from "react";
import Spinner from "../spinner/Spinner";

import "./button.css";

/**
 * Props for the Button component.
 */
interface ButtonProps {
  className?: string;
  children?: ReactNode;

  outlined?: boolean;
  type?:
    | "primary"
    | "secondary"
    | "info"
    | "dark"
    | "light"
    | "danger"
    | "success"
    | "warning";

  /** Specifies whether the button is disabled. */
  disabled?: boolean;
  /** Specifies whether the button is disabled and in a busy state (spinner loading). */
  disabledBusy?: boolean;

  onClick?: () => void;
}

/**
 * Button component represents a clickable button element.
 * @param btnProps Props for the Button component.
 * @returns A clickable button element.
 */
const Button = (btnProps: ButtonProps) => {
  // Set default type to "Primary" if not provided.
  const buttonType = btnProps.type?.toLowerCase() || "primary";

  /**
   * Handles click event on the button.
   */
  const handleClick = () => {
    btnProps.onClick?.();
  };

  return (
    <button
      disabled={btnProps.disabled || btnProps.disabledBusy}
      onClick={handleClick}
      className={`custom-button base-btn-class ${
        btnProps.outlined ? `outlined-${buttonType}` : `${buttonType}`
      } ${btnProps.disabledBusy && "!cursor-wait"} ${btnProps.className}`}
    >
      <>
        {!btnProps.disabledBusy ? (
          btnProps.children
        ) : (
          <div className="flex items-center justify-center gap-2 w-full">
            {btnProps.children}
            <Spinner size={12} borderWidth={1.75} />
          </div>
        )}
      </>
    </button>
  );
};

export default Button;
