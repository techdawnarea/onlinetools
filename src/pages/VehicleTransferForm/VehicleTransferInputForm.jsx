import PropTypes from "prop-types";
import { Grid, TextField, Typography, Box, Paper, Button } from "@mui/material";

const VehicleTransferInputForm = ({ formData, handleChange, handleClear }) => {
  const sections = [
    {
      title: "Vehicle Information",
      fields: [
        { name: "vehicleNo", label: "Vehicle No" },
        { name: "chassisNo", label: "Chassis No" },
        { name: "engineNo", label: "Engine No" },
        { name: "vehicleModel", label: "Vehicle Model/Make" },
        { name: "rcValidUpto", label: "RC Valid Upto", type: "date" },
        { name: "taxTokenValidUpto", label: "Tax Token Valid Upto", type: "date" },
        { name: "insuranceValidUpto", label: "Insurance Valid Upto", type: "date" },
        { name: "seatingCapacity", label: "Seating Capacity" },
      ],
    },
    {
      title: "Transaction Details",
      fields: [
        { name: "appearanceDate", label: "Appearance Date", type: "date" },
        { name: "purchaseDate", label: "Purchase Date", type: "date" },
        { name: "purchaseYear", label: "Purchase Year" },
        { name: "applicationFee", label: "Sales amount" },
      ],
    },
    {
      title: "Financer Details",
      fields: [
        { name: "financerName", label: "Financer Name" },
        { name: "financerAddress", label: "Financer Address" },
      ],
    },
    {
      title: "Buyer Details",
      fields: [
        { name: "buyerName", label: "Name" },
        { name: "buyerCareOf", label: "Care Of (Son/Wife/Daughter of)" },
        { name: "buyerVillage", label: "Village" },
        { name: "buyerPO", label: "Post Office (P.O.)" },
        { name: "buyerPS", label: "Police Station (P.S.)" },
        { name: "buyerDist", label: "District" },
        { name: "buyerPin", label: "PIN Code" },
        { name: "buyerVoterId", label: "Voter ID" },
        { name: "buyerAadhar", label: "Aadhar No" },
        { name: "buyerPan", label: "PAN No" },
        { name: "buyerMobile", label: "Mobile No" },
      ],
    },
    {
      title: "Seller Details",
      fields: [
        { name: "sellerName", label: "Name" },
        { name: "sellerCareOf", label: "Care Of (Son/Wife/Daughter of)" },
        { name: "sellerVillage", label: "Village" },
        { name: "sellerPO", label: "Post Office (P.O.)" },
        { name: "sellerPS", label: "Police Station (P.S.)" },
        { name: "sellerDist", label: "District" },
        { name: "sellerPin", label: "PIN Code" },
        { name: "sellerVoterId", label: "Voter ID" },
        { name: "sellerAadhar", label: "Aadhar No" },
        { name: "sellerPan", label: "PAN No" },
        { name: "sellerMobile", label: "Mobile No" },
      ],
    },
  ];

  return (
    <Box component={Paper} elevation={3} sx={{ p: 3, height: "100%", overflowY: "auto" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "primary.main" }}>
          Vehicle Transfer Form Data
        </Typography>
        <Button
          variant="contained"
          size="small"
          onClick={handleClear}
          sx={{
            backgroundColor: "#d32f2f",
            color: "#fff",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#b71c1c" },
          }}
        >
          Clear Form
        </Button>
      </Box>

      {sections.map((section, sIndex) => (
        <Box key={sIndex} sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2, borderBottom: 1, borderColor: "divider" }}>
            {section.title}
          </Typography>
          <Grid container spacing={2}>
            {section.fields.map((field, fIndex) => (
              <Grid item xs={12} sm={6} key={fIndex}>
                <TextField
                  fullWidth
                  label={field.label}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                  type={field.type || "text"}
                  InputLabelProps={field.type === "date" ? { shrink: true } : {}}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

VehicleTransferInputForm.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired,
};

export default VehicleTransferInputForm;
