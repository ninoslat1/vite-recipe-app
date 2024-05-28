import { Button, Card, Container, Grid, TextField, Box, List, ListItem, ListItemText, ListSubheader, ListItemIcon, SpeedDialIcon } from '@mui/material';
import { Check } from '@mui/icons-material';
import { useRecipeAppStore } from './utils/zustand';
import { SpeedDial, SpeedDialAction } from '@mui/material';
import { useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import { TActionsSpeedDial } from './utils/interface';

function App() {
  const { inputs, submittedInputs, handleInputChange, handleAddInput, handleSubmit, resetInputs } = useRecipeAppStore()
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const actions: TActionsSpeedDial[] = [
    { icon: <ClearIcon />, name: 'Copy', action: resetInputs },
  ];

  return (
    <Box
      sx={{display: { sm: 'block', md: "flex" }}}
      flexDirection="row"
      justifyContent="space-evenly"
    >
      <Container maxWidth="sm">
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
      </Container>
      <Container maxWidth="sm">
        <Card variant="outlined" sx={{m:2, p:2}}>
        <Box display="block" flexDirection="row" justifyContent="space-evenly">
        <ListSubheader>Bahan:</ListSubheader>
          <List sx={{textAlign: 'center'}}>
              {submittedInputs.map((input, index) => (
                <ListItem sx={{py:0, my:0}}>
                  <ListItemIcon>
                    <Check sx={{fontSize: 20}}/>
                  </ListItemIcon>
                  <ListItemText key={index}>{input}</ListItemText>
                </ListItem>
              ))}
          </List>
        </Box>
        </Card>
      </Container>
      <SpeedDial
        ariaLabel="SpeedDial controlled open example"
        sx={{ position: 'absolute', bottom: 16, left: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.action}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}

export default App;