import { NotificationData, NOTIFICATION_TYPES, NOTIFICATION_STATUSES } from "@/entities/notification/model/notificationType";

export const isReportNotification = (notification: NotificationData): boolean => {
  return notification.type === NOTIFICATION_TYPES.신고;
};

export const isPendingNotification = (notification: NotificationData): boolean => {
  return notification.status === NOTIFICATION_STATUSES.대기;
};

export const canApproveNotification = (notification: NotificationData): boolean => {
  return isPendingNotification(notification) && !isReportNotification(notification);
};

export const canRejectNotification = (notification: NotificationData): boolean => {
  return isPendingNotification(notification) && !isReportNotification(notification);
};

export const canViewReportDetail = (notification: NotificationData): boolean => {
  return isPendingNotification(notification) && isReportNotification(notification);
};
