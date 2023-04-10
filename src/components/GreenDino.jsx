import { useRive } from "rive-react"

const ANIMATION_TYPE = 'Timeline 1';
function GreenDino() {
  const { rive, RiveComponent } = useRive({
    src: 'rive/gohjis_snack.riv',
    animations: ANIMATION_TYPE,
    autoplay: true,
  });

  return <RiveComponent className="w-full h-full" />
}

export default GreenDino