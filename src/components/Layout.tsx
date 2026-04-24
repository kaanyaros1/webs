import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import StandorteBlock from "./StandorteBlock";
import CookieBanner from "./CookieBanner";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">{children}</main>
    <StandorteBlock />
    <Footer />
    <CookieBanner />
  </div>
);

export default Layout;
