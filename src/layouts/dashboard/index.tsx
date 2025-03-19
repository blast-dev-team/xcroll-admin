import Box from '@mui/material/Box';

import { useBoolean } from 'src/hooks/use-boolean';

import Main from './main';
import NavVertical from './nav-vertical';
import Header from './header';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  const nav = useBoolean(false);
  const renderNavVertical = <NavVertical />;

  return (
    <>
      {/*<Header onOpenNav={nav.onTrue} />*/}
      <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        {renderNavVertical}

        <Main>{children}</Main>
      </Box>
    </>
  );
}
