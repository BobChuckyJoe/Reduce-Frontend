interface CaretIconProps {
  right?: boolean;
}

const CaretIcon = ({ right = true }: CaretIconProps) => {
  return (
    <svg
      width="26"
      height="28"
      viewBox="0 0 26 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={right ? undefined : "rotate-[60deg] -mr-1"}
    >
      <path
        d="M0.320507 5.66026C0.320508 1.81126 4.48717 -0.594375 7.82051 1.33013L22.8205 9.99038C26.1538 11.9149 26.1538 16.7261 22.8205 18.6506L7.82051 27.3109C4.48718 29.2354 0.320508 26.8298 0.320507 22.9808L0.320507 5.66026Z"
        fill="#073B4C"
      />
    </svg>
  );
};

export default CaretIcon;
