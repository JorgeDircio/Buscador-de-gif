import { useState } from "react";
import { AddCategory, GridGif } from "./components";


export default function AppGifExpert() {
  const [categories, setCategories] = useState(['Dragon Ball']);

  const addCategories = (newValue) => {
    setCategories([newValue, ...categories])
  }

  return (
    <>
      <h1>GIF EXPERT</h1>

      <AddCategory onAddCategory={addCategories} />

      {
        categories.map(category => <GridGif key={category} category={category} />)
      }
    </>
  )
}
