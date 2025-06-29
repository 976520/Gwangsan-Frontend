import { Notice } from "@/entities/notice/model/types"
import NoticeDetail from "@/shared/ui/NoticeDetail/page"

interface NoticeViewProps {
    notice: Notice | null
    onBack: () => void
}

export default function NoticeView ({ notice, onBack }: NoticeViewProps) {
    return <div>
    {
      notice ? (
        <NoticeDetail notice={notice} onBack={onBack} />
      ) : (
        <div>
          <p>로딩중...</p>
        </div>
      )
    }
    </div>
}
