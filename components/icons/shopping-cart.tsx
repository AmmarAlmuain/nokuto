export default function ShoppingCart({ className }: { className?: string }) {
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
          d="M1.875 2.375C1.52982 2.375 1.25 2.65482 1.25 3C1.25 3.34518 1.52982 3.625 1.875 3.625H3.02974C3.17132 3.625 3.29521 3.72019 3.33169 3.85698L5.46313 11.8499C4.11815 12.1988 3.125 13.4209 3.125 14.875C3.125 15.2202 3.40482 15.5 3.75 15.5H16.875C17.2202 15.5 17.5 15.2202 17.5 14.875C17.5 14.5298 17.2202 14.25 16.875 14.25H4.48169C4.73909 13.5218 5.43361 13 6.25 13H15.5985C15.8376 13 16.0557 12.8637 16.1604 12.6488C17.1064 10.7075 17.9319 8.69669 18.6273 6.62605C18.6826 6.46131 18.6668 6.28097 18.5837 6.12833C18.5007 5.97569 18.3578 5.86452 18.1894 5.82152C14.1712 4.79535 9.96135 4.25 5.625 4.25C5.32681 4.25 5.02921 4.25258 4.73223 4.25772L4.53948 3.5349C4.35708 2.85091 3.73762 2.375 3.02974 2.375H1.875Z"
          fill="#262626"
        />
        <path
          d="M3.125 17.375C3.125 16.6846 3.68464 16.125 4.375 16.125C5.06536 16.125 5.625 16.6846 5.625 17.375C5.625 18.0654 5.06536 18.625 4.375 18.625C3.68464 18.625 3.125 18.0654 3.125 17.375Z"
          fill="#262626"
        />
        <path
          d="M13.75 17.375C13.75 16.6846 14.3096 16.125 15 16.125C15.6904 16.125 16.25 16.6846 16.25 17.375C16.25 18.0654 15.6904 18.625 15 18.625C14.3096 18.625 13.75 18.0654 13.75 17.375Z"
          fill="#262626"
        />
      </svg>
    </>
  );
}
