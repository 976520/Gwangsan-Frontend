import { NotificationStatus } from "@/entities/notification/model/notificationType";

export const STATUS_STYLES: Record<NotificationStatus, string> = {
  '대기': 'bg-gray-100 text-gray-800',
  '승인됨': 'bg-green-100 text-green-800',
  '거절됨': 'bg-red-100 text-red-800',
  '처리완료': 'bg-blue-100 text-blue-800'
} as const;

export const getStatusStyle = (status: NotificationStatus): string => {
  return STATUS_STYLES[status];
};
