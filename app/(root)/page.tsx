import { HomePage } from "@/features/Home";
import { ServiceHair } from "@/features/product";
import { ReviewService } from "@/features/review";

export default function Page() {
  return (
    <main className="flex flex-col">
      <HomePage />
      <ServiceHair />
      <ReviewService />
    </main>
  );
}
