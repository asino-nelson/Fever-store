import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  console.log('======');
  console.log(products);
  console.log('======');
  return <div></div>;
};

export default LatestCollection;
