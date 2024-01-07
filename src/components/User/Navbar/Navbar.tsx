import React from "react";
import style from "./style.module.css";
import { IconButton, Drawer, Button, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography,} from "@mui/material";
import { styled, Box } from "@mui/system";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useLocation, useParams } from "react-router-dom";
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable';
import TagIcon from '@mui/icons-material/Tag';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { useDispatch } from "react-redux";
import { user_sign_out, publisher_sign_out} from "../../../redux/userSlice.js"
import Swal from "sweetalert2";
type Anchor = "top" | "left" | "bottom" | "right";

const Container = styled(Box)({
  width: "2304px",
  margin: "auto",
  display: "flex",
  alignItems: "center",
});

const customStyles = {
  control: (provided) => ({
    ...provided,
    width: '300px', 
  }),
};

const Navbar = () => {
  const publisherId = localStorage.getItem("publisher") ? JSON.parse(localStorage.getItem("publisher")).id : null
  const location = useLocation();
  const path = location.pathname;

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [showInput, setShowInput] = React.useState(false);
  const dispatch = useDispatch()
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

    const [options, setOptions] = React.useState([
      { value: '1', label: 'Sport' },
      { value: '2', label: 'Development' },
      { value: '3', label: 'All' }
    ]);

    const handleCreateOption = (inputValue) => {
      const newOption = {
        value: inputValue.toLowerCase(),
        label: inputValue.charAt(0).toUpperCase() + inputValue.slice(1)
      };
  
      setOptions([...options, newOption]);
    };

  return (
    <>
      <header className={style.navbar}>
        <div>
          <ul className={style.leftbar}>
            {
              path==='/signin' || path==='/signup' ?
              <Link className={style.link} to='/'>Home</Link> :
              <Link className={style.link} to='/signup'>Sign Up for Our Newsletter</Link>
            }
          </ul>
        </div>

        <div>
          <h1 className={style.heading}> <Link className={style.heading} to="/">TIME</Link> </h1>
        </div>

        <div>
          <ul className={style.rightbar}>
            <Link to='/signin' className={style.a}> SIGN IN </Link>
          </ul>
        </div>
      </header>

      {path === "/signin" || path === "/signup" ? null : (
        <nav className={style.navbar}>
          <div>
            {(["left"] as const).map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>
                  <MenuIcon style={{ color: "black" }} />
                </Button>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  <Box
                    sx={{
                      width:
                        anchor === "top" || anchor === "bottom" ? "auto" : 250,
                    }}
                    role="presentation"
                    onClick={toggleDrawer(anchor, false)}
                    onKeyDown={toggleDrawer(anchor, false)}
                  >
                    <List>
                      <ListItem disablePadding>
                        <ListItemText style={{padding:'0 20px'}}>Pages</ListItemText>
                      </ListItem>
                      <Link style={{textDecoration:'none', color:'black'}} to='/signup'>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                              <PersonAddIcon /> 
                            </ListItemIcon>
                            <ListItemText>Sign Up</ListItemText>
                          </ListItemButton>
                        </ListItem>
                      </Link>
                      <Link style={{textDecoration:'none', color:'black'}} to='/signin'>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                              <LoginIcon /> 
                            </ListItemIcon>
                            <ListItemText>Sign In</ListItemText>
                          </ListItemButton>
                        </ListItem>
                      </Link>
                      <Link style={{textDecoration:'none', color:'black'}} to='/'>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                              <NewspaperIcon /> 
                            </ListItemIcon>
                            <ListItemText>News</ListItemText>
                          </ListItemButton>
                        </ListItem>
                      </Link>
                      {
                        localStorage.getItem("publisher") ? 
                        <>
                          <Link style={{textDecoration:'none', color:'black'}} to='createnews'>
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemIcon>
                                  <EditNoteIcon /> 
                                </ListItemIcon>
                                <ListItemText>Create News</ListItemText>
                              </ListItemButton>
                            </ListItem>
                          </Link>
                          
                          <Link style={{textDecoration:'none', color:'black'}}to={`/publisher/${publisherId}`}>
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemIcon>
                                  <InboxIcon /> 
                                </ListItemIcon>
                                <ListItemText>Publisher</ListItemText>
                              </ListItemButton>
                            </ListItem>
                          </Link>
                        </>
                        : null
                      }
                      {
                        localStorage.getItem("user") ? 
                          <Link style={{textDecoration:'none', color:'black'}} to='user'>
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemIcon>
                                  <InboxIcon /> 
                                </ListItemIcon>
                                <ListItemText>User</ListItemText>
                              </ListItemButton>
                            </ListItem>
                          </Link> : null
                      }
                      <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                              <ExitToAppIcon /> 
                            </ListItemIcon>
                            <ListItemText onClick={()=>{
                              if(localStorage.getItem("user")){
                                dispatch(user_sign_out)
                                Swal.fire("You have been signed out");
                              }
                              else if(localStorage.getItem("publisher")){
                                dispatch(publisher_sign_out);
                                Swal.fire("You have been signed out");
                              }
                              else{
                                Swal.fire("You have not been logged in yet!");
                              }
                            }}>Logout</ListItemText>
                          </ListItemButton>
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                      <ListItem disablePadding>
                          <ListItemText style={{padding:'0 20px'}}>Tags</ListItemText>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                              <TagIcon />
                            </ListItemIcon>
                            <ListItemText>
                              All
                            </ListItemText>
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                              <TagIcon />
                            </ListItemIcon>
                            <ListItemText>
                              Latest
                            </ListItemText>
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                              <TagIcon />
                            </ListItemIcon>
                            <ListItemText>
                              Development
                            </ListItemText>
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                              <TagIcon />
                            </ListItemIcon>
                            <ListItemText>
                              Sport
                            </ListItemText>
                          </ListItemButton>
                        </ListItem>
                    </List>
                  </Box>
                </Drawer>
              </React.Fragment>
            ))}
          </div>

          {!showInput && (
            <div>
              <span className={style.newsletter}>
                SIGN UP FOR OUR IDEAS NEWSLETTER
              </span>
            </div>
          )}

          <div>
            {showInput && (
              <div style={{ display: "flex" }}>
              <CreatableSelect styles={customStyles} isMulti options={options}  onCreateOption={handleCreateOption} />
                  <IconButton
                    onClick={() => setShowInput(!showInput)}
                    aria-label="search"
                  >
                  <CloseIcon />
                </IconButton>
              </div>
            )}
            {!showInput && (
              <>
                <IconButton
                  onClick={() => setShowInput(!showInput)}
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </>
            )}
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
