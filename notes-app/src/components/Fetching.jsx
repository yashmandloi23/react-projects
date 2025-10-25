import React ,{useState} from "react";
import axios from "axios";

const Fetching = () => {
  const [data, setdata] = useState([]);
  async function getdata() {
    // const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // const responce = await data.json()
    // console.log(responce)

    const responce = await axios.get('https://picsum.photos/v2/list');
    setdata(responce.data);
  }
  return (
    <div>
      <button onClick={getdata}>Get data</button>
      <div>
        {data.map(function (elem, idx) {
          return <h3 key={idx}>{elem.author}</h3>;
        })}
      </div>
    </div>
  );
};

export default Fetching;
