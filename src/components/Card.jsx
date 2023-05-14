import { Grid, Paper } from "@mui/material"
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types'


const Card = ({ tool }) => {

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    elevation: 6,
    padding: theme.spacing(2),
    height: "6rem",
    width: "12rem",
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    fontSize: 15,
    fontWeight: "bold",

    ":hover": {
      backgroundColor: theme.palette.accent.main,
      transform: "scale(1.05)",
      transition: "all 0.2s ease-in-out"
    }
  }));

  return (
    <Grid item xs={3}>
      <Item>{tool}</Item>
    </Grid>
  )
};

Card.propTypes = {
  tool: PropTypes.string.isRequired
};

export default Card

