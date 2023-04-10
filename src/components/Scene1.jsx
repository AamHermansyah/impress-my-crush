import { useRive } from "rive-react";
import GreenDino from "./GreenDino";
import { SCENE1 } from "../constants/data";

const STATE_MACHINE_NAME = "State Machine 1";

const Scene1 = () => {
  const { rive, RiveComponent } = useRive({
    src: 'rive/girl.riv',
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
  })

  return (
    <section className="relative min-h-screen bg-[#1D1D1D]">
      <div className="absolute inset-0 flex py-10 flex-col md:flex-row items-center justify-center">
        <RiveComponent className="md:flex-1 w-[250px] sm:w-[200px] aspect-square mx-auto" />
        <div className="relative md:flex-[1.5] p-4 sm:p-10 z-20">
          <h1 className="font-mochiy text-2xl sm:text-4xl text-white md:leading-[65px]">
            {SCENE1.title}
          </h1>
          <button type="button" className="text-xl sm:text-2xl mt-8 font-bold font-indie px-6 py-2 rounded-full bg-white text-blue-500">
            Lanjutkan
          </button>

          <div className="absolute -bottom-14 md:-bottom-20 -right-6 sm:right-10 w-[200px] aspect-square">
            <GreenDino />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Scene1;
