import Link from 'next/link';
import Bell from '../asset/svg/Bell';
import { Badge } from '@/components/ui/badge';

export default function Header() {
  return (
    <header className="flex items-center bg-white justify-between p-4">
      <h1 className="text-2xl font-bold text-gray-900">시민 화폐 광산</h1>
      <div className="flex items-center space-x-4">
        <Link href="/notification">
          <Badge variant="outline" className="flex items-center space-x-1">
            <Bell />
            <span>4</span>
          </Badge>
        </Link>
      </div>
    </header>
  );
}
