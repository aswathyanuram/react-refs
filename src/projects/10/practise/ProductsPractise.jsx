import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ProductsPractise() {
  const API = "https://dummyjson.com/products";

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(API)
      .then((response) => {
        setData(response.data.products);
      })
      .catch(() => {});
  }, []);

  return (
    <div>
      {data.map((item) => {
        return <div>{item.title}</div>;
      })}
    </div>
  );
}
