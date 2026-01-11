import type { Dispatch, SetStateAction } from "react";

const Pagination = ({
  setPageNumber,
}: {
  setPageNumber: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="flex justify-center my-8">
      <button
        className="mx-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
        onClick={() => setPageNumber((prev) => prev + 1)}
      >
        Load more
      </button>
    </div>
  );
};
export default Pagination;
