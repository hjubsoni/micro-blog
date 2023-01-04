import { SkipNavLink } from "@reach/skip-nav";
import "../styles/globals.css";
import Header from "./header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <SkipNavLink className="absolute top-2 left-2 py-4 px-6 invisible " />
        <Header />
        {children}
      </body>
    </html>
  );
}
