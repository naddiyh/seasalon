import Image from "next/image";
export const About = () => {
  return (
    <main className="w-screen py-10 px-8 md:px-28 bg-black relative flex justify-center flex-col gap-8">
      <div className="flex flex-col">
        <h1 className="text-[#d2ac47] text-4xl  font-bold text-right">
          About Us!
        </h1>
        <p className="text-white italic text-right">
          Providing the best beauty services in a relaxed atmosphere
        </p>
      </div>

      <div className="bg-[#f3e8c9] h-[200px] justify-end flex">
        <p className="lg:w-1/2  pt-4 px-2 border md:pt-10 text-m md:text-lg md:pr-8 text-center md:text-right">
          Welcome to SEA Salon! Our skilled stylists offer top hair and beauty
          services in a relaxing environment. We use high-quality products to
          ensure you look and feel your best. Come experience the SEA Salon
          difference.
        </p>
      </div>
      <div className="bg-gradient-yellow h-[400px] w-[350px] top-10 shadow-2xl left-[200px] hidden md:block md:absolute  ">
        <Image
          src="/images/haircut.webp"
          width={360}
          height={100}
          alt=""
          className=" absolute top-6 left-7"
          objectFit="cover"
          objectPosition="top z-20"
        />
      </div>
    </main>
  );
};
