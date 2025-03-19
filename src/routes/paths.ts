// ----------------------------------------------------------------------

const ROOTS = {
  LOGIN: "/login",
  DASHBOARD: "/",
  USER: "/user",
  PRODUCT: "/product",
  PAYMENT: "/payment",
  RATE: "/rate",
  INVOICE: "/invoice",
  CONTACT: "/contact"
};

// ----------------------------------------------------------------------

export const paths = {
  minimalUI: "https://mui.com/store/items/minimal-dashboard/",
  // AUTH
  auth: {
    jwt: {
      login: `${ROOTS.LOGIN}`,
    },
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    user: ROOTS.USER,
    product: ROOTS.PRODUCT,
    payment: ROOTS.PAYMENT,
    rate: ROOTS.RATE,
    invoice: ROOTS.INVOICE,
    contact: ROOTS.CONTACT,
    retail: {
      product: ROOTS.PRODUCT,
      payment: ROOTS.PAYMENT,
      invoice: ROOTS.INVOICE,
    },
  },
};
