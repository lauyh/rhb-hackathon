import { Box, Grid, Modal } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const Question = ({ setIsCorrectAnswer }) => {
  return (
    <Grid container justifyContent='center' alignItems='center'>
      <p className='font-bold mt-5'>
        Oh no! Your house has been affected by flood.
      </p>
      <Image
        src='/flooded_house.png'
        width={300}
        height={300}
        alt='House Flooded'
      />
      <div className='mx-3 mb-2'>
        Earn an <span class='font-bold'>insurance amount</span> for your house
        if you get this answer right!
      </div>
      <div className='mx-3 mb-5'>
        Q: What is the process of borrowing a sum of money called?
        <div
          className='bg-slate-200 rounded-md my-1'
          onClick={() => setIsCorrectAnswer(true)}
        >
          A: Loan
        </div>
        <div className='bg-slate-200 rounded-md mb-1'>B: Budgeting</div>
        <div className='bg-slate-200 rounded-md'>C: Repayment</div>
      </div>
    </Grid>
  );
};

const CorrectMessage = () => {
  return (
    <Grid container justifyContent='center' alignItems='center' px={10}>
      <p className='font-bold mt-5 text-lg'>Congratulations!</p>
      <div className='mb-2 text-center'>
        You have earned an <span class='font-bold'>insurance amount</span> of
        VRM 2
      </div>
      <Image src='/coin.png' width={100} height={100} alt='Coin' />
    </Grid>
  );
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 15,
};

const IncidentModal = ({ setNetWorth }) => {
  const [open, setOpen] = useState(true);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const handleClose = () => {
    if (isCorrectAnswer) {
      setOpen(false);
      setNetWorth("10,002");
    }
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
         <Box style={style}>
          {isCorrectAnswer ? (
            <CorrectMessage />
          ) : (
            <Question setIsCorrectAnswer={setIsCorrectAnswer} />
          )}
        </Box> 
      </Modal>
    </>
  );
};

export default IncidentModal;
