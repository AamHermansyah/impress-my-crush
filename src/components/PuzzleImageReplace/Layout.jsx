import { useRive } from "rive-react";
import { generateRandomArray } from "../../utils/number.utils";
import { useState } from "react";
import ModalSuccess from "../ModalSuccess";
import { DASHBOARD } from "../../constants/data";
import { motion as m } from "framer-motion";

const STATE_MACHINE_NAME = 'State Machine 1';
function Layout() {
  const [imageBeforeQuery, setImageBeforeQuery] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const [randomNumbers, setRandomNumbers] = useState(generateRandomArray(25));
  const { rive, RiveComponent } = useRive({
    src: 'rive/cat.riv',
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
  });

  const handleClick = (e, number) => {
    if (imageBeforeQuery === null) {
      e.target.parentElement.classList.add('opacity-50');
      setImageBeforeQuery(`img[data-id="image-${number}"]`);
    } else {
      const currentElm = e.target;
      const beforeElm = document.querySelector(imageBeforeQuery);
      const currentSrc = currentElm.src;

      currentElm.src = beforeElm.src;
      beforeElm.src = currentSrc;
      setImageBeforeQuery(null);

      beforeElm.parentElement.classList.remove('opacity-50');

      const allImageElm = Array.from(document.querySelectorAll('[data-id]'));
      const listImage = allImageElm.map((elm) => elm.src.match(/\/\d+/gi)[0].slice(1));
      const listSortImage = [...listImage].sort((a, b) => a - b).join('');
      console.log(listImage.join(''), '\n', listSortImage);
      if (listImage.join('') === listSortImage) {
        setIsSuccess(true);
      }
    }
  }

  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
      className="relative w-full min-h-screen bg-[#D6E2EA]"
    >
      <div className="p-4 w-full min-h-screen sm:p-10 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10">
        <ModalSuccess
          display={isSuccess}
          saveGameKey={DASHBOARD.gameTitleKeysLocalStorage["replace-puzzle"]}
        >
          Wihh... bangga banget punya nda🥰😍
          <br />
          Lanjut lagi ke tantangan selanjutnya?🤣💕
        </ModalSuccess>
        <div className="relative sm:pt-4">
          <RiveComponent className="absolute -top-[100%] sm:top-0 left-0 w-[250px] aspect-square" />
          <div className="relative">
            <h1 className="text-xl sm:text-2xl font-mochiy text-center">
              Tukar kan setiap gambar sesuai pada posisi aslinya✨
            </h1>
            <p className="text-center mt-2">Ayo semangat pasti bisa🤩🎊😘</p>
          </div>
        </div>
        <div className="max-w-[400px] sm:max-w-none w-full md:w-[500px] aspect-square grid grid-cols-5 gap-2 z-10">
          {randomNumbers.map((number, index) => (
            <div
              className="aspect-square w-full bg-black hover:opacity-50 active:scale-90 transition-all duration-200 cursor-pointer"
              key={index}
            >
              <img
                src={`image-replace-puzzle/${number}.jpg`}
                alt={`image-puzzle-${index + 1}`}
                data-id={`image-${number}`}
                className="w-full h-full"
                onClick={(e) => handleClick(e, number)}
              />
            </div>
          ))}
        </div>
      </div>
    </m.section>
  )
}

export default Layout