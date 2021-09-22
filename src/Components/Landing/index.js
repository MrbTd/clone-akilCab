import { AppBar } from '@material-ui/core'
import { Toolbar } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { useMediaQuery } from '@material-ui/core'
import { Container, makeStyles } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/landing-background.png'
import log from '../assets/logo.png'
import { useTheme } from '@material-ui/core/styles';
import DrawerContainer from '../DrawerContainer'

const Landing = () => {

    const usetyles = makeStyles(theme => ({
        root: {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${logo})`,
            height: "700px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            [theme.breakpoints.down("sm")]: {
                fontSize: "3em"
            }
        },
        header: {
            backgroundColor: 'transparent',
        },
        imgLogo: {
            width: 128
        },
        test: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: 20,
            flexWrap: 'wrap'
        },
        item: {
            fontSize: 15,
            cursor: 'pointer',
            textDecoration: 'none',
            color: 'white'
        },
        centerText: {
            textAlign: 'center',
            minHeight: "70vh",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: 15,
            
        }
    }))

    const classes = usetyles()
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <div className={classes.root}>
            <Container maxWidth="lg">
                <AppBar position="static" elevation={0} className={classes.header}>
                    <Toolbar>
                        <Grid container>
                            <Grid item xs={4}>
                                <div>
                                    <img src={log} alt="" className={classes.imgLogo} />
                                </div>
                            </Grid>
                            {
                                isMatch ? <DrawerContainer /> : <Grid item md={8} className={classes.test}>
                                    <Link className={classes.item} to="/">Accueil</Link>
                                    <Link className={classes.item} to="/solutions">Nos solutions</Link>
                                    <Link className={classes.item} to="/contact">Contact</Link>
                                    <Link className={classes.item} to="/connexion">Connexion</Link>
                                    <Link className={classes.item} to="/inscrire">Inscrivez-vous</Link>

                                </Grid>
                            }

                        </Grid>
                    </Toolbar>
                </AppBar>
                <div className={classes.centerText}>
                    <div>
                        <p> Professionnels et entreprises</p>
                        <h1>Plateforme de gestion pour faciliter votre travail,</h1>
                        <h3>économiser et gagner de l’argent.</h3>
                        <Link to='/'>Inscrivez'vous</Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Landing
