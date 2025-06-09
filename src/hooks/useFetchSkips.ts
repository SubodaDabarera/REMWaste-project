import axios from "axios";
import React, { useEffect, useState } from "react";

function useFetchSkips(url: string) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  }, [url]);

  const fetch = async () => {
    const skipData = await axios.get(url);
    if (skipData.status == 200) {
      console.log("skipdata", skipData);
      setData(skipData.data);
      return;
    }
    setData(skipData.data);
  };

  return { data };
}

export default useFetchSkips;
