import Buttons from "./components/preview/Buttons";

import "./assets/styles/App.css";
import Spinners from "./components/preview/Spinners";
import Dropdowns from "./components/preview/Dropdowns";

function App() {
  return (
    <div className="bg-gray-200 flex flex-col gap-10 p-10">
      <h1 className="text-center text-2xl">Buttons</h1>
      <Buttons />

      <h1 className="text-center text-2xl">Spinner Card</h1>
      <Spinners />

      <h1 className="text-center text-2xl">Dropdown</h1>
      <Dropdowns />
    </div>
  );
}

export default App;
