import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
  buttonRegister: {
    color: '#FFFFFF',
    backgroundColor: 'black',
    fontWeight: 700
  }
}));

const StandardButton = () => {
  const classes = useStyles();
  const { buttonRegister } = classes;

  return (
    <>
      <Button variant="contained" className={buttonRegister}>登録</Button>
    </>
  )
}

export default StandardButton
