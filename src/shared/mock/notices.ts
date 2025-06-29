import { Notice } from "@/entities/notice/model/types";

export const mockNotices: Notice[] = [
    {
      id: 1,
      title: 'Hello World',
      content: 'asdf',
      role: 'asdf',
      author: 'me',
      date: '2025-04-04',
      views: 0,
      images: ['/placeholder.svg']
    },
    {
      id: 2,
      title: 'Hello Worl2',
      content: 'asdf',
      role: 'asdf',
      author: 'me',
      date: '2025-04-04',
      views: 0,
      images: ['/example.svg']
    },
    {
      id: 3,
      title: 'Hello World 3',
      content: 'asdf',
      role: 'asdf',
      author: 'me',
      date: '2025-04-04',
      views: 0,
      images: ['/placeholder.svg']
    },
  ]