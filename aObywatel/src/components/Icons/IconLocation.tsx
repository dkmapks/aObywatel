type IconLocationProps = {
  width?: string;
};

function IconLocation(props: IconLocationProps) {
  const DEFAULT_WIDTH = 30;
  return (
    <svg
      width={props?.width || DEFAULT_WIDTH}
      height={props?.width || DEFAULT_WIDTH}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 13C13.896 13 13 12.104 13 11C13 9.896 13.896 9 15 9C16.104 9 17 9.896 17 11C17 12.104 16.104 13 15 13ZM15 8C13.343 8 12 9.343 12 11C12 12.657 13.343 14 15 14C16.657 14 18 12.657 18 11C18 9.343 16.657 8 15 8ZM8 10.602C8 7.085 11.271 4 15 4C18.729 4 22 7.085 22 10.602C22 14.057 19.437 18.145 15 25.129C10.511 18.056 8 14.057 8 10.602ZM15 3C10.802 3 7 6.403 7 10.602C7 14.8 10.469 19.812 15 27C19.531 19.812 23 14.8 23 10.602C23 6.403 19.199 3 15 3Z"
        fill="#52575F"
      />
    </svg>
  );
}

export default IconLocation;
