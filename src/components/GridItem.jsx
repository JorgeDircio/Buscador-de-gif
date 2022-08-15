import { Paper } from '@mui/material'
export function GridItem({ title, url }) {
  return (
    <Paper elevation={3} className="card">
      <img src={url} />
      <p>{title}</p>
    </Paper>
  )
}
