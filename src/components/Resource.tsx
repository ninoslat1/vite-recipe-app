import { Button, Card, Grid, TextField } from '@mui/material'
import { useRecipeAppStore } from '../utils/zustand'

const Resource = () => {
  const { inputs, handleInputChange, handleAddInput, handleSubmit } = useRecipeAppStore()
  return (
    <>
        <Card variant="outlined" sx={{m:2, p:2}}>
          <Grid container direction="column" textAlign='center'>
            {inputs.map((input, index) => (
              <div key={index}>
                <TextField
                  id="standard-basic"
                  label={`Input Bahan Masakan Ke-${index+1}`}
                  placeholder={`Bahan Ke-${index+1}`}
                  variant="standard"
                  color="primary"
                  type="text"
                  fullWidth
                  value={input}
                  onChange={(e) => handleInputChange({ index, value: e.target.value })}
                />
              </div>
            ))}
            <Grid container spacing={2} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{p:2}}>
              <Grid item xs={6} textAlign={'center'}>
                <Button variant='contained' disableElevation onClick={handleAddInput}>Tambah Input</Button>
              </Grid>
              <Grid item xs={6} textAlign={'center'}>
                <Button variant='contained' disableElevation disabled={inputs.some((input) => input.trim() === "")} onClick={handleSubmit}>Submit</Button>
              </Grid>
            </Grid>
          </Grid>
        </Card>
    </>
  )
}

export default Resource