import { useParams } from "react-router-dom";
import Checkout from "./Checkout";

function BuyNow() {
  const { product } = useParams(); // e.g., "cocopit"
  return (
    <div>
      <h1>Buy Now: {product}</h1>
      <Checkout />
    </div>
  );
}

export default BuyNow;
