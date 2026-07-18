import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useState, useEffect, type ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import type { AppDispatch } from "../../app/store";
import type { Message, MessageFromApi } from "../../../types";

const NewMessage = () => {
  // const dispatch = useDispatch<AppDispatch>();
  // const navigate = useNavigate();

  // const [form, setForm] = useState<MessageFromApi>({
  //   author: '',
  //   message: '',
  //   datetime: '',
  //   id: ''
  // });

  // useEffect(() => {
  //   if (message) {
  //     setForm(contact);
  //   }
  // }, [contact]);

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setForm((prev) => ({ ...prev, [name]: value }));
  // };

  // const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   // if (isEdit) {
  //   //   await dispatch(editContact(form));
  //   //   navigate("/");
  //   //   return;
  //   // }

  //   if (
  //     !form.author.trim() ||
  //     !form.message.trim()
  //   ) {
  //     toast.error("Enter all data");
  //     return;
  //   }

  //   const newContact = {
  //     name: form.name,
  //     number: form.number,
  //     mail: form.mail,
  //     img: form.img,
  //   };

  //   await dispatch(addContact(newContact));
  //   await dispatch(fetchContact());
  //   navigate("/");
  // };

  return (
    <form>
      <Stack sx={{ maxWidth: 600 }}>
        <TextField
          id="outlined-basic"
          label="Enter your name"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <TextField
          id="outlined-basic"
          label="Enter new message"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <Button variant="outlined" sx={{ maxWidth: 200, mb: 7 }}>
          Add message
        </Button>
      </Stack>
    </form>
  );
};

export default NewMessage;
