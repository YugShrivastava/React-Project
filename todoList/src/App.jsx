import { Add, Show, Todo } from "./components";

function App() {

  return (
    <div className="w-full h-screen bg-black flex flex-wrap flex-col items-center pt-24 px-5">
      <h1 className="text-5xl text-primary m-0 mb-14 font-light">Just do it!</h1>
      <div className="flex flex-col gap-0 items-baseline justify-center">
        <Add />
        <Show />
        <hr className="border-t-1 border-gray-700 w-full mb-3" />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </div>
      <p className="text-2xl text-white">{}</p>
    </div>
  );
}

export default App;
