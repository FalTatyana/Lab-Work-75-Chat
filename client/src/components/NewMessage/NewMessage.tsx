import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

const NewMessage = () => {
  return (
    <form>
      <Stack sx={{maxWidth: 600}}>
        <TextField
          id="outlined-basic"
          label="Enter your name"
          variant="outlined"
          sx={{mb: 2}}
        />
        <TextField
          id="outlined-basic"
          label="Enter new message"
          variant="outlined"
          sx={{mb: 2}}
        />
        <Button variant="outlined" sx={{maxWidth: 200}}>Add message</Button>
      </Stack>
    </form>
  );
};

export default NewMessage;
