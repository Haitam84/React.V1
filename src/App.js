import {useState} from 'react';
import { Button, Typography, Grid } from "@mui/material";


function App() {
  const [color, setColor] = useState("yellow");
  const [lang, setLang ]= useState("en");
   //const colorCode = {
            // red:"#F00",
           //  orange:"#F70",
           //  yellow:"#FF0",
           //  green:"#0F0",
            // blue:"#00F",
            // purple:"#90F",
            // black:"#000",
           //  pink:"#F0F",
            // brown:"#A52A2A"//
            // }
  const colorNamesCode = {
    red: {
    en : "red",
    fr : "rouge",
    code : "#F00"
  }
  , orange: {
    en : "orange",
    fr : "orange",
    code : "#F70"
  }, yellow: {
    en : "yellow",
    fr : "jaune",
    code : "#FF0"
  }, green: {
    en : "green",
    fr : "vert",
    code : "#0F0"
  }, blue: {
    en : "blue",
    fr : "bleu",
    code : "#00F"
  }, purple: {
    en : "purple",
    fr : "violet",
    code : "#90F"
  }, black: {
    en : "black",
    fr : "noir",
    code : "#000"
  }, pink: {
    en : "pink",
    fr : "rose",
    code : "#F0F"
  }, brown: {
    en : "brown",
    fr : "marron",
    code : "#A52A2A"
  }
  }

 
  return (
    <Grid container>
      
        <Grid item size={6} justifyContent={'center'} alignItems="center">
      <Button
      size={"6"}
      //sx={{margin:2,px:2,py:2}}
      onClick={() => setLang("en")}                                
      variant={lang === "en" ? "contained" : "outlined"}
      
>
 english
</Button>
</Grid>
            <Grid item size={6} display={'flex'} justifyContent={'center'} alignItems="center">
        <Button
             
              size={"6"}
             // sx={{margin:2,px:2,py:2}}
              onClick={() => setLang("fr")}
              variant={lang === "fr" ? "contained" : "outlined"}
             >
         francais
        </Button>
        </Grid>
     {
     Object.keys(colorNamesCode)
     .map(
      c => <Grid item size={{xl: 1, lg:2, md:3, }}>
        <Button
        variant="contained"
        sx={{backgroundColor: colorNamesCode[c]["code"], margin:2, px:2, py:2}}
        onClick={() => setColor(c)}
        >
         {c}
        </Button>
        </Grid>
        )
        }
        
        
        <Typography variant="h1" sx={{color:[color]}}>{colorNamesCode[color][lang]}</Typography>
        
        
        
           
            
            
            
        
        
        
 
    </Grid>

  );
}

export default App;
