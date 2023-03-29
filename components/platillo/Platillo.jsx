import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import PlatilloVariantes from '../platillo-variantes/PlatilloVariantes';

import classes from './Platillo.module.scss';

const Platillo = ({
  platillo: {
    nombre,
    name,
    desc,
    descEng,
    precio,
    slug,
    variantes,
    adicionales,
  },
}) => {
  return (
    <Card className={classes.card}>
      {slug ? (
        <CardMedia
          sx={{ height: 140 }}
          image={`/images/karens-menu/${slug}.jpg`}
          title={nombre}
        />
      ) : (
        <CardMedia
          sx={{ height: 140 }}
          image={`/images/karens-menu/placeholder.png`}
          title={nombre}
        />
      )}
      <CardContent>
        <div className={classes.header}>
          <Typography variant='h5'>{nombre}</Typography>
          {name && <Typography variant='subtitle1'>{name}</Typography>}
        </div>
        {adicionales &&
          adicionales.map((adicional) => (
            <div key={adicional.name} className={classes.adicionales}>
              <Typography variant='subtitle2' sx={{ fontWeight: 400 }}>
                {adicional.nombre}
              </Typography>
              <Typography variant='subtitle2' sx={{ fontWeight: 400 }}>
                {adicional.name}
              </Typography>
              <Typography
                sx={{ fontWeight: 500 }}
                varian='button'
              >{`$${adicional.precio}`}</Typography>
            </div>
          ))}
        {desc && (
          <div className={classes.body}>
            <Typography variant='body1'>{desc}</Typography>
            <Typography variant='body2'>{descEng}</Typography>
          </div>
        )}
        {precio && (
          <div className={classes.precio}>
            <Typography
              sx={{ fontWeight: 500 }}
              varian='button'
            >{`$${precio}`}</Typography>
          </div>
        )}
        {variantes && <PlatilloVariantes variantes={variantes} />}
      </CardContent>
    </Card>
  );
};

export default Platillo;
