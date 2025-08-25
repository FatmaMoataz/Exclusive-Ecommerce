import * as React from "react";
import { NavLink } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import FormInput from "../../shared/FormInput/FormInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";

// Dummy user data for the placeholder
const dummyUser = {
  fname: "John",
  lname: "Doe",
  email: "john.doe@example.com",
  password: "",
  confirmPassword: "",
};

interface UserFormValues {
  fname: string;
  lname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Account: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(2);
  const [formData, setFormData] = React.useState<UserFormValues>(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : dummyUser;
  });

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  const validationSchema = Yup.object().shape({
    fname: Yup.string()
      .min(3, "Minimum length should be 3")
      .max(15, "Maximum length is 15")
      .required("Required"),
    lname: Yup.string()
      .min(3, "Minimum length should be 3")
      .max(15, "Maximum length is 15")
      .required("Required"),
    password: Yup.string()
      .matches(
        /^[A-Z][a-z0-9]{3,8}$/,
        "Password must start with an uppercase letter and be 4-9 characters"
      )
      .min(6, "Minimum 6 characters")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const formik = useFormik<UserFormValues>({
    initialValues: formData,
    validationSchema,
    onSubmit: (values) => {
      console.log("Form submitted:", values);
      setFormData(values);
      localStorage.setItem("user", JSON.stringify(values));
      alert("Profile updated (stored in localStorage)");
    },
  });

  return (
    <>
      <Box
        role="presentation"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "5rem",
          flexDirection: { sm: "column", md: "row" },
          alignItems: { sm: "center", md: "flex-start" },
          gap: "1rem",
        }}
      >
        <Breadcrumbs aria-label="breadcrumb">
          <NavLink to="/" style={{ color: "gray", textDecoration: "none" }}>
            Home
          </NavLink>
          <NavLink
            to="/account"
            style={{ color: "black", textDecoration: "none" }}
          >
            My Account
          </NavLink>
        </Breadcrumbs>

        <Typography>
          Welcome!{" "}
          <span className="text-color">{`${formData.fname} ${formData.lname}`}</span>
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: { sm: "column", md: "row" },
          alignItems: { sm: "center", md: "flex-start" },
          gap: "1rem",
        }}
      >
        {/* Sidebar Navigation */}
        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <List component="nav">
            <ListItemButton
              selected={selectedIndex === 2}
              onClick={(e) => handleListItemClick(e, 2)}
            >
              <ListItemText primary="Manage My Account" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 3}
              onClick={(e) => handleListItemClick(e, 3)}
            >
              <ListItemText primary="My Orders" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 4}
              onClick={(e) => handleListItemClick(e, 4)}
            >
              <ListItemText primary="My Wishlist" />
            </ListItemButton>
          </List>
        </Box>

        {/* Form Section */}
        <Box
          sx={{
            p: 4,
            boxShadow: 2,
            width: "100%",
            maxWidth: 500,
            marginBottom: "2rem",
          }}
        >
          <Typography sx={{ fontWeight: "bold", mb: 2 }} className="text-color">
            Edit Your Profile
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <FormInput name="fname" label="First Name" formik={formik} />
            <FormInput name="lname" label="Last Name" formik={formik} />
            <FormInput
              name="email"
              label="Email"
              formik={formik}
              disabled={true}
            />
            <FormInput
              name="password"
              label="Password"
              type="password"
              formik={formik}
            />
            <FormInput
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              formik={formik}
            />
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  backgroundColor: "transparent",
                  color: "black",
                  mr: 2,
                }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 2, backgroundColor: "#DB4444" }}
              >
                Save Changes
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Account;
