/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import postItem from "../services/getItem";
import { useQuery } from "@tanstack/react-query";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import Filters from "../components/Filters";
import Sort from "../components/Sort";
import { useState } from "react";
import Pagination from "../components/Pagination";
import FilerCleanUpFn from "../utils/filterCleanUpFn";

const ProductDetailPage = () => {
  const [sort, setSort] = useState<number>(1);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [filters, setFilters] = useState<{ [key: string]: unknown[] }>({});
  const [initialFacets, setInitialFacets] = useState<any>(null);

  const { slug } = useParams<{ slug: string }>();
  const { error, data, isLoading } = useQuery({
    queryKey: ["repoData", sort, slug, pageNumber, filters],
    queryFn: async () => {
      const filteredFilters = FilerCleanUpFn(filters);
      const item = await postItem({
        query: slug || "",
        pageNumber: 0,
        size: 30 * pageNumber,
        additionalPages: 0,
        sort: sort,
        facets: filteredFilters,
      });
      if (initialFacets === null) {
        setInitialFacets(item.facets);
      }
      return item;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error loading product details.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <Hero slug={slug || ""} />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        <Filters
          facets={data?.facets}
          filters={filters}
          setFilters={setFilters}
          initialFacets={initialFacets}
        />
        <div className="md:col-span-9">
          <Sort
            sort={sort}
            onSortChange={setSort}
            stockNumber={data?.pagination.total}
          />
          <ProductList products={data?.products} />
          <Pagination setPageNumber={setPageNumber} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
