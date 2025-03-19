export const orderStatus: { value: number; label: string }[] = [
  { value: 1, label: "Order Received" },
  { value: 2, label: "Inventory Check" },
  { value: 3, label: "In Process (Invoice)" },
  { value: 4, label: "Invoice Sent" },
  { value: 5, label: "In Process (Payment)" },
  { value: 6, label: "Payment Completed" },
  { value: 7, label: "Order Completed (Supplier)" },
  { value: 8, label: "Prepare For Shipment" },
  { value: 9, label: "Shipping" },
  { value: 10, label: "Shipped" },
  { value: 11, label: "Purchase Confirmed" },
  { value: 12, label: "Order Cancel" },
  { value: 13, label: "Refund Request" },
  { value: 14, label: "Refund Processing" },
  { value: 15, label: "Refund Completed" },
  { value: 16, label: "Exchange Request" },
  { value: 17, label: "Exchange Processing" },
  { value: 18, label: "Exchange Completed" },
  { value: 19, label: "Delivery Completed" },
];

export const pageSize = 30;

export const adminType: { label: string; value: number }[] = [
  { label: "Admin", value: 1 },
  { label: "Data Manager", value: 2 },
  { label: "Retail Store Manager", value: 3 },
  { label: "User", value: 4 },
];

export const stockStatus = [
  { id: 1, value: 1, name: "In Stock", label: "In Stock" },
  { id: 2, value: 2, name: "Sold Out", label: "Sold Out" },
  { id: 3, value: 3, name: "Hidden", label: "Hidden" },
  {
    id: 4,
    value: 4,
    name: "Sold Out By Recycle Park",
    label: "Sold Out By Recycle Park",
  },
  { id: 5, value: 5, name: "Exclude", label: "Exclude" },
];

export const useQueryOption = {
  refetchOnWindowFocus: false,
  keepPreviousData: true,
  retry: false,
  refetchIntervalInBackground: false,
  retryOnMount: false,
};

// export const Ordering = [
//   { id: 'price', name: 'High Price' },
//   { id: '-price', name: 'Low Price' },
//   { id: 'createdAt', name: 'Newest First' },
//   { id: '-createdAt', name: 'Oldest First' },
//   { id: 'sku', name: 'Sku' },
//   { id: '-sku', name: 'Sku (descending)' },

//     sku - Sku
//     -sku - Sku (descending)
//     part_number - Part number
//     -part_number - Part number (descending)
//     brand_name - Brand name
//     -brand_name - Brand name (descending)
//     supplier - Supplier
//     -supplier - Supplier (descending)
//     retail_store_name - Retail store name
//     -retail_store_name - Retail store name (descending)
//     stock_status - Stock status
//     -stock_status - Stock status (descending)},
// ];
