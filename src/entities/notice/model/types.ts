export interface Notice {
  id: number;
  title: string;
  content: string;
  placeName: string;
  createdAt: string;
  role: string;
  images?: Image[];
}

export interface Image {
  imageId: number;
  imageUrl: string;
}
