import { Button, Container, Grid, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import React from 'react'
import professional from '../assets/15943.png'
import icon3 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon1 from '../assets/icon3.png'


import { Hidden } from '@material-ui/core'
const Entreprise = () => {
    const useStyles = makeStyles(theme => ({
        DivFlex: {
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center', 
            marginLeft: '17%',
            [theme.breakpoints.down('md')]: {
                marginLeft: '0%',

            }
        },
        bgDiv: {
            backgroundColor: '#63A2A2',
            color: 'white',
            width: 370,
            padding: 30,
            paddingLeft: 60,
            borderRadius: 10,
            marginLeft: '20%',
            [theme.breakpoints.down('md')]: {
                marginLeft: '0%',
            }

        },
        imgPro: {
            width: 370,
            height: 220,
            position: 'absolute',
            left: '6%',
            bottom: '7%'
        },
        textPro: {
            textAlign: 'center',
            [theme.breakpoints.down('md')]: {
                fontSize: 16
            }
        },
        btnList: {
            display: 'flex',
            justifyContent: 'center',
            gap: '10%',
            [theme.breakpoints.down('md')]: {
                flexDirection: 'column',
                gap: 20
            }
        },
        textCenter: {
            textAlign: 'center',
        },
        imgContaint: {
            width: 125,
            height: 125
        },

        paraContaint: {
            height: 66,
            width: 324,
            textAlign: 'center',
            color: 'gray'
        }


    }))
    const classes = useStyles()
    return (
        <div style={{ backgroundColor: '#F1F1F1', marginTop: 35, paddingTop: 15 }}>
            <Container maxWidth="lg">
                <h1 className={classes.textPro}>Vous ??tes une entreprise ?</h1>
                <div className={classes.DivFlex}>
                    <Hidden mdDown>
                        <div >
                            <img src={professional} alt="professional" className={classes.imgPro} />
                        </div>
                    </Hidden>
                    <div className={classes.bgDiv}>
                        <ul className={classes.ulTail}>
                            <li>Vous payez et combinez plusieurs logiciels inadapt??s pour avoir un travail inachev??;</li>
                            <li>Vous ??tes tout le temps dans la crainte des d??lais;</li>
                            <li>Vous perdez du temps et de l???argent ?? r??cup??rer les documents chez vos clients;</li>
                            <li>Vous souffrez de ce que vos clients ne vous font pas parvenir les pi??ces ?? temps.</li>
                            <Link to="/">Inscrivez-vous</Link>
                        </ul>
                    </div>

                </div>
                <div>
                    <p className={classes.textCenter} style={{ color: 'orange', fontWeight: 'bold', marginTop: 46 }}>FINISSEZ-EN !</p>
                    <div className={classes.btnList}>
                        <Button variant="contained" color="primary">
                            Professionnels
                        </Button>
                        <Hidden mdDown>
                            <span style={{ width: 5, height: 50, backgroundColor: 'red', display: 'inline-block', borderRadius: 10 }}></span>

                        </Hidden>
                        <Button variant="outlined" color="primary">
                            Entreprises
                        </Button>
                    </div>
                    <div style={{ marginTop: "6%", marginBottom: "6%",fontSize:18,color:"grey" }}>
                        <p className={classes.textCenter}>Passez vos dossiers sur la plateforme</p>
                        <p className={classes.textCenter}>et travaillez efficacement en peu de temps.</p>
                    </div>
                    <Grid container>
                        <Grid item xs={12} md={4} >
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign:"center" }}>
                                <div>
                                    <img src={icon1} alt="" className={classes.imgContaint} />
                                </div>
                                <h2 style={{ color: '#9A70FD' }}>Inscrivez-vous</h2>
                                <p className={classes.paraContaint}>Renseignez les informations et cr??ez votre compte.</p>

                            </div>
                        </Grid>
                        <Grid item xs={12} md={4} >
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign:"center"}}>
                                <div>
                                    <img src={icon2} alt="" className={classes.imgContaint} />
                                </div>
                                <h2 style={{ color: '#C84D2D' }}>Inscrivez vos collaborateurs</h2>
                                <p className={classes.paraContaint}>Choisissez les collaborateurs qui g??reront des dossiers ?? partir de la plateforme et veillez sur leur travail.</p>

                            </div>
                        </Grid>
                        <Grid item xs={12} md={4} >
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign:"center" }}>
                                <div>
                                    <img src={icon3} alt="" className={classes.imgContaint} />
                                </div>
                                <h2 style={{ color: '#3E7230' }}>Gagnez en productivit??</h2>
                                <p className={classes.paraContaint}>Envoyez et recevez des pi??ces, g??n??rez votre comptabilit?? et vos ??tats financiers en quelques clics.</p>

                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    )
}

export default Entreprise
