import { 
  NotificationData,
  NOTIFICATION_TYPES,
  NOTIFICATION_STATUSES
} from "@/entities/NotificationItem/model/notificationType";

export const mockNotifications: NotificationData[] = [
  {
    id: "1",
    type: NOTIFICATION_TYPES.회원가입,
    user: "김철수",
    time: "2024-01-15 14:30",
    message: "새로운 회원가입 요청이 있습니다.",
    status: NOTIFICATION_STATUSES.대기
  },
  {
    id: "2",
    type: NOTIFICATION_TYPES.신고,
    user: "이영희",
    time: "2024-01-15 13:45",
    message: "부적절한 게시물 신고가 접수되었습니다.",
    status: NOTIFICATION_STATUSES.대기,
    reportedUser: "박민수",
    reportedUserId: "user123",
    category: "스팸/광고",
    detail: "반복적으로 광고성 게시물을 올리고 있습니다. 여러 번 경고했으나 계속해서 같은 행위를 반복하고 있어 신고합니다."
  },
  {
    id: "3",
    type: NOTIFICATION_TYPES.권한요청,
    user: "정민호",
    time: "2024-01-15 12:20",
    message: "관리자 권한 요청이 있습니다.",
    status: NOTIFICATION_STATUSES.대기
  },
  {
    id: "4",
    type: NOTIFICATION_TYPES.회원가입,
    user: "최수진",
    time: "2024-01-15 11:15",
    message: "새로운 회원가입 요청이 있습니다.",
    status: NOTIFICATION_STATUSES.승인됨
  }
];
