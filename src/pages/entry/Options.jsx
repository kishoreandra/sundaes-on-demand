import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ScoopOption from "./ScoopOption";

export default function Options({ optionType = "scoops" }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3030/${optionType}`).then((response) => {
      setData(response.data);
      console.log(response);
    });
  }, [optionType]);

  const ItemComponent = optionType === "scoops" ? ScoopOption : null;

  const optionItems = data.map((item) => {
    return (
      <ItemComponent
        key={item.name}
        name={item.name}
        imagePath={item.imagePath}
      />
    );
  });

  return <div>{optionItems}</div>;
}
