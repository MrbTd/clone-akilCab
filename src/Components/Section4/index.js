import { Button, Container, Grid, makeStyles, Paper } from '@material-ui/core'
import React from 'react'

const Section4 = () => {
    const useStyles = makeStyles(theme => ({
        titre: {
            color: 'orange',
            fontWeight: 'bold',
            fontSize: 18
        },
        titre2: {
            fontWeight: 'bold',
            fontSize: 18
        },
        img: {
            width: 604,
            height: 525,
            [theme.breakpoints.down('md')]: {
                width: 304,
                height: 225,
            }
        },
        cardre: {
            padding: 18,
            borderLeftWidth: 8,
            borderLeftColor: 'orange',
            borderLeftStyle: 'solid',
        },
        part: {
            textAlign: "center",
            marginTop: '4%',
            color: 'blue',
            fontWeight: 'bold',
            fontSize: 25
        }
    }))
    const classes = useStyles()
    return (
        <Container maxWidth="lg">
            <Grid container>
                <Grid item xs={12} md={5}>
                    <img src="https://akilcab.com/assets/images/about.png" alt="" className={classes.img} />
                </Grid>
                <Grid item xs={12} md={2} />
                <Grid item md={5} >
                    <div className="ml-5 space-y-3">
                        <h1 className={classes.titre}>A PROPOS DE NOUS</h1>
                        <h1 className={classes.titre2}>Plateforme conçue par des experts-comptables et des entrepreneurs africains.</h1>
                        <Paper className={classes.cardre}>A l’origine d’AKILCAB nous avons des experts-comptables et des entrepreneurs africains qui vivent les mêmes problèmes que vous.</Paper>
                        <Button variant="contained">Inscrivez-vous</Button>

                    </div>
                </Grid>
            </Grid>
            <h1 className={classes.part}>Nos partenaires</h1>
            <div className="example5">
                <marquee>
                    <img src="https://akilcab.com/assets/images/strataige-partner.jpg" alt="" />
                    <img src="https://akilcab.com/assets/images/akil-partner.jpg" alt="" />
                    <img src="https://akilcab.com/assets/images/strataige-partner.jpg" alt="" />
                    <img src="https://akilcab.com/assets/images/akil-partner.jpg" alt="" />
                    <img src="https://akilcab.com/assets/images/strataige-partner.jpg" alt="" />
                    <img src="https://akilcab.com/assets/images/akil-partner.jpg" alt="" />
                    <img src="https://akilcab.com/assets/images/strataige-partner.jpg" alt="" />
                    <img src="https://akilcab.com/assets/images/akil-partner.jpg" alt="" />

                </marquee>
            </div>
        </Container>
    )
}

export default Section4
