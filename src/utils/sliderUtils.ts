import { useEffect, useRef } from 'react';

interface UseSliderBackgroundProps {
  backgroundColor: string;
  color: string;
}
export const useSliderBackground = ({
  backgroundColor,
  color,
}: UseSliderBackgroundProps) => {
  const sliderRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const updateSliderBackground = () => {
      const percentage =
        ((Number(slider.value) - Number(slider.min)) /
          (Number(slider.max) - Number(slider.min))) *
        100;
      slider.style.background = `linear-gradient(to right, ${color} ${percentage}%, ${backgroundColor} ${percentage}%)`;
    };

    slider.addEventListener('input', updateSliderBackground);
    updateSliderBackground();

    return () => {
      slider.removeEventListener('input', updateSliderBackground);
    };
  }, [color, backgroundColor]);

  return sliderRef;
};
