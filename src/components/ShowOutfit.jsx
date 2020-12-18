import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";


const showOutfit = (props) => {
  console.log(props.isUpload)
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      
      {props.isUpload ? (
      <>
        <DialogTitle id="alert-dialog-title">この日のコーディネート</DialogTitle>
        <DialogContent>

        </DialogContent>
      </>
      ) : (
      <>
        <DialogTitle id="alert-dialog-title">コーディネートを登録する</DialogTitle>
        <DialogContent>

        </DialogContent>
      </>

      )}
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          閉じる
        </Button>
        
      </DialogActions>
    </Dialog>
  );
};

export default showOutfit;