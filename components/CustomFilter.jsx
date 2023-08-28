"use client";
import React from "react";
import { Fragment, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Listbox, Transition } from "@headlessui/react";
import { updateSearchParams } from "@/utils";

const CustomFilter = ({ title, options }) => {
  //esto me funciona para determinar en cual de las options estoy
  const [selected, setSelected] = useState(options[0]);
  // Funcion controladora de filtros
  const router = useRouter();

  const handleUpdateParams = (e) => {
    const newPathName = updateSearchParams(title, e.value);
    // Finalmente pusheamos a la ruta el nuevo path que tenemos
    router.push(newPathName, { scroll: false });
  };
  return (
    <>
      <div className="w-fit">
        <Listbox
          value={selected}
          onChange={(e) => {
            setSelected(e);
            handleUpdateParams(e);
          }}
        >
          <div className="relative z-10 w-fit">
            <Listbox.Button className="custom-filter__btn">
              <span>{selected.title}</span>
              <Image
                src="/chevron-up-down.svg"
                width={20}
                height={20}
                className="ml-4 object-contain"
                alt="updown"
              />
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="custom-filter__options">
                {options.map((option) => (
                  <Listbox.Option
                    key={option.title}
                    value={option}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 px-4 ${
                        active ? "bg-primary-blue text-white" : "text-grey-900"
                      }`
                    }
                  >
                    {(selected) => (
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {option.title}
                      </span>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </>
  );
};

export default CustomFilter;
