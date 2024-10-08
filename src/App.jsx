import { Outlet } from "react-router-dom";
import Header from "./components/headerComponents/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <section className="min-h-screen container mx-auto flex flex-col">
      <Header />
      <main className="flex-grow px-4 md:px-0">
        <Outlet />
      </main>
      <Footer />
    </section>
  );
}
export default App;
