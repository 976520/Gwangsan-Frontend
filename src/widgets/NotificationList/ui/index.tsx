'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import ReportCard from '@/features/notification/ui/ReportCard';
import SignupCard from '@/features/notification/ui/SignUpCard';
import TradeCard from '@/features/notification/ui/TradeCard';
import { useGetNotification } from '@/views/NotificationView/model/useGetNotification';
const NotificationList: React.FC = () => {
  const { data: notifications } = useGetNotification();
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
          {notifications?.reports.map((v) => (
            <ReportCard key={v.productId} data={v} />
          ))}
          {notifications?.signUps.map((v) => {
            return <SignupCard data={v} key={v.memberId} />;
          })}
          {notifications?.trades.map((v) => {
            return <TradeCard data={v} key={v.product.id} />;
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationList;
