import React, { useState } from "react";

const App = () => {
  const [url, setUrl] = useState("");
  const [shortInfo, setShortInfo] = useState({});


  const handleShorten = () => {
    if (url === "") {
      alert("Please enter url");
    }
    handleAsyncFetch();
  };

  const updateUrl = (e) => {
    setUrl(e.target.value);
  };

  const handleAsyncFetch = async () => {

    let shortenedData = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${url}`
    );
    console.log(shortenedData);
    let shortData = await shortenedData.json();
    console.log(shortData);
    if (shortData.ok) {
      setShortInfo(shortData.result);
      console.log("Set completed!");
      console.log(shortInfo);
    } else if (shortData.ok === false) {
      setShortInfo({
        full_short_link: shortData.error,
        code: `Error code --> ${shortData.error_code}`
      });
    }
  };
  function clear() {
  
    document.getElementById("url").value = '';
  }

  const showUrlInfo = [shortInfo].map((data, i) => {
    return (
      <>
        <h3 key={i}>Short link: {data["full_short_link"]} </h3>
        <h3>Link code: {data["code"]} </h3>
      </>
    );
  });

  return (
    <>
      <h1>Viewing home content</h1>
      <input id="url"
        type="url"
        name="url"
        value={url}
        onChange={updateUrl}
        placeholder="Type url..."
      />
      <button onClick={handleShorten}>Shorten</button>
      <button onClick={clear} >Clear</button>

      <h2>{showUrlInfo}</h2>

    </>
  );
};

export default App;