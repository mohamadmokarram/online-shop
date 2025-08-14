"use client";
import Image from "next/image";
import { useState } from "react";

export default function ImageContainer({ item }) {
  const [imageAddress, setImageAddress] = useState({
    identifier: "forward",
    address: item.details.forwardImage,
  });

  function handleImageChange(identifier) {
    if (identifier === "forward") {
      setImageAddress(prev => ({
        ...prev,
        identifier: "forward",
        address: item.details.forwardImage,
      }));
    } else {
      setImageAddress(prev => ({
        ...prev,
        identifier: "backward",
        address: item.details.backwardImage,
      }));
    }
  }

  return (
    <div className="w-full md:w-2/5 flex flex-col p-6">
      <figure className="border border-slate-700">
        <Image
          src={imageAddress.address}
          alt={item.title}
          width={500}
          height={500}
          className="w-full"
        />
      </figure>
      <div className="flex flex-row mt-2 gap-1">
        <div
          className={`w-1/6 ${
            imageAddress.identifier === "forward" ? "border border-white" : ""
          }`}
          onClick={() => handleImageChange("forward")}>
          <Image
            src={item.details.forwardImage}
            alt={item.title}
            width={100}
            height={100}
            className="w-full"
          />
        </div>
        {item.details.backwardImage && (
          <div
            className={`w-1/6 ${
              imageAddress.identifier === "backward"
                ? "border border-white"
                : ""
            }`}
            onClick={() => handleImageChange("backward")}>
            <Image
              src={item.details.backwardImage}
              alt={item.title}
              width={100}
              height={100}
              className="w-full"
            />
          </div>
        )}
      </div>
    </div>
  );
}
