"use client";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { useState, Fragment } from "react";
import { cryptocurrencies } from "@/constants";

const SearchCrypto = ({ crypto, setCrypto }) => {
  const [query, setQuery] = useState("");

  const filteredCryptoCurrencies =
    query === ""
      ? cryptocurrencies
      : cryptocurrencies.filter((item) =>
          item
            .toLowerCase()
            //reemplazo mis espacios en blanco por ''
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  console.log(query);
  return (
    <div className="search-manufacturer">
      <Combobox value={crypto} onChange={setCrypto}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/money.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="Crypto logo"
            />
          </Combobox.Button>

          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Bitcoin"
            displayValue={(crypto) => crypto || "All"}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              <Combobox.Option
                value={""}
                className={({ active }) =>
                  `relative search-manufacturer__option ${
                    active ? "bg-primary-blue text-white" : "text-gray-900"
                  }`
                }
              >
                {({ selected, active }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      All
                    </span>
                    {selected ? (
                      <span
                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                          active ? "text-white" : "text-teal-600"
                        }`}
                      ></span>
                    ) : null}
                  </>
                )}
              </Combobox.Option>
              {filteredCryptoCurrencies.map((item) => (
                <Combobox.Option
                  value={item}
                  key={item}
                  className={({ active }) =>
                    `relative search-manufacturer__option ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {item}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white" : "text-teal-600"
                          }`}
                        ></span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchCrypto;
