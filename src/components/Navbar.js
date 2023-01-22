import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { NavLink } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import logo from "../Assets/logo.png";

const drawerWidth = 240;

const navItems = [
  <NavLink to="/">Home</NavLink>,
  <NavLink to="/mainmenu">Menu</NavLink>,
  <NavLink to="/orderCustomer">Cart</NavLink>,
  <NavLink to="/dashboard">Admin</NavLink>,
  <NavLink to="/register">Register</NavLink>,
  <NavLink to="/logout">Logout</NavLink>,
];

export default function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        UTAMU DELICACIES
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{ backgroundColor: "#000000", color: "#ffffff" }}
      >
        <Toolbar>
          <IconButton
            // color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: "#ffffff",
              display: { xs: "none", sm: "block" },
            }}
          >
            <img src={logo} alt="UTAMU DELICACIES" />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#ffffff" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 5 }}>
        <Toolbar />
        <Typography></Typography>
      </Box>
    </Box>
  );
}

// import React from "react";
// import { NavLink, Link } from "react-router-dom";
// import "../App.css";

// function Navbar({ user }) {
//   return (
//     <div>
//       <nav className="nav">
//         <div className="site-title">
//           <NavLink to={"/"} exact="true">
//             Utamu delicacies
//           </NavLink>
//         </div>
//         <div className="items">
//           <ul>
//             <NavLink to={"/home"} exact="true" className="btn-text">
//               Home
//             </NavLink>

//             <Link to={"/login"} className="btn-text">
//               <h3 className="">{user ? `${user.first_name}` : "Account"}</h3>
//             </Link>

//             <NavLink to={"/admin-orders"} exact="true" className="btn-text">
//               Orders
//             </NavLink>
//           </ul>
//         </div>
//       </nav>
//       <div className="meals-board-one">
//         <h1 className="board-one">Daily Menus: </h1>
//         <Link to={`/mondaymenu`}>
//           <button className="btn-view">Monday</button>
//         </Link>
//         <Link to={`/tuesdaymenu`}>
//           <button className="btn-view">Tuesday</button>
//         </Link>
//         <Link to={`/wednesdaymenu`}>
//           <button className="btn-view">Wednesday</button>
//         </Link>
//         <Link to={`/thursdaymenu`}>
//           <button className="btn-view">Thursday</button>
//         </Link>
//         <Link to={`/fridaymenu`}>
//           <button className="btn-view">Friday</button>
//         </Link>
//         <Link to={`/saturdaymenu`}>
//           <button className="btn-view">Saturday</button>
//         </Link>
//         <Link to={`/sundaymenu`}>
//           <button className="btn-view">Sunday</button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
