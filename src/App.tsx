import { Button } from "./components/custom-ui";
import SpinnerCard from "./components/custom-ui/spinner/SpinnerCard";

import "./assets/styles/App.css";

function App() {
  const handleBtnClick = () => {
    alert("Button Clicked");
    console.log("Button Clicked");
  };

  return (
    <div className="bg-gray-200 flex flex-col gap-10 p-10">
      <h1 className="text-center text-2xl">Buttons</h1>

      <div className="grid grid-cols-4 gap-4">
        {/* Primary */}
        <Button onClick={handleBtnClick}>Primary</Button>
        <Button onClick={handleBtnClick} outlined={true}>
          Outlined
        </Button>
        <Button onClick={handleBtnClick} disabled={true}>
          Disabled
        </Button>
        <Button onClick={handleBtnClick} disabledBusy={true}>
          Busy
        </Button>
        {/* Secondary */}
        <Button onClick={handleBtnClick} type="secondary">
          Secondary
        </Button>
        <Button onClick={handleBtnClick} type="secondary" outlined={true}>
          Outlined
        </Button>
        <Button onClick={handleBtnClick} type="secondary" disabled={true}>
          Disabled
        </Button>
        <Button onClick={handleBtnClick} type="secondary" disabledBusy={true}>
          Busy
        </Button>
        {/* Info */}
        <Button onClick={handleBtnClick} type="info">
          Info
        </Button>
        <Button onClick={handleBtnClick} type="info" outlined={true}>
          Outlined
        </Button>
        <Button onClick={handleBtnClick} type="info" disabled={true}>
          Disabled
        </Button>
        <Button onClick={handleBtnClick} type="info" disabledBusy={true}>
          Busy
        </Button>
        {/* dark */}
        <Button onClick={handleBtnClick} type="dark">
          Dark
        </Button>
        <Button onClick={handleBtnClick} type="dark" outlined={true}>
          Outlined
        </Button>
        <Button onClick={handleBtnClick} type="dark" disabled={true}>
          Disabled
        </Button>
        <Button onClick={handleBtnClick} type="dark" disabledBusy={true}>
          Busy
        </Button>
        {/* light */}
        <Button onClick={handleBtnClick} type="light">
          Light
        </Button>
        <Button onClick={handleBtnClick} type="light" outlined={true}>
          Outlined
        </Button>
        <Button onClick={handleBtnClick} type="light" disabled={true}>
          Disabled
        </Button>
        <Button onClick={handleBtnClick} type="light" disabledBusy={true}>
          Busy
        </Button>
        {/* Success */}
        <Button onClick={handleBtnClick} type="success">
          Success
        </Button>
        <Button onClick={handleBtnClick} type="success" outlined={true}>
          Outlined
        </Button>
        <Button onClick={handleBtnClick} type="success" disabled={true}>
          Disabled
        </Button>
        <Button onClick={handleBtnClick} type="success" disabledBusy={true}>
          Busy
        </Button>
        {/* Warning */}
        <Button onClick={handleBtnClick} type="warning">
          Warning
        </Button>
        <Button onClick={handleBtnClick} type="warning" outlined={true}>
          Outlined
        </Button>
        <Button onClick={handleBtnClick} type="warning" disabled={true}>
          Disabled
        </Button>
        <Button onClick={handleBtnClick} type="warning" disabledBusy={true}>
          Busy
        </Button>
        {/* Danger */}
        <Button onClick={handleBtnClick} type="danger">
          Danger
        </Button>
        <Button onClick={handleBtnClick} type="danger" outlined={true}>
          Outlined
        </Button>
        <Button onClick={handleBtnClick} type="danger" disabled={true}>
          Disabled
        </Button>
        <Button onClick={handleBtnClick} type="danger" disabledBusy={true}>
          Busy
        </Button>
      </div>

      <h1 className="text-center text-2xl">Spinner Card</h1>

      <SpinnerCard />
    </div>
  );
}

export default App;
