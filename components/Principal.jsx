"use client";
import { CustomButton } from ".";
import Image from "next/image";

const Principal = () => {
  return (
    <div className="principal">
      <div className="flex-1 pt-36 mr-40">
        <h1 className="principal__title">
          Discover, trade, or invest in cryptocurrencies - seamlessly and
          efficiently!
        </h1>
        <p className="principal__subtitle">
          Simplify your crypto journey with our user-friendly platform and
          intuitive processes.
        </p>
        <CustomButton
          title="Explore Cryptos"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
        />
      </div>
      <div className="principal__image-container">
        <div className="principal__image">
          <Image
            src="/heroe.png"
            alt="principal"
            sizes="( max-width: 768px ) 100vw, 50vw"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Principal;
