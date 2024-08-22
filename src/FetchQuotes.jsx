import React, { useState } from "react";

function FetchQuotes() {
  const [data, setData] = useState([]);

  const getAPI = () => {
    fetch("https://dummyjson.com/quotes/random")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };

  return (
    <>
      <div>Quotes API</div>
      <button onClick={getAPI}>Get quotes</button>
      <br />
      <div className="quotes">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </>
  );
}

export default FetchQuotes;
