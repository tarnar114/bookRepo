import { MoonIcon,SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";

const ThemeToggle = () => {
    const {toggleColorMode} = useColorMode()
    return ( 
        <IconButton
            colorScheme={useColorModeValue('purple','orange')}
            icon={useColorModeValue(<MoonIcon/>,<SunIcon/>)}
            onClick={toggleColorMode}>

            </IconButton>
     );
}
 
export default ThemeToggle
