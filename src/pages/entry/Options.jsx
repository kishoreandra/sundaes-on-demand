import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ScoopOption from "./ScoopOption";
import ToppingOption from "./ToppingOption";

export default function Options({ optionType = "toppings" }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3030/${optionType}`).then((response) => {
      setData(response.data);
    });
  }, [optionType]);

  const ItemComponent = optionType === "scoops" ? ScoopOption : ToppingOption;

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
