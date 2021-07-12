import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {useMediaQuery, useTheme} from "@material-ui/core";

export default function BottomNavigationBar() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const useStyles = makeStyles((theme) => ({
        root: {
            display: `${matches ? 'none': 'flex'}`,
            width: '100vw',
            zIndex: theme.zIndex.drawer + 1,
            position: 'fixed',
            bottom: 0,
            left: 0,
            boxShadow: '0px -4px 10px 0px rgba(0, 0, 0, 0.1)',
        },
    }))
    const classes = useStyles();
    const [value, setValue] = useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon/>}/>
            <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon/>}/>
            <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon/>}/>
            <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon/>}/>
        </BottomNavigation>
    );
}
