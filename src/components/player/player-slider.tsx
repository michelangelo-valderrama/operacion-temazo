import { Slider, type SliderProps } from "@/components/ui/slider"

type PlayerSliderProps = SliderProps

export function PlayerSlider({ className, ...props }: PlayerSliderProps) {
  return (
    <Slider
      className={className}
      defaultValue={[33]}
      max={100}
      step={1}
      {...props}
    />
  )
}
