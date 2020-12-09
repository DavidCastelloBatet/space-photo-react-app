import React from "react";
import { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";

//const apiKey = process.env['NASA_API_KEY'];
const apiKey = "7SDRswHzxTzfuOuovoD2qjC7lh5aToGXy3sk3IMj";

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const rest = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );
      const data = await rest.json();
      console.log(data);
      setPhotoData(data);
    }
  }, []);

  if (!photoData) return <div />;
  const { url, title, date, explanation, media_type } = photoData;
  return (
    <div className="container">
      <div className="image">
        {media_type === "image" ? (
          <img src={url} alt={title} />
        ) : (
          <iframe
            title="space-video"
            src={url}
            frameBorder="0"
            //gesture="media"
            allow="autoplay; fullscreen"
            //allowFullScreen
            className="photo"
          />
        )}
      </div>
      <div className="explan">
        <div>
          <h1>{title}</h1>
          <p>{date}</p>
          <p>{explanation}</p>
        </div>

        <NavBar />
      </div>
    </div>
  );
}
