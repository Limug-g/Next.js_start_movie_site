import { globalStyle } from "@vanilla-extract/css";

globalStyle("html, body", {
  margin: 0,
  padding: 0,
});
globalStyle("body", {
  backgroundColor: "white",
});
globalStyle("a", {
  margin: "20px",
  color: "inherit",
  textDecoration: "none",
});
globalStyle("*", {
  boxSizing: "border-box",
});
