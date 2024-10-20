import { Avatar, AvatarGroup, Box, Stack } from "@mui/material";
import React from "react";
import { transformImage } from "../../lib/features";

//Todo transform
export const AvatarCard = ({ avatar = [], max = 4 }) => {
  return (
    <Stack direction={"row"} spacing={0.5}>
      <AvatarGroup max={max} sx={{position: "relative"}}>
        {avatar.map((i, index) => (
          <Box width={"5rem"} height={"3rem"}
          key={index}>
            <Avatar
              key={Math.random() * 100}
              alt={`User Avatar ${index}`}
              src={transformImage(i)}
              sx={{
                width: "3rem",
                height: "3rem",
                position: "absolute",
                left: {
                    xs: `${index + 0.5}rem`,
                    sm: `${index}rem`,
                }
            }}
            />
          </Box>
        ))}
      </AvatarGroup>
    </Stack>
  );
};
