import Footer from "@/components/generals/Footer";
import Navbar from "@/components/generals/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
