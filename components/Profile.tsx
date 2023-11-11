import React, {useState} from 'react';
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import {useTranslation} from "next-i18next";
import Link from "next/link";

const Profile = () => {
    const {i18n, t} = useTranslation("header")

    const settings = [{name:t('Profile'), path:'/login'}, {name:t('Logout'), path:'/'}];

    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);


    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title={t("OpenSettings")}>
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} >
                        <PersonIcon fontSize={"medium"} sx={{color:"white"}}/>
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
                    open={!!anchorElUser}
                    onClose={handleCloseUserMenu}
                >
                    {settings.map((setting) => (
                        <MenuItem key={setting.path} onClick={handleCloseUserMenu}>
                            <Typography textAlign="center"><Link href={setting.path} locale={i18n.language}>{setting.name}</Link></Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>

        </>
    );
};

export default Profile;
