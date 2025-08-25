import Breadcrumbs from "@mui/material/Breadcrumbs";
import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import about from "../../assets/images/About.png";
import StoreIcon from "@mui/icons-material/Store";
import "./About.css";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import RedeemIcon from "@mui/icons-material/Redeem";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import tom from "../../assets/images/Tom Cruise.png";
import emma from "../../assets/images/Emma.png";
import will from "../../assets/images/Will Smith.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";
import OurService from "../../shared/OurService/OurService";

export default function About() {
  const stats = [
    {
      icon: <StoreIcon />,
      value: "10.5k",
      text: "Sallers active our site",
    },
    {
      icon: <AttachMoneyIcon />,
      value: "33k",
      text: "Monthly Produduct Sale",
    },
    {
      icon: <ShoppingBagIcon />,
      value: "45.5k",
      text: "Customer active in our site",
    },
    {
      icon: <RedeemIcon />,
      value: "25k",
      text: "Anual gross sale in our site",
    },
  ];

  const employees = [
    {
      img: tom,
      name: "Tom Cruise",
      role: "Founder & Chairman",
    },
    {
      img: emma,
      name: "Emma Watson",
      role: "Managing Director",
    },
    {
      img: will,
      name: "Will Smith",
      role: "Product Designer",
    },
  ];

  return (
    <Box sx={{ margin: 3 }}>
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{
          display: { sm: "none", md: "flex" },
          flexWrap: "nowrap",
          alignItems: "flex-start",
        }}
      >
        <NavLink to="/" style={{ color: "gray", textDecoration: "none" }}>
          Home
        </NavLink>
        <NavLink to="/about" style={{ color: "black", textDecoration: "none" }}>
          About
        </NavLink>
      </Breadcrumbs>
      {/* 1st section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column-reverse",
            sm: "column-reverse",
            md: "row",
          },
          alignItems: "center",
        }}
      >
        {/* left */}
        <Box>
          <Typography variant="h3" sx={{ marginBlock: 5 }}>
            Our Story
          </Typography>
          <Typography sx={{ marginBlock: 5 }}>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </Typography>
          <Typography sx={{ marginBlock: 5 }}>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </Typography>
        </Box>
        {/* right */}
        <Box
          component="img"
          src={about}
          alt="About"
          sx={{
            width: "100%",
            maxWidth: "1000px",
            height: "auto",
            borderRadius: "8px",
          }}
        />
      </Box>
      {/* 2nd section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          gap: 3,
          flexDirection: { xs: "column", sm: "column", md: "row" },
          marginBlock: 3,
        }}
      >
        {stats.map((stat) => (
          <Box
            sx={{
              textAlign: "center",
              border: "1px solid gray",
              borderRadius: 1,
              padding: 2,
            }}
            className="about-card"
          >
            {React.cloneElement(stat.icon, {
              sx: {
                fontSize: 40,
                color: "white",
                backgroundColor: "black",
                borderRadius: "50%",
                padding: "5px",
              },
              className: "icon",
            })}
            <Typography variant="h6" sx={{ fontWeight: "800" }}>
              {stat.value}
            </Typography>
            <Typography>{stat.text}</Typography>
          </Box>
        ))}
      </Box>
      {/* 3rd section */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: { xs: "column", sm: "column", md: "row" },
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {employees.map((employee) => (
          <Card sx={{ maxWidth: 345 }} className="card-width">
            <CardMedia sx={{ height: 300 }} image={employee.img} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {employee.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {employee.role}
              </Typography>
            </CardContent>
            <CardActions>
              <TwitterIcon />
              <InstagramIcon />
              <LinkedInIcon />
            </CardActions>
          </Card>
        ))}
      </Box>
      {/* 4th section */}
      <OurService />
    </Box>
  );
}
