import {
  Drawer,
  List,
  ListItemIcon,
  makeStyles,
  ListItem,
  Tooltip,
} from "@material-ui/core";
import {
  CloudDownloadSharp,
  CloudUploadSharp,
  CopyrightSharp,
  Facebook,
  ForumSharp,
  InfoSharp,
  PlayCircleFilledSharp,
  PlaylistAddSharp,
  TransferWithinAStationSharp,
} from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles({
  listIconStyle: {
    padding: 0,
    display: "flex",
    justifyContent: "center",
  },
  listItemBrandStyle: {
    backgroundColor: "#000",
    padding: "10px 0px",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  iconStyle: {
    height: "34px",
    width: "30px",
    color: "white",
  },
  listStyle: {
    backgroundColor: "#1465C0",
    height: "100%",
    position: "fixed",
    padding: 0,
  },
  tooltipStyle: {
    fontSize: 16,
    backgroundColor: "#1465C0",
    color: "#fff",
    padding: "12px",
  },
});
const delay = 100;
function Sidebar() {
  const classes = useStyles();
  return (
    <Drawer variant={"permanent"}>
      <List className={classes.listStyle}>
        <ListItem className={classes.listItemBrandStyle}>
          <ListItemIcon className={classes.listIconStyle}>
            <Facebook className={classes.iconStyle} />
          </ListItemIcon>
        </ListItem>
        <Tooltip
          classes={{ tooltip: classes.tooltipStyle }}
          placement={"right"}
          title={"Buy Monero"}
          leaveDelay={delay}
        >
          <ListItem>
            <ListItemIcon className={classes.listIconStyle}>
              <CloudDownloadSharp className={classes.iconStyle} />
            </ListItemIcon>
          </ListItem>
        </Tooltip>
        <Tooltip
          leaveDelay={delay}
          classes={{ tooltip: classes.tooltipStyle }}
          title={"Sell Monero"}
          placement={"right"}
        >
          <ListItem>
            <ListItemIcon className={classes.listIconStyle}>
              <CloudUploadSharp className={classes.iconStyle} />
            </ListItemIcon>
          </ListItem>
        </Tooltip>
        <Tooltip
          leaveDelay={delay}
          classes={{ tooltip: classes.tooltipStyle }}
          title={"Trade BTC & Options"}
          placement={"right"}
        >
          <ListItem>
            <ListItemIcon className={classes.listIconStyle}>
              <TransferWithinAStationSharp className={classes.iconStyle} />
            </ListItemIcon>
          </ListItem>
        </Tooltip>
        <Tooltip
          leaveDelay={delay}
          classes={{ tooltip: classes.tooltipStyle }}
          title={"Getting Started"}
          placement={"right"}
        >
          <ListItem>
            <ListItemIcon className={classes.listIconStyle}>
              <PlayCircleFilledSharp className={classes.iconStyle} />
            </ListItemIcon>
          </ListItem>
        </Tooltip>
        <Tooltip
          leaveDelay={delay}
          classes={{ tooltip: classes.tooltipStyle }}
          title={"Post an AD"}
          placement={"right"}
        >
          <ListItem>
            <ListItemIcon className={classes.listIconStyle}>
              <PlaylistAddSharp className={classes.iconStyle} />
            </ListItemIcon>
          </ListItem>
        </Tooltip>
        <Tooltip
          leaveDelay={delay}
          classes={{ tooltip: classes.tooltipStyle }}
          title={"Forums"}
          placement={"right"}
        >
          <ListItem>
            <ListItemIcon className={classes.listIconStyle}>
              <ForumSharp className={classes.iconStyle} />
            </ListItemIcon>
          </ListItem>
        </Tooltip>
        <Tooltip
          leaveDelay={delay}
          classes={{ tooltip: classes.tooltipStyle }}
          title={"FAQ"}
          placement={"right"}
        >
          <ListItem>
            <ListItemIcon className={classes.listIconStyle}>
              <InfoSharp className={classes.iconStyle} />
            </ListItemIcon>
          </ListItem>
        </Tooltip>
        <Tooltip
          leaveDelay={delay}
          classes={{ tooltip: classes.tooltipStyle }}
          title={"About"}
          placement={"right"}
        >
          <ListItem>
            <ListItemIcon className={classes.listIconStyle}>
              <CopyrightSharp className={classes.iconStyle} />
            </ListItemIcon>
          </ListItem>
        </Tooltip>
        <Tooltip
          leaveDelay={delay}
          classes={{ tooltip: classes.tooltipStyle }}
          title={"Forums"}
          placement={"right"}
        >
          <ListItem>
            <ListItemIcon className={classes.listIconStyle}>
              <ForumSharp className={classes.iconStyle} />
            </ListItemIcon>
          </ListItem>
        </Tooltip>
        <Tooltip
          leaveDelay={delay}
          classes={{ tooltip: classes.tooltipStyle }}
          title={"FAQ"}
          placement={"right"}
        >
          <ListItem>
            <ListItemIcon className={classes.listIconStyle}>
              <InfoSharp className={classes.iconStyle} />
            </ListItemIcon>
          </ListItem>
        </Tooltip>
        <Tooltip
          leaveDelay={delay}
          classes={{ tooltip: classes.tooltipStyle }}
          title={"About"}
          placement={"right"}
        >
          <ListItem>
            <ListItemIcon className={classes.listIconStyle}>
              <CopyrightSharp className={classes.iconStyle} />
            </ListItemIcon>
          </ListItem>
        </Tooltip>
      </List>
    </Drawer>
  );
}

export default Sidebar;
