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
        <SkipNavLink className="transition left-0 bg-primary text-primary-content absolute p-3 m-3 -translate-y-16 focus:translate-y-0" />
        <Header />
        {children}
      </body>
    </html>
  );
}
