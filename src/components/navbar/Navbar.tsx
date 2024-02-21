import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import NotifyBell from "./NotifyBell";
const Navbar = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "28ch",
        "&:focus": {
          width: "40ch",
        },
      },
    },
  }));

  return (
    <nav id="navbar">
      <aside className="flex gap-8 nav-side-left text-purple-100">
        Innovators United
        <div className="pl-10">
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Now .."
              inputProps={{ "aria-label": "search" }}
              className="border-2 border-[#5c5e5c28] shadow-sm rounded-lg"
            />
          </Search>
        </div>
      </aside>
      <aside className="w-[20%] flex gap-2">
        <NotifyBell />

        <article className="flex relative left-16 text-[17px]">
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/2.jpg"
            className="scale-125 border-2 hover:scale-110 cursor-pointer transition-all duration-200 relative right-8"
          />
          <button className="opacity-85 cursor-pointer px-8 rounded-lg bg-gray-100 text-black hover:text-white hover:border-2 hover:border-emerald-100 hover:bg-gray-900 transition-all duration-200">
            Logout
          </button>
        </article>
      </aside>
    </nav>
  );
};

export default Navbar;
