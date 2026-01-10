import { useParams } from "react-router-dom";
import postItem from "../services/getItem";
import { useQuery } from "@tanstack/react-query";
import Hero from "../components/Hero";

const ProductDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { isPending, error, data, isFetching, isLoading } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      return await postItem({
        query: slug || "",
        pageNumber: 0,
        size: 0,
        additionalPages: 0,
        sort: 1,
      });
    },
  });
  console.log({ isPending, error, data, isFetching });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container mx-auto">
      <Hero slug={slug || ""} />
    </div>
  );
};

export default ProductDetailPage;
