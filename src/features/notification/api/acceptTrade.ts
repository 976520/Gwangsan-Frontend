import { instance } from '@/shared/lib/axios';

export const acceptTrade = (id: string) => {
  instance.post(`/admin/trade-complete/${id}`);
};
