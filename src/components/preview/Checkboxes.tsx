import BaseCard from "./BaseCard";
import { Checkbox } from "../custom-ui";

const Checkboxes = () => {
  const handleCheckbox = (value: boolean) => {
    console.log(value);
    alert(`Checkbox Clicked: value ${value}`);
  };

  return (
    <BaseCard className="!flex-row">
      <Checkbox label="checkbox" onChange={handleCheckbox} />
      <Checkbox
        label="checkbox with default value"
        defaultChecked={true}
        onChange={handleCheckbox}
      />
      <Checkbox
        disabled={true}
        label="checkbox disable"
        defaultChecked={true}
        onChange={handleCheckbox}
      />
    </BaseCard>
  );
};

export default Checkboxes;
