import { About } from "@/components/about/About";
import { HomePage } from "@/features/Home";
import { ServiceHair } from "@/features/product";
import { ReviewService } from "@/features/review";

export default function Page() {
  return (
    <main className="flex flex-col">
      <HomePage />
      <About />
      <ServiceHair />
      <ReviewService />
    </main>
  );
}
