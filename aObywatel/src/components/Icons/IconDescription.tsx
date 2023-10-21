const DEFAULT_WIDTH = "24px";

interface DescriptionProps {
  width?: string;
}

export default function Description(props: DescriptionProps) {
  return (
    <svg
      width={props?.width || DEFAULT_WIDTH}
      height={props?.width || DEFAULT_WIDTH}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 20.75C18 20.336 17.664 20 17.25 20H5.75C5.336 20 5 20.336 5 20.75C5 21.164 5.336 21.5 5.75 21.5H17.25C17.664 21.5 18 21.164 18 20.75ZM25 16.75C25 16.336 24.664 16 24.25 16H5.75C5.336 16 5 16.336 5 16.75C5 17.164 5.336 17.5 5.75 17.5H24.25C24.664 17.5 25 17.164 25 16.75ZM25 12.75C25 12.336 24.664 12 24.25 12H5.75C5.336 12 5 12.336 5 12.75C5 13.164 5.336 13.5 5.75 13.5H24.25C24.664 13.5 25 13.164 25 12.75ZM25 8.75C25 8.336 24.664 8 24.25 8H5.75C5.336 8 5 8.336 5 8.75C5 9.164 5.336 9.5 5.75 9.5H24.25C24.664 9.5 25 9.164 25 8.75Z"
        fill="#52575F"
      />
    </svg>
  );
}
