import { useState } from 'react';
import { DASHBOARD, TTS_DATA } from '../../constants/data';
import '../../styles/TTS.style.css';
import Game from './Game';
import ModalSuccess from '../ModalSuccess';
import { motion as m } from "framer-motion";

function TTS() {
  const [modalDisplay, setModalDisplay] = useState(false);

  const handleClick = () => {
    const initialState = (type) => {
      const keys = Object
        .keys(TTS_DATA[type])
        .map((num) => `td input.${type === 'across' ? 'd' : 'm'}${num}`)
        .join(',');
      const typeElement = Array.from(document.querySelectorAll(keys));
      const values = typeElement
        .map((elm) => [
          elm.className.match(type === 'across' ? /d\d+/gi : /m\d+/gi)[0],
          elm.value
        ])
        .sort((a, b) => a[0][1] - b[0][1]);

      return { typeElement, values };
    }

    const { typeElement: acrossElements, values: valuesAcross } = initialState('across');
    const { typeElement: downElements, values: valuesDown } = initialState('down');

    const checkIsCompleted = () => {
      const isGameSuccess = acrossElements
        .concat(downElements)
        .every((elm) => elm.className.includes('disabled'));

      if (isGameSuccess) {
        setModalDisplay(true);
        return;
      }
    }

    checkIsCompleted();

    const result = {
      across: {},
      down: {}
    }

    const concatValue = (property, value) => {
      if (result[property].hasOwnProperty(value[0])) {
        result[property][value[0]] += value[1].toLowerCase();
      } else {
        result[property][value[0]] = value[1].toLowerCase();
      }
    }

    valuesDown.forEach((values) => {
      concatValue('down', values);
    });

    valuesAcross.forEach((values) => {
      concatValue('across', values);
    });

    const disabledInputIfSame = (classNameList, type) => {
      classNameList.forEach((classname) => {
        if (TTS_DATA[type][classname[1]].answered === result[type][classname]) {
          document
            .querySelectorAll(`td input.${classname}`)
            .forEach((elm) => elm.classList.add('disabled'));
          document
            .querySelector(`ol li[data-list="${classname}"]`)
            .style.color = 'green';

          checkIsCompleted();
        }
      })
    }

    const acrossClassName = new Set(valuesAcross.map((values) => values[0]));
    disabledInputIfSame(acrossClassName, 'across');

    const downClassName = new Set(valuesDown.map((values) => values[0]));
    disabledInputIfSame(downClassName, 'down');

  }

  const onClickListQuestion = (list) => {
    let isFocus = false;
    const inputs = document.querySelectorAll(`[data-list="${list}"] input`)
    inputs.forEach((input) => {
      if (!input.className.includes('disabled') && !isFocus) {
        input.focus();
        isFocus = true;
      }
    })
  }

  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
      className="relative w-full min-h-screen bg-[#D6E2EA]"
    >
      <div className="w-full flex flex-col-reverse sm:grid sm:grid-cols-2 sm:justify-items-center gap-4 p-2 md:p-10">
        <ModalSuccess
          display={modalDisplay}
          saveGameKey={DASHBOARD.gameTitleKeysLocalStorage['cross-words']}
        >
          Nda memang hebat🎊🤩
          <br />Makasih udah ingat kenangan kita bersama🥰😍😘
        </ModalSuccess>
        <div className="pb-6 md:p-4">
          <h1 className="text-rose-500 hidden sm:block text-4xl font-bold mt-0 md:-mt-4 mb-8 text-center">Teka Teki Sayang</h1>
          <div className="p-4 border border-gray-600 mb-4">
            <h2 className="font-mochiy">Mendatar</h2>
            <ol className="text-md sm:text-lg mt-2 font-sans">
              {Object.keys(TTS_DATA.across).map((list) => (
                <li
                  data-list={`d${list}`}
                  key={list}
                  onClick={() => onClickListQuestion(list)}
                  className="mt-2 leading-tight cursor-pointer text-gray-800 hover:text-black"
                >
                  <b>{list}.</b> {TTS_DATA.across[list].question}
                </li>
              ))}
            </ol>
            <h2 className="font-mochiy mt-4">Menurun</h2>
            <ol className="text-md sm:text-lg mt-2 font-sans">
              {Object.keys(TTS_DATA.down).map((list) => (
                <li
                  data-list={`m${list}`}
                  key={list}
                  onClick={() => onClickListQuestion(list)}
                  className="mt-2 leading-tight cursor-pointer text-gray-800 hover:text-black"
                >
                  <b>{list}.</b> {TTS_DATA.down[list].question}
                </li>
              ))}
            </ol>
          </div>
          <p className="italic text-sm font-sans">
            <b>*</b>Klik cek untuk melihat jawaban dan jika berwarna hijau berarti jawaban nda bener banget!!
          </p>
        </div>
        <div className="relative h-max">
          <h1 className="text-rose-500 sm:hidden text-4xl font-bold my-6 text-center">Teka Teki Sayang</h1>
          <Game />
          <button
            type="button"
            className="font-mochiy text-sm absolute bottom-2 left-[2%] md:left-[8%] px-4 py-2 rounded-full bg-rose-500 hover:bg-rose-600 text-white active:scale-95 transition-all duration-150"
            onClick={handleClick}
          >
            Cek
          </button>
        </div>
      </div>
    </m.section>
  )
}

export default TTS