type Query = {
  query: string;
  pageNumber: number;
  size: number;
  additionalPages: number;
  sort: number;
  facets?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any[];
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const postItem: (query: Query) => Promise<any> = async (query: Query) => {
  const response = await fetch(
    "https://spanishinquisition.victorianplumbing.co.uk/interviews/listings?apikey=yj2bV48J40KsBpIMLvrZZ1j1KwxN4u3A83H8IBvI",
    {
      method: "POST",
      body: JSON.stringify(query),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return await response.json();
};

export default postItem;
