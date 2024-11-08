import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = "https://api.unsplash.com/search/photos/?client_id=";

function Gallery() {
  const {
    isPending,
    isError,
    data: images,
  } = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const res = await axios.get(
        `${BASE_URL}${import.meta.env.VITE_API_KEY}&query=dog`
      );
      return res.data;
    },
  });
  console.log(images);
  if (isPending) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }
  if (isError) {
    return (
      <section className="image-container">
        <h4>Failed to fetch images</h4>
      </section>
    );
  }
  if (!images.results.length) {
    return (
      <section className="image-container">
        <h4>No Image is found :(</h4>
      </section>
    );
  }
  return (
    <section className="image-container">
      {images.results.map((image) => {
        const url = image?.urls?.regular;
        return (
          <img
            src={url}
            alt={image.alt_description}
            key={image.id}
            className="img"
          />
        );
      })}
    </section>
  );
}

export default Gallery;
