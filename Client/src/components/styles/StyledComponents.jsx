import { styled } from "@mui/material";
import { Link as LinkComponent } from "react-router-dom";
import { grayColor, matBlack } from "../../constants/color";

export const VisuallyHiddenInput = styled("input")({
  position: "absolute",
  width: "1px",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  border: "0",
  clipPath: "inset(50%)",
  background: "transparent",
  padding: "0",
  border: "0",
  outline: "none",
});

export const Link = styled(LinkComponent)`
    text-decoration: none;
    color: black,
    padding: 1rem;
    &:hover{
      background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const InputBox = styled("input")`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    padding: 0 3rem;
    border-radius: 1.5rem;
    background-color: ${grayColor};
`;

export const SearchField = styled("input")`
    width: 20vmax;
    border: none;
    outline: none;
    padding: 1rem 2rem;
    border-radius: 1.5rem;
    font-size: 1.1rem;
    border-color: ${grayColor};
`;

export const CurveButton = styled("button")`
    padding: 1rem 2rem;
    border: none;
    border-radius: 1.5rem;
    background-color: ${matBlack};
    color: white;
    cursor: pointer;
    outline: none;
    font-size: 1.1rem;
    &:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }
`;