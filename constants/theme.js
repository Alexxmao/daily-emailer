import { extendTheme } from "@chakra-ui/react";

const styles = {
    global: props => ({
        body: {
            bg: "#f7d2f0",
            color: "#000000"
        }
    })
}

const theme = extendTheme({
    styles
})

export default theme;