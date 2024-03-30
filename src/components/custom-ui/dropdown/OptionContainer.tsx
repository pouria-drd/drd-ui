import { useRef, useState, useEffect, ReactNode } from "react";

interface OptionContainerProps {
  isOpen: boolean;
  children: ReactNode;
}

const OptionContainer = (optionContainerProps: OptionContainerProps) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  useEffect(() => {
    if (optionContainerProps.isOpen && contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight + 15);
    } else {
      setContentHeight(0);
    }
  }, [optionContainerProps.isOpen]);

  return (
    <div
      ref={contentRef}
      style={{
        height: optionContainerProps.isOpen ? `${contentHeight}px` : "0",
      }}
      className={`bg-white overflow-hidden transition-all 
          flex flex-col items-center justify-normal gap-2
          rounded-md px-1 w-full ${optionContainerProps.isOpen ? "py-2" : ""}`}
    >
      {optionContainerProps.children}
    </div>
  );
};

export default OptionContainer;
