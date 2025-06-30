export type StateType = 'active' | 'ban' | 'waiting';

export const STATE_TYPES: Record<StateType, string> = {
  active: '활성',
  ban: '정지',
  waiting: '대기',
} as const;

export type RoleType = 'admin' | 'standard' | 'cody';

export const ROLE_TYPES: Record<RoleType, string> = {
  admin: '사무국',
  standard: '일반 계정',
  cody: '코디네이터',
} as const;

export const RoleTypeOptions = Object.entries(ROLE_TYPES).map(
  ([value, label]) => ({
    value: value as RoleType,
    label,
  }),
);

export interface MemberType {
  id: number;
  name: string;
  email: string;
  role: RoleType;
  status: StateType;
  joinDate: string;
  avatar?: string;
}
