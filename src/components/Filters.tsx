/* eslint-disable @typescript-eslint/no-explicit-any */
import { nanoid } from "nanoid";
import type { Dispatch, SetStateAction } from "react";

const Filters = ({
  facets,
  filters,
  setFilters,
  initialFacets,
}: {
  initialFacets: any;
  facets?: any;
  filters: { [key: string]: any[] };
  setFilters: Dispatch<SetStateAction<{ [key: string]: any[] }>>;
}) => {
  console.log({ facets });
  console.log({ initialFacets });
  return (
    <div className="my-4 p-4 md:col-span-3">
      <h2 className="text-xl font-semibold mb-2">Filter by</h2>
      <div>
        <div className="mb-4">
          {Object.keys(filters).map((key) =>
            filters[key].map((filter) => (
              <span
                key={filter.identifier}
                className="inline-block bg-blue-200 text-blue-800 text-sm px-2 py-1 rounded mr-2 mb-2 cursor-pointer"
                onClick={() => {
                  setFilters((prev) => {
                    const currentFilters = prev[key] || [];
                    const updatedFilters = currentFilters.filter(
                      (val) => val.identifier !== filter.identifier
                    );

                    return {
                      ...prev,
                      [key]: updatedFilters,
                    };
                  });
                }}
              >
                {filter.displayValue} &times;
              </span>
            ))
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {initialFacets?.map((facet: any) => {
          console.log({ facet });
          const availableFacet = facets.find(
            (f: any) => f.identifier === facet.identifier
          );

          return (
            <div
              key={nanoid()}
              className="border p-4 rounded-md bg-linear-to-r from-green-100 to-amber-100"
            >
              <h3 className="font-semibold text-xl">{facet.displayName}</h3>
              <div className="flex flex-col ml-4">
                {facet.options.map((option: any) => {
                  const availableFacetOption = availableFacet?.options.find(
                    (o: any) => o.identifier === option.identifier
                  );
                  console.log({ disabledFacet: availableFacetOption });
                  return (
                    <label
                      key={option.displayValue}
                      className="flex items-center gap-2"
                      aria-disabled={option.productCount === 0}
                      onChange={() => {
                        setFilters((prev) => {
                          const currentFilters = prev[facet.identifier] || [];
                          const isSelected = currentFilters.find(
                            (val) => val.identifier === option.identifier
                          );

                          let updatedFilters;
                          if (isSelected) {
                            updatedFilters = currentFilters.filter(
                              (val) => val.identifier !== option.identifier
                            );
                          } else {
                            updatedFilters = [...currentFilters, option];
                          }

                          return {
                            ...prev,
                            [facet.identifier]: updatedFilters,
                          };
                        });
                      }}
                    >
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        value={option.value}
                        checked={filters[facet.identifier]?.some(
                          (val) => val.identifier === option.identifier
                        )}
                        disabled={!availableFacetOption}
                      />
                      <span>{`${option.displayValue} (${
                        !availableFacetOption
                          ? 0
                          : availableFacetOption.productCount
                      })`}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filters;
