import { useState, useEffect } from "react";

import ToastBody from "./ToastBody";
import ToastHeader from "./ToastHeader";

import "./toast.css";

interface ToastProps {
  message: string;
  type: "info" | "success" | "danger" | "warning";

  title?: string;
  duration?: number;

  onClose: () => void;
}

const Toast = (toastProps: ToastProps) => {
  const [fadeOut, setFadeOut] = useState(false);

  const duration = toastProps.duration || 5000;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFadeOut(true);
    }, duration - 200); // Apply fadeOut 200 ms before the duration ends

    return () => clearTimeout(timeoutId);
  }, [toastProps.duration]);

  const handleAnimationEnd = () => {
    if (fadeOut) {
      toastProps.onClose();
    }
  };

  const loaderStyle = {
    "--toastDuration": `${duration / 1000}s`,
  } as React.CSSProperties;

  return (
    <div
      style={loaderStyle}
      className={`toast ${toastProps.type} ${fadeOut ? "fadeOut" : "fadeIn"}
      bg-opacity-90 toast-progress`}
      onAnimationEnd={handleAnimationEnd}
    >
      {toastProps.title ? (
        <>
          <ToastHeader
            title={toastProps.title}
            message={toastProps.message}
            onClose={() => setFadeOut(true)}
          />
        </>
      ) : (
        <ToastBody
          message={toastProps.message}
          onClose={() => setFadeOut(true)}
        />
      )}
    </div>
  );
};

export default Toast;
