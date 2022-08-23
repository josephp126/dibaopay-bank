// import { useEffect, useState } from "react";
// import { Modal, Fade, Backdrop, Box, Typography, Button } from "@mui/material";
// import HighlightOffIcon from "@mui/icons-material/HighlightOff";

// const ModalComponent = (props) => {
//   console.log(props);
//   const [open, setOpen] = useState(false);
//   const handleClose = (e) => {
//     e.preventDefault();
//     setOpen(false);
//     localStorage.setItem("modal", "false");
//   };

//   useEffect(() => {
//     console.log(localStorage.getItem("modal"));
//     if (localStorage.getItem("modal") == "true") {
//       console.log("fa");
//       setOpen(true);
//     }
//   });

//   return (
//     <Modal
//       aria-labelledby="transition-modal-title"
//       aria-describedby="transition-modal-description"
//       open={open}
//       onClose={handleClose}
//       closeAfterTransition
//       BackdropComponent={Backdrop}
//       BackdropProps={{
//         timeout: 500,
//       }}
//     >
//       <Fade in={open}>
//         <Box sx={style}>
//           <HighlightOffIcon sx={{ color: "#f27474", fontSize: "120px" }} />
//           <Typography
//             id="transition-modal-title"
//             variant="h4"
//             component="h2"
//             color="action.active"
//             fontWeight="bold"
//             marginTop="15px"
//           >
//             ERROR
//           </Typography>
//           <Typography
//             id="transition-modal-description"
//             sx={{ mt: 2 }}
//             color="action.active"
//           >
//             {props.value}
//           </Typography>
//           <Button
//             variant="contained"
//             color="success"
//             sx={{ marginTop: "20px", paddingX: "30px" }}
//             onClick={(e) => handleClose(e)}
//           >
//             OK
//           </Button>
//         </Box>
//       </Fade>
//     </Modal>
//   );
// };

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 500,
//   maxWidth: "xs",
//   bgcolor: "background.paper",
//   boxShadow: 24,
//   borderRadius: 1.5,
//   textAlign: "center",
//   p: 4,
// };

// export default ModalComponent;
