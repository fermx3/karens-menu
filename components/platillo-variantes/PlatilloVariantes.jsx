import { Paper, Typography } from '@mui/material';

import classes from './PlatilloVariantes.module.scss';

const PlatilloVariantes = ({ variantes }) => {
  return (
    <div className={classes.variantes}>
      {variantes.map((variante) => (
        <div
          key={variante.nombre}
          className={`${classes.variante} ${
            variante.desc && classes.varianteConDesc
          }`}
        >
          <div>
            <Typography variant='h6'>{variante.nombre}</Typography>
            <Typography varian='subtitle1'>{variante.name}</Typography>
          </div>
          {variante.desc && (
            <div>
              <Typography variant='body2'>{variante.desc}</Typography>
              <Typography variant='body2'>{variante.descEng}</Typography>
            </div>
          )}
          <div>
            <Typography variant='button'>{`$${variante.precio}`}</Typography>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlatilloVariantes;
