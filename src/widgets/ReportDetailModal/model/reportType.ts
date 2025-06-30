export type SanctionType = 'suspend' | 'warning' | 'restrict' | 'ban';

export const SANCTION_TYPES: Record<SanctionType, string> = {
  suspend: '활동 정지',
  warning: '경고',
  restrict: '거래 제한',
  ban: '영구 탈퇴',
} as const;

export const sanctionTypeOptions = Object.entries(SANCTION_TYPES).map(
  ([value, label]) => ({
    value: value as SanctionType,
    label,
  }),
);
