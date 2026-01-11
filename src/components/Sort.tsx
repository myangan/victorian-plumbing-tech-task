import type { Dispatch, SetStateAction } from "react";

const sortOptions = [
  { value: 1, label: "Recommended" },
  { value: 2, label: "Lowest Price" },
  { value: 3, label: "Highest Price" },
  { value: 4, label: "Highest Discount" },
];

const Sort = ({
  sort,
  onSortChange,
  stockNumber,
}: {
  sort: number;
  onSortChange: Dispatch<SetStateAction<number>>;
  stockNumber?: number;
}) => {
  return (
    <div className="mb-4 flex flex-row items-center gap-4">
      <label htmlFor="sort" className="mr-2 font-medium">
        Sort by:
      </label>
      <select
        id="sort"
        className="border border-gray-300 rounded p-2"
        value={sort}
        onChange={(e) => onSortChange(Number(e.target.value))}
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div>{stockNumber} results</div>
    </div>
  );
};

export default Sort;
