type IconCheckProps = {
  width?: string;
};

function IconCheck(props: IconCheckProps) {
  const DEFAULT_WIDTH = 30;
  return (
    <svg
      width={props.width || DEFAULT_WIDTH}
      height={props.width || DEFAULT_WIDTH}
      viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 15.274L12.7018 20.4337C12.9013 20.7118 13.3149 20.7118 13.5144 20.4337L21 10" stroke="#52575F" stroke-linecap="round"/>
      <circle cx="15" cy="15" r="11.5" stroke="#52575F"/>
    </svg>
  );
}

export default IconCheck;
