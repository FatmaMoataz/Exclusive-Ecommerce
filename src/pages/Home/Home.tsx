import type { FC } from "react";
import Box from "@mui/material/Box";
import staticSlider from "../../assets/images/slider.png";
import ScrollTop from "../../components/ScrollToTop/ScrollToTop";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Toolbar from "@mui/material/Toolbar";
import WidgetsIcon from "@mui/icons-material/Widgets";
import Typography from "@mui/material/Typography";
import CountDownTimer from "../../components/CountDownTimer/CountDownTimer";
import "react-multi-carousel/lib/styles.css";
import Products from "../Products/Products";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import homePicture from "../../assets/images/home.png";
import home1 from "../../assets/images/home1.png";
import home2 from "../../assets/images/home2.png";
import home3 from "../../assets/images/home3.png";
import home4 from "../../assets/images/home4.png";
import ListItem from "../../components/ListItem/ListItem";
import CategoryCarousel from "../../components/Carousel/CategoryCarousel/CategoryCarousel";
import ProductCarousel from "../../components/Carousel/ProductCarousel/ProductCarousel";
import OurService from "../../shared/OurService/OurService";

export interface HomeProps {
  window?: () => Window;
}

const Home: FC<HomeProps> = (props) => {
  return (
    <>
      <Toolbar id="back-to-top-anchor" />
      {/* 1st section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          columnGap: "2rem",
          rowGap: "2rem",
          px: "2rem",
        }}
      >
        <ListItem />

        <Box>
          <Box
            component="img"
            src={staticSlider}
            alt="static slider"
            sx={{
              width: "100%",
              maxWidth: "1000px",
              height: "auto",
              borderRadius: "8px",
            }}
          />
        </Box>
      </Box>
      {/* 2nd section */}
      <Box sx={{ padding: "2rem" }}>
        <Box sx={{ color: "#DB4444", display: "flex" }}>
          <WidgetsIcon />
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Today's
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Flash Sales
          </Typography>
          <CountDownTimer />
        </Box>
        <ProductCarousel />
        <Button
          sx={{
            backgroundColor: "#DB4444",
            color: "white",
            display: "block",
            margin: "auto",
          }}
        >
          View All Products
        </Button>
      </Box>
      <Divider variant="middle" />
      {/* 3rd section */}
      <Box sx={{ padding: "2rem" }}>
        <Box sx={{ color: "#DB4444", display: "flex" }}>
          <WidgetsIcon />
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Categories
          </Typography>
        </Box>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Browse By Category
        </Typography>
        <CategoryCarousel />
      </Box>
      <Divider variant="middle" />
      {/* 4th section */}
      <Box sx={{ padding: "2rem" }}>
        <Box sx={{ color: "#DB4444", display: "flex" }}>
          <WidgetsIcon />
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            This month
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Best Selling Products
          </Typography>
          <Button sx={{ backgroundColor: "#DB4444", color: "white" }}>
            View All
          </Button>
        </Box>
        <ProductCarousel />
      </Box>
      {/* 5th section */}
      <Box sx={{ textAlign: "center", margin: "2rem" }}>
        <Box
          component="img"
          src={homePicture}
          alt="home section"
          sx={{
            width: "100%",
            maxWidth: "1000px",
            height: "auto",
            borderRadius: "8px",
          }}
        />
      </Box>
      {/* 6th section */}
      <Box sx={{ padding: "2rem" }}>
        <Box sx={{ color: "#DB4444", display: "flex" }}>
          <WidgetsIcon />
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Our Products
          </Typography>
        </Box>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Explore Our Products
        </Typography>
        <Box
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          <div>
            <Products />
          </div>
        </Box>
        <Button
          sx={{
            backgroundColor: "#DB4444",
            color: "white",
            display: "block",
            margin: "auto",
          }}
        >
          View All Products
        </Button>
      </Box>
      {/* 7th section */}
      <Box sx={{ padding: "2rem" }}>
        <Box sx={{ color: "#DB4444", display: "flex" }}>
          <WidgetsIcon />
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Featured
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            New Arrival
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: "1rem",
            mt: "2rem",
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Box
              component="img"
              src={home4}
              alt="new arrival"
              sx={{ width: "100%", borderRadius: "8px" }}
            />
          </Box>

          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <Box>
              <Box
                component="img"
                src={home3}
                alt="new arrival"
                sx={{ width: "100%", borderRadius: "8px" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "1rem",
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Box
                  component="img"
                  src={home2}
                  alt="new arrival"
                  sx={{ width: "100%", borderRadius: "8px" }}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Box
                  component="img"
                  src={home1}
                  alt="new arrival"
                  sx={{ width: "100%", borderRadius: "8px" }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* 8th section */}
      <OurService />
      {/* Scroll to top */}
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
};

export default Home;
