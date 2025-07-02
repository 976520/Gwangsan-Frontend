import { useQuery } from '@tanstack/react-query';
import { getSpecialty } from '../api/getSpecialty';

export interface Specialty {
  keyword: string;
  name: string;
}

export const useGetSpecialty = () => {
  return useQuery<Specialty[]>({
    queryKey: ['specialties'],
    queryFn: getSpecialty,
  });
};
