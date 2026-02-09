import { useState } from "react";
import { Grid, Box, Container } from "@mui/material";
import { PDFViewer } from "@react-pdf/renderer";
import VehicleTransferInputForm from "./VehicleTransferInputForm";
import VehicleTransferPDF from "./VehicleTransferPDF";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import routes from "routes";

import footerRoutes from "footer.routes";

// Background image (reusing one from the template if available, or just a gradient)
import bgImage from "assets/images/bg-presentation.jpg";

const VehicleTransferPage = () => {
  const [formData, setFormData] = useState({
    vehicleNo: "WB20A1234",
    chassisNo: "ME4JC36KDE7436087",
    engineNo: "JC36E73423728",
    vehicleModel: "CB SHINE",
    buyerName: "Prakiti Nanda Goswami",
    buyerCareOf: "Jagadish Nanda Goswami",
    buyerVillage: "Argoal",
    buyerPO: "Argoal",
    buyerPS: "Patashpur",
    buyerDist: "Purba Medinipur",
    buyerPin: "721456",
    buyerVoterId: "MXC1343234",
    buyerAadhar: "838394480466",
    buyerPan: "DRCPN6373P",
    buyerMobile: "9501239627",
    sellerName: "Ajay Kumar Bera",
    sellerCareOf: "Nagendranath Bera",
    sellerVillage: "Dhanyaharibar",
    sellerPO: "Madan Modanpur",
    sellerPS: "BHUPATINAGAR",
    sellerDist: "Purba Medinipur",
    sellerPin: "Bhupatinagar",
    sellerVoterId: "721454",
    sellerAadhar: "SELLERAADHAR1234",
    sellerPan: "SELLERPAN1234",
    sellerMobile: "SELLERMOBILE1234",
    rcValidUpto: "2028-01-23",
    taxTokenValidUpto: "2028-01-23",
    insuranceValidUpto: "2028-01-23",
    seatingCapacity: "1+1",
    appearanceDate: "", //"2028-01-23",
    purchaseDate: "2025-01-23",
    purchaseYear: new Date().getFullYear().toString(),
    financerName: "HDFC Argo",
    financerAddress: "Contai, West Bengal",
    applicationFee: "12345",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "info",
        }}
        sticky
      />
      <Box
        minHeight="100vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
          pt: 12,
          pb: 4,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3} sx={{ height: "85vh" }}>
            {/* Left Side: Input Form */}
            <Grid item xs={12} md={5} sx={{ height: "100%" }}>
              <VehicleTransferInputForm formData={formData} handleChange={handleChange} />
            </Grid>

            {/* Right Side: PDF Preview */}
            <Grid item xs={12} md={7} sx={{ height: "100%" }}>
              <Box
                sx={{
                  height: "100%",
                  width: "100%",
                  bgcolor: "grey.100",
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: 3,
                }}
              >
                <PDFViewer width="100%" height="100%" showToolbar={true}>
                  <VehicleTransferPDF formData={formData} />
                </PDFViewer>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <DefaultFooter content={footerRoutes} />
    </>
  );
};

export default VehicleTransferPage;
