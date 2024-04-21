import "ldrs/ring";
import { hourglass } from "ldrs";
import "../styles/Loader.css";

hourglass.register();

function Loader() {
  return (
    <div className="loader-container">
      <l-hourglass
        size="40"
        bg-opacity="0.1"
        speed="1.75"
        color="#FC4747"
      ></l-hourglass>
    </div>
  );
}

export default Loader;
