import { Notice } from '@/entities/notice/model/types';

export const mockData: Notice[] = [
  {
    id: 1,
    title: '시스템 점검 안내',
    content: '2024년 12월 15일 오전 2시부터 시스템 점검이 있습니다.',
    placeName: '수완 세영',
    createdAt: new Date().toISOString(),
    role: '코디네이터',
    images: [
      {
        imageId: 1001,
        imageUrl: '',
      },
    ],
  },
  {
    id: 2,
    title: '신입생 공지',
    content: '2025학년도 신입생 오리엔테이션 안내입니다.',
    placeName: '수완 에너지',
    createdAt: new Date().toISOString(),
    role: '사무국',
    images: [],
  },
];
