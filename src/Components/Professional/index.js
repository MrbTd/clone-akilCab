import { Container, Grid, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import React from 'react'
import professional from '../assets/professional.png'
import { Hidden } from '@material-ui/core'
const Professinal = () => {
    const useStyles = makeStyles(theme => ({
        DivFlex: {
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '-17%',
            [theme.breakpoints.down('md')]: {
                marginLeft: '0%',

            }
            
            
        },
        bgDiv: {
            backgroundColor: '#6F95C3',
            color:'white',
            width:370,
            padding:30,
            paddingRight:60,
            borderRadius:6,
          
        },
        
        imgPro: {
            width: 370,
            height:220,
           position:'absolute',
           right: '12%',
           bottom:'7%',
            [theme.breakpoints.down('md')]: {
                right: '6%',
            }
        },
        textPro: {
            textAlign: 'center',
            [theme.breakpoints.down('md')]:{
                fontSize:16
            }
          
        }
    }))
    const classes = useStyles()
    return (
      <div style={{}}>
            <Container maxWidth="lg">
            <h1 className={classes.textPro}>Vous êtes un professionnel ?</h1>
            <div className={classes.DivFlex}>
                <div className={classes.bgDiv}>
                    <ul className={classes.ulTail}>
                        <li>Vous payez et combinez plusieurs logiciels inadaptés pour avoir un travail inachevé;</li>
                        <li>Vous êtes tout le temps dans la crainte des délais;</li>
                        <li>Vous perdez du temps et de l’argent à récupérer les documents chez vos clients;</li>
                        <li>Vous souffrez de ce que vos clients ne vous font pas parvenir les pièces à temps.</li>
                        <Link to="/">Inscrivez-vous</Link>
                    </ul>
                </div>
                <Hidden mdDown>
                    <div >
                        <img src={professional} alt="professional" className={classes.imgPro} />
                    </div>
                </Hidden>
            </div>
        </Container>
      </div>
    )
}

export default Professinal
