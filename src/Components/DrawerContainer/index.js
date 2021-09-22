import {
    makeStyles, List,
    ListItem,
    ListItemIcon,
    IconButton,
    ListItemText,
    Drawer, Grid
} from '@material-ui/core';
import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const DrawerContainer = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const useStyles = makeStyles(theme => ({
        drawerContainer: {},
        iconButtonContainer: {
            marginLeft: 'auto',
            color: 'white',
        },

        menuIconToggle: {
            fontSize: '3rem',
        },
        test: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: 20,
            flexWrap: 'wrap'
        },
    }));
    const classes = useStyles();

    return (
        <Grid item xs={8} className={classes.test}>
            <IconButton
                className={classes.iconButtonContainer}
                onClick={() => setOpenDrawer(!openDrawer)}
                disableRipple>
                <MenuIcon className={classes.menuIconToggle} />
            </IconButton>
            <Drawer
                anchor='right'
                classes={{ paper: classes.drawerContainer }}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List>
                    <ListItem divider button onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText><Link className={classes.item} to="/solutions">Nos solutions</Link></ListItemText>
                        </ListItemIcon>
                    </ListItem>

                    <ListItem divider button onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText> Contact</ListItemText>
                        </ListItemIcon>
                    </ListItem>

                    <ListItem divider button onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText> Connexion</ListItemText>
                        </ListItemIcon>
                    </ListItem>

                    <ListItem divider button onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText> Holidays</ListItemText>
                        </ListItemIcon>
                    </ListItem>

                    <ListItem divider button onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText>Inscrivez-vous</ListItemText>
                        </ListItemIcon>
                    </ListItem>
                </List>
            </Drawer>
            {/* Since this is inside our toolbar we can push it to the end of the toolbar */}

        </Grid>
    )
}

export default DrawerContainer
