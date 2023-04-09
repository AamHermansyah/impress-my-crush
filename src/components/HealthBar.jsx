import { memo, useCallback, useEffect, useMemo } from "react";
import { useRive, useStateMachineInput } from "rive-react"

const STATE_MACHINE_NAME = 'State Machine ';
const INPUT_NAME = 'Energy';

const HealthBar = ({ energyCbFunc, className }) => {
  const { rive, RiveComponent } = useRive({
    src: 'rive/health-bar.riv',
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
  });

  const stateMachine = useStateMachineInput(rive, STATE_MACHINE_NAME, INPUT_NAME);
  energyCbFunc(stateMachine);

  return <RiveComponent className={`${className} w-full h-full`} />
}

export default memo(HealthBar);