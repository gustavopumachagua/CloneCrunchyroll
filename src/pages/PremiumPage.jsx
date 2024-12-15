import { useRef, useEffect } from "react";
import Premium from "../components/Premium/Premium";
import DescriptionPremium from "../components/Premium/DescriptionPremium";
import BeneficioPremium from "../components/Premium/BeneficioPremium";
import PreciosPremium from "../components/Premium/PreciosPremium";

const PremiunPage = () => {
  const preciosPremiumRef = useRef(null);
  const scrollToPreciosPremium = () => {
    preciosPremiumRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-gray-900 text-white py-8">
      <Premium onComparePlansClick={scrollToPreciosPremium} />
      <DescriptionPremium onComparePlansClick={scrollToPreciosPremium} />
      <div ref={preciosPremiumRef}>
        <PreciosPremium />
      </div>
      <BeneficioPremium onExplorePlansClick={scrollToPreciosPremium} />
    </div>
  );
};

export default PremiunPage;
