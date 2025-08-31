import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styles from "./PanoramaDuplicateDialog.module.scss";
import { FormValues } from "../PanoramaUpload/PanoramaUpload";

interface DeletePanoramaDialogProps {
  isDialogOpened: boolean;
  handleClickConfirm: () => void;
  handleClickCancel: () => void;
}

// https://mui.com/material-ui/react-dialog/#alerts
export default function DeletePanoramaDialogue({
  isDialogOpened,
  handleClickConfirm,
  handleClickCancel,
}: DeletePanoramaDialogProps) {
  return (
    <React.Fragment>
      <Dialog
        open={isDialogOpened}
        onClose={handleClickCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle color="error" id="alert-dialog-title">
          {"Confirm Deletion"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this image?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickCancel}>Cancel</Button>
          <Button
            color="error"
            variant="contained"
            onClick={handleClickConfirm}
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
