import { Timer } from "./components/Timer";

function App() {

  return (
    <>
      <Timer title="Baku" counter={2} initialState={0} />

      <Timer title="Shirvan" counter={4} initialState={10} />

      <Timer title="Lankaran" counter={4} initialState={-10} />
    </>
  );
}

export default App;
