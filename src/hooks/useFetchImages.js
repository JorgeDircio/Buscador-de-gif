import { useEffect, useState } from "react";
import { getImage } from "../helpers/getImages";


export default function useFetchImages(category) {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    setImages(await getImage(category));
    setIsLoading(false);
  }

  useEffect(() => {
    // set timeout to observe the linear progress
    setTimeout(() => {
      getImages();
    }, 3000);
  }, [])


  return {
    images,
    isLoading
  }
}
