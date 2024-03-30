import "./spinner.css";

/**
 * Props for the Spinner component
 */
interface SpinnerProps {
  /** Size of the spinner. */
  size?: number;
  /** Border width of the spinner. */
  borderWidth?: number;
}

/**
 * Spinner component displays a loading spinner.
 * @param size Size of the spinner.
 * @param borderWidth Manual border width of the spinner if (divide by 10) not suitable.
 */
const Spinner = ({ size = 40, borderWidth: propBorderWidth }: SpinnerProps) => {
  // Calculate border width based on size if not provided.
  const borderWidth = propBorderWidth || size / 10;

  const loaderStyle = {
    "--spinner-size": `${size}px`,
    "--spinner-border-size": `${borderWidth}px`,
  } as React.CSSProperties;

  return <span className="loader" style={loaderStyle}></span>;
};

export default Spinner;
