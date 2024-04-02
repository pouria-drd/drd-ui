import { Input } from "../custom-ui";

const Inputs = () => {
  const handleInput = (value: string) => {
    console.log(value);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      <Input placeHolder="tets" onChange={handleInput} />

      <Input placeHolder="disabled" onChange={handleInput} disabled={true} />

      <Input
        onChange={handleInput}
        errorMessage="we have error"
        placeHolder="error in focus only"
      />

      <Input
        placeHolder="error"
        errorMessage="we have error"
        onChange={handleInput}
        errorMsgInBlur={true}
      />

      <Input
        placeHolder="error"
        errorMessage="we have error"
        onChange={handleInput}
        errorMsgInBlur={true}
        errorBorderInBlur={true}
      />
    </div>
  );
};

export default Inputs;
