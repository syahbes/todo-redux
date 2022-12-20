import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";

const Loading = () => {
  // return (
  //     <div style={{
  //         height: "100vh",
  //         width: "100vw",
  //         display: "flex",
  //         flexDirection: "column",
  //         justifyContent: "center",
  //         alignItems: "center",
  //     }}>☑️...</div>
  // )
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        // backgroundColor: "#E8EAED",
        margin: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          margin: "auto",
          padding: "15px 20px",
          minHeight: "100vh",
          // backgroundColor: "#b6b6b6",
          maxWidth: "640px",
        }}
      >
        <Stack spacing={2}>
          <Stack direction="row" spacing={2} justifyContent={"space-Between"}>
            <Skeleton variant="rounded" width={"50%"} height={40} />
            <Skeleton variant="rounded" width={"20%"} height={30} />
          </Stack>
          <Skeleton variant="rounded" height={30} />
          <Skeleton variant="rounded" height={30} />
          <Skeleton variant="rounded" height={30} />
          <Skeleton variant="rounded" height={30} />
        </Stack>
      </Box>
    </Box>
  );
};

export default Loading;
