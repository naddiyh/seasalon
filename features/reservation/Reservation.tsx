import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/config/firebase";
import { IoCloseOutline } from "react-icons/io5";
interface ReservationProps {
  onSubmitReserv: () => void;
  onClose: () => void;
}

interface ReservationFormInputs {
  name: string;
  phoneNumber: string;
  serviceType: string;
  dateTime: string;
}

export const Reservation: React.FC<ReservationProps> = ({
  onSubmitReserv,
  onClose,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReservationFormInputs>();

  const onSubmit = async (data: ReservationFormInputs) => {
    try {
      const reservationRef = collection(db, "reservations");
      await addDoc(reservationRef, data);
      console.log("Reservation submitted:", data);
      onSubmitReserv();
      reset();
    } catch (error) {
      console.error("Error submitting reservation:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="py-4 px-5 bg-white w-[400px] flex flex-col gap-2 rounded-md shadow-md"
    >
      <div className="flex justify-center  relative">
        <h1 className="text-center font-bold text-[#d2ac47] text-[18pt]">
          Reservation Form
        </h1>
        <button type="button" className="absolute right-0" onClick={onClose}>
          <IoCloseOutline className="h-6 w-6" />
        </button>
      </div>
      <div className="">
        <label htmlFor="name" className="block text-gray-700">
          Name
        </label>
        <input
          id="name"
          {...register("name", { required: true, maxLength: 50 })}
          placeholder="Name"
          className="w-full p-2 border border-gray-300 rounded-md text-black"
        />
      </div>
      <div className="">
        <label htmlFor="phoneNumber" className="block text-gray-700">
          Active Phone Number
        </label>
        <input
          id="phoneNumber"
          {...register("phoneNumber", {
            required: "Phone Number is required",
            pattern: {
              value: /^[0-9\b]+$/,
              message: "Please input a valid phone number",
            },
            maxLength: {
              value: 15,
              message: "Phone Number should not exceed 15 characters",
            },
          })}
          placeholder="Phone Number"
          className="w-full p-2 border border-gray-300 rounded-md text-black"
        />
        {errors.phoneNumber && (
          <span className="text-red-500 text-sm">
            {errors.phoneNumber.message}
          </span>
        )}
      </div>
      <div className="">
        <label htmlFor="serviceType" className="block text-gray-700">
          Type of service
        </label>
        <select
          id="serviceType"
          {...register("serviceType", { required: true })}
          className="w-full p-2 border border-gray-300 rounded-md text-black"
        >
          <option value="">Select Service Type</option>
          <option value="Haircuts and styling">Haircuts and styling</option>
          <option value="Manicure and pedicure">Manicure and pedicure</option>
          <option value="Facial treatments">Facial treatments</option>
        </select>
      </div>
      <div className="">
        <label htmlFor="dateTime" className="block text-gray-700">
          Date and Time
        </label>
        <input
          id="dateTime"
          {...register("dateTime", { required: true })}
          type="datetime-local"
          className="w-full p-2 border border-gray-300 rounded-md text-black"
        />
      </div>
      <div className="flex justify-end">
        <input
          type="submit"
          value="Submit"
          className="bg-[#d2ac47] text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600"
        />
      </div>
    </form>
  );
};
