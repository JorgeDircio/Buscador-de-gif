export const getImage = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=iJXIcveBMSAf14HmsukIqDDzgadNntug&q=${category}&limit=10`;
  const response = await fetch(url);
  const { data = [] } = await response.json();

  return data.map(gif => (
    {
      id: gif.id,
      title: gif.title,
      url: gif.images.downsized_medium.url
    }
  ));
};
