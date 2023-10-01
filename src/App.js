import { Button, CircularProgress, Divider, Grid } from "@mui/material";
import FileDropzone from "./components/FileDropzone";
import { useState } from "react";
import axios from "axios";
import MyTable from "./components/SimReport";

function App() {
  const [file, setFile] = useState();
  const [simBtn, setSimBtn] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [simData, setSimData] = useState(false);

  const handleFileUpload = (file) => {
    // Perform actions with the uploaded file
    console.log("Uploaded file:", file);
    setFile(file);
    setSimBtn(true);
  };

  const handleApiCall = async () => {
    const formData = new FormData();
    formData.append("file", file);
    console.log(formData);
    try {
      setSpinner(true);
      const response = await axios.post("http://localhost:5000/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      setSimData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setSpinner(false);
    }
  };

  return (
    <>
      <Grid container justifyContent="center" sx={{ gap: 2 }}>
        <Grid item xs={12}>
          <FileDropzone
            onFileDrop={handleFileUpload}
            setFile={setFile}
            setSimBtn={setSimBtn}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="warning"
            onClick={handleApiCall}
            disabled={!!simBtn === false}
          >
            {!spinner ? "Simulate" : <CircularProgress color="warning" />}
          </Button>
        </Grid>
      </Grid>
      {simData && (
        <>
          <Divider orientation="horizontal" sx={{ margin: "20px 0" }} />
          <MyTable data={simData} />
        </>
      )}
    </>
  );
}

export default App;
