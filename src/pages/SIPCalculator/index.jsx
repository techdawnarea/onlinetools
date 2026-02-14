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
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import routes from "routes";
import footerRoutes from "footer.routes";
import AdComponent from "../../Ad/AdComponent";

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

function calculateSIP(monthlyInvestment, annualRate, years) {
  if (monthlyInvestment <= 0 || annualRate <= 0 || years <= 0) {
    return { investedAmount: 0, estimatedReturns: 0, totalValue: 0 };
  }
  const monthlyRate = annualRate / 12 / 100;
  const months = Math.round(years * 12);
  const totalValue =
    monthlyInvestment *
    ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
    (1 + monthlyRate);
  const investedAmount = monthlyInvestment * months;
  const estimatedReturns = totalValue - investedAmount;
  return { investedAmount, estimatedReturns, totalValue };
}

function generateYearlyBreakdown(monthlyInvestment, annualRate, years) {
  const monthlyRate = annualRate / 12 / 100;
  const months = Math.round(years * 12);
  const breakdown = [];
  let totalInvested = 0;
  let currentValue = 0;

  for (let m = 1; m <= months; m++) {
    currentValue = (currentValue + monthlyInvestment) * (1 + monthlyRate);
    totalInvested += monthlyInvestment;

    if (m % 12 === 0 || m === months) {
      const year = Math.ceil(m / 12);
      breakdown.push({
        year,
        investedAmount: Math.round(totalInvested),
        wealthGained: Math.round(currentValue - totalInvested),
        totalValue: Math.round(currentValue),
      });
    }
  }

  return breakdown;
}

