import Aos from "aos";
import { useRoutes } from "react-router-dom";
import { routes } from "./utilities/routes.jsx";

export default function App() {
  Aos.init({
    duration: 1500,
    once: true,
  });

  return useRoutes(routes);
}
