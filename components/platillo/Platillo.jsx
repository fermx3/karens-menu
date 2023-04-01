import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import PlatilloAdicionales from '../platillo-adicionales/PlatilloAdicionales';
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
  cardCarlitos,
}) => {
  return (
    <Card
      className={
        cardCarlitos ? `${classes.cardCarlitos}` : `${classes.cardKarens}`
      }
    >
      {slug ? (
        <CardMedia
          sx={{ height: 220 }}
          image={`/images/karens-menu/${slug}.jpg`}
          title={nombre}
        />
      ) : (
        <CardMedia
          sx={{ height: 220 }}
          image={`/images/karens-menu/placeholder.jpg`}
          title={nombre}
        />
      )}
      <CardContent>
        <div className={classes.header}>
          <Typography variant='h5'>{nombre}</Typography>
          {name && <Typography variant='subtitle1'>{name}</Typography>}
        </div>
        {adicionales && <PlatilloAdicionales adicionales={adicionales} />}
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
              variant='button'
            >{`$${precio}`}</Typography>
          </div>
        )}
        {variantes && <PlatilloVariantes variantes={variantes} />}
      </CardContent>
    </Card>
  );
};

export default Platillo;
