import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./ProductsReference.module.css";

export default function ProductsReference() {
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
    <div className={styles.container}>
      <div className={styles.cards}>
        {data.map((item) => {
          return <div className={styles.card}>{item.title}</div>;
        })}
      </div>
    </div>
  );
}
