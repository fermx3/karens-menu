import { IconButton, Typography } from '@mui/material';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div>
        <Typography variant='overline' paragraph>
          Todos nuestros precios están en pesos mexicanos MXN
        </Typography>
        <Typography variant='overline' paragraph>
          All of our prices are in Mexican Pesos MXN
        </Typography>
      </div>
      <IconButton href='#' aria-label='regresar al inicio' size='large'>
        <ArrowCircleUpIcon sx={{ fill: 'aliceblue' }} fontSize='large' />
      </IconButton>
    </footer>
  );
};

export default Footer;
