import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import  axios from "axios";
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
 setOpen(true);
 alert('123')
 axios.post('http://localhost:3000/save', {
  username:'michael',
  solution:props.solution,
  problems:'twosum'
 })
   .then(function (response) {

     alert(response.data);
   })
   .catch(function (error) {
     console.log(error);
   });  
  }
  const handleClose = () => setOpen(false);

  return (
    <div>
      
      <button className="btn btn-primary btn-lg me-3" onClick={handleOpen}>Save</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
       
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Save successful
          </Typography>      
        </Box>
      </Modal>
    </div>
  );
}