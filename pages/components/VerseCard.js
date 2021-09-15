import React from "react";

const VerseCard = () => {
  return (
    <div className="bg-white shadow-xl border border-white mt-6 rounded-md p-6 hover:bg-yellow-100 hover:shadow-none hover:border-yellow-500 hover:border-2 ">
      <h3 className="text-yellow-600 font-bold">Chapter 1</h3>
      <h2 className="text-xl font-bold">Sraddhatraya Vibhaga Yoga</h2>
      <p className="text-gray-500 mt-2">
        Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus.
        Voluptas iusto libero adipisci rem et corporis.
      </p>

      <div className="flex justify-between">
        <div className="flex text-sm align-middle mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
            />
          </svg>
          42 Verses
        </div>

        <div className="flex mt-4">
          <div className="flex text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
            2
          </div>

          <div className="flex text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
</svg>
            2
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerseCard;
