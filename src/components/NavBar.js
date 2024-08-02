import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TvIcon from '@mui/icons-material/Tv';
import { useNavigate } from 'react-router-dom';


export default function NavBar() {
  const navigate = useNavigate()
  const [value, setValue] = React.useState(0);

  React.useEffect(()=>{
    if(value === 0){
      navigate('/')
    }
    else if(value === 1){
      navigate('/movies')
    }
    else if(value ===2){navigate('/series')}
    else if(value ===3){navigate('/search')}
  },[value])

  return (
    <Box sx={{position: 'fixed', bottom: 0, width: '100%'}}>
      <BottomNavigation sx={{ backgroundColor: '#2d313a' }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction style={{color:'white'}} label="Trending" icon={<WhatshotIcon />}  />
        <BottomNavigationAction style={{color:'white'}} label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction style={{color:'white'}} label="TV series" icon={<TvIcon />} />
        <BottomNavigationAction style={{color:'white'}} label="Search" icon={<LocationOnIcon />} />       
      </BottomNavigation>
    </Box>
  );
}
