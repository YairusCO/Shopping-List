import { Grid, Typography } from '@mui/material/'
import Table from './Table'
import Form from './Form'

const Home = () => {
  return (
    <div className='home'>
      <Grid className='title-grid'>
        <Typography className='title'> Shopping List</Typography>
      </Grid>
      <Form />
      <Table />
    </div>
  )
}

export default Home
