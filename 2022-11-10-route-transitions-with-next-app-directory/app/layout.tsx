import { Header } from "../components/header";
import "../styles/globals.css";
import { Lora } from "@next/font/google";
import { Footer } from "../components/footer";

// We use Next's new font loader here, definitely check it out ;)
// @see: https://beta.nextjs.org/docs/optimizing/fonts
const lora = Lora({
  weight: ["400", "500"],
  variable: "--font-lora",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lora.variable}>
      <head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
