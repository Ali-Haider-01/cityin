import { Box } from "@mui/material";
import Footer from "./footer";
import { Header } from "./header";

export const Layout = (props: any) => {
  const { children } = props;

  return (
    <>
      <Header />
      <Box sx={{ pt: { xs: 8, md: 5 } }}>{children}</Box>
      <Footer />
    </>
  );
};
