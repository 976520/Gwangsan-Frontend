'use client';

import Link from 'next/link';
import Bell from '../asset/svg/Bell';
import { Badge } from '@/components/ui/badge';
import { usePathname } from 'next/navigation';
import { authConfig } from '../config/auth';

export default function Header() {
  const pathname = usePathname();
  if (!authConfig.publicPages.includes(pathname)) {
    return (
      <header className="flex items-center justify-between bg-white p-4">
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
}
