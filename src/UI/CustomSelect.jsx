import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const roles = ["Select", "Educator", "Staff"];

export default function CustomSelect() {
  const [selected, setSelected] = useState(roles[0]);

  return (
    <div className="w-full relative">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          {/* Button */}
          <Listbox.Button
            className="w-full h-15 flex items-center justify-between rounded-lg border-2 
                       rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl rounded-br-none 
                       bg-white px-5 py-2 font-medium focus:border-primary-red"
          >
            {selected}
            <FaChevronDown className="ml-2 text-gray-500" />
          </Listbox.Button>

          {/* Dropdown */}
          <Listbox.Options className="absolute mt-1 w-full rounded-lg bg-white shadow-lg z-10">
            {roles.map((role, idx) => (
              <Listbox.Option
                key={idx}
                value={role}
                className={({ active, selected }) =>
                  `relative cursor-pointer px-5 py-2 flex items-center justify-between 
                  ${active ? "bg-gray-100" : ""} 
                  ${selected ? "font-semibold" : ""}`
                }
              >
                {({ selected }) => (
                  <>
                    <span
                      className={selected ? "text-primary-red" : "text-black"}
                    >
                      {role}
                    </span>
                    {selected && (
                      <IoCheckmarkCircleSharp className="text-primary-red text-xl" />
                    )}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
}
