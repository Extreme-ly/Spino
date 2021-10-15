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
    background: theme.palette.primary.typehover
}));
  
function Sidenav() {
  const [introduction, setintroduction] = useState(false)
  const [introductionChild, setintroductionChild] = useState(false)
  
  const [route, setroute] = useState(false)
  const [routeChild, setrouteChild] = useState(false)

  function handleClickRouteChild() { setrouteChild(!routeChild) }
  function handleClickRoute() { setroute(!route) }
  function handleClickIntroduction() { setintroduction(!introduction) }
  function handleClickIntroductionChild() { setintroductionChild(!introductionChild) }


    return (
        <Box sx={{ margin: 0 }}>
            <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={3}
            >
              
              <List sx={{ bgcolor: 'primary.type', width: 250.906, position: 'absolute'}}>
                  <ListItemButton onClick={handleClickIntroduction}>
                        <ListItemIcon>
                          <ViewCarouselIcon />
                        </ListItemIcon>
                        <ListItemText primary="Introduction" sx={{ color: ''}} />
                        {introduction ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={introduction} timeout="auto" unmountOnExit>
                    <List sx={{marginLeft: 2}}>
                      <ListItemButton onClick={handleClickIntroductionChild}>
                        <ListItemIcon>
                          <ViewDayIcon />
                        </ListItemIcon>
                        <ListItemText primary="Handling Routes" />
                        {introductionChild ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                    </List>
                      <Collapse in={introductionChild} timeout="auto" unmountOnExit>
                        <List sx={{gap: 8}}>
                          <ListItemButton>
                            <Unit>Documentation</Unit>
                          </ListItemButton>
                        </List>
                      </Collapse>
                  </Collapse>

                  <ListItemButton onClick={handleClickRoute}>
                        <ListItemIcon>
                          <ViewCarouselIcon />
                        </ListItemIcon>
                        <ListItemText primary="Routes" sx={{ color: ''}} />
                        {route ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={route} timeout="auto" unmountOnExit>
                        <List sx={{gap: 8}}>
                          <ListItemButton>
                            <Unit>Documentation</Unit>
                          </ListItemButton>
                        </List>
                  </Collapse>
                </List>
            </Stack>
        </Box>
    )
}

export default Sidenav
