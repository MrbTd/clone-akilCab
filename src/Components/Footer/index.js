import { Grid } from '@material-ui/core'
import { Divider } from '@material-ui/core'
import { InputBase } from '@material-ui/core'
import { Container, makeStyles } from '@material-ui/core'
import React from 'react'

const Footer = () => {
    const useStyles = makeStyles(theme => ({
        bgLight: {
            backgroundColor: '#F2F2F2',
            paddingTop: 15,
            paddingBottom: 12
        },
        input: {
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: 'black',
            backgroundColor: 'white',
            paddingLeft: 10,
            flexGrow: 1
        },
        rightGrid: {
            textAlign: 'right',
            fontSize: 12,
            [theme.breakpoints.down('md')]: {
                textAlign: 'left',

            }

        },
        flexCard: {
            display: 'flex',
            color: 'gray',
            fontSize: 15,
            marginTop: -10
        },
        logoS: {
            display: 'flex',
            width: '20%',
            justifyContent: 'space-between',

        },
        divider:{
            marginTop:'5%'
        },
        dvlp:{
            display: 'flex',
            justifyContent:'space-between',
        },
        colorDevelop:{
            color:'#1F81DA',
            fontWeight:'bold',
        },
        colorDevelop1:{
            color:'#1F81AA',
        }
    }))

    const classes = useStyles()
    return (
        <div className={classes.bgLight}>
            <Container maxWidth="lg">
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={12} md={4}>
                        <img src="https://akilcab.com/assets/images/logo-off.png" alt="" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div>
                            <div className={classes.flexCard}>
                                <img src="https://akilcab.com/assets/images/icons/email.svg" alt="" />
                                <p>akilcab@akiltechnologies.com</p>
                            </div>
                            <div className={classes.flexCard}>
                                <img src="https://akilcab.com/assets/images/icons/phone-call.svg" alt="" />
                                <p>+225 22 42 74 06</p>
                            </div>
                            <div className={classes.flexCard}>
                                <img src="https://akilcab.com/assets/images/icons/maps-and-flags.svg" alt="" />
                                <p>Angré, Abidjan</p>
                            </div>
                            <p style={{ color: '#2B5C95' }}>Suivez-nous</p>
                            <div className={classes.logoS}>
                                <img src="https://akilcab.com/assets/images/fb.png" alt="" />
                                <img src="https://akilcab.com/assets/images/ln.png" alt="" />
                                <img src="https://akilcab.com/assets/images/youtube.png" alt="" />

                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4} className={classes.rightGrid}>
                        <p>Abonnez-vous à notre Newsletter</p>
                        <InputBase
                            className={classes.input}
                            placeholder="Adresse E-mail"
                        />
                        <p>Inscrivez-vous à nos dernières nouvelles et articles.</p>
                    </Grid>
                </Grid>

                <div className={classes.divider}>
                    <Divider />
                    <div className={classes.dvlp}> 
                        <p className={classes.colorDevelop1}>Développé avec ♥ par <span  className={classes.colorDevelop}>MrbTd</span></p>
                        <p className={classes.colorDevelop}>AKILCAB2017 - 2021 v. 2.0.6</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer
