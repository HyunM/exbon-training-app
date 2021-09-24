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

const Index = () => {
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
              value={"09/24/2021"}
              autoOk={true}
              disableMaskedInput={true}
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
              <Typography>Collapsible Group Item #1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={acc.second} onChange={() => changeAcc("second")}>
            <AccordionSummary id="acc2">
              <Typography>Collapsible Group Item #2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={acc.third} onChange={() => changeAcc("third")}>
            <AccordionSummary id="acc3">
              <Typography>Collapsible Group Item #3</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              minHeight: "98vh",
              backgroundColor: "white",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div style={{ padding: "1%" }}>
              <p style={{ marginTop: "3px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                ege Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                ege
              </p>
              <TextField
                label="Multiline"
                fullWidth
                multiline
                rows={4}
                defaultValue="Default Value"
              />

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                ege
              </p>
              <TextField
                label="Multiline"
                fullWidth
                multiline
                rows={4}
                defaultValue="Default Value"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                ege
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                ege
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                ege
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                ege
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                ege
              </p>
              <TextField
                label="Multiline"
                fullWidth
                multiline
                rows={4}
                defaultValue="Default Value"
              />
            </div>
            <div style={{ padding: "1%", textAlign: "right" }}>
              <Button variant="outlined">NEXT</Button>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Index;
