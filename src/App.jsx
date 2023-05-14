import { Box } from "@mui/material";
import { useTheme } from '@emotion/react';
import Nav from "./components/Nav.jsx";
import CardContainer from "./components/CardContainer.jsx";


function App() {
  const theme = useTheme()

  const sx = {
    maxWidth: "100vw",
    minHeight: "100%",
    backgroundColor: theme.palette.primary.main,
    overflowX: "hidden",
  };

  return (
    <Box className="app" sx={sx}>
      <Nav />
      <CardContainer />
    </Box>
  )
}

export default App