import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Pictures from "./Pictures";

const url = "https://boiling-refuge-66454.herokuapp.com/images/";

function App() {
  const [loading, setLoading] = useState(false);
  const [pictures, setPictures] = useState([]);

  const fetchPictures = async () => {
    setLoading(true);
    const response = await fetch(url);
    const pictures = await response.json();
    setLoading(false);
    setPictures(pictures);
  };

  useEffect(() => {
    fetchPictures();
  }, []);
  

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <main>
      <Pictures pictures={pictures} />
    </main>
  );
}

export default App;
