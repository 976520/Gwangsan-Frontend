'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import ReportCard from '@/features/notification/ui/ReportCard';
import {
  NotificationData,
  NotificationStatus,
} from '@/entities/notification/model/notificationType';
import { mockNotifications } from '../mock/mockNotifications';

const NotificationList: React.FC = () => {
  const [notifications, setNotifications] =
    useState<NotificationData[]>(mockNotifications);

  const handleNotificationAction = (id: string, action: string) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id
          ? { ...notification, status: action as NotificationStatus }
          : notification,
      ),
    );
  };

  const handleMemberSuspend = (userId: string, days: number) => {
    console.log(`회원 ${userId}을(를) ${days}일 정지 처리`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>대기 중인 알림</CardTitle>
        <CardDescription>
          회원들의 요청사항을 확인하고 처리할 수 있습니다.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <ReportCard
              key={notification.id}
              notification={notification}
              onAction={handleNotificationAction}
              onMemberSuspend={handleMemberSuspend}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationList;
