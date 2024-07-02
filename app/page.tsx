import { Navbar } from "@/components/Navbar";
import { HomePage } from "@/features/Home";
import { ServiceHair } from "@/features/product";
import { ReviewService } from "@/features/review";

export default function Page() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <HomePage />
      <ServiceHair />
      <ReviewService />
    </main>
  );
}
