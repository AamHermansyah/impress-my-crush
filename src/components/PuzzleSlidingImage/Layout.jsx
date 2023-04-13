import { useRive, useStateMachineInput } from "rive-react";
import Game from "./Game";
import { motion as m } from "framer-motion";

const STATE_MACHINE_NAME = 'State Machine 1';
const INPUT_TYPE = 'Jump';

function Layout() {
  const { rive, RiveComponent } = useRive({
    src: 'rive/fuecoco.riv',
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
  });

  const onPressJump = useStateMachineInput(rive, STATE_MACHINE_NAME, INPUT_TYPE);

  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
      className="relative w-full min-h-screen bg-[#D6E2EA] text-white"
    >
      <div className="bg-[#FD6F96] p-4 w-full min-h-screen sm:p-10 flex flex-col-reverse sm:flex-row justify-center items-center gap-6 sm:gap-10">
        <Game onPressJumpFunc={onPressJump} />

        <div className="relative sm:pt-4">
          <RiveComponent className="absolute -top-[100%] sm:top-0 left-0 w-[250px] aspect-square" />
          <div className="relative bg-black lg:bg-transparent bg-opacity-70 p-4 rounded-md">
            <h1 className="text-xl sm:text-2xl font-mochiy text-center">
              Pasangkan setiap gambar sesuai dengan gambar yang sama✨
            </h1>
            <p className="text-center mt-2 text-blue-500 lg:text-blue-700">
              Nda mah pasti bisa kalo ini🥰🤭
            </p>
          </div>
        </div>
      </div>
    </m.section>
  )
}

export default Layout