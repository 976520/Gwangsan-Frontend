import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { NotificationData } from '@/entities/notification/model/notificationType';
import {
  SanctionType,
  sanctionTypeOptions,
} from '@/widgets/ReportDetailModal/model/reportType';
import {
  SuspensionPeriod,
  suspensionPeriodOptions,
} from '@/shared/model/Period';

interface ReportDetailModalProps {
  notification: NotificationData;
  onAction: (id: string, action: string) => void;
  onMemberSuspend?: (userId: string, days: number) => void;
  trigger: React.ReactNode;
}

const ReportDetailModal: React.FC<ReportDetailModalProps> = ({
  notification,
  onAction,
  onMemberSuspend,
  trigger,
}) => {
  const [selectedSanctionType, setSelectedSanctionType] =
    useState<SanctionType>('suspend');
  const [selectedSuspensionPeriod, setSelectedSuspensionPeriod] =
    useState<SuspensionPeriod>('1');

  const handleSanctionApply = () => {
    if (onMemberSuspend && notification.reportedUserId) {
      const days = parseInt(selectedSuspensionPeriod);
      onMemberSuspend(notification.reportedUserId, days);
    }
    onAction(notification.id, '처리완료');
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>
            {notification.user}님의 {notification.type}
          </DialogTitle>
          <DialogDescription>
            신고 내용을 검토하고 적절한 조치를 취하세요.
          </DialogDescription>
        </DialogHeader>
        <div className="my-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="mb-1 text-sm font-medium">신고자</h4>
              <p className="text-sm">{notification.user}</p>
            </div>
            <div>
              <h4 className="mb-1 text-sm font-medium">신고 대상</h4>
              <p className="text-sm">{notification.reportedUser}</p>
            </div>
            <div>
              <h4 className="mb-1 text-sm font-medium">신고 유형</h4>
              <p className="text-sm">{notification.category}</p>
            </div>
          </div>

          <div>
            <h4 className="mb-1 text-sm font-medium">신고 내용</h4>
            <p className="rounded-md border bg-gray-50 p-3 text-sm">
              {notification.detail}
            </p>
          </div>

          <div className="border-t pt-4">
            <h4 className="mb-2 text-sm font-medium">조치 사항</h4>
            <div className="space-y-3">
              <div>
                <Label htmlFor="action-type">제재 유형</Label>
                <Select
                  value={selectedSanctionType}
                  onValueChange={(value: SanctionType) =>
                    setSelectedSanctionType(value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="제재 유형 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    {sanctionTypeOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="suspension-period">정지 기간</Label>
                <Select
                  value={selectedSuspensionPeriod}
                  onValueChange={(value: SuspensionPeriod) =>
                    setSelectedSuspensionPeriod(value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="정지 기간 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    {suspensionPeriodOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onAction(notification.id, '거절')}
          >
            신고 기각
          </Button>
          <Button onClick={handleSanctionApply}>제재 적용</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ReportDetailModal;
