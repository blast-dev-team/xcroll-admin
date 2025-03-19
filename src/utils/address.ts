import { IAddress } from '@/apis/admin-api/user/interfaces';

export const makeAddress = (address: IAddress) =>
  `${address?.address1} ${address?.address2} ${address?.city} ${address?.state} ${address?.country} ${address?.post_code} `;
