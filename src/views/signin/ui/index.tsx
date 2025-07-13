import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import SigninForm from '@/widgets/SigninForm/ui';

export default function SigninView() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-center text-2xl font-bold">
            로그인
          </CardTitle>
          <CardDescription className="text-center">
            전화번호로 로그인하여 서비스를 이용하세요
          </CardDescription>
        </CardHeader>
        <SigninForm />
      </Card>
    </div>
  );
}
