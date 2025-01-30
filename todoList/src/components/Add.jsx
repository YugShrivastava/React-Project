function Add() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-12  mb-10">
      <input
        className="outline-none border-[1px] border-primary rounded-sm text-xl text-primary px-3 py-1.5 font-extralight"
        placeholder="Enter a todo"
        type="text"
      />
      <button className="bg-primary text-white rounded-sm px-4.5 py-1.5 text-xl border-hover border-[1px] border-primary duration-100">
        Add
      </button>
    </div>
  );
}

export default Add;
