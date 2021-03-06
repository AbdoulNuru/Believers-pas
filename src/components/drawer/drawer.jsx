import React from "react";
import { Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, fade } from "@material-ui/core/styles";
import {
  Home,
  //   CloudSnow,
  Plus,
  Users,
  UserPlus,
  //   MessageSquare,
  //   DollarSign,
} from "react-feather";

const drawerWidth = 239;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  grow: {
    flexGrow: 1,
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  logout: {
    position: "absolute",
    bottom: 0,
    width: drawerWidth,
  },
}));

const DrawerComponents = ({ history, ...props }) => {
  let routes = [];

  const user = JSON.parse(localStorage.getItem("ag-user-data"));

  console.log("Wewewww", user.role);

  if (user) {
    if (user.role === "SYSTEMADMIN") {
      routes = [
        ...routes,
        {
          key: "new church",
          text: "New Church",
          to: "/add-church",
          icon: <Plus style={{ color: "#02B1D8" }} />,
        },
        {
          key: "church leader",
          text: "New Church Leader",
          to: "/add-church-leader",
          icon: <UserPlus style={{ color: "#02B1D8" }} />,
        },
        {
          key: "church admin",
          text: "New Church Admin",
          to: "/add-church-admin",
          icon: <UserPlus style={{ color: "#02B1D8" }} />,
        },
        {
          key: "view users",
          text: "View Users",
          to: "/view-users",
          icon: <Users style={{ color: "#02B1D8" }} />,
        },
      ];
    } else if (user.role === "CHURCHLEADER") {
      routes = [...routes];
    } else if (user.role === "CHURCHADMIN") {
      routes = [...routes];
    } else if (user.role === "CONGREGANT") {
      routes = [...routes];
    }
  } else {
    history.push("/");
  }

  const classes = useStyles();

  return (
    <div>
      <div className={classes.toolbar}>
        <a href="/" className="fxt-logo">
          <img
            src="img/my-logo.jpeg"
            alt="Logo"
            style={{ width: "30%", marginLeft: "35%" }}
          />
        </a>
      </div>
      <Divider style={{ marginBottom: "2%" }} />
      <List>
        {routes.map((element) => (
          <Link
            to={element.to}
            style={{
              textDecoration: "none",
              color: "#000000",
            }}
            key={element.key}
          >
            <ListItem button>
              <ListItemIcon>{element.icon}</ListItemIcon>
              <ListItemText primary={element.text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
};

export default DrawerComponents;
