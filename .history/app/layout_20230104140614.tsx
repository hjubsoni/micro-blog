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
        <SkipNavLink />
        <Header />
        {children}
      </body>
    </html>
  );
}
