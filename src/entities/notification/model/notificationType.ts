export type NotificationType = '회원가입' | '신고' | '권한요청';

export type NotificationStatus = '대기' | '승인됨' | '거절됨' | '처리완료';

export const NOTIFICATION_TYPES = {
  회원가입: '회원가입',
  신고: '신고',
  권한요청: '권한요청'
} as const;

export const NOTIFICATION_STATUSES = {
  대기: '대기',
  승인됨: '승인됨',
  거절됨: '거절됨',
  처리완료: '처리완료'
} as const;

export interface NotificationData {
  id: string;
  type: NotificationType;
  user: string;
  time: string;
  message: string;
  status: NotificationStatus;
  reportedUser?: string;
  reportedUserId?: string;
  category?: string;
  detail?: string;
}
