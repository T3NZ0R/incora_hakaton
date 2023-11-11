import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useState, type FC } from 'react'

export const Footer: FC = () => {

  const [value,setValue] = useState<string|undefined>(undefined);
  
  return (
    <footer>

    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      sx={{
        height:"80px",
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: 'black',
      }}
    >

      <BottomNavigationAction label="contact us" sx={{color:"white"}}/>
      <BottomNavigationAction label="About us" sx={{color:"white"}}/>
      <BottomNavigationAction label="Home" sx={{color:"white"}}/>

    </BottomNavigation>

    </footer>
  );
}