import { Grid, Typography } from '@mui/material/'

const Table = ({ products = [], categories = [], productsCount }) => {
  return (
    <Grid className='the-list'>
      <Grid sx={{ display: 'flex', justifyContent: 'center', minWidth: 700 }}>
        {categories.map((category) => {
          return (
            <Grid>
              <Grid className='category-title'>
                <Typography size='small' key={category._id}>
                  {category.name}
                </Typography>
              </Grid>
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
                productsCount ? productsCount++ : (productsCount = 1)
                return (
                  <Grid className='cell'>
                    <Typography size='small'>
                      {product.name} {count > 1 ? `(${count})` : ''}
                    </Typography>
                  </Grid>
                )
              })}
            </Grid>
          )
        })}
      </Grid>
      <Typography>Total products: {productsCount}</Typography>
    </Grid>
  )
}
export default Table
