import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Drawer from "@mui/material/Drawer";

import { usePathname, useRouter } from "src/routes/hooks";

import { useResponsive } from "src/hooks/use-responsive";
import { useMockedUser } from "src/hooks/use-mocked-user";

import Logo from "src/components/logo";
import Scrollbar from "src/components/scrollbar";
import { NavSectionVertical } from "src/components/nav-section";

import { NAV } from "../config-layout";
import NavUpgrade from "../common/nav-upgrade";
import { useNavData } from "./config-navigation";
import NavToggleButton from "../common/nav-toggle-button";
import Header from "./header";
import { useBoolean } from "../../hooks/use-boolean";
import LanguagePopover from "../common/language-popover";
import NotificationsPopover from "../common/notifications-popover";
import ContactsPopover from "../common/contacts-popover";
import SettingsButton from "../common/settings-button";
import AccountPopover from "../common/account-popover";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Label from "../../components/label";
import Iconify from "../../components/iconify";
import { m } from "framer-motion";
import { varHover } from "../../components/animate";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import GreyButton from "../../components/grey-button";
// import { useGetProfile } from "@/apis/admin-api/user/quries";
// import { IUser } from "@/apis/admin-api/user/interfaces";
import { adminType } from "@/constants";

// ----------------------------------------------------------------------

export default function NavVertical() {
  const { user } = useMockedUser();
  const router = useRouter();
  // const {
  //   data: profile,
  //   mutate,
  //   status,
  // } = useGetProfile("master@blast-team.com");
  const profileState = JSON.parse(localStorage.getItem("profile") as string);
  // const [profileData, setProfileData] = useState<IUser>(profileState?.items[0]);
  const profileData = {
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'temp@email.com',
    admin_type: 1
  }

  useEffect(() => {
    if (!localStorage.getItem("profile")) {
      // mutate();
    }
  }, []);

  // useEffect(() => {
  //   if (status === "success") {
  //     localStorage.setItem("profile", JSON.stringify(profile));
  //     setProfileData(profile?.items[0]);
  //   }
  // }, [status]);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    router.replace("/");
  };
  const navData = useNavData();

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
      }}
    >
      <Logo sx={{ mt: 3, ml: 4, mb: 1 }} />
      <Box sx={{ p: 2, pb: 1.5, pl: 3.5 }}>
        <Typography variant="body2" sx={{ color: "text.disabled" }} noWrap>
          {profileData?.email}
        </Typography>
        <Box
          display="flex"
          alignItems="flex-start"
          flexDirection="column"
          rowGap={1}
        >
          <Typography
            sx={{ mt: 0.5, mr: 2 }}
            variant="body2"
            fontWeight="bold"
            noWrap
          >
            {profileData?.first_name + " " + profileData?.last_name}
          </Typography>
          <Label color="primary">
            {
              adminType.find((type) => type.value === profileData?.admin_type)
                ?.label
            }
          </Label>
        </Box>
      </Box>
      <Stack
        flexGrow={1}
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={1}
        px={2}
      >
        <GreyButton
          fullWidth
          color="inherit"
          size="small"
          type="submit"
          variant="contained"
          onClick={handleLogout}
          startIcon={<Iconify icon="mingcute:exit-door-line" width={18} />}
        >
          Logout
        </GreyButton>
        <LanguagePopover />
        {/*나중에 로직 적용 예정*/}
        {/*<NotificationsPopover />*/}
        <IconButton
          component={m.button}
          whileTap="tap"
          whileHover="hover"
          variants={varHover(1.05)}
          color={"default"}
        >
          <Badge color="error">
            <Iconify icon="solar:bell-bing-bold-duotone" width={24} />
          </Badge>
        </IconButton>
      </Stack>
      <NavSectionVertical
        data={navData}
        slotProps={{
          currentRole: user?.role,
        }}
      />

      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <Box
      sx={{
        flexShrink: { lg: 0 },
        width: NAV.W_VERTICAL,
      }}
    >
      <Stack
        sx={{
          height: 1,
          position: "fixed",
          width: NAV.W_VERTICAL,
          borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
        }}
      >
        {renderContent}
      </Stack>
      {/*{lgUp ? (*/}
      {/*  <Stack*/}
      {/*    sx={{*/}
      {/*      height: 1,*/}
      {/*      position: 'fixed',*/}
      {/*      width: NAV.W_VERTICAL,*/}
      {/*      borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    {renderContent}*/}
      {/*  </Stack>*/}
      {/*) : (*/}
      {/*  <Drawer*/}
      {/*    open={openNav}*/}
      {/*    onClose={onCloseNav}*/}
      {/*    PaperProps={{*/}
      {/*      sx: {*/}
      {/*        width: NAV.W_VERTICAL,*/}
      {/*      },*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    {renderContent}*/}
      {/*  </Drawer>*/}
      {/*)}*/}
    </Box>
  );
}
