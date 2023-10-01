import { Button, Grid } from "@mui/material";
import FileDropzone from "./components/FileDropzone";
import { useState } from "react";

function App() {
  const [file, setFile] = useState();

  const handleFileUpload = (file) => {
    // Perform actions with the uploaded file
    console.log("Uploaded file:", file);
    setFile(file);
  };

  const handleApiCall = () => {
    // call to python here
  };

  return (
    <>
      <Grid container justifyContent="center" sx={{ gap: 2 }}>
        <Grid item xs={12}>
          <FileDropzone onFileDrop={handleFileUpload} />
        </Grid>
        <Grid item>
          <Button variant="contained" color="warning" onClick={handleApiCall}>
            Simulate
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
