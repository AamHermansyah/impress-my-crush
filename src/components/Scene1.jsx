import { useRive } from "rive-react";

const STATE_MACHINE_NAME = "State Machine 1";

const Scene1 = () => {
  const { rive, RiveComponent } = useRive({
    src: 'rive/girl.riv',
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
  })

  return (
    <section className="relative min-h-screen bg-[#1D1D1D]">
      <div className="flex h-full py-10 flex-col md:flex-row items-center">
        <RiveComponent className="flex-1 w-[250px] sm:w-[300px] aspect-square mx-auto" />
        <div className="flex-[1.5] p-4 sm:p-10 z-20">
          <h1 className="font-mochiy text-2xl sm:text-4xl md:text-5xl text-white md:leading-[65px]">
            Hai selamat datang! Mau jumpa siapa nich? Btw ada yang rindu lohh:)
          </h1>
          <button type="button" className="text-xl sm:text-2xl mt-8 font-bold font-indie px-6 py-2 rounded-full bg-white text-blue-500">
            Lanjutkan
          </button>
        </div>
      </div>
    </section>
  )
}

export default Scene1;
