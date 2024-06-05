import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

const data = [
  {
    id: 1,
    title: "Accordion One",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni rem Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni rem ",
  },
  {
    id: 2,
    title: "Accordion Two",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, rem Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, rem?",
  },
  {
    id: 3,
    title: "Accordion Three",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, rem Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, rem?",
  },
];

function Accordion() {
  const [open, setOpen] = useState(null);
  return (
    <div>
      <div className="flex flex-col bg-slate-200 p-2">
        {data.map((item) => (
          <AccordionItem
            key={item.id}
            item={item}
            setOpen={setOpen}
            open={open}>
            {item.text}
          </AccordionItem>
        ))}
      </div>
    </div>
  );
}

export default Accordion;

function AccordionItem({ item, setOpen, open, children }) {
  const isOpen = item.id === open;
  return (
    <div
      className="bg-white p-2 rounded-lg mb-4 "
      onClick={() => setOpen(item.id === open ? null : item.id)}>
      <header className="flex justify-between items-center border-b border-b-slate-100 cursor-pointer p-1">
        <span className=" font-bold">{item.title}</span>
        <ChevronDownIcon
          style={{
            width: "20px",
            transition: "all 0.2s ease-out",
            rotate: isOpen ? "180deg" : "",
          }}
        />
      </header>
      <div
        className={`max-h-0 opacity-0 ${
          isOpen ? " max-h-fit opacity-100 duration-1000" : ""
        }`}>
        <span>{children}</span>
      </div>
    </div>
  );
}
