import { memo } from 'react';

import { useTheme } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';

// ----------------------------------------------------------------------

function ErrorShape({ ...other }: BoxProps) {
  const theme = useTheme();

  const PRIMARY_MAIN = theme.palette.primary.main;

  const PRIMARY_DARK = theme.palette.primary.dark;

  const PRIMARY_DARKER = theme.palette.primary.darker;

  return (
    <Box
      component="svg"
      width="100%"
      height="100%"
      viewBox="0 0 16 13"
      xmlns="http://www.w3.org/2000/svg"
      {...other}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.0397 9.86663L9.92641 1.38663C9.50622 0.729292 8.7799 0.331543 7.99974 0.331543C7.21958 0.331543 6.49326 0.729292 6.07308 1.38663L0.959742 9.86663C0.592106 10.4795 0.579398 11.2419 0.926408 11.8666C1.32772 12.5701 2.07656 13.0031 2.88641 13H13.1131C13.9174 13.0085 14.665 12.5865 15.0731 11.8933C15.4305 11.2617 15.4177 10.4861 15.0397 9.86663ZM7.99974 10.3333C7.63155 10.3333 7.33308 10.0348 7.33308 9.66663C7.33308 9.29844 7.63155 8.99996 7.99974 8.99996C8.36793 8.99996 8.66641 9.29844 8.66641 9.66663C8.66641 10.0348 8.36793 10.3333 7.99974 10.3333ZM7.99974 8.33329C8.36793 8.33329 8.66641 8.03482 8.66641 7.66663V4.99996C8.66641 4.63177 8.36793 4.33329 7.99974 4.33329C7.63155 4.33329 7.33308 4.63177 7.33308 4.99996V7.66663C7.33308 8.03482 7.63155 8.33329 7.99974 8.33329Z"
        fill="#FF5630"
      />
    </Box>
  );
}

export default memo(ErrorShape);
