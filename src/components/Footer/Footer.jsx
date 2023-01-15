import React, { useContext } from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {
  Box,
  Container,
  Grid,
  Link,
  Typography,
  createTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import FooterLogo from "../../Assets/logo.png";

export const StyledFooterLink = styled(Link)({
  color: "#000000",
  fontSize: "18px",
  textDecoration: "none",
  "&:hover": {
    fontWeight: "bold",
    paddingBottom: "0.15rem",
    borderBottom: "3px solid #427499",
  },
  "&:focus": {
    fontWeight: "bold",
    paddingBottom: "0.15rem",
    borderBottom: "3px solid #427499",
  },
});
const StyledFooterLinkNoBold = styled(Link)({
  color: "#000000",
  textDecoration: "none",
  fontSize: "18px",

  fontWeight: "bold",
  "&:hover": {
    fontWeight: "bold",
    paddingBottom: "1rem",
    borderBottom: "3px solid ##427499",
    //   color: "#009966",
  },
  "&:focus": {
    fontWeight: "bold",
    paddingBottom: "0.15rem",
    borderBottom: "3px solid #427499",
  },
});

// const lightTheme = createTheme({ palette: { mode: "light" } });

export default function Footer() {
  return (
    <Container
      disableGutters
      maxWidth="fluid"
      fontFamily='font-family: "Rubik", sans-serif'
    >
      <Box
        // paddingX={{ xs: "1rem", lg: ".5rem" }}
        paddingTop={{ xs: "1rem", lg: "3rem" }}
        // paddingBottom={{ xs: "1rem", lg: "0.5rem" }}
        // marginLeft="1rem"
        backgroundColor="#D9D9D9"
        color="#000000"
      >
        <Grid
          container
          columns={{ xs: 3, md: 6, lg: 15, xl: 15 }}
          justify="center"
        >
          <Grid
            item
            xs={4}
            textAlign={{ md: "left" }}
            sx={{ fontSize: "18px" }}
          >
            <Box>
              <img src={FooterLogo} />
              <Box color="#000">Your meal Partner</Box>
              <StyledFooterLinkNoBold
                rel="noopener"
                href="https://www.google.com/maps/place/Galana+Plaza/@-1.2909263,36.7801562,17z/data=!3m1!4b1!4m5!3m4!1s0x182f10a769c149df:0x4b9b40aa6cabe2e2!8m2!3d-1.2909317!4d36.7827311"
                target={"_blank"}
              >
                <Typography sx={{ fontSize: "18px" }}>
                  <LocationOnIcon
                    fontSize="large"
                    paddingX={{ sm: "1rem" }}
                    sx={{
                      color: "#000000",
                      "&:hover,&:focus": {
                        color: "#427499",
                      },
                    }}
                  />{" "}
                  Utamu Delicacies, Galana Road, Nairobi
                </Typography>
              </StyledFooterLinkNoBold>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box>
              <Typography
                variant={"h5"}
                fontWeight="bold"
                marginBottom="0.35rem"
                fontSize="20px"
              >
                Quick Links
              </Typography>
              <Box>
                <Typography>
                  <StyledFooterLink variant="body2" rel="noopener" href="/home">
                    About us
                  </StyledFooterLink>
                </Typography>
                <Typography>
                  <StyledFooterLink variant="body2" href="/mainmenu">
                    Menu
                  </StyledFooterLink>
                </Typography>
                <Typography>
                  <StyledFooterLink
                    variant="body2"
                    // href="/career"
                    target={"_blank"}
                  >
                    Recipe Resources
                  </StyledFooterLink>
                </Typography>
                <Typography sx={{ marginTop: "1.5rem" }}>
                  <WhatsAppIcon
                    // fontSize="10px"
                    paddingX={{ sm: "1rem" }}
                    sx={{
                      fontSize: 40,
                      color: "#25D366",
                      "&:hover,&:focus": {
                        color: "#427499",
                      },
                    }}
                  />
                  <StyledFooterLink
                    variant="body2"
                    href="https://api.whatsapp.com/send/?phone=254716212865&text=Hi%2C+I+would+like+to+make+an+order&type=phone_number&app_absent=0"
                    target={"_blank"}
                    marginLeft="0.5rem"
                  >
                    Book your meal
                  </StyledFooterLink>
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4} textAlign={{ md: "left" }}>
            <Box>
              <Typography
                variant={"h5"}
                fontWeight="bold"
                marginBottom="0.35rem"
                fontSize="20px"
              >
                Working Hours
              </Typography>
              <Box>
                <Typography>
                  <StyledFooterLink variant="body2">
                    Monday – Friday: 7am – 8pm EST
                  </StyledFooterLink>
                </Typography>
                <Typography>
                  <StyledFooterLink variant="body2">
                    Saturday: 9am – 11pm EST
                  </StyledFooterLink>
                </Typography>
                <Typography>
                  <StyledFooterLink variant="body2">
                    Sunday: 9am – 10pm EST
                  </StyledFooterLink>
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3} textAlign={{ md: "left" }}>
            <Box>
              <Typography
                variant={"h5"}
                fontWeight="bold"
                marginBottom="0.35rem"
                fontSize="20px"
              >
                Contact Us
              </Typography>
              <Typography>
                <CallIcon
                  fontSize="large"
                  paddingX={{ sm: "1rem" }}
                  sx={{
                    color: "#000000",
                    "&:hover,&:focus": {
                      color: "#427499",
                    },
                  }}
                />
                <StyledFooterLink
                  variant="body2"
                  href="tel: +254716212865"
                  marginLeft="0.5rem"
                >
                  +254716212865
                </StyledFooterLink>
              </Typography>
              <Typography>
                <MailIcon
                  fontSize="large"
                  paddingX={{ sm: "1rem" }}
                  sx={{
                    color: "#000000",
                    "&:hover,&:focus": {
                      color: "#427499",
                    },
                  }}
                />
                <StyledFooterLink
                  variant="body2"
                  href="mailto: info@utamudelicacies.com"
                  marginLeft="0.5rem"
                >
                  info@utamudelicacies.com
                </StyledFooterLink>
              </Typography>

              <Box marginTop="1rem" marginBottom="0.35rem">
                <Typography>
                  <Link
                    variant="body2"
                    color="inherit"
                    target="_blank"
                    href="#"
                    marginRight="0.8rem"
                  >
                    <FacebookIcon
                      fontSize="large"
                      paddingX={{ sm: "1rem" }}
                      sx={{
                        color: "#000000",
                        "&:hover,&:focus": {
                          color: "#427499",
                        },
                      }}
                    />
                  </Link>
                  <Link
                    variant="body2"
                    color="inherit"
                    target="_blank"
                    href="https://www.linkedin.com/company/epitome-beauty/"
                    marginRight="0.8rem"
                  >
                    <Link variant="body2" color="inherit" edInIcon />
                    <LinkedInIcon
                      fontSize="large"
                      paddingX={{ sm: "1rem" }}
                      sx={{
                        color: "#000000",
                        "&:hover,&:focus": {
                          color: "#427499",
                        },
                      }}
                    />
                  </Link>
                  <Link
                    variant="body2"
                    color="inherit"
                    target="_blank"
                    href="https://www.youtube.com/channel/UC8LKCBrdIPGWSYTiMBTByhw"
                    marginRight="0.8rem"
                  >
                    <YouTubeIcon
                      fontSize="large"
                      paddingX={{ sm: "1rem" }}
                      sx={{
                        color: "#000000",
                        "&:hover,&:focus": {
                          color: "#427499",
                        },
                      }}
                    />
                  </Link>
                  <Link
                    variant="body2"
                    color="inherit"
                    target="_blank"
                    href="#"
                    marginRight="0.8rem"
                  >
                    <TwitterIcon
                      fontSize="large"
                      paddingX={{ sm: "1rem" }}
                      sx={{
                        color: "#000000",
                        "&:hover,&:focus": {
                          color: "#427499",
                        },
                      }}
                    />
                  </Link>
                  <Link
                    variant="body2"
                    color="inherit"
                    target="_blank"
                    href="#"
                  >
                    <InstagramIcon
                      fontSize="large"
                      paddingX={{ sm: "1rem" }}
                      sx={{
                        color: "#000000",
                        "&:hover,&:focus": {
                          color: "#427499",
                        },
                      }}
                    />
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Grid
        container
        columns={{ xs: 3, md: 6, lg: 15, xl: 15 }}
        justify="center"
        sx={{ backgroundColor: "#427499", color: "#ffffff" }}
      >
        <Grid item xs={6} textAlign={{ md: "left" }}>
          <Box>
            <StyledFooterLink
              textAlign={{ xs: "left", md: "left" }}
              paddingX={{ xs: "1rem", lg: 0 }}
            >
              &copy; Copyright Utamu Delicacies All rights reserved.
            </StyledFooterLink>
          </Box>
        </Grid>
        <Grid item xs={3} textAlign={{ md: "left" }}>
          <Box>
            <StyledFooterLink
              sx={{
                backgroundColor: "#427499",
                color: "#ffffff",
                fontSize: "18px",
              }}
              textAlign={{ xs: "right", md: "right" }}
              paddingX={{ xs: "1rem", lg: 0 }}
              href="./privacy-policy"
            >
              Privacy Policy
            </StyledFooterLink>
          </Box>
        </Grid>

        <Grid item xs={3} textAlign={{ md: "left" }}>
          <Box>
            <StyledFooterLink
              sx={{
                backgroundColor: "#427499",
                color: "#ffffff",
                fontSize: "18px",
              }}
              textAlign={{ xs: "right", md: "right" }}
              paddingX={{ xs: "0rem", lg: 0 }}
              href="./terms-of-use"
            >
              Terms of Service
            </StyledFooterLink>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
