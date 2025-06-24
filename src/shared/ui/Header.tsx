import Bell from '../asset/svg/Bell';
import { Badge } from '@/components/ui/badge';

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold text-gray-900">관리자 대시보드</h1>
      <div className="flex items-center space-x-4">
        <Badge variant="outline" className="flex items-center space-x-1">
          <Bell />
          <span>4</span>
        </Badge>
      </div>
    </div>
  );
}
