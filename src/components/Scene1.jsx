import { useRive } from "rive-react";
import GreenDino from "./GreenDino";
import { SCENE1 } from "../constants/data";
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

const STATE_MACHINE_NAME = "State Machine 1";

const Scene1 = () => {
  const [modalDisplay, setModalDisplay] = useState(false);
  const { rive, RiveComponent } = useRive({
    src: 'rive/girl.riv',
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
  })

  return (
    <m.section
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen bg-[#1D1D1D]"
    >
      {modalDisplay && (
        <div className="absolute inset-0 flex justify-center items-center bg-white z-50">
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            exit={{ opacity: 0 }}
            className="max-w-[500px] text-center p-4"
          >
            <h3 className="text-xl font-mochiy mb-2 animate-pulse">Warning...</h3>
            <p className="text-md">{SCENE1.warningPopupMessage}</p>
            <Link
              to="/guess-somebody"
              className="block w-max mx-auto px-4 py-2 rounded-full bg-black text-white my-4"
              onClick={() => setModalDisplay(false)}
            >
              Close
            </Link>
          </m.div>
        </div>
      )}
      <div className="w-full h-full flex py-10 flex-col md:flex-row items-center justify-center">
        <RiveComponent className="md:flex-1 w-[250px] sm:w-[200px] aspect-square mx-auto" />
        <div className="relative md:flex-[1.5] p-4 sm:p-10 z-20">
          <h1 className="font-mochiy text-2xl sm:text-4xl text-white md:leading-[65px]">
            {SCENE1.title}
          </h1>
          <button
            type="button"
            className="block w-max text-xl sm:text-2xl mt-8 font-bold font-indie px-6 py-2 rounded-full bg-white text-blue-500"
            onClick={() => setModalDisplay(true)}
          >
            Lanjutkan
          </button>

          <div className="absolute -bottom-14 md:-bottom-20 -right-6 sm:right-10 w-[200px] aspect-square">
            <GreenDino />
          </div>
        </div>
      </div>
    </m.section>
  )
}

export default Scene1;
