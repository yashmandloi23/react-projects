import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [userData, setUserData] = useState([]);
  const [idx, setIdx] = useState(1);

  const getdata = async () => {
    const responce = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=100"
    );
    setUserData(responce.data);
    console.log("getting data");
  };

  useEffect(() => {
    getdata();
  }, []);

  let printData = "no User";
  if (printData.length > 0) {
    printData = userData.map(function (elem, idx) {
      return (
        <a
          href={elem.url}
          target="_blank"
          rel="noopener noreferrer"
          key={idx}
          className="w-60 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src={elem.download_url}
            alt={`Photo by ${elem.author}`}
            className="h-40 w-full object-cover"
          />
          <div className="p-3 text-center text-gray-800 font-semibold text-sm truncate">
            {elem.author}
          </div>
        </a>
      );
    });
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex flex-wrap gap-6 justify-center">{printData}</div>
      <div>
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={() => {
              if (idx <= 0) {
                alert("Cannot go below 0");
                return;
              }
              setIdx((prev) => prev - 1);
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
          >
            Prev
          </button>

          <span className="text-gray-700 font-medium">Page: {idx}</span>

          <button
            onClick={() => setIdx((prev) => prev + 1)}
            className="px-4 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
