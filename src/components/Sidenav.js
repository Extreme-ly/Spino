import {Collapse, List, ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material'
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import ViewDayIcon from '@mui/icons-material/ViewDay';
import { Box } from '@mui/system'



import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import React, {useState} from "react"
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const Unit = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    padding: theme.spacing(1),
    marginLeft: theme.spacing(6), 
    textAlign: 'center',
    width: "100%", 
    color: theme.palette.common.white,
    background: theme.palette.primary.pinkhover
}));
  
function Sidenav() {
  const [collapseParent, setCollapseParent] = useState(false)
  const [collapseChild, setCollapseChild] = useState(false)

  function handleClickParent() {
    setCollapseParent(!collapseParent)
  }

  function handleClickChild() {
    setCollapseChild(!collapseChild)
  }

    return (
        <Box sx={{ margin: 0 }}>
            <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={3}
            >
              
              <List sx={{ bgcolor: 'primary.pink', width: 250.906, position: 'absolute'}}>
                  <ListItemButton onClick={handleClickParent}>
                        <ListItemIcon>
                          <ViewCarouselIcon />
                        </ListItemIcon>
                        <ListItemText primary="Routes" />
                        {collapseParent ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={collapseParent} timeout="auto" unmountOnExit>
                    <List sx={{marginLeft: 2}}>
                      <ListItemButton onClick={handleClickChild}>
                        <ListItemIcon>
                          <ViewDayIcon />
                        </ListItemIcon>
                        <ListItemText primary="Handling routes" />
                        {collapseChild ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                    </List>
                      <Collapse in={collapseChild} timeout="auto" unmountOnExit>
                        <List sx={{gap: 8}}>
                          <ListItemButton>
                            <Unit>Documentation</Unit>
                          </ListItemButton>
                        </List>
                      </Collapse>
                  </Collapse>
                </List>
            </Stack>
        </Box>
    )
}

export default Sidenav
