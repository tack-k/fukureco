import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';


const useStyles = makeStyles(() => ({
    'wrapper': {
      display: 'flex',
      justifyContent: 'center'
    }, 
}));

const PaginationSize = () => {
  const classes = useStyles();
  const {wrapper} = classes;

  return (
    <div className={wrapper}>
    <Pagination count={10} />
  </div>
  );
}

export default PaginationSize