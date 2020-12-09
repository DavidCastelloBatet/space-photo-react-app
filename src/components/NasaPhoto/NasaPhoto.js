import React from 'react';
import { useState, useEffect } from "react";

//import REACT_APP_NASA_KEY from "../../.env";
//const apiKey = REACT_APP_NASA_KEY;

//const apiKey = process.env.REACT_APP_NASA_KEY;
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

  if (!photoData) return <div>Error</div>;
  const { url, title, date, explanation, media_type } = photoData;
  return (
    <div>
      {media_type === "image" ? (
      <img src={url} alt={title} />) : (
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
      <div>
        <h1>{title}</h1>
        <p>{date}</p>
        <p>{explanation}</p>
      </div>
    </div>
  );
}
