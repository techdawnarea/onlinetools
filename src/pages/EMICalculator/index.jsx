import { useState, useMemo } from "react";
import {
  Container,
  Grid,
  Card,
  Box,
  Typography,
  Slider,
  TextField,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Collapse,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import routes from "routes";
import footerRoutes from "footer.routes";

function formatIndianCurrency(num) {
  if (num == null || isNaN(num)) return "0";
  const n = Math.round(num);
  const s = n.toString();
  if (s.length <= 3) return s;
  let lastThree = s.substring(s.length - 3);
  const rest = s.substring(0, s.length - 3);
  if (rest !== "") {
    lastThree = "," + lastThree;
  }
  return rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
}

function calculateEMI(principal, annualRate, tenureYears) {
  if (principal <= 0 || annualRate <= 0 || tenureYears <= 0) {
    return { emi: 0, totalAmount: 0, totalInterest: 0 };
  }
  const monthlyRate = annualRate / 12 / 100;
  const months = Math.round(tenureYears * 12);
  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);
  const totalAmount = emi * months;
  const totalInterest = totalAmount - principal;
  return { emi, totalAmount, totalInterest };
}

function generateAmortization(principal, annualRate, tenureYears) {
  const monthlyRate = annualRate / 12 / 100;
  const months = Math.round(tenureYears * 12);
  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  let balance = principal;
  const schedule = [];

  for (let i = 1; i <= months; i++) {
    const interest = balance * monthlyRate;
    const principalPaid = emi - interest;
    balance = balance - principalPaid;

    schedule.push({
      month: i,
      year: Math.ceil(i / 12),
      emi: Math.round(emi),
      principal: Math.round(principalPaid),
      interest: Math.round(interest),
      balance: Math.max(0, Math.round(balance)),
    });
  }

  return schedule;
}

