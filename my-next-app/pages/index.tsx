// Inter font is loaded from Google fonts
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// Home Component
export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>Success!</h1>
    </main>
  );
}
