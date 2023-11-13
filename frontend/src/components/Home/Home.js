import { useState } from 'react'
import {
  TextField,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Grid,
} from '@mui/material/'

const Home = ({
  addToShoppingList,
  setCategory,
  category,
  products = [],
  categories = [],
}) => {
  const [value, setValue] = useState('')
  return (
    <div>
      <h1> Shooping List</h1>
      <Grid>
        <TextField
          id='filled-basic'
          label='Add product'
          variant='filled'
          onChange={(event) => {
            setValue(event.target.value)
          }}
        />
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
        <Button
          variant='contained'
          onClick={() => {
            addToShoppingList(value)
          }}
        >
          ADD
        </Button>
      </Grid>

      <Grid>
        The list
        <Grid sx={{ display: 'flex' }}>
          {categories.map((category) => {
            return (
              <Grid sx={{ margin: '12px' }}>
                <h2 size='small' key={category._id}>
                  {category.name}
                </h2>
                {Object.values(
                  products
                    .filter((product) => {
                      return product.categoryId === category._id
                    })
                    .reduce((products, product) => {
                      if (!products[product.name]) {
                        products[product.name] = {
                          product,
                          count: 0,
                        }
                      }
                      products[product.name].count++
                      return products
                    }, {}),
                ).map(({ product, count }) => {
                  return (
                    <h6 size='small'>
                      {product.name} {count > 1 ? `(${count})` : ''}
                    </h6>
                  )
                })}
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
