import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Techdawn.Online React themes
import theme from "assets/theme";

// Pages
import Presentation from "pages/Presentation";

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route path="/tools/text" element={<Presentation />} />
        <Route path="/tools/converters" element={<Presentation />} />
        <Route path="/tools/generators" element={<Presentation />} />
        <Route path="/tools/calculators" element={<Presentation />} />
        <Route path="/about" element={<Presentation />} />
        <Route path="/contact" element={<Presentation />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ThemeProvider>
  );
}
