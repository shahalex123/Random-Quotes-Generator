import React from "react";
import "./quotes.css";
import Loader from './Loader.jsx'
import { useEffect } from "react";

function Quotes() {
  const [category, setCategory] = React.useState("education");
  const [quote, setQuote] = React.useState([]);
  const [load, setLoad] = React.useState(false);

  const apiCall = async () => {
    setLoad(true)
    const url = "https://api.api-ninjas.com/v1/quotes?category=" + category;
    let fetched = await fetch(url, {
      method: "GET",

      headers: { "X-Api-Key": "QUv2RDgyzFetIBvgj0gq7Q==2bti5QeytEi80k1Z" },
      contentType: "application/json",
    });
    let resFetched =  await fetched.json();
    setQuote(resFetched[0]);
    setLoad(false)
  };
  React.useEffect(()=>{apiCall()}, []);

  

  return (
    <div className="bg h-screen  mx-auto space-y-20">
      <div className="max-w-screen-md md:w-4/4 mx-auto">
        <div className="card-bg inline-flex flex-col space-y-2 items-center justify-center h-full w-full p-4 rounded-xl  mt-24">
          <h1 className="font-bold text-lg my-5">Random Quotes Generator</h1>
            {
              load? (
                <Loader/>
              )
              :null
            }
          <h2 className="w-full text-2xl font-semibold text-center my-5">
            <span className="font-bold text-xlg">"</span>{quote.quote}<span className="font-bold text-xlg">"</span>
          </h2>
          <h1 className="w-full p-8 text-md tracking-wide"><span className="font-bold">Author: </span>
          {quote.author}
          </h1>
          <div className="rounded mx-auto flex space-x-10">
            <div className="rounded mt-2">
              <select
                className="rounded border-gray-300 outline-none p-1"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value=""  disabled>
                  Select
                </option>
                <option value="education">education</option>
                <option value="computers">computers</option>
                <option value="knowledge">knowledge</option>
                <option value="intelligence">intelligence</option>
                <option value="learning">learning</option>
                <option value="life">life</option>
                <option value="failure">failure</option>
              </select>
            </div>
            {/* <p>{category}</p> */}
            <div className="opacity-95 border mx-auto rounded-lg border-gray-600 px-4 hover">
              <button
                className="m-auto text-md font-medium  text-center py-2"
                onClick={apiCall}
              >
                Generate
              </button>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center text-white">By: Zeeshan Ahmad Tahir</h1>
    </div>
  );
}

export default Quotes;
