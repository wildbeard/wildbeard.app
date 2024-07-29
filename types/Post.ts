export interface Post {
  id: string;
  path: string;
  title: string;
  description: string;
  date: Date;
  dateStr: string;
  tags: Array<string>;
}
