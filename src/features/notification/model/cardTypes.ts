import { Place } from '@/widgets/SignupForm/model/locations';

export interface Report {
  productId: number;
  REPORT_TYPE: 'FRAUD' | 'BAD_LANGUAGE' | 'MEMBER' | 'ETC';
  content: 'String';
}

export interface Signup {
  memberId: number;
  nickname: string;
  title: string;
  PlaceName: Place;
  recommenderNickname: string;
  created_at: Date;
}

export interface Trade {
  nickname: number;
  title: number;
  placeName: Place;
  createdAt: Date;
  product: {
    id: number;
    title: string;
    content: string;
    gwangsan: number;
    type: 'OBJECT' | 'SERVICE';
    mode: 'GIVER' | 'RECEIVER';
    member: {
      memberId: 6;
      nickname: string;
      placeName: Place;
      light: 1;
    };
    images: [
      {
        imageId: number;
        imageUrl: string;
      },
    ];
  };
}
