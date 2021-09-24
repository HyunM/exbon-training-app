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

const July082021 = () => {
  const [acc, setAcc] = useState({
    first: true,
    second: true,
    third: true,
  });

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
              value={"07/08/2021"}
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
              <Typography>Daily Report - Work Completion</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <a
                  target="_blank"
                  href="https://dailyreport.exbon.com/task-completion?pid=999999"
                >
                  Link
                </a>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={acc.second} onChange={() => changeAcc("second")}>
            <AccordionSummary id="acc2">
              <Typography>Daily Report - Timesheet</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <a
                  target="_blank"
                  href="https://dailyreport.exbon.com/timesheet?pid=999999"
                >
                  Link
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
              <h2>Objective: Daily Report</h2>
              <p style={{ marginTop: "40px" }}>
                Today is the first day of construction.
              </p>
              <p>
                3 field workers worked on Task 1 for 8 hours, and ABC
                subcontractor finished 20% of Task 2.
              </p>
              <p style={{ marginTop: "40px" }}>
                Q1. Fill out timesheet and daily report for the day.
              </p>
            </div>
            <div
              style={{
                padding: "1%",
                textAlign: "right",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Link href="July012021">
                <Button variant="outlined">PREVIOUS</Button>
              </Link>
              <Link href="July092021">
                <Button variant="outlined">NEXT</Button>
              </Link>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default July082021;
