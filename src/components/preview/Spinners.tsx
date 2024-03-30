import BaseCard from "./BaseCard";
import ViteIcon from "../icons/ViteIcon";
import SpinnerCard from "../custom-ui/spinner/SpinnerCard";

const Spinners = () => {
  return (
    <BaseCard>
      <SpinnerCard />
      <SpinnerCard logo={<ViteIcon />} />
    </BaseCard>
  );
};

export default Spinners;
