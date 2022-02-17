import { Fragment } from "react";
import BuyElectricity from "../components/forms/purchase/BuyElectricity";
import Home from "../layouts/Home";

export default function BuyElectricityPage() {
  return (
    <Home title="Buy electricity">
      <BuyElectricity />
    </Home>
  );
}
