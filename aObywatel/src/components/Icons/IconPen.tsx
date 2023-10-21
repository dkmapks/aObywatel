type IconPenProps = {
  width?: string;
};

function IconPen(props: IconPenProps) {
  const DEFAULT_WIDTH = 30;
  return (
    <svg
      width={props?.width || DEFAULT_WIDTH}
      height={props?.width || DEFAULT_WIDTH}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.028485"
        y="0.691314"
        width="4.88409"
        height="21.8664"
        rx="1.5"
        transform="matrix(0.749866 0.66159 -0.692896 0.721038 22.9865 3.17401)"
        stroke="#52575F"
      />
      <path
        d="M5.63662 23.5314L6.24764 21.1082C6.43082 20.3817 7.36063 20.109 7.9329 20.6139L9.79194 22.2541C10.3642 22.759 10.1571 23.6693 9.41658 23.9041L6.94652 24.6871C6.18656 24.928 5.44864 24.2769 5.63662 23.5314Z"
        stroke="#52575F"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default IconPen;
