import {  mode} from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";
const fonts={
    fonts:{
        heading:'Raleway, sans-serif',
        body:"M PLUS Rounded 1c, sans-serif"
    }
};
const config={
    initialColorMode:"dark",
    useSystemColorMode:true
};
const styles={
    global:(props)=>({
        body:{

        }
    })
}
const theme=extendTheme({fonts,config})
export default theme;