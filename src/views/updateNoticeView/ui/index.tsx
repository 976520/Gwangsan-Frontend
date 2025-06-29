import { Notice } from '@/entities/notice/model/types';
import { UpdateNoticeCard } from '@/features/notice/view/ui/UpdateNoticeCard';

interface UpdateNoticeViewProps {
  notice: Notice | null;
  updateNotice: (id: number, notice: Partial<Notice>, files: File[]) => void;
}

export default function UpdateNoticeView({
  notice,
  updateNotice,
}: UpdateNoticeViewProps) {
  return (
    <div className="px-12 py-2">
      {notice ? (
        <UpdateNoticeCard updateNotice={updateNotice} initNotice={notice} />
      ) : (
        <div>
          <p>로딩중...</p>
        </div>
      )}
    </div>
  );
}
