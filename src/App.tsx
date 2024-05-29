import { Card, Container, Box, List, ListItem, ListItemText, ListSubheader, ListItemIcon, SpeedDialIcon } from '@mui/material';
import { Check } from '@mui/icons-material';
import { useRecipeAppStore } from './utils/zustand';
import { SpeedDial, SpeedDialAction } from '@mui/material';
import { useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import { TActionsSpeedDial } from './utils/interface';
import Resource from './components/Resource';
import { TLayout } from './utils/type';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

function App() {
  const { submittedInputs, resetInputs } = useRecipeAppStore()
  const [open, setOpen] = useState(false)
  const [layout, setLayout] = useState<TLayout>("resource")
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const actions: TActionsSpeedDial[] = [
    { icon: <ClearIcon />, name: 'Copy', action: resetInputs },
  ];

  const handleChange = (event: React.SyntheticEvent, newValue: Partial<TLayout>) => {
    event.preventDefault();
    setLayout(newValue);
  };

  return (
    <Box
      sx={{display: { sm: 'block', md: "flex" }}}
      flexDirection="row"
      justifyContent="space-evenly"
    >
      <Box sx={{ width: '50vw'}}>
        <TabContext value={layout}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Gambar" value="picture" sx={{width: '50vw'}}/>
              <Tab label="Bahan" value="resource" sx={{width: '50vw'}} />
              <Tab label="Cara Penyajian" value="step" sx={{width: '50vw'}} />
            </TabList>
        <TabPanel value="picture">Test One</TabPanel>
        <TabPanel value="resource" sx={{width: '50vw'}}>
            <Resource/>
        </TabPanel>
        <TabPanel value="step"></TabPanel>
        </TabContext>
      </Box>
      <Container maxWidth="sm">
        <Card variant="outlined" sx={{m:2, p:2}}>
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