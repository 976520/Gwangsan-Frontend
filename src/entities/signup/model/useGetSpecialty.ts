import { useQuery } from '@tanstack/react-query';
import { getSpecialty } from '../api/getSpecialty';

export const useGetSpecialty = () => {
  return useQuery<Specialty[]>({
    queryKey: ['specialties'],
    queryFn: getSpecialty,
  });
};
