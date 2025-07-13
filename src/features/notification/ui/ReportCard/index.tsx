import { useCallback } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle } from 'lucide-react';
import ReportDetailModal from '@/features/notification/ui/ReportDetail';
import {
  NotificationData,
  NOTIFICATION_STATUSES,
} from '@/entities/notification/model/notificationType';
import {
  canApproveNotification,
  canRejectNotification,
  canViewReportDetail,
} from '@/entities/notification/lib/notificationGuards';
import { getStatusStyle } from '@/entities/notification/lib/getStatusStyle';

interface ReportCardProps {
  notification: NotificationData;
  onAction: (id: string, action: string) => void;
  onMemberSuspend?: (userId: string, days: number) => void;
}

const ReportCard: React.FC<ReportCardProps> = ({
  notification,
  onAction,
  onMemberSuspend,
}) => {
  const handleApprove = useCallback(() => {
    onAction(notification.id, NOTIFICATION_STATUSES.승인됨);
  }, [onAction, notification.id]);

  const handleReject = useCallback(() => {
    onAction(notification.id, NOTIFICATION_STATUSES.거절됨);
  }, [onAction, notification.id]);

  return (
    <section className="rounded-lg border p-4">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <Badge variant="outline">{notification.type}</Badge>
            <span className="font-medium">{notification.user}</span>
            <span className="text-sm text-gray-500">{notification.time}</span>
          </div>
          <p className="mt-1 text-gray-600">{notification.message}</p>
          {notification.reportedUser && (
            <p className="mt-1 text-sm text-red-600">
              신고 대상: {notification.reportedUser}
            </p>
          )}
        </div>

        <div className="flex items-center space-x-2">
          {canViewReportDetail(notification) && (
            <ReportDetailModal
              notification={notification}
              onAction={onAction}
              onMemberSuspend={onMemberSuspend}
              trigger={
                <Button size="sm" variant="outline">
                  상세
                </Button>
              }
            />
          )}

          {canApproveNotification(notification) && (
            <Button size="sm" onClick={handleApprove} className="bg-green-600">
              <CheckCircle className="mr-1 h-4 w-4" />
              승인
            </Button>
          )}

          {canRejectNotification(notification) && (
            <Button variant="outline" size="sm" onClick={handleReject}>
              <XCircle className="mr-1 h-4 w-4" />
              거절
            </Button>
          )}

          {!canApproveNotification(notification) &&
            !canRejectNotification(notification) &&
            !canViewReportDetail(notification) && (
              <Badge className={getStatusStyle(notification.status)}>
                {notification.status}
              </Badge>
            )}
        </div>
      </div>
    </section>
  );
};

export default ReportCard;
