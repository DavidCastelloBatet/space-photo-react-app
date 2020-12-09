import { useState, useEffect } from "react";

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const rest = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=9YeKWIup9qlCnWZyMwOsXsGt0pjLRPrWpEta7KQl`
      );
      const data = await rest.json();
      console.log(data);
      setPhotoData(data);
    }
  }, []);

  if (!photoData) return <div />;
  const { url, title, date, explanation, media_type } = photoData;
  return (
    <div>
      {media_type === "image" ? (
      <img src={url} alt={title} />) : (
      <iframe
        title="space-video"
        src={url}
        frameBorder="0"
        gesture="media"
        allow="encrypted-media"
        allowFullScreen
        className="photo"
      />
      )}
      <div>
        <h1>{title}</h1>
        <p>{date}</p>
        <p>{explanation}</p>
      </div>
    </div>
  );
}