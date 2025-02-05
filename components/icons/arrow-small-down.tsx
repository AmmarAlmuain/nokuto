export default function ArrowSmallDown({ className }: { className?: string }) {
  return (
    <>
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className}`}
      >
        <path
          d="M10 4.25V16.75M10 16.75L15.625 11.125M10 16.75L4.375 11.125"
          stroke="#4C4C4D"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
}
