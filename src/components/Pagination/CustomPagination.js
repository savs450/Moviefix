import React from "react";
import Pagination from "@mui/material/Pagination";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    type: "dark",
  },
});

function CustomPagination({ setPage, numofPages = 10 }) {
  function handleChange(page) {
    setPage(page);
    window.scroll(0, 0);
  }
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Pagination
          color="primary"
          count={numofPages}
          onChange={(e) => handleChange(e.target.textContent)}
        />
      </ThemeProvider>
    </div>
  );
}

export default CustomPagination;
