"use client";
import { useState, useEffect } from "react";
import { db } from "@/config/firebase";
import { DataReviewProps } from "./IReview";
import { BoxReview } from "./components/BoxReview";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { collection, onSnapshot } from "firebase/firestore";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
export const ReviewService = () => {
  const [cards, setCards] = useState<DataReviewProps[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "reviews"), (snapshot) => {
      const reviews: DataReviewProps[] = [];
      snapshot.forEach((doc) => {
        reviews.push({
          id: doc.id,
          ...doc.data(),
        } as unknown as DataReviewProps);
      });
      setCards(reviews);
    });

    return () => unsubscribe();
  }, []);

  const leftClick = () => {
    setCards((prevSlide) => {
      const rotatedCards = [...prevSlide];
      const lastCard = rotatedCards.pop();
      rotatedCards.unshift(lastCard!);
      return rotatedCards;
    });
  };

  const rightClick = () => {
    setCards((prevSlide) => {
      const rotatedCards = [...prevSlide];
      const firstCard = rotatedCards.shift();
      rotatedCards.push(firstCard!);
      return rotatedCards;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      rightClick();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <section className="w-full bg-[#ae8625]  overflow-x-hidden py-28">
        <section className="flex flex-col gap-6 md:gap-24">
          <section className="flex flex-col relative pb-10 px-8 md:px-28 justify-center gap-4 text-center">
            <h1 className="text-white uppercase font-bold text-[40px]">
              What They Said?
            </h1>
            <p className="text-white text-[14pt] italic">
              Explore the feedback and testimonials regarding our hair services{" "}
              <br /> Learn about their experiences and recommendations
            </p>
          </section>
          <section className="flex relative min-[200px] md:scale-[.75] lg:scale-100 justify-center items-center">
            <div className="flex gap-10">
              {cards.map((person, index) => (
                <BoxReview
                  key={person.id}
                  className={`transition-transform ease-in-out duration-500 ${
                    index === Math.floor(cards.length / 2) ? "-top-8" : ""
                  }`}
                  style={{
                    opacity: index === Math.floor(cards.length / 2) ? 1 : 0.7,
                    transform:
                      index === Math.floor(cards.length / 2)
                        ? "scale(1.1)"
                        : "scale(1)",
                  }}
                >
                  <li className=" flex flex-col justify-center items-center relative w-full">
                    <Image
                      width={80}
                      height={80}
                      className="absolute rounded-full -top-20"
                      src={"/images/noprofile.webp"}
                      alt={person.name}
                      objectFit="cover"
                      objectPosition="top"
                    />
                    <div className="pt-9 gap-3 flex flex-col text-text-m text-center px-4 text-black">
                      <p>{person.comment}</p>
                      <p className="font-semibold pb-2">{person.name}</p>
                    </div>
                    <p className="flex text-xs">
                      <IoIosStar className="h-5 w-5 text-yellow-400" />
                      {person.rating}/5
                    </p>
                  </li>
                </BoxReview>
              ))}
            </div>
            <section className="flex absolute gap-[630px] top-[20%]">
              <button
                className="hover:bg-opacity-[35%] rounded-full hover:bg-white hover:cursor-pointer p-1"
                onClick={leftClick}
              >
                <IoIosArrowBack className="w-10 h-10 text-white" />
              </button>
              <button
                className="hover:bg-opacity-[35%] rounded-full hover:bg-white hover:cursor-pointer p-1"
                onClick={rightClick}
              >
                <IoIosArrowForward className="w-10 h-10 text-white" />
              </button>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
};
