import axios from "axios";
import React, { useEffect, useState } from "react";

function useFetchSkips(url: string) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch();
  }, [url]);

  const fetch = async () => {
    setLoading(true)
    const skipData = await axios.get(url);
    if (skipData.status == 200) {
      setData(skipData.data);
      setLoading(false)
      return;
    }
    setData(skipData.data);
    setLoading(false)
  };

  return { data, loading };
}

export default useFetchSkips;