function DonutChart({ invested, returns }) {
  const total = invested + returns;
  if (total === 0) return null;

  const investedPct = invested / total;
  const radius = 80;
  const strokeWidth = 30;
  const cx = 100;
  const cy = 100;
  const circumference = 2 * Math.PI * radius;

  const returnsDash = (1 - investedPct) * circumference;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Box sx={{ display: "flex", gap: 3, mb: 2, justifyContent: "center", flexWrap: "wrap" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <Box
            sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#e0e0e0", flexShrink: 0 }}
          />
          <Typography variant="caption" color="text.secondary">
            Invested amount
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <Box
            sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#5367ff", flexShrink: 0 }}
          />
          <Typography variant="caption" color="text.secondary">
            Est. returns
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
          strokeDasharray={`${returnsDash} ${circumference}`}
          strokeDashoffset={circumference * 0.25}
          strokeLinecap="round"
          style={{ transition: "stroke-dasharray 0.5s ease" }}
        />
      </svg>
    </Box>
  );
}

function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(25000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);
  const [expectedReturnText, setExpectedReturnText] = useState("12");
  const [timePeriodText, setTimePeriodText] = useState("10");
  const [showBreakdown, setShowBreakdown] = useState(false);

  const { investedAmount, estimatedReturns, totalValue } = useMemo(
    () => calculateSIP(monthlyInvestment, expectedReturn, timePeriod),
    [monthlyInvestment, expectedReturn, timePeriod]
  );

  const yearlyBreakdown = useMemo(() => {
    if (!showBreakdown || monthlyInvestment <= 0 || expectedReturn <= 0 || timePeriod <= 0)
      return [];
    return generateYearlyBreakdown(monthlyInvestment, expectedReturn, timePeriod);
  }, [showBreakdown, monthlyInvestment, expectedReturn, timePeriod]);

  const handleInvestmentInput = (e) => {
    const val = parseInt(e.target.value.replace(/,/g, ""), 10);
    if (!isNaN(val) && val >= 0) setMonthlyInvestment(Math.min(val, 10000000));
  };

  const handleReturnInput = (e) => {
    const raw = e.target.value;
    if (raw === "" || /^\d*\.?\d{0,2}$/.test(raw)) {
      setExpectedReturnText(raw);
      const val = parseFloat(raw);
      if (!isNaN(val) && val >= 0 && val <= 30) setExpectedReturn(val);
    }
  };

  const handleTimePeriodInput = (e) => {
    const raw = e.target.value;
    if (raw === "" || /^\d*$/.test(raw)) {
      setTimePeriodText(raw);
      const val = parseInt(raw, 10);
      if (!isNaN(val) && val >= 0 && val <= 40) setTimePeriod(val);
    }
  };

  const sliderSx = {
    color: "#5367ff",
    "& .MuiSlider-thumb": {
      width: 18,
      height: 18,
      bgcolor: "white",
      border: "2px solid #5367ff",
    },
    "& .MuiSlider-track": { height: 4 },
    "& .MuiSlider-rail": { height: 4, bgcolor: "#e0e0e0" },
  };

  const inputSx = {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#e8f5e9",
      borderRadius: 2,
      "& fieldset": { border: "none" },
    },
    "& input": { textAlign: "right", fontWeight: "bold" },
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
            SIP Calculator
          </MKTypography>
          <MKTypography variant="body1" color="white" textAlign="center" opacity={0.8}>
            Calculate returns on your Systematic Investment Plan (SIP)
          </MKTypography>
        </Container>
      </MKBox>

      <Container sx={{ mt: -6, mb: 6 }}>
        <Card sx={{ p: { xs: 2, md: 4 }, boxShadow: 3, borderRadius: 2 }}>
          <Grid container spacing={4}>
            {/* Left: Sliders */}
            <Grid item xs={12} md={7}>
              {/* Monthly Investment */}
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
                    Monthly investment
                  </Typography>
                  <TextField
                    size="small"
                    value={formatIndianCurrency(monthlyInvestment)}
                    onChange={handleInvestmentInput}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Typography fontWeight="bold" color="primary">
                            ₹
                          </Typography>
                        </InputAdornment>
                      ),
                    }}
                    sx={{ width: 180, ...inputSx }}
                  />
                </Box>
                <Slider
                  value={monthlyInvestment}
                  onChange={(_, val) => setMonthlyInvestment(val)}
                  min={500}
                  max={1000000}
                  step={500}
                  sx={{
                    ...sliderSx,
                    color: "#44b87f",
                    "& .MuiSlider-thumb": {
                      ...sliderSx["& .MuiSlider-thumb"],
                      border: "2px solid #44b87f",
                    },
                  }}
                />
              </Box>

              {/* Expected Return Rate */}
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
                    Expected return rate (p.a)
                  </Typography>
                  <TextField
                    size="small"
                    value={expectedReturnText}
                    onChange={handleReturnInput}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Typography fontWeight="bold" color="primary">
                            %
                          </Typography>
                        </InputAdornment>
                      ),
                    }}
                    sx={{ width: 120, ...inputSx }}
                  />
                </Box>
                <Slider
                  value={expectedReturn}
                  onChange={(_, val) => {
                    const v = Math.round(val * 100) / 100;
                    setExpectedReturn(v);
                    setExpectedReturnText(String(v));
                  }}
                  min={1}
                  max={30}
                  step={0.5}
                  sx={sliderSx}
                />
              </Box>

              {/* Time Period */}
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
                    Time period
                  </Typography>
                  <TextField
                    size="small"
                    value={timePeriodText}
                    onChange={handleTimePeriodInput}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Typography fontWeight="bold" color="primary">
                            Yr
                          </Typography>
                        </InputAdornment>
                      ),
                    }}
                    sx={{ width: 120, ...inputSx }}
                  />
                </Box>
                <Slider
                  value={timePeriod}
                  onChange={(_, val) => {
                    setTimePeriod(val);
                    setTimePeriodText(String(val));
                  }}
                  min={1}
                  max={40}
                  step={1}
                  sx={sliderSx}
                />
              </Box>

              {/* Results */}
              <Box sx={{ borderTop: "1px solid #e0e0e0", pt: 3, mt: 2 }}>
                {[
                  { label: "Invested amount", value: `₹${formatIndianCurrency(investedAmount)}` },
                  { label: "Est. returns", value: `₹${formatIndianCurrency(estimatedReturns)}` },
                  { label: "Total value", value: `₹${formatIndianCurrency(totalValue)}` },
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
              <DonutChart invested={investedAmount} returns={estimatedReturns} />
            </Grid>
          </Grid>

          {/* Yearly Breakdown Section */}
          <Box sx={{ textAlign: "center", mt: 4, borderTop: "1px solid #e0e0e0", pt: 3 }}>
            <Box
              onClick={() => setShowBreakdown(!showBreakdown)}
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
                Year-wise Investment Breakdown
              </Typography>
              <IconButton size="small">
                {showBreakdown ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </Box>

            <Collapse in={showBreakdown}>
              <Box sx={{ mt: 2 }}>
                <TableContainer
                  component={Paper}
                  elevation={0}
                  sx={{ maxHeight: 400, textAlign: "left" }}
                >
                  <Table size="small" sx={{ width: "100%", tableLayout: "fixed" }}>
                    <TableHead sx={{ display: "table-header-group" }}>
                      <TableRow>
                        <TableCell sx={{ fontWeight: "bold", bgcolor: "#f5f5f5", width: "15%" }}>
                          Year
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{ fontWeight: "bold", bgcolor: "#f5f5f5", width: "28%" }}
                        >
                          Invested (₹)
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{ fontWeight: "bold", bgcolor: "#f5f5f5", width: "28%" }}
                        >
                          Wealth Gained (₹)
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{ fontWeight: "bold", bgcolor: "#f5f5f5", width: "29%" }}
                        >
                          Total Value (₹)
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {yearlyBreakdown.map((row) => (
                        <TableRow key={row.year}>
                          <TableCell>{`Year ${row.year}`}</TableCell>
                          <TableCell align="right">
                            {formatIndianCurrency(row.investedAmount)}
                          </TableCell>
                          <TableCell align="right">
                            {formatIndianCurrency(row.wealthGained)}
                          </TableCell>
                          <TableCell align="right">
                            {formatIndianCurrency(row.totalValue)}
                          </TableCell>
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

      <Container sx={{ mt: 4, mb: 4 }}>
        <AdComponent style={{ minHeight: 100 }} />
      </Container>

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default SIPCalculator;
