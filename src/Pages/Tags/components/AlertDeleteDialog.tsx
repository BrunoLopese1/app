import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

type AlertDeleleDialogProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
  onConfirm: () => void;
  title: string;
  content: string;
};

export default function AlertDeleleDialog({
  open,
  setOpen,
  onConfirm,
  title,

  content,
}: AlertDeleleDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Cancelar</Button>
        <Button
          onClick={() => {
            onConfirm();
            setOpen(false);
          }}
          autoFocus
        >
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
