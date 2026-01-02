"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Dropdown({ selectedOption, setSelectedOption, options }: {selectedOption: any, setSelectedOption: (option: any) => void, options: any[] }) {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });

  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (open && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setCoords({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
    }
  }, [open]);

  return (
    <div className="relative text-left">
      <button
        ref={buttonRef}
        onClick={() => setOpen((v) => !v)}
        className="flex h-9 items-center gap-2 rounded-lg bg-[#383429] hover:bg-[#4a4536] px-4 text-white text-sm font-medium transition-colors group"
      >
        {selectedOption}
        <span className="material-symbols-outlined text-[18px] text-gray-400 group-hover:text-white">
          expand_more
        </span>
      </button>

      {open &&
        createPortal(
          <div
            ref={menuRef}
            className="absolute w-48 rounded-md bg-[#383429] shadow-lg ring-1 ring-black ring-opacity-5 z-50"
            style={{ top: coords.top, left: coords.left }}
          >
            <div className="py-1">
              {options.filter((opt) => opt !== selectedOption).map((opt, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedOption(opt);
                    setOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-[#4a4536]"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}