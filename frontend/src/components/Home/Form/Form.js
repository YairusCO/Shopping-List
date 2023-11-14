import { useState } from 'react'

import {
  TextField,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Grid,
  Typography,
} from '@mui/material/'
const Form = ({
  addToShoppingList,
  setCategory,
  category,
  categories = [],
}) => {
  const [value, setValue] = useState('')

  return (
    <Grid className='form-grid'>
      <Grid>
        <TextField
          id='outlined-basic'
          label='Type a product'
          variant='outlined'
          onChange={(event) => {
            setValue(event.target.value)
          }}
        />
      </Grid>
      <Grid>
        <FormControl sx={{ m: 1, minWidth: 190 }}>
          <InputLabel id='demo-simple-select-label'>Category</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={category}
            label='Category'
            onChange={(event) => {
              setCategory(event.target.value)
            }}
          >
            {categories.map((category) => {
              return (
                <MenuItem size='small' key={category._id} value={category._id}>
                  {category.name}
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </Grid>
      <Grid>
        <Button
          className='add-btn'
          variant='contained'
          onClick={() => {
            addToShoppingList(value)
          }}
        >
          <Typography>Add a product</Typography>
        </Button>
      </Grid>
    </Grid>
  )
}
export default Form
