// Icons
import {
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaInternetExplorer } from "react-icons/fa";

function App() {
  return (
    <>
      <div className="container flex flex-col items-center gap-4">
        <h1 className="pt-10 pb-6 text-4xl font-bold">Mauri</h1>
        <img
          src="https://img.freepik.com/foto-gratis/lindo-perro-sonriente-gafas-sol_23-2148865714.jpg"
          className="w-40 h-40 object-cover rounded-full ring-2 ring-black/50"
        />
        <div className="w-80 py-4 flex items-center">
          <p className="text-center font-medium">
            Mauri es un desarrollador full stack apasionado por aprender y
            enseñar. Actualmente se encuentra en la búsqueda de su primer
            trabajo.
          </p>
        </div>
        <button className="py-3 px-40 bg-blue-100 text-blue-500 font-bold">
          Mi Linkdin 
        </button>
        <button className="w-100% py-3 px-40 bg-orange-200 text-orange-500 font-bold">
          Trabajos experimentales
        </button>
        <button className="py-3 px-40 bg-orange-200 text-orange-500 font-bold">
          Enviame un email
        </button>
        <button className="py-3 px-40 bg-orange-200 text-orange-500 font-bold">
          HolaJuniors.com
        </button>

        <div className="flex flex-row items-center gap-6 py-6 text-[30px] text-orange-700 ">
          <a href="#">
            <AiFillYoutube />
          </a>
          <a href="#">
            <AiOutlineInstagram />
          </a>
          <a href="#">
            <AiOutlineTwitter />
          </a>
          <a href="#">
            <AiFillLinkedin />
          </a>
          <a href="#">
            <FaInternetExplorer />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
