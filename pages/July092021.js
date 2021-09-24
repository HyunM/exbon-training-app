import styles from "./index.module.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import DateAdapter from "@date-io/date-fns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { useState } from "react";
import { Button } from "@mui/material";
import Link from "next/link";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";

import Checkbox from "@mui/material/Checkbox";
import { UploadFile } from "@mui/icons-material";

const Accordion = styled(props => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
  "&:hover": {
    color: "#109b84",
    backgroundColor: "#eff3f2",
    border: "2px solid",
  },
}));

const AccordionSummary = styled(props => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const July092021 = () => {
  const [acc, setAcc] = useState({
    first: true,
    second: true,
    third: true,
  });

  const handleChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const [state, setState] = useState({
    gilad: false,
    jason: false,
    antoine: false,
  });

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter(v => v).length !== 2;

  const changeAcc = order => {
    if (order == "first") {
      setAcc({ ...acc, first: !acc.first });
    } else if (order == "second") {
      setAcc({ ...acc, second: !acc.second });
    } else if (order == "third") {
      setAcc({ ...acc, third: !acc.third });
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container columnSpacing={{ xs: 5 }}>
        <Grid item xs={6}>
          <LocalizationProvider dateAdapter={DateAdapter}>
            <DatePicker
              variant="inline"
              label="Date"
              inputFormat="MM/dd/yyyy"
              value={"07/09/2021"}
              autoOk={true}
              disableMaskedInput={true}
              onChange={() => {}}
              renderInput={params => (
                <TextField
                  {...params}
                  disabled={true}
                  style={{
                    backgroundColor: "white",
                  }}
                />
              )}
            />
          </LocalizationProvider>

          <br />
          <br />
          <br />
          <Accordion expanded={acc.first} onChange={() => changeAcc("first")}>
            <AccordionSummary id="acc1">
              <Typography>Change Order Form</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <a target="_blank" href="/Form.xlsx">
                  Download
                </a>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              minHeight: "98vh",
              backgroundColor: "#f7f5fa",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div style={{ padding: "1%" }}>
              <h2>Objective: Change Order</h2>
              <p style={{ marginTop: "40px", marginBottom: "50px" }}>
                The customer asked for some work to be done that was not part of
                the initial specification.
              </p>
              <div
                style={{
                  marginTop: "50px",
                  border: "2px solid #d3c1fc",
                  borderRadius: "10px",
                  padding: "1%",
                  paddingBottom: "1%",
                  backgroundColor: "#ffffff",
                }}
              >
                <p>Q1. What should be done in this case? (Multiple choice)</p>
                <FormControl
                  sx={{ m: 3, marginBottom: "5px", marginTop: "5px" }}
                  component="fieldset"
                  variant="standard"
                >
                  <FormLabel component="legend"></FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={gilad}
                          onChange={handleChange}
                          name="gilad"
                        />
                      }
                      label="omnis iste natus error sit voluptatem accusantium doloremque laudantium."
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={jason}
                          onChange={handleChange}
                          name="jason"
                        />
                      }
                      label="sit amet, consectetur, adipisci velit, sed quia non numquam eius"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={antoine}
                          onChange={handleChange}
                          name="antoine"
                        />
                      }
                      label="Duis aute irure dolor in reprehenderit in voluptate velit esse"
                    />
                  </FormGroup>
                  {/* <FormHelperText>Be careful</FormHelperText> */}
                </FormControl>
              </div>
              <div
                style={{
                  marginTop: "20px",
                  border: "2px solid #d3c1fc",
                  borderRadius: "10px",
                  padding: "1%",
                  paddingBottom: "3%",
                  backgroundColor: "#ffffff",
                }}
              >
                <p>
                  Q2. Create a Change Order with the following estimates, then
                  upload it.
                </p>
                <Button
                  variant="contained"
                  component="label"
                  style={{ marginLeft: "5%" }}
                >
                  Upload File
                  <input type="file" hidden />
                </Button>
              </div>
            </div>
            <div
              style={{
                padding: "1%",
                textAlign: "right",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Link href="July082021">
                <Button variant="outlined">PREVIOUS</Button>
              </Link>
              <Link href="#">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => confirm("Are you sure?")}
                >
                  Submit
                </Button>
              </Link>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default July092021;
