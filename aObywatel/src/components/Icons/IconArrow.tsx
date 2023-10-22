type IconArrowProps = {
  width?: number;
};

function IconArrow(props: IconArrowProps) {
  const DEFAULT_WIDTH = 30;
  return (
    <svg
      width={props?.width || DEFAULT_WIDTH}
      style={{minWidth: props?.width ? props.width : DEFAULT_WIDTH + 'px'}}
      viewBox="0 0 30 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 10.5H30M2 10.5L12 1M2 10.5L12 20.5"
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  );
}

export default IconArrow;
