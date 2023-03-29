import { Button, MenuItem } from '@mui/material';
import Menu from '@mui/material';
import { useState } from 'react';

const MobileMenu = () => {
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id='basic-button'
        // aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        // aria-expanded={open ? 'true' : undefined}
        // onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id='basic-menu'
        // anchorEl={anchorEl}
        // open={open}
        // onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default MobileMenu;
