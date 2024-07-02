import { Navbar } from "@/components/Navbar";
import Providers from "../provider";
import { Footer } from "@/components/Footer/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="main-root">
      <Providers>{children}</Providers>
    </main>
  );
}
