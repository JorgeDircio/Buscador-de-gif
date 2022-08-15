import { useState } from "react"

export function AddCategory({ onAddCategory }) {
  const [value, setValue] = useState('');

  const onValueChange = (event) => {
    setValue(event.target.value);
  }

  const handleSumbit = (event) => {
    event.preventDefault();
    const newValue = value.trim();
    if(newValue.length <= 1) return;

    onAddCategory(newValue);
    setValue('');
  }

  return (
    <form onSubmit={handleSumbit}>
      <input type="text" placeholder="Buscar gifs" value={value} onChange={onValueChange} />
    </form>
  )
}
