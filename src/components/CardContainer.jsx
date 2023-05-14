import { Box, Grid } from "@mui/material"
import Card from "./Card"

const CardContainer = () => {

    const boxSx = {
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        padding: "3rem 0"
        }

    const gridSx = {
        width: "80%",
        height: "100%",
    }

    return (
        <Box sx={boxSx}>
            <Grid container spacing={5} sx={gridSx}>
                <Card tool={"Figma"}/>
                <Card tool={"Figma"}/>
                <Card tool={"Figma"}/>
                <Card tool={"Figma"}/>
                <Card tool={"Figma"}/>
                <Card tool={"Figma"}/>
                <Card tool={"Figma"}/>
                <Card tool={"Figma"}/>
            </Grid>
        </Box>
    )
}
export default CardContainer