import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/home-page";
import Calling from "./pages/calling";
import Insurance from "./pages/insurance";
import Appointments from "./pages/appointments";
import Login from "./pages/login";
import LoginPage from "./pages/login-page";
import UserAccount from "./pages/user-account";
import MedicineReminders from "./pages/medicine-reminders";
import MedicineReminders1 from "./pages/medicine-reminders1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/calling":
        title = "";
        metaDescription = "";
        break;
      case "/insurance":
        title = "";
        metaDescription = "";
        break;
      case "/appointments":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/login-page":
        title = "";
        metaDescription = "";
        break;
      case "/user-account":
        title = "";
        metaDescription = "";
        break;
      case "/medicine-reminders":
        title = "";
        metaDescription = "";
        break;
      case "/medicine-reminders1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/calling" element={<Calling />} />
      <Route path="/insurance" element={<Insurance />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/user-account" element={<UserAccount />} />
      <Route path="/medicine-reminders" element={<MedicineReminders />} />
      <Route path="/medicine-reminders1" element={<MedicineReminders1 />} />
    </Routes>
  );
}
export default App;
