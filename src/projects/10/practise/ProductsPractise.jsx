import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ProductsPractise() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setData(response.data.products);
      })
      .catch((error) => {
        console.error("Error Occurred");
      });
  }, []);
  return (
    <div>
      {data.map((item) => {
        return <div>{item.title}</div>;
      })}
    </div>
  );
}
