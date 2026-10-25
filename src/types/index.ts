export interface StartupIdea {
  id: string;
  name: string;
  title: string;
  category: 'Quà tặng' | 'Dịch vụ' | 'Sản phẩm gia dụng' | 'Thiết bị hỗ trợ' | 'Mỹ phẩm' | 'Thực phẩm' | 'Dịch vụ công nghệ';
  insight: string;
  solution: string;
  targetAudience: string;
  irAdvantage: string;
  accentColor: string;
}

export interface PolicyItem {
  id: string;
  code: string;
  date: string;
  title: string;
  type: string;
  summary: string;
  highlights: string[];
}

export interface DeadlineKit {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  bestFor: string;
  badge?: string;
  items: string[];
  description: string;
}

export interface FeedbackReview {
  id: string;
  name: string;
  contact: string;
  rating: number;
  topic: string;
  comment: string;
  timestamp: string;
  badge?: string;
}
