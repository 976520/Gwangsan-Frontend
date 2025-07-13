import { useQuery } from '@tanstack/react-query';
import { getNotification } from '../api/getNotification';
import { Report, Signup, Trade } from '@/features/notification/model/cardTypes';

interface Response {
  reports: Report[];
  signUps: Signup[];
  trades: Trade[];
}

export const useGetNotification = () => {
  return useQuery<Response>({
    queryKey: ['notification'],
    queryFn: getNotification,
  });
};
