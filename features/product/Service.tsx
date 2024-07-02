"use client";
import Image from "next/image";
import { ServiceList } from "./serviceList";
import { PrimaryButton } from "@/components/atoms/PrimaryButton";
import { useState } from "react";
import { ModalReview } from "../review/ModalReview";

export const ServiceHair = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleReviewSubmit = () => {
    handleClose();
  };

  return (
    <main className="relative bg-black text-white px-8 md:px-28 gap-8 flex py-40  flex-col min-h-screen">
      <div>
        <h1 className="font-bold text-[#d2ac47] text-[40px]">Service Hair</h1>
        <p className="text-[18px]">
          Expert hair care services designed to elevate your style and boost
          your confidence.
        </p>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
        {ServiceList.map((service, index) => (
          <div
            key={index}
            className="border relative rounded-md w-full h-[400px] z-20 hover:text-[#d2ac47]"
          >
            <Image
              src={service.img}
              fill
              alt={service.title}
              objectFit="cover"
              priority
              objectPosition="top"
              className="hover:brightness-50 brightness-[.70] duration-200 rounded-md"
            />
            <div className="z-20 flex flex-col absolute bottom-6 left-6 right-4">
              <p className="font-medium">{service.title}</p>
              <p className="text-white">{service.desc}</p>
            </div>
          </div>
        ))}
      </section>
      <PrimaryButton fullwidth={false} onClick={handleOpen}>
        Give a review
      </PrimaryButton>
      {isOpen && (
        <div className="fixed flex-col inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <ModalReview
            onSubmitReview={handleReviewSubmit}
            onClose={handleClose}
          />
        </div>
      )}
    </main>
  );
};
