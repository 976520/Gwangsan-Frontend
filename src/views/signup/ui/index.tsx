import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import SignupForm from '@/widgets/SignupForm/ui';

export default function SignupView() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-center text-2xl font-bold">
            회원가입
          </CardTitle>
          <CardDescription className="text-center">
            전화번호로 새 계정을 만드세요
          </CardDescription>
        </CardHeader>
        <SignupForm />
      </Card>
    </div>
  );
}
