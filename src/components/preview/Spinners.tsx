import BaseCard from "./BaseCard";
import ViteIcon from "../icons/ViteIcon";
import SpinnerCard from "../custom-ui/spinner/SpinnerCard";
import { Spinner } from "../custom-ui";

const Spinners = () => {
  return (
    <BaseCard className="!flex-row">
      <Spinner />
      <SpinnerCard />
      <SpinnerCard logo={<ViteIcon />} />
    </BaseCard>
  );
};

export default Spinners;
