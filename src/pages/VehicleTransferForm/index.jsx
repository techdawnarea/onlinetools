import { useState } from "react";
import { Grid, Box, Container } from "@mui/material";
import { PDFViewer } from "@react-pdf/renderer";
import VehicleTransferInputForm from "./VehicleTransferInputForm";
import VehicleTransferPDF from "./VehicleTransferPDF";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import routes from "routes";

import footerRoutes from "footer.routes";
import AdComponent from "../../Ad/AdComponent";

// Background image (reusing one from the template if available, or just a gradient)
import bgImage from "assets/images/bg-presentation.jpg";

const VehicleTransferPage = () => {
  const [formData, setFormData] = useState({
    vehicleNo: "",
    chassisNo: "",
    engineNo: "",
    vehicleModel: "",
    buyerName: "",
    buyerCareOf: "",
    buyerVillage: "",
    buyerPO: "",
    buyerPS: "",
    buyerDist: "",
    buyerPin: "",
    buyerVoterId: "",
    buyerAadhar: "",
    buyerPan: "",
    buyerMobile: "",
    sellerName: "",
    sellerCareOf: "",
    sellerVillage: "",
    sellerPO: "",
    sellerPS: "",
    sellerDist: "",
    sellerPin: "",
    sellerVoterId: "",
    sellerAadhar: "",
    sellerPan: "",
    sellerMobile: "",
    rcValidUpto: "",
    taxTokenValidUpto: "",
    insuranceValidUpto: "",
    seatingCapacity: "",
    appearanceDate: "",
    purchaseDate: "",
    purchaseYear: "",
    financerName: "",
    financerAddress: "",
    applicationFee: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClear = () => {
    setFormData(Object.fromEntries(Object.keys(formData).map((key) => [key, ""])));
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
              <VehicleTransferInputForm
                formData={formData}
                handleChange={handleChange}
                handleClear={handleClear}
              />
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
      <Container sx={{ mt: 4, mb: 4 }}>
        <AdComponent style={{ minHeight: 100 }} />
      </Container>
      <DefaultFooter content={footerRoutes} />
    </>
  );
};

export default VehicleTransferPage;
