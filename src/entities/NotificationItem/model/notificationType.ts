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

export const STATUS_STYLES: Record<NotificationStatus, string> = {
  '대기': 'bg-gray-100 text-gray-800',
  '승인됨': 'bg-green-100 text-green-800',
  '거절됨': 'bg-red-100 text-red-800',
  '처리완료': 'bg-blue-100 text-blue-800'
} as const;

export const DEFAULT_NOTIFICATION_STATUS: NotificationStatus = '대기';

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

export const isReportNotification = (notification: NotificationData): boolean => {
  return notification.type === NOTIFICATION_TYPES.신고;
};

export const isPendingNotification = (notification: NotificationData): boolean => {
  return notification.status === NOTIFICATION_STATUSES.대기;
};

export const getStatusStyle = (status: NotificationStatus): string => {
  return STATUS_STYLES[status];
};
