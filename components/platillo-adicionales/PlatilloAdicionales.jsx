import { Typography } from '@mui/material';

import classes from './PlatilloAdicionales.module.scss';

const PlatilloAdicionales = ({ adicionales }) => {
  return adicionales.map((adicional) => (
    <div key={adicional.name} className={classes.adicionales}>
      <Typography variant='subtitle2'>{adicional.nombre}</Typography>
      <Typography variant='subtitle2'>{adicional.name}</Typography>
      <Typography variant='button'>{`$${adicional.precio}`}</Typography>
    </div>
  ));
};

export default PlatilloAdicionales;
