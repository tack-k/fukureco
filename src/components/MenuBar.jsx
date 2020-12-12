import React, {useState} from 'react';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const MenuBar = () => {
const [anchorEl, setAnchorEl] = useState(null);

const options = [
  '変更',
  '削除',
];


const open = Boolean(anchorEl);

const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleClose = () => {
  setAnchorEl(null);
};



const ITEM_HEIGHT = 48;

  return (
    <div>
    <IconButton
      aria-label="more"
      aria-controls="long-menu"
      aria-haspopup="true"
      onClick={handleClick}
    >
      <MoreVertIcon />
    </IconButton>
    <Menu
      id="long-menu"
      anchorEl={anchorEl}
      keepMounted
      open={open}
      onClose={handleClose}
      PaperProps={{
        style: {
          maxHeight: ITEM_HEIGHT * 4.5,
          width: '20ch',
        },
      }}
    >
      {options.map((option) => (
        <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
          {option}
        </MenuItem>
      ))}
    </Menu>
  </div>
  )
}

export default MenuBar
