import { Box, Typography } from "@mui/material"

const Nav = () => {

    const sx = {
        width: "100%",
        height: "10vh",
        display: "flex",
        alignItems: "center",
        padding: "0 2rem",
        backgroundColor: "rgb(164,164,164)",
        background: "linear-gradient(180deg, rgba(57,71,141,1) 78%, rgba(164,164,164,0.4) 100%)"
    }

    return (
        <Box sx={sx}>
            <Typography fontSize={40} variant="h1" color="initial">Logo</Typography>
        </Box>
    )
}


export default Nav