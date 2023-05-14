import { Header } from "@/components/header";
import "./globals.css";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Sa Production",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-sans text-white bg-background">
      <body className={``}>
        <div>
          <Header />
          <main className="pt-navigation-height">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
