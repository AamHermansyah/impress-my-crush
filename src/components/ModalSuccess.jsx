import { useNavigate } from "react-router-dom";
import { useRive } from "rive-react"
import { saveGame } from "../utils/saveGame.utils";

const STATE_MACHINE_NAME = 'State Machine 1';

function ModalSuccess({ display, children, saveGameKey }) {
  const { rive, RiveComponent } = useRive({
    src: 'rive/monster.riv',
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
  });

  const navigate = useNavigate();

  const handleClick = () => {
    saveGame(saveGameKey);
    navigate('/dashboard');
  }

  if (!display) return null;

  return (
    <div className="fixed inset-0 z-40 bg-white">
      <div className="p-4 sm:p-10 w-full h-full flex flex-col items-center">
        <RiveComponent className="w-[300px] sm:w-[400px] aspect-square mx-auto" />
        <h1 className="relative -mt-24 sm:-mt-32 text-xl sm:text-3xl font-bold font-mochiy text-black text-center">
          {children}
        </h1>
        <button
          onClick={handleClick}
          type="button"
          className="mt-4 p-2 font-semibold bg-white font-indie px-6 py-2 rounded-full text-blue-500 border-2 border-blue-500 disabled:opacity-70 z-10"
        >
          Lanjut
        </button>
      </div>
    </div>
  )
}

export default ModalSuccess