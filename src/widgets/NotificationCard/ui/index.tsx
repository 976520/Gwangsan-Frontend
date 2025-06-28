import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const NotificationCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>대기 중인 알림</CardTitle>
        <CardDescription>회원들의 요청사항을 확인하고 처리할 수 있습니다.</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default NotificationCard;