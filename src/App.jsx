import React, { useState } from 'react'
import './App.css';
import SampleImage from './assets/images/sample-image.jpg'
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import { Calender, MenuBar } from './components/index';
import { Pagination } from '@material-ui/lab';
import Button from '@material-ui/core/Button';
import { fontWeight } from '@material-ui/system';



const useStyles = makeStyles(() => ({
  deleteIcon: {
    width: 100,
    height: 100,
    position: 'fixed',
    bottom: 50,
    right: 50,
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 10
  },
  buttonRegister: {
    color: '#FFFFFF',
    backgroundColor: 'black',
    fontWeight: 700
  }
}));




const App = () => {
  const classes = useStyles();
  const { deleteIcon, buttonRegister } = classes;

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="inner">
        <div className="title">トップス</div>
        <div className="box-wrapper">

          <div className="box">
            <div className="img-wrapper">
              <img className="img" src={SampleImage} alt="" />
              <div className="number">1位</div>
              <div className="button-top">
                <MenuBar handleClick={handleClick} handleClose={handleClose} anchorEl={anchorEl} open={open} />
              </div>
            </div>
            <div className="container">
              <div className="calendar">
                <Calender selectedDate={selectedDate} handleDateChange={handleDateChange} />
              </div>
              <button className="btn-register">
              <Button variant="contained" className={buttonRegister}>登録</Button>
              </button>
            </div>
          </div>

          <div className="box">
            <div className="img-wrapper">
              <img className="img" src={SampleImage} alt="" />
              <div className="number">2位</div>
              <div className="register"></div>
            </div>
            <div className="container">
              <div className="calendar">
                <input type="date" />
              </div>
              <div className="button">
                <div className="button-wrapper">
                  <button className="change btn">変更</button>
                </div>
                <div className="button-wrapper">
                  <button className="delete btn">削除</button>
                </div>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="img-wrapper">
              <img className="img" src={SampleImage} alt="" />
              <div className="number">3位</div>
              <div className="register"></div>
            </div>
            <div className="container">
              <div className="calendar">
                <input type="date" />
              </div>
              <div className="button">
                <div className="button-wrapper">
                  <button className="change btn">変更</button>
                </div>
                <div className="button-wrapper">
                  <button className="delete btn">削除</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <Pagination count={10} size="large" />


      <div className="trash">
        <DeleteIcon className={deleteIcon} />
      </div>
    </>
  );
}

export default App;
