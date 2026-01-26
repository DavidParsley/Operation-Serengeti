import { Outlet } from "react-router-dom";

import styles from "../../App.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


export default function Layout() {
  return (
    <div>
      <Navbar />
      <main className={`${styles.App}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}