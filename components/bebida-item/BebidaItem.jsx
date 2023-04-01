import { Typography } from '@mui/material';

const BebidaItem = ({ bebidaItem: { nombre, nombres, precio, precioGde } }) => {
  return (
    <div style={{ marginTop: '10px' }}>
      <Typography variant='h6'>
        {nombre ? nombre : nombres.join(' / ')}
      </Typography>
      <Typography variant='button'>{`$${precio}`}</Typography>
      {precioGde && <Typography>{`Grande/Large - $${precioGde}`}</Typography>}
    </div>
  );
};

export default BebidaItem;
