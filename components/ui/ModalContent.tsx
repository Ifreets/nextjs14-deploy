"use client";

import { CircleX } from "lucide-react";
import { useEffect } from "react";
import { Button } from "./button";

interface IData {
  title?: string;
  message?: string;
  type?: string;
  onCancel: () => void;
  onSubmit: () => void;
  onOpen: boolean;
  loading?: boolean;
  children: React.ReactNode;
}
function ModalContent({
  title,
  message,
  type,
  onCancel,
  onSubmit,
  onOpen,
  loading,
  children,
}: IData) {
  useEffect(() => {
    const handleKeyDown = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") {
        onCancel();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
  }, [onCancel]);
  if (!onOpen) return null;
  return (
    <>
      <div className="fixed top-0 left-0 inset-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center transition-opacity duration-300 ">
        <div className="bg-white p-5 rounded-md shadow-lg w-[80%] max-h-[80vh] max-w-[60vw] mx-auto transition-transform duration-300 transform-gpu flex-col">
          <div className="flex justify-between">
            <div></div>
            <button onClick={onCancel}>
              <CircleX />
            </button>
          </div>
          <h1 className="text-3xl text-center py-4 font-bold ">
            {title ? title : ""}
          </h1>
          <p className="text-sm  pb-4 font-normal max-h-[60vh] overflow-x-auto">
            {message ? message : ""}
          </p>
          <Button className="w-full bg-[#717171]" onClick={onCancel}>
            Đóng
          </Button>
        </div>
      </div>
    </>
  );
}

export default ModalContent;
