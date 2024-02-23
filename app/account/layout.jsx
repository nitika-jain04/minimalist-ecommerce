import Navbar from "@/components/Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <section>{children}</section>
    </div>
  );
}
