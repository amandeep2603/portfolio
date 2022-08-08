import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};


const styles={
  global:{
    'html, body':{
      backgroundColor: 'black',
    }
  }

}

const fonts={
  heading:`'Montserrat', sans-serif`,
  body:`'Montserrat', sans-serif`
}



const theme = extendTheme({ config ,styles , fonts});

export default theme;
