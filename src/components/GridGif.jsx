import useFetchImages from "../hooks/useFetchImages";
import { GridItem, Progress } from "./";

export function GridGif({ category }) {
  const { images, isLoading } = useFetchImages(category);


  return (
    <>
      {
        isLoading ? <Progress /> : (
          <>
            <h3>{category}</h3>
            <div className="card-grid">
              {
                images.map((image) => <GridItem key={image.id} {...image} />)
              }
            </div>
          </>
        )
      }
    </>
  )
}