function DonutChart({ principal, interest }) {
  const total = principal + interest;
  if (total === 0) return null;

  const principalPct = principal / total;
  const radius = 80;
  const strokeWidth = 30;
  const cx = 100;
  const cy = 100;
  const circumference = 2 * Math.PI * radius;

  const interestDash = (1 - principalPct) * circumference;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Box sx={{ display: "flex", gap: 3, mb: 2, justifyContent: "center", flexWrap: "wrap" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <Box
            sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#e0e0e0", flexShrink: 0 }}
          />
          <Typography variant="caption" color="text.secondary">
            Principal amount
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <Box
            sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#5367ff", flexShrink: 0 }}
          />
          <Typography variant="caption" color="text.secondary">
            Interest amount
          </Typography>
        </Box>
      </Box>
      <svg width="200" height="200" viewBox="0 0 200 200">
        <circle cx={cx} cy={cy} r={radius} fill="none" stroke="#96a4aa" strokeWidth={strokeWidth} />
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          fill="none"
          stroke="#5367ff"
          strokeWidth={strokeWidth}
          strokeDasharray={`${interestDash} ${circumference}`}
          strokeDashoffset={circumference * 0.25}
          strokeLinecap="round"
          style={{ transition: "stroke-dasharray 0.5s ease" }}
        />
      </svg>
    </Box>
  );
}

function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [tenure, setTenure] = useState(5);
  const [interestRateText, setInterestRateText] = useState("6.5");
  const [tenureText, setTenureText] = useState("5");
  const [showAmortization, setShowAmortization] = useState(false);
  const [amortView, setAmortView] = useState("yearly");

  const { emi, totalAmount, totalInterest } = useMemo(
    () => calculateEMI(loanAmount, interestRate, tenure),
    [loanAmount, interestRate, tenure]
  );

  const amortization = useMemo(() => {
    if (!showAmortization || loanAmount <= 0 || interestRate <= 0 || tenure <= 0) return [];
    return generateAmortization(loanAmount, interestRate, tenure);
  }, [showAmortization, loanAmount, interestRate, tenure]);

  const yearlyAmortization = useMemo(() => {
    if (amortization.length === 0) return [];
    const grouped = {};
    amortization.forEach((row) => {
      if (!grouped[row.year]) {
        grouped[row.year] = { year: row.year, principal: 0, interest: 0, balance: 0 };
      }
      grouped[row.year].principal += row.principal;
      grouped[row.year].interest += row.interest;
      grouped[row.year].balance = row.balance;
    });
    return Object.values(grouped);
  }, [amortization]);

  const handleLoanAmountInput = (e) => {
    const val = parseInt(e.target.value.replace(/,/g, ""), 10);
    if (!isNaN(val) && val >= 0) setLoanAmount(Math.min(val, 100000000));
  };

  const handleInterestInput = (e) => {
    const raw = e.target.value;
    if (raw === "" || /^\d*\.?\d{0,2}$/.test(raw)) {
      setInterestRateText(raw);
      const val = parseFloat(raw);
      if (!isNaN(val) && val >= 0 && val <= 30) setInterestRate(val);
    }
  };

  const handleTenureInput = (e) => {
    const raw = e.target.value;
    if (raw === "" || /^\d*\.?\d{0,2}$/.test(raw)) {
      setTenureText(raw);
      const val = parseFloat(raw);
      if (!isNaN(val) && val >= 0 && val <= 30) setTenure(val);
    }
  };

  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <MKBox
        minHeight="30vh"
        width="100%"
        sx={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          display: "grid",
          placeItems: "center",
          pt: 10,
          pb: 6,
        }}
      >
        <Container>
          <MKTypography variant="h2" color="white" textAlign="center" mb={1}>
            EMI Calculator
          </MKTypography>
          <MKTypography variant="body1" color="white" textAlign="center" opacity={0.8}>
            Calculate your loan EMI, total interest and amortization schedule
          </MKTypography>
        </Container>
      </MKBox>

      <Container sx={{ mt: -6, mb: 6 }}>
        <Card sx={{ p: { xs: 2, md: 4 }, boxShadow: 3, borderRadius: 2 }}>
          <Grid container spacing={4}>
            {/* Left: Sliders */}
            <Grid item xs={12} md={7}>
              {/* Loan Amount */}
              <Box sx={{ mb: 4 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 1,
                  }}
                >
                  <Typography variant="body1" fontWeight="bold" color="text.primary">
                    Loan amount
                  </Typography>
                  <TextField
                    size="small"
                    value={formatIndianCurrency(loanAmount)}
                    onChange={handleLoanAmountInput}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Typography fontWeight="bold" color="primary">
                            ₹
                          </Typography>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      width: 180,
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#e8f5e9",
                        borderRadius: 2,
                        "& fieldset": { border: "none" },
                      },
                      "& input": { textAlign: "right", fontWeight: "bold" },
                    }}
                  />
                </Box>
                <Slider
                  value={loanAmount}
                  onChange={(_, val) => setLoanAmount(val)}
                  min={100000}
                  max={100000000}
                  step={50000}
                  sx={{
                    color: "#44b87f",
                    "& .MuiSlider-thumb": {
                      width: 18,
                      height: 18,
                      bgcolor: "white",
                      border: "2px solid #44b87f",
                    },
                    "& .MuiSlider-track": { height: 4 },
                    "& .MuiSlider-rail": { height: 4, bgcolor: "#e0e0e0" },
                  }}
                />
              </Box>

              {/* Interest Rate */}
              <Box sx={{ mb: 4 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 1,
                  }}
                >
                  <Typography variant="body1" fontWeight="bold" color="text.primary">
                    Rate of interest (p.a)
                  </Typography>
                  <TextField
                    size="small"
                    value={interestRateText}
                    onChange={handleInterestInput}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Typography fontWeight="bold" color="primary">
                            %
                          </Typography>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      width: 120,
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#e8f5e9",
                        borderRadius: 2,
                        "& fieldset": { border: "none" },
                      },
                      "& input": { textAlign: "right", fontWeight: "bold" },
                    }}
                  />
                </Box>
                <Slider
                  value={interestRate}
                  onChange={(_, val) => {
                    const v = Math.round(val * 100) / 100;
                    setInterestRate(v);
                    setInterestRateText(String(v));
                  }}
                  min={1}
                  max={30}
                  step={0.01}
                  sx={{
                    color: "#5367ff",
                    "& .MuiSlider-thumb": {
                      width: 18,
                      height: 18,
                      bgcolor: "white",
                      border: "2px solid #5367ff",
                    },
                    "& .MuiSlider-track": { height: 4 },
                    "& .MuiSlider-rail": { height: 4, bgcolor: "#e0e0e0" },
                  }}
                />
              </Box>

              {/* Loan Tenure */}
              <Box sx={{ mb: 4 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 1,
                  }}
                >
                  <Typography variant="body1" fontWeight="bold" color="text.primary">
                    Loan tenure
                  </Typography>
                  <TextField
                    size="small"
                    value={tenureText}
                    onChange={handleTenureInput}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Typography fontWeight="bold" color="primary">
                            Yr
                          </Typography>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      width: 120,
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#e8f5e9",
                        borderRadius: 2,
                        "& fieldset": { border: "none" },
                      },
                      "& input": { textAlign: "right", fontWeight: "bold" },
                    }}
                  />
                </Box>
                <Slider
                  value={tenure}
                  onChange={(_, val) => {
                    const v = Math.round(val * 100) / 100;
                    setTenure(v);
                    setTenureText(String(v));
                  }}
                  min={1}
                  max={30}
                  step={0.01}
                  sx={{
                    color: "#5367ff",
                    "& .MuiSlider-thumb": {
                      width: 18,
                      height: 18,
                      bgcolor: "white",
                      border: "2px solid #5367ff",
                    },
                    "& .MuiSlider-track": { height: 4 },
                    "& .MuiSlider-rail": { height: 4, bgcolor: "#e0e0e0" },
                  }}
                />
              </Box>

              {/* Results */}
              <Box sx={{ borderTop: "1px solid #e0e0e0", pt: 3, mt: 2 }}>
                {[
                  { label: "Monthly EMI", value: `₹${formatIndianCurrency(emi)}` },
                  { label: "Principal amount", value: `₹${formatIndianCurrency(loanAmount)}` },
                  { label: "Total interest", value: `₹${formatIndianCurrency(totalInterest)}` },
                  { label: "Total amount", value: `₹${formatIndianCurrency(totalAmount)}` },
                ].map((item) => (
                  <Box
                    key={item.label}
                    sx={{ display: "flex", justifyContent: "space-between", py: 1.2 }}
                  >
                    <Typography variant="body1" fontWeight="medium" color="text.primary">
                      {item.label}
                    </Typography>
                    <Typography variant="body1" fontWeight="bold" color="text.primary">
                      {item.value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>

            {/* Right: Donut Chart */}
            <Grid
              item
              xs={12}
              md={5}
              sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <DonutChart principal={loanAmount} interest={totalInterest} />
            </Grid>
          </Grid>

          {/* Amortization Section */}
          <Box sx={{ textAlign: "center", mt: 4, borderTop: "1px solid #e0e0e0", pt: 3 }}>
            <Box
              onClick={() => setShowAmortization(!showAmortization)}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                cursor: "pointer",
                gap: 1,
              }}
            >
              <Typography
                variant="body1"
                fontWeight="medium"
                fontStyle="italic"
                color="text.secondary"
              >
                Your Amortization Details (Yearly/Monthly)
              </Typography>
              <IconButton size="small">
                {showAmortization ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </Box>

            <Collapse in={showAmortization}>
              <Box sx={{ mt: 2 }}>
                <ToggleButtonGroup
                  value={amortView}
                  exclusive
                  onChange={(_, val) => val && setAmortView(val)}
                  size="small"
                  sx={{ mb: 2 }}
                >
                  <ToggleButton value="yearly">Yearly</ToggleButton>
                  <ToggleButton value="monthly">Monthly</ToggleButton>
                </ToggleButtonGroup>

                <TableContainer
                  component={Paper}
                  elevation={0}
                  sx={{ maxHeight: 400, textAlign: "left" }}
                >
                  <Table size="small" sx={{ width: "100%", tableLayout: "fixed" }}>
                    <TableHead sx={{ display: "table-header-group" }}>
                      <TableRow>
                        <TableCell sx={{ fontWeight: "bold", bgcolor: "#f5f5f5", width: "20%" }}>
                          {amortView === "yearly" ? "Year" : "Month"}
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{ fontWeight: "bold", bgcolor: "#f5f5f5", width: "27%" }}
                        >
                          Principal (₹)
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{ fontWeight: "bold", bgcolor: "#f5f5f5", width: "27%" }}
                        >
                          Interest (₹)
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{ fontWeight: "bold", bgcolor: "#f5f5f5", width: "26%" }}
                        >
                          Balance (₹)
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {(amortView === "yearly" ? yearlyAmortization : amortization).map((row) => (
                        <TableRow key={amortView === "yearly" ? row.year : row.month}>
                          <TableCell>
                            {amortView === "yearly" ? `Year ${row.year}` : `Month ${row.month}`}
                          </TableCell>
                          <TableCell align="right">{formatIndianCurrency(row.principal)}</TableCell>
                          <TableCell align="right">{formatIndianCurrency(row.interest)}</TableCell>
                          <TableCell align="right">{formatIndianCurrency(row.balance)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Collapse>
          </Box>
        </Card>
      </Container>

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default EMICalculator;
