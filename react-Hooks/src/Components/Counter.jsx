import React ,{useState} from "react";

const Counter = () => {
  const [num, setNum] = useState(0);

  function plus() {
    setNum(num + 1);
  }
  function minus() {
    setNum(num - 1);
  }
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-4">
        <button
          onClick={minus}
          className="bg-gray-100 hover:bg-gray-200 text-gray-100 font-medium py-2 px-3 rounded shadow-sm"
          aria-label="decrease"
        >
          −
        </button>

        <p className="text-lg font-semibold text-gray-100 min-w-[2rem] text-center">
          {num}
        </p>

        <button
          onClick={plus}
          className="bg-gray-100 hover:bg-gray-200 text-gray-100 font-medium py-2 px-3 rounded shadow-sm"
          aria-label="increase"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
