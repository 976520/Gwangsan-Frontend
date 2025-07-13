import { Badge } from '@/components/ui/badge';
import { Trade } from '../../model/cardTypes';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle } from 'lucide-react';
import { acceptTrade } from '../../api/acceptTrade';

interface TradeCardProps {
  data: Trade;
}

export default function TradeCard({ data }: TradeCardProps) {
  return (
    <div key={data.product.id} className="rounded-lg border p-4">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <Badge variant="outline">거래</Badge>
            <span className="font-medium">{data.nickname}</span>
          </div>
          <p className="mt-1 text-gray-600">새로운 거래 요청</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            size="sm"
            onClick={() => acceptTrade(data.product.id.toString())}
            className="bg-green-600 hover:bg-green-700"
          >
            <CheckCircle className="mr-1 h-4 w-4" />
            승인
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => console.log('거절은 구현 안했지롱~')}
          >
            <XCircle className="mr-1 h-4 w-4" />
            거절
          </Button>
        </div>
      </div>
    </div>
  );
}
