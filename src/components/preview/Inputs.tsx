import BaseCard from "./BaseCard";
import { Input } from "../custom-ui";

const Inputs = () => {
  const handleInput = (value: string) => {
    console.log(value);
  };

  return (
    <BaseCard className="!flex-row">
      <Input placeHolder="tets" onChange={handleInput} />
    </BaseCard>
  );
};

export default Inputs;
