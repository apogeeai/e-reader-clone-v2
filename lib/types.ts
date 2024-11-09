export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  progress?: number;
  chapter?: string;
  content: string;
}