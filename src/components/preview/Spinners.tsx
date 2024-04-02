import { Spinner } from "../custom-ui";

import BaseCard from "./BaseCard";
import ViteIcon from "../icons/ViteIcon";
import SpinnerCard from "../custom-ui/spinner/SpinnerCard";

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
