import { FormValues } from '@/features/notice/model/NoticeForm';
import { UpdateNoticeCard } from '@/features/notice/ui/UpdateNoticeCard';

interface UpdateNoticeViewProps {
  initialForm: FormValues | undefined;
  updateNotice: (changedForm: FormValues) => void;
}

export default function UpdateNoticeView({
  initialForm,
  updateNotice,
}: UpdateNoticeViewProps) {
  return (
    <div className="px-12 py-2">
      {initialForm ? (
        <UpdateNoticeCard
          updateNotice={updateNotice}
          initialForm={initialForm}
        />
      ) : (
        <div>
          <p>로딩중...</p>
        </div>
      )}
    </div>
  );
}
