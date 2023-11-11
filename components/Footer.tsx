import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useState, type FC } from 'react'
import {useTranslation} from "next-i18next";

export const Footer: FC = () => {

  const {t} = useTranslation("header")


  const pages = [
    {
      name: t('Home'),
      path: '/'
    },
    {
      name: t('Donation'),
      path: 'donations'
    },
    {
      name: t('AboutUs'),
      path: '/'
    }];
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
        width: '100%',
        marginTop: "120px",
        backgroundColor: 'black',
      }}
    >

      {pages.map((page, index)=><BottomNavigationAction key={index} label={page.name} href={page.path} sx={{color: "white"}}/>)}


    </BottomNavigation>

    </footer>
  );
}
