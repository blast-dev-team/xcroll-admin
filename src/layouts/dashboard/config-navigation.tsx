import { useMemo } from "react";

import { paths } from "src/routes/paths";

import SvgColor from "src/components/svg-color";

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
  // OR
  // <Iconify icon="fluent:mail-24-filled" />
  // https://icon-sets.iconify.design/solar/
  // https://www.streamlinehq.com/icons
);

const ICONS = {
  job: icon("ic_job"),
  blog: icon("ic_blog"),
  chat: icon("ic_chat"),
  mail: icon("ic_mail"),
  user: icon("ic_user"),
  file: icon("ic_file"),
  lock: icon("ic_lock"),
  tour: icon("ic_tour"),
  order: icon("ic_order"),
  label: icon("ic_label"),
  blank: icon("ic_blank"),
  kanban: icon("ic_kanban"),
  folder: icon("ic_folder"),
  banking: icon("ic_banking"),
  booking: icon("ic_booking"),
  invoice: icon("ic_invoice"),
  product: icon("ic_product"),
  calendar: icon("ic_calendar"),
  disabled: icon("ic_disabled"),
  external: icon("ic_external"),
  menuItem: icon("ic_menu_item"),
  ecommerce: icon("ic_ecommerce"),
  analytics: icon("ic_analytics"),
  dashboard: icon("ic_dashboard"),
};

// ----------------------------------------------------------------------

export function useNavData() {
  const data = useMemo(
    () => [
      // OVERVIEW
      // ----------------------------------------------------------------------
      {
        subheader: "SERVICE MAGAGEMENT",
        roles: ["super", "service"],
        items: [
          {
            title: "Dash Board",
            path: paths.dashboard.root,
            icon: ICONS.analytics,
            roles: ["super", "service"],
          },
          {
            title: "사용자 관리",
            path: paths.dashboard.user,
            icon: ICONS.user,
            roles: ["super", "service"],
            children: [
              { title: "Admin", path: "#" },
              { title: "User", path: "#" },
              { title: "Retail Store", path: "#" },
              { title: "Supplier Store", path: "#" },
              { title: "Payoner", path: "#" },
            ],
          },
          {
            title: "제품 관리",
            path: paths.dashboard.product,
            icon: ICONS.product,
            roles: ["super", "service"],
          },
          {
            title: "결제 관리",
            path: paths.dashboard.payment,
            icon: ICONS.order,
            roles: ["super", "service"],
          },
          {
            title: "환율 관리",
            path: paths.dashboard.rate,
            icon: ICONS.banking,
            roles: ["super", "service"],
          },
          {
            title: "인보이스 관리",
            path: paths.dashboard.invoice,
            icon: ICONS.invoice,
            roles: ["super", "service"],
          },
          {
            title: "CONTACT",
            path: paths.dashboard.contact,
            icon: ICONS.mail,
            roles: ["super", "service"],
          },
        ],
      },

      // MANAGEMENT
      // ----------------------------------------------------------------------
      {
        subheader: "RETAIL MANAGEMENT",
        roles: ["super", "retail"],
        items: [
          {
            title: "Dash Board",
            path: paths.dashboard.root,
            icon: ICONS.analytics,
            roles: ["super", "retail"],
          },
          {
            title: "제품 관리",
            path: paths.dashboard.product,
            icon: ICONS.product,
            roles: ["super", "retail"],
          },
          {
            title: "결제 관리",
            path: paths.dashboard.payment,
            icon: ICONS.order,
            roles: ["super", "retail"],
          },
          {
            title: "인보이스 관리",
            path: paths.dashboard.invoice,
            icon: ICONS.invoice,
            roles: ["super", "retail"],
          },
        ],
      },
    ],
    [],
  );

  return data;
}
