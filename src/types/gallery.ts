export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  title?: string;
}

export interface GalleryCategory {
  id: string;
  name: string;
  images: GalleryImage[];
}