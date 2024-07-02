import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { FaStar } from "react-icons/fa";
import { db } from "@/config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { IoCloseOutline } from "react-icons/io5";

interface ModalReviewProps {
  onSubmitReview: () => void;
  onClose: () => void; // Added onClose prop
}

interface ReviewFormInputs {
  name: string;
  comment: string;
  rating: number;
}

export const ModalReview: React.FC<ModalReviewProps> = ({
  onSubmitReview,
  onClose,
}) => {
  const { register, handleSubmit, control, reset } =
    useForm<ReviewFormInputs>();
  const [hover, setHover] = useState<number | null>(null);

  const onSubmit = async (data: ReviewFormInputs) => {
    try {
      const reviewsRef = collection(db, "reviews");
      await addDoc(reviewsRef, data);
      console.log("Review submitted:", data);
      onSubmitReview();
      reset();
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="py-4 px-6 bg-white w-[400px] flex flex-col gap-2 rounded-md shadow-md"
    >
      <div className="relative flex">
        <h1 className="text-[16pt] text-[#d2ac47] text-center">Rate us</h1>
        <button
          type="button"
          className="absolute top-2 right-2 text-blue-500"
          onClick={onClose}
        >
          <IoCloseOutline className="h-5 w-5" />
        </button>
      </div>
      <div className="">
        <label className="block text-gray-700">Name</label>
        <input
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Name"
          className="w-full p-2 border border-gray-300 rounded-md text-black"
        />
      </div>
      <div className="">
        <label className="block text-gray-700">Comment</label>
        <textarea
          {...register("comment", { required: true, maxLength: 100 })}
          placeholder="Comment"
          className="w-full p-2 border h-20 border-gray-300 rounded-md text-black"
        />
      </div>
      <div className="">
        <label className="block text-gray-700">Rating</label>
        <Controller
          name="rating"
          control={control}
          render={({ field }) => (
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((value) => (
                <FaStar
                  key={value}
                  size={24}
                  className={`cursor-pointer ${
                    value <= (hover || field.value)
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                  onMouseEnter={() => setHover(value)}
                  onMouseLeave={() => setHover(null)}
                  onClick={() => field.onChange(value)}
                />
              ))}
            </div>
          )}
        />
      </div>
      <div className="flex justify-end">
        <input
          type="submit"
          className="bg-[#d2ac47] text-white px-4 py-2 rounded-md cursor-pointer hover:bg-[#e9c04e]"
        />
      </div>
    </form>
  );
};
