import { useEffect, useRef, useState } from "react";
import { useRive, useStateMachineInput } from "rive-react";
import ChatBubble from "./ChatBubble";
import { useAnimationControls } from "framer-motion";
import { generateRandomNumber } from "../utils/number.utils";
import HealthBar from "./HealthBar";
import { SCENE2 } from "../constants/data";
import { motion as m } from "framer-motion";
import { useNavigate } from "react-router-dom";

const STATE_MACHINE_NAME = "Login Machine";
const INPUT_NAME = {
  isChecking: 'isChecking',
  numLook: 'numLook',
  trigFail: 'trigFail',
  trigSuccess: 'trigSuccess',
  isHandsUp: 'isHandsUp'
}

const Scene2 = () => {
  const [isValid, setIsValid] = useState(true);
  const [bubbleTitle, setBubbleTitle] = useState('');
  const [failedStep, setFailedStep] = useState(1);
  const [counter, setCounter] = useState(0);
  const [checkSuccess, setCheckSuccess] = useState(false);
  const [progress, setProgress] = useState(0);
  const [tempInputName, setTempInputName] = useState([]);
  const [modalDisplay, setModalDisplay] = useState(false);

  const inputRef = useRef(null);
  const inputNameRef = useRef(null);
  const controls = useAnimationControls();
  let energyChangeCb;

  const navigate = useNavigate();

  const { rive, RiveComponent } = useRive({
    src: 'rive/bear.riv',
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
  })

  useEffect(() => {
    setBubbleTitle('Hai dengan siapa disana? orang sedang aku cari kah hehe🤭❤️')
  }, []);

  useEffect(() => {
    let intervalId;

    if (checkSuccess) {
      intervalId = setInterval(() => {
        if (progress <= 100) {
          energyChangeCb.value = progress;
          setProgress((prevProgress) => prevProgress + 5);
        }
      }, 100);
    }

    return () => clearInterval(intervalId);
  }, [checkSuccess, progress]);

  useEffect(() => {
    if (bubbleTitle !== '') {
      controls.start('animate');
    }

    const timeoutFunc = setTimeout(() => {
      controls.start('initial');
      setTimeout(() => {
        setBubbleTitle('');
      }, 500);
    }, 5000)

    return () => {
      clearTimeout(timeoutFunc)
    }
  }, [bubbleTitle]);

  useEffect(() => {
    if (counter > 0) {
      const timer = setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [counter]);

  const onInputHandsUp = useStateMachineInput(rive, STATE_MACHINE_NAME, INPUT_NAME.isHandsUp);
  const onInputFocus = useStateMachineInput(rive, STATE_MACHINE_NAME, INPUT_NAME.isChecking);
  const onInputLook = useStateMachineInput(rive, STATE_MACHINE_NAME, INPUT_NAME.numLook);
  const onInputFail = useStateMachineInput(rive, STATE_MACHINE_NAME, INPUT_NAME.trigFail);
  const onInputSuccess = useStateMachineInput(rive, STATE_MACHINE_NAME, INPUT_NAME.trigSuccess);

  const handleOnChange = (e) => {
    if (onInputHandsUp.value) onInputHandsUp.value = false;
    !isValid && setIsValid(true);

    const { value } = e.target;

    switch (value.length) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        onInputLook.value = 1;
        break;
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
        onInputLook.value = 11;
        break;
      default:
        onInputLook.value = 111;
        break;
    }

    if (SCENE2.targetName.split(' ').includes(value.toLowerCase())) onInputHandsUp.value = true;
  }

  const handleClickButton = (e) => {
    const inputName = inputRef.current.value.toLowerCase();

    // if user can answered with correctly
    if (checkSuccess) {
      setModalDisplay(true);
      return;
    }

    // if inputName is emptyString
    if (inputName === '') {
      setBubbleTitle(SCENE2.inputNameFailed.emptyString);
      return;
    }

    if (SCENE2.targetName.split(' ')[0] === inputName) {
      setBubbleTitle(SCENE2.inputNameFailed.almostRight.firstNameMessage);
      return;
    }

    if (SCENE2.targetName.split(' ')[1] === inputName) {
      setBubbleTitle(SCENE2.inputNameFailed.almostRight.lastNameMessage);
      return;
    }

    // if inputName contain numbers
    if (/[^a-zA-Z\s]/gi.test(inputName)) {
      setBubbleTitle(SCENE2.inputNameFailed.numberExists);
      onInputHandsUp.value = true;
      setTimeout(() => {
        onInputHandsUp.value = false;
      }, 2000);
      return;
    }

    // if inputName is same with one of tempInputName
    const isContainName = tempInputName.some((name) => name === inputName);
    if (isContainName && inputName !== SCENE2.targetName) {
      setBubbleTitle(SCENE2.inputNameFailed.nameHasBeenUsed);
      return;
    } else setTempInputName([...tempInputName, inputName]);

    // failed message
    if (inputName != SCENE2.targetName && failedStep < 5) {
      switch (failedStep) {
        case 1:
          energyChangeCb.value = 60;
          setProgress(60);
          setBubbleTitle(SCENE2.failedStepMessage[1]);
          setFailedStep(2);
          break;
        case 2:
          energyChangeCb.value = 50;
          setProgress(50);
          setBubbleTitle(SCENE2.failedStepMessage[2]);
          setFailedStep(3);
          break;
        case 3:
          energyChangeCb.value = 35;
          setProgress(35);
          setBubbleTitle(SCENE2.failedStepMessage[3]);
          setFailedStep(4);
          break;
        case 4:
          energyChangeCb.value = 10;
          setProgress(10);
          setBubbleTitle(SCENE2.failedStepMessage[4]);
          setFailedStep(5);
          break;
      }

      onInputFail.fire();
      setCounter(5);
      return setIsValid(false);
    }

    // random position button
    if (inputName != SCENE2.targetName && failedStep === 5) {
      const randomNum = generateRandomNumber(3);

      switch (randomNum) {
        case 1:
          e.target.style.alignSelf = 'flex-start';
          break;
        case 2:
          e.target.style.alignSelf = 'center';
          break;
        default:
          e.target.style.alignSelf = 'flex-end';
          break;
      }
      return;
    }

    // success message
    switch (failedStep) {
      case 1:
        setBubbleTitle(SCENE2.successStepMessage[1]);
        break;
      case 2:
        setBubbleTitle(SCENE2.successStepMessage[2]);
        break;
      case 3:
        setBubbleTitle(SCENE2.successStepMessage[3]);
        break;
      case 4:
        setBubbleTitle(SCENE2.successStepMessage[4]);
        break;
      default:
        setBubbleTitle(SCENE2.successStepMessage[5]);
        break;
    }

    setCheckSuccess(true);
    setCounter(5);
    onInputSuccess.fire();

    setTimeout(() => {
      setBubbleTitle(SCENE2.afterSuccessMessage);
    }, 6000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputNameRef.current.value === '') return;
    localStorage.setItem("name", inputNameRef.current.value.toLowerCase());
    navigate('/dashboard');
    setModalDisplay(false);
  }

  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
      className="relative w-full h-screen min-h-[500px] bg-[#D6E2EA] p-2 sm:p-10"
    >
      {modalDisplay && (
        <div className="w-full bg-white absolute inset-0 flex justify-center items-center p-4 z-50">
          <m.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
            className="w-full max-w-[400px]"
            onSubmit={handleSubmit}
          >
            <input
              ref={inputNameRef}
              defaultValue={localStorage.getItem('name') || ''}
              type="text"
              className="w-full p-3 border rounded-full shadow-sm outline-none text-gray-500 invalid:animate-shake invalid:text-red-500"
              pattern="([a-zA-Z]+|\s)+"
              placeholder="Masukan nama lengkap nda❤️🥰"
            />
            <button
              type="submit"
              className="block w-max mx-auto px-4 py-2 rounded-full bg-black text-white my-4"
              onClick={handleSubmit}
            >
              Sudah
            </button>
          </m.form>
        </div>
      )}
      <div className="absolute top-0 right-0 w-[150px] sm:w-[200px] aspect-square">
        <HealthBar
          energyCbFunc={(cb) => {
            energyChangeCb = cb;
          }}
          className="-mt-10 sm:-mt-8"
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center max-w-[700px] mx-auto mt-12 sm:mt-0">
        <div className="relative w-full max-w-[300px] self-start">
          <ChatBubble animate={controls}>
            {bubbleTitle}
          </ChatBubble>
          <RiveComponent className="w-full aspect-square" />
        </div>

        <div className="bg-blue-500 w-full mx-auto py-10 px-4 sm:px-10 flex flex-col gap-6 justify-center items-center rounded">
          <input
            ref={inputRef}
            type="text"
            className={`${!isValid ? 'animate-shake text-red-500' : ''} w-full p-3 border rounded shadow-md outline-none text-gray-500 invalid:animate-shake invalid:text-red-500`}
            pattern="([a-zA-Z]+|\s)+"
            placeholder="Tuliskan nama seseorang:)"
            onFocus={() => onInputFocus.value = true}
            onChange={handleOnChange}
          />

          <button
            disabled={counter !== 0}
            type="button"
            className="p-2 font-semibold bg-white font-indie px-6 py-2 rounded-full text-blue-500 disabled:opacity-70 z-10"
            onClick={handleClickButton}>
            {counter > 0 ? `Tunggu (${counter})` : checkSuccess ? 'Lanjutkan❤️' : 'Cek'}
          </button>
        </div>
      </div>
    </m.section>
  )
}

export default Scene2;
