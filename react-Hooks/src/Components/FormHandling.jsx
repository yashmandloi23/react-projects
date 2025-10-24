import React , {useState} from "react";

const FormHandling = () => {
  const [title, setTitle] = useState("");
  const formHandling = (e) => {
    e.preventDefault();
    console.log(title);
    setTitle("")
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          formHandling(e)
        }}
      >
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className=" text-2xl border-2 text-white "
          type="text"
          placeholder="name"
        ></input>
        <button className="rounded-xl bg-zinc-500 text-gray-100 border-r-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormHandling;
