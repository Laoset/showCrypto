"use client";
import { useState } from "react";
import { SearchCrypto } from ".";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClasses }) => (
  <button type="submit" className={`-ml-3 z-10  ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const Searchbar = () => {
  const [crypto, setCrypto] = useState("");
  const router = useRouter();
  //manejador de submiteo del searchbar
  const handleSearch = (e) => {
    e.preventDefault();

    if (crypto.trim() === "") {
      return alert("Please fill in the search bar");
    }
    updateSearchParams(crypto.toLowerCase());
  };
  //Con esta funcion logramos hacer que lo escrito en los inputs se setee en la ruta url de nuestro navegador para luego manejarlo y hacer logica render
  const updateSearchParams = (crypto) => {
    //la API de navegador: URLSearchParams manipula las consultas en la URL
    const searchParams = new URLSearchParams(window.location.search);
    //actualizamos o eliminamos el parametro url
    if (crypto) {
      searchParams.set("search", crypto);
    } else {
      searchParams.delete("search");
    }
    //tomamos el path que tenemos actualmente y le agregamos lo que se construyo anteriormente
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    //Finalmente pusheamos a la ruta el nuevo path que tenemos
    router.push(newPathname, { scroll: false });
  };
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchCrypto crypto={crypto} setCrypto={setCrypto} />
        <SearchButton otherClasses="max-sm:hidden" />
      </div>
    </form>
  );
};

export default Searchbar;
