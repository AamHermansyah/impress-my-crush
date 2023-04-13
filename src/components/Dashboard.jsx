import { Link, useNavigate } from "react-router-dom"
import { DASHBOARD } from "../constants/data"
import { useRive, useStateMachineInput } from "rive-react";
import { motion as m } from "framer-motion";
import { useState } from "react";

const STATE_MACHINE_NAME = "State Machine 1";
const STATE_MACHINE_NAME1 = "quiz_machine";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.3
    }
  }
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

function Dashboard() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const navigate = useNavigate();
  const saveGame = JSON.parse(localStorage.getItem('saveGame')) || {};
  const hasUnlocked = Object.keys(saveGame).length;

  const { rive, RiveComponent } = useRive({
    src: 'rive/ferris-wheel.riv',
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
  })

  const { rive: rive1, RiveComponent: RiveComponent1 } = useRive({
    src: 'rive/quiz_guy.riv',
    stateMachines: STATE_MACHINE_NAME1,
    autoplay: true,
  })

  const onButtonHover = useStateMachineInput(rive1, STATE_MACHINE_NAME1, 'push');
  const onLockedButtonClick = useStateMachineInput(rive1, STATE_MACHINE_NAME1, 'error');
  const onOpenButtonClick = useStateMachineInput(rive1, STATE_MACHINE_NAME1, 'valid');

  const handleResetData = () => {
    localStorage.clear();
    navigate('/guess-somebody');
  }

  return (
    <m.section
      variants={container}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="relative min-h-screen flex w-full flex-col items-center justify-center p-4 sm:p-10"
    >
      <img
        className="absolute w-full h-full object-cover opacity-30"
        src="dashboard-bg.jpg"
        alt="dashboard-background"
      />

      <RiveComponent
        className="hidden md:block absolute bottom-[89%] sm:bottom-4 left-4 w-[75px] sm:w-[150px] aspect-square rounded-md overflow-hidden"
      />

      <div className="relative">
        <h1 className="mt-4 sm:mt-0 text-xl sm:text-3xl font-mochiy capitalize text-center">
          Hallo, {localStorage.getItem("name") || "Guest"}❤️
        </h1>
        <div className="sm:mt-4 w-full grid grid-cols-1 sm:grid-cols-2 max-w-[800px] gap-10">
          <div className="w-full aspect-video p-4">
            <p className="text-sm italic">
              *Selesaikan semua permainan dan scroll galeri sampai foto terakhir untuk membuka sesuatu di dalam surat ini:)❤️
            </p>
            <img
              src="love-letter.png"
              alt="love-letter"
              className="w-full h-full object-contain animate-shake-infinity"
            />
            <div className="relative w-max mx-auto">
              <RiveComponent1
                className={`${hasUnlocked === 3 ? 'right-0' : '-left-[88%]'} absolute -bottom-[70%] w-[200px] aspect-video`}
              />

              {hasUnlocked === 3 ? (
                <button
                  type="button"
                  className={`${isUnlocked ? 'bg-blue-500' : 'bg-yellow-400'} relative block mx-auto px-4 py-2 rounded-full text-white z-10`}
                  onMouseEnter={() => onButtonHover.value = true}
                  onClick={() => {
                    if (isUnlocked) return navigate('/love-letters');
                    onOpenButtonClick.value = true;
                    setTimeout(() => {
                      setIsUnlocked(true);
                    }, 2000);
                  }}
                  onMouseLeave={() => {
                    onButtonHover.value = false;
                    onOpenButtonClick.value = false;
                  }}
                >
                  {isUnlocked ? 'Buka' : 'Cek?'}
                </button>
              ) : (
                <button
                  type="button"
                  className="relative block mx-auto px-4 py-2 rounded-full bg-red-500 text-white z-10"
                  onMouseEnter={() => onButtonHover.value = true}
                  onClick={() => onLockedButtonClick.value = true}
                  onMouseLeave={() => {
                    onButtonHover.value = false;
                    onLockedButtonClick.value = false;
                  }}
                >
                  🔐Locked ({hasUnlocked ?? 0}/5)
                </button>
              )}
            </div>
          </div>
          <div className="flex flex-col w-full gap-2 p-4">
            <h4 className="text-xl">Games</h4>
            {DASHBOARD.gamesTitle.map((list) => (
              <m.div
                key={list.id}
                variants={item}
              >
                <Link
                  to={list.url}
                  id={list.id}
                  className={`${list.color} text-center block w-full mx-auto px-4 py-2 rounded-full text-white`}
                >
                  {list.title} {saveGame.hasOwnProperty(list.id) ? '✅' : ''}
                </Link>
              </m.div>
            ))}

            <h4 className="text-xl">Memories Gallery</h4>
            <Link to="/gallery" className="block w-full mx-auto text-center px-4 py-2 rounded-full bg-blue-500  text-white">
              Open Gallery {saveGame.hasOwnProperty('gallery') ? '✅' : ''}
            </Link>

            <h4 className="text-xl">Profile</h4>
            <button
              onClick={handleResetData}
              type="button"
              className="block w-full mx-auto px-4 py-2 rounded-full bg-red-500 text-white"
            >
              Reset Data
            </button>
          </div>
        </div>
      </div>
    </m.section>
  )
}

export default Dashboard