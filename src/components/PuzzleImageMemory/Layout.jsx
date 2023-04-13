import { useRive, useStateMachineInput } from "rive-react";
import { generateRandomArray } from "../../utils/number.utils";
import { useEffect, useState } from "react";
import ModalSuccess from "../ModalSuccess";
import { DASHBOARD, MEMORY_GAME } from "../../constants/data";
import { motion as m } from "framer-motion";

const STATE_MACHINE_NAME = 'State Machine 1';
const INPUT_TYPE = 'touched';

function Layout() {
  const [prevImageNumber, setPrevImageNumber] = useState(null);
  const [sumSuccessImage, setSumSuccessImage] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const [randomNumbers, setRandomNumbers] = useState(generateRandomArray(16));
  const { rive, RiveComponent } = useRive({
    src: 'rive/sleep-monster.riv',
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
  });

  const onPressJump = useStateMachineInput(rive, STATE_MACHINE_NAME, INPUT_TYPE);

  const handleClick = (e, number) => {
    const parentCurrentElement = e.target.parentElement;
    parentCurrentElement.classList.add('flip');

    if (prevImageNumber === null) {
      onPressJump.fire();
      setPrevImageNumber(number);
    } else {
      const currentImageNumber = +e.target.nextSibling.dataset.couple;
      if (currentImageNumber === prevImageNumber) {
        setSumSuccessImage((prev) => prev + 1);
      } else {
        const prevElement = document
          .querySelectorAll(`[data-couple="${prevImageNumber}"]`);

        setTimeout(() => {
          parentCurrentElement.classList.remove('flip');
          prevElement.forEach((elm) => elm.parentElement.classList.remove('flip'));
        }, 700);
      }
      setPrevImageNumber(null);
    }
  }

  useEffect(() => {
    if (MEMORY_GAME.images.length / 2 === sumSuccessImage) {
      const timeout = setTimeout(() => {
        setIsSuccess(true);
      }, 1000);

      return () => {
        clearTimeout(timeout);
      }
    }
  }, [sumSuccessImage]);

  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
      className="relative w-full min-h-screen bg-[#D6E2EA]"
    >

      <div className="bg-sky-500 p-4 w-full min-h-screen sm:p-10 flex flex-col-reverse sm:flex-row justify-center items-center gap-6 sm:gap-10">
        <ModalSuccess
          display={isSuccess}
          saveGameKey={DASHBOARD.gameTitleKeysLocalStorage["guess-images"]}
        >
          Makin serius aja nich😍❤️
          <br />
          Terus lanjutin nanti di akhir ada surprise yah🤭🥰✨
        </ModalSuccess>
        <div className="max-w-[400px] sm:max-w-none w-full md:w-[500px] aspect-square grid grid-cols-4 gap-2 z-10">
          {randomNumbers.map((number, index) => (
            <div
              className="aspect-square w-full bg-transparent border border-blue-500 cursor-pointer"
              style={{
                perspective: '1000px'
              }}
              key={index}
            >
              <div
                className="relative h-full text-center transition-transform duration-500"
                style={{
                  transformStyle: 'preserve-3d'
                }}
              >
                <div
                  className="absolute inset-0 bg-white active:scale-90 transition-transform duration-200"
                  onClick={(e) => handleClick(e, MEMORY_GAME.images[number - 1])}
                  style={{
                    backfaceVisibility: 'hidden',
                  }}
                />
                <div
                  data-couple={`${MEMORY_GAME.images[number - 1]}`}
                  className="absolute inset-0 bg-black"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <img
                    src={`image-memory-puzzle/${MEMORY_GAME.images[number - 1]}.jpg`}
                    alt={`image-memory-${index + 1}`}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="relative sm:pt-4">
          <RiveComponent className="absolute -top-[100%] sm:top-0 left-0 w-[250px] aspect-square" />
          <div className="relative">
            <h1 className="text-xl sm:text-2xl font-mochiy text-center">
              Pasangkan setiap gambar sesuai dengan gambar yang sama✨
            </h1>
            <p className="text-center mt-2">Cemangat tayang pasti bisa🤩🎊😘</p>
          </div>
        </div>
      </div>
    </m.section>
  )
}

export default Layout