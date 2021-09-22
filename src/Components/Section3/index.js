import { Divider, Grid, makeStyles } from '@material-ui/core'
import React from 'react'

const Section3 = () => {
    const useStyles = makeStyles(theme => ({
        left: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            [theme.breakpoints.down('md')]:{
                flexDirection: 'column',
            }
        },
        leftFlex: {
            display: 'flex',
            marginTop:'10%',
            alignItems: 'center',
            [theme.breakpoints.down('md')]:{
                flexDirection: 'column',
                
            }
        },
        sectionLinear:{
            color:'white',
            backgroundImage: 'linear-gradient(to left,#2A3773,#151C47)'
        },
        textCenter:{
            textAlign: 'center',
        }
    }))
    const classes = useStyles()
    return (
        <div>
            <div className={classes.sectionLinear}>
                <Grid container className="pt-4 pb-3">
                    <Grid item xs={12} md={6}>
                        <h1 className={classes.textCenter}>Souscrire à AKILCAB c’est :</h1>

                        <Grid item container className="text-white">
                            <Grid item xs={12}>
                                <div className={classes.left}>
                                    <div className="w-1/2 space-y-10">
                                        <div className={classes.leftFlex}>
                                            <img src="https://akilcab.com/assets/images/time-management.png" alt="logo" />
                                            <p>Être Productif</p>
                                        </div>
                                        <div className={classes.leftFlex}>
                                            <img src="https://akilcab.com/assets/images/time-management.png" alt="logo" />
                                            <p>Être Mobile</p>
                                        </div>
                                        <div className={classes.leftFlex}>
                                            <img src="https://akilcab.com/assets/images/loan.png" alt="logo" />
                                            <p>Gagner du temps et de l’argent</p>
                                        </div>
                                    </div>
                                    <div className="w-1/2 space-y-10">
                                        <div className={classes.leftFlex}>
                                            <img src="https://akilcab.com/assets/images/analysis.png" alt="logo" />
                                            <p>Avoir de la transparence et de la fluidité dans sa gestion</p>
                                        </div>
                                        <div className={classes.leftFlex}>
                                            <img src="https://akilcab.com/assets/images/hand.png" alt="logo" />
                                            <p>Economisez de l’argent et de l’énergie</p>
                                        </div>
                                        <div className={classes.leftFlex}>
                                            <img src="https://akilcab.com/assets/images/reading.png" alt="logo" />
                                            <p>Être apaisé et soulagé</p>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src="https://akilcab.com/assets/images/inscription.png" alt="inscription" style={{ height: 400, width: '100%' }} />
                    </Grid>

                </Grid>
            </div>
            <div style={{ marginTop: '4%',marginBottom: '2%'}}>  <Divider /></div>
        </div>
    )
}

export default Section3
