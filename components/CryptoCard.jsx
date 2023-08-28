"use client";
import { useState } from "react";
import { CustomButton, CryptoDetails } from ".";
import Image from "next/image";
const CryptoCard = ({ crypto }) => {
  const [isOpen, setIsOpen] = useState(false);
  //Formato correcto del dinero
  const money = parseFloat(crypto.price);
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });
  const moneyTwo = formatter.format(money);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">{crypto.name}</h2>
      </div>
      {/* PRECIO DE LA CRYPTO */}
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {moneyTwo}
      </p>
      {/* CONTENEDOR DE LA IMAGEN CRYPTO */}
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={crypto.iconUrl}
          alt="crypto"
          fill
          sizes="( max-width: 768px ) 100vw, 50vw"
          priority
          className="object-contain"
        />
      </div>
      {/* DETALLES DE LA CRYPTO */}
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-grey">
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-[14px]">{formatter.format(crypto.marketCap)}</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CryptoDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        crypto={crypto}
        formatter={formatter}
      />
    </div>
  );
};

export default CryptoCard;
