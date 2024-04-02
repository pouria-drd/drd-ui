import { Dropdown, DropdownOption } from "../custom-ui";

import RocketIcon from "../icons/RocketIcon";

const Dropdowns = () => {
  const onSelectOption = (opt: any) => {
    console.log(opt.props);
    alert(`Dropdown Clicked`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      <Dropdown onSelectOption={(opt) => onSelectOption(opt)}>
        <p>option 1</p>
        <p>option 2</p>
      </Dropdown>

      <Dropdown
        onSelectOption={(opt) => onSelectOption(opt)}
        title="with default title"
      >
        <p>option 1</p>
        <p>option 2</p>
      </Dropdown>

      <Dropdown
        title="disabled dropdown"
        disabled={true}
        onSelectOption={(opt) => onSelectOption(opt)}
      >
        <p>option 1</p>
        <p>option 2</p>
      </Dropdown>

      <Dropdown onSelectOption={(opt) => onSelectOption(opt)} defaultOption={1}>
        <p>with default option 1</p>
        <p>with default option 2</p>
      </Dropdown>

      <Dropdown
        onSelectOption={(opt) => onSelectOption(opt)}
        title="custom option"
        defaultOption={1}
      >
        <DropdownOption title="opt 1" value="0" icon={<RocketIcon />} />
        <DropdownOption title="opt 2" value="1" icon={<RocketIcon />} />
      </Dropdown>
    </div>
  );
};

export default Dropdowns;
