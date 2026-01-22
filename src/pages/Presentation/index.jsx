// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-presentation.jpg";

function Presentation() {
  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              TechDawn.online
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Free Online Tools for Developers & Everyone. Text tools, converters, generators,
              calculators and more - all in one place.
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Container sx={{ mt: 6 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon="text_fields"
                title="Text Tools"
                description="Text manipulation tools - case converter, word counter, string utilities and more."
                action={{
                  type: "internal",
                  route: "/tools/text",
                  label: "Explore",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="swap_horiz"
                title="Converters"
                description="Convert between different formats - JSON, XML, CSV, Base64, and more."
                action={{
                  type: "internal",
                  route: "/tools/converters",
                  label: "Explore",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="auto_awesome"
                title="Generators"
                description="Generate passwords, UUIDs, lorem ipsum, QR codes and other content."
                action={{
                  type: "internal",
                  route: "/tools/generators",
                  label: "Explore",
                }}
              />
            </Grid>
          </Grid>
        </Container>
        <Container sx={{ mt: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="calculate"
                title="Calculators"
                description="Online calculators for math, percentages, dates, and unit conversions."
                action={{
                  type: "internal",
                  route: "/tools/calculators",
                  label: "Explore",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="code"
                title="Developer Tools"
                description="Code formatters, minifiers, validators and other developer utilities."
                action={{
                  type: "internal",
                  route: "/tools/dev",
                  label: "Explore",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="image"
                title="Image Tools"
                description="Image compression, resizing, format conversion and editing tools."
                action={{
                  type: "internal",
                  route: "/tools/image",
                  label: "Explore",
                }}
              />
            </Grid>
          </Grid>
        </Container>
        <MKBox pt={12} pb={6}>
          <Container>
            <Grid container justifyContent="center">
              <Grid item xs={12} lg={8} textAlign="center">
                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                  All Tools. Free. Forever.
                </MKTypography>
                <MKTypography variant="body1" color="text">
                  TechDawn.online provides free online tools with no registration required.
                </MKTypography>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
