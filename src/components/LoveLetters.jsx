import { useEffect, useRef, useState } from "react";
import { LOVE_LETTERS } from "../constants/data"
import { SmoothTypingText } from "./SmoothingTyping"
import { motion as m } from "framer-motion";
import { useNavigate } from "react-router-dom";

function LoveLetters() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [isReject, setIsReject] = useState(null);
  const [isAccept, setIsAccept] = useState(false);
  const [inputErrorMessage, setInputErrorMessage] = useState(null);
  const [stepIndex, setStepIndex] = useState(0);

  const inputRef = useRef();
  const navigate = useNavigate();

  const handleOnClick = (e) => {
    setInputErrorMessage(null);

    if (inputRef.current.value.split(' ').length < 1) {
      e.preventDefault();
      setInputErrorMessage('Pesan minimal harus terdapat 10 kata:).');
      return;
    }

    e.target.setAttribute('target', '_blank');
    e.target.setAttribute('rel', 'noopener norefferer');
    e.target.href = `https://wa.me/+6282316126449?text=${inputRef.current.value}`;
    navigate('/dashboard');
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsDisabled(false);
    }, 57000);

    return () => {
      clearTimeout(timeout);
    }
  }, []);

  return (
    <section className="relative sm:p-10">
      {stepIndex !== 0 && (
        <div className="fixed inset-0 z-10 bg-white">
          {stepIndex === 1 && (
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut', stiffness: 100 }}
              className="w-full h-full flex flex-col items-center justify-center"
            >
              <span className="text-7xl sm:text-9xl">😍</span>
              <h1 className="mt-2 text-md sm:text-xl text-center p-4">
                Aarrghhh... Makasih banget udah mau nerima aku lagi😭❤️🤩
                <br />
                Terharu bangettt... aku janji pasti lebih baik lagi🥺🥰
              </h1>
              <button
                onClick={() => setStepIndex((prev) => prev + 1)}
                type="button"
                className="block w-max text-blue-500 hover:text-white mx-auto px-4 py-1 rounded-full border-2 border-sky-500 hover:bg-sky-500 transition-colors duration-200 font-indie"
              >
                Selanjutnya
              </button>
            </m.div>
          )}
          {stepIndex === 2 && (
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut', stiffness: 100 }}
              className="w-full max-w-[500px] mx-auto h-full flex flex-col items-center justify-center p-4"
            >
              <textarea
                ref={inputRef}
                placeholder="Tuliskan pesan untuk aku sebagai kekasih hatimu🥰..."
                name="message"
                id="accept-message"
                className="w-full h-[300px] bg-white border resize-none outline-none p-2 rounded-md"
              />
              <p className="text-sm italic py-2">*Tulis apa yang sedang kamu rasakan padaku saat ini</p>
              {inputErrorMessage !== null && (
                <p className="self-start text-sm py-2 text-red-500">
                  {inputErrorMessage}
                </p>
              )}
              <a
                onClick={handleOnClick}
                className="my-2 block w-max text-white mx-auto px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#1da34e] transition-colors duration-200 cursor-pointer"
              >
                Kirim ke WA🥰
              </a>
            </m.div>
          )}
        </div>
      )}
      <div className="max-w-[700px] mx-auto p-4">
        <SmoothTypingText stagger={.03} text={LOVE_LETTERS} textStyles="text-md mt-4" />
        <div className="mt-6">
          <button
            disabled={isDisabled}
            onClick={() => {
              if (isAccept) {
                setStepIndex((prev) => prev + 1);
                return;
              }
              setIsAccept(true);
            }}
            type="button"
            className="block w-full mx-auto px-4 py-2 rounded-full bg-sky-500 hover:bg-sky-600 transition-colors duration-200 text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isAccept ? 'Benerrr nih??😍💕' : 'Terima:)❤️🥺'}
          </button>
          <button
            onClick={() => {
              if (isReject === null) setIsReject(false);
              if (isReject === false) setIsReject(true);
            }}
            disabled={isDisabled || isReject}
            type="button"
            className="mb-4 mt-2 block w-full mx-auto px-4 py-2 rounded-full bg-red-500 hover:bg-red-600 transition-colors duration-200 text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isReject === null && 'Tolak😊'}
            {isReject === false && 'Serius ga mau?🥺'}
            {isReject === true && 'Harus diterima pokonya😫'}
          </button>
        </div>
      </div>
    </section>
  )
}

export default LoveLetters
