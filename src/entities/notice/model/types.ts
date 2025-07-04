export interface Notice {
  id: number;
  title: string;
  content: string;
  place: string;
  createdAt: string;
  role: string;
  images?: Image[];
}

interface Image {
  imageId: number;
  imageUrl: string;
}

export interface UploadImageResponse {
  imageId: number;
  imageUrl: string;
}
