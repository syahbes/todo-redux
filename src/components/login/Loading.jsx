import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';

const Loading = () => {
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
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            // backgroundColor: "#00b7c3",
            // color: "white",
            gap: 2,
            // border: "1px solid red",
            maxWidth: "640px",
            margin: "0 auto",
          }}
        >
        <Stack spacing={1}>
          {/* For variant="text", adjust the height via font-size */}
        <Stack spacing={1} direction="row" justifyContent={"space-between"}>    
          <Skeleton variant="text" sx={{ fontSize: '2rem' , width:"50%"}} />
          <Skeleton variant="text" sx={{ fontSize: '2rem' , width:"20%"}} />
          </Stack>
          {/* For other variants, adjust the size with `width` and `height` */}
    
          <Skeleton variant="rounded" width={210} height={40} />
                <Skeleton variant="rounded" width={210} height={40} />
                      <Skeleton variant="rounded" width={210} height={40} />
                <Skeleton variant="rounded" width={210} height={40} />
        </Stack>
        </Box>
        </Box>
      );
}

export default Loading




