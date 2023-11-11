import React, {useState} from 'react';
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import LanguageIcon from "@mui/icons-material/Language";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { useTranslation } from 'next-i18next'



const Languages= ({clientSideLanguageChange}) => {

    const {t} = useTranslation("header")

    const languages = [{language:t('Ukrainian'), locale: "uk"}, {language:t('English'), locale: "en"} ];

    const [anchorElUser, setAnchorElUser] =useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleChangeLanguage = (item:string) =>{
        clientSideLanguageChange(item)
        handleCloseUserMenu()
    }


    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <Box sx={{ flexGrow: 0, mr: 3 }}>
                <Tooltip title={t("ChangeLanguage")}>
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} >
                        <LanguageIcon fontSize={"medium"} sx={{color:"white"}}/>
                    </IconButton>
                </Tooltip>
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    {languages.map((language) => (
                        <MenuItem key={language.locale} onClick={()=>handleChangeLanguage(language.locale)}>
                            <Typography textAlign="center">{language.language}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
        </>
    );
};

export default Languages;

