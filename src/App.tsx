import Buttons from "./components/preview/Buttons";

import Inputs from "./components/preview/Inputs";
import Spinners from "./components/preview/Spinners";
import Dropdowns from "./components/preview/Dropdowns";
import Checkboxes from "./components/preview/Checkboxes";

import "./assets/styles/App.css";

function App() {
  return (
    <div className="bg-gray-200 flex flex-col gap-10 p-10">
      <h1 className="text-center text-2xl">Buttons</h1>
      <Buttons />

      <h1 className="text-center text-2xl">Checkboxes</h1>
      <Checkboxes />

      <h1 className="text-center text-2xl">Dropdowns</h1>
      <Dropdowns />

      <h1 className="text-center text-2xl">Inputs</h1>
      <Inputs />

      <h1 className="text-center text-2xl">Spinner Card</h1>
      <Spinners />
    </div>
  );
}

export default App;
