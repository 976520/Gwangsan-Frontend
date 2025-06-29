export const SUSPENSION_PERIODS: Record<SuspensionPeriod, string> = {
  '1': '1일',
  '3': '3일',
  '7': '7일',
  '14': '14일',
  '30': '30일',
} as const;

export type SuspensionPeriod = '1' | '3' | '7' | '14' | '30';

export const suspensionPeriodOptions = Object.entries(SUSPENSION_PERIODS).map(
  ([value, label]) => ({
    value: value as SuspensionPeriod,
    label,
  }),
);
