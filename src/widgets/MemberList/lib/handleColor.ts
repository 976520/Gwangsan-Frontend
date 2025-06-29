import {
  ROLE_TYPES,
  RoleType,
  STATE_TYPES,
  StateType,
} from '../model/memberType';

export const getRoleBadgeColor = (role: RoleType) => {
  switch (ROLE_TYPES[role]) {
    case '코디네이터':
      return 'bg-blue-100 text-blue-800';
    case '사무국':
      return 'bg-green-100 text-green-800';
    case '일반 계정':
      return 'bg-gray-100 text-gray-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const getStatusBadgeColor = (status: StateType) => {
  switch (STATE_TYPES[status]) {
    case '활성':
      return 'bg-green-100 text-green-800';
    case '정지':
      return 'bg-red-100 text-red-800';
    case '대기':
      return 'bg-yellow-100 text-yellow-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};
