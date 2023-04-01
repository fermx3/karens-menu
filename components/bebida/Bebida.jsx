import { Card, CardContent, Typography } from '@mui/material';
import BebidaItem from '../bebida-item/BebidaItem';

import classes from './Bebida.module.scss';

const Bebida = ({ bebida: { bebidaItems, subCategoria, subCategory } }) => {
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant='h5' sx={{ textTransform: 'uppercase' }}>
          {subCategoria}
        </Typography>
        {subCategory && (
          <Typography
            variant='subtitle1'
            sx={{ marginTop: '-10px', textTransform: 'uppercase' }}
          >
            {subCategory}
          </Typography>
        )}
        <div className={classes.grid}>
          {bebidaItems.map((item) => (
            <BebidaItem key={item.nombre} bebidaItem={item} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Bebida;
