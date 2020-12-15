import React, { useState } from 'react'
import SampleImage from '../assets/images/sample-image.jpg'
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import { Calender, MenuBar, StandardButton, PaginationSize } from './';




const useStyles = makeStyles(() => ({
  deleteIcon: {
    width: 70,
    height: 70,
    position: 'fixed',
    bottom: 50,
    right: 50,
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 10
  }
}));




const Tops = () => {
  const classes = useStyles();
  const { deleteIcon } = classes;




  return (
    <>
      <div className="inner">
        <div className="title">Tops</div>
        <div className="box-wrapper">

          <div className="box">
            <div className="img-wrapper">
              <img className="img" src={SampleImage} alt="" />
              <div className="number">1位</div>
              <div className="button-top">
                <MenuBar />
              </div>
            </div>
            <div className="container">
              <div className="calendar">
                <Calender />
              </div>
              <button className="btn-register">
              <StandardButton />
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

      <div className="trash">
      <DeleteIcon className={deleteIcon} />
    </div>

      <PaginationSize />



    </>
  );
}

export default Tops;