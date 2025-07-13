import { instance } from '@/shared/lib/axios';

export const changeState = (id: string) => {
  return instance.patch(`/api/admin/status/${id}`, {
    status: 'active',
  });
};
