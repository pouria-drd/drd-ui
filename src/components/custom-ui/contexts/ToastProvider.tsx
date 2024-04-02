import Toast from "../toast/Toast";
import { createContext, useContext, useState, ReactNode } from "react";

interface ToastContextProps {
  showToast: (
    message: string,
    type: "info" | "success" | "danger" | "warning",
    title?: string,
    duration?: number
  ) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toasts, setToasts] = useState<React.ReactNode[]>([]);

  const showToast = (
    message: string,
    type: "info" | "success" | "danger" | "warning",
    title?: string,
    duration?: number
  ) => {
    const newToast = (
      <Toast
        key={Date.now()}
        message={message}
        type={type}
        onClose={() => removeToast(newToast)}
        title={title}
        duration={duration}
      />
    );

    setToasts((prevToasts) => [...prevToasts, newToast]);
  };

  const removeToast = (toast: React.ReactNode) => {
    setToasts((prevToasts) => prevToasts.filter((t) => t !== toast));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        className="fixed transition-all
        flex flex-col-reverse gap-4 
        bottom-5 w-full sm:w-fit px-4 z-[999]"
      >
        {toasts}
      </div>
    </ToastContext.Provider>
  );
};
