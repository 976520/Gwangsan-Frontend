export type SanctionType = 'suspend' | 'warning' | 'restrict' | 'ban';

export type SuspensionPeriod = '1' | '3' | '7' | '14' | '30';

export const SANCTION_TYPES: Record<SanctionType, string> = {
  suspend: '활동 정지',
  warning: '경고',
  restrict: '거래 제한',
  ban: '영구 탈퇴'
} as const;

export const SUSPENSION_PERIODS: Record<SuspensionPeriod, string> = {
  '1': '1일',
  '3': '3일',
  '7': '7일',
  '14': '14일',
  '30': '30일'
} as const;

export const sanctionTypeOptions = Object.entries(SANCTION_TYPES).map(([value, label]) => ({
  value: value as SanctionType,
  label
}));

export const suspensionPeriodOptions = Object.entries(SUSPENSION_PERIODS).map(([value, label]) => ({
  value: value as SuspensionPeriod,
  label
}));