export interface BlogPost {
  id: number;
  title: string;
  titleEn: string;
  titleRu: string;
  category: string;
  date: string;
  views: number;
  comments: number;
  author: string;
  image: string;
  excerpt: string;
}

export const blogPosts: BlogPost[] = [
  { id: 1, title: "Proqramlaşdırmanı Öyrənmək Üçün 10 Yol", titleEn: "10 Ways to Learn Programming", titleRu: "10 способов изучить программирование", category: "IT", date: "2026-01-15", views: 1250, comments: 24, author: "Rəşad Hüseynov", image: "/placeholder.svg", excerpt: "Proqramlaşdırma dünyasına ilk addımlarınızı atmaq üçün ən effektiv yollar..." },
  { id: 2, title: "UI/UX Dizaynda Son Trendlər", titleEn: "Latest Trends in UI/UX Design", titleRu: "Последние тренды в UI/UX дизайне", category: "Design", date: "2026-01-10", views: 980, comments: 18, author: "Günel Əliyeva", image: "/placeholder.svg", excerpt: "2026-cı ildə dizayn dünyasında nələr dəyişir..." },
  { id: 3, title: "Rəqəmsal Marketinqdə SEO Strategiyaları", titleEn: "SEO Strategies in Digital Marketing", titleRu: "SEO стратегии в цифровом маркетинге", category: "Marketing", date: "2026-01-05", views: 850, comments: 12, author: "Aynur Məmmədova", image: "/placeholder.svg", excerpt: "SEO ilə saytınızın görünürlüyünü artırın..." },
  { id: 4, title: "Data Science-da Karyera Qurmaq", titleEn: "Building a Career in Data Science", titleRu: "Карьера в Data Science", category: "IT", date: "2025-12-28", views: 1100, comments: 20, author: "Elçin Quliyev", image: "/placeholder.svg", excerpt: "Data Science sahəsində uğurlu karyera üçün məsləhətlər..." },
  { id: 5, title: "İngilis Dilini Effektiv Öyrənmək", titleEn: "Learn English Effectively", titleRu: "Эффективное изучение английского", category: "Language", date: "2025-12-20", views: 1500, comments: 35, author: "Leyla Həsənova", image: "/placeholder.svg", excerpt: "İngilis dilini sürətli və effektiv öyrənmək üçün praktiki məsləhətlər..." },
  { id: 6, title: "Layihə İdarəetməsinin Əsasları", titleEn: "Fundamentals of Project Management", titleRu: "Основы управления проектами", category: "Business", date: "2025-12-15", views: 720, comments: 10, author: "Kamran Nəsibov", image: "/placeholder.svg", excerpt: "Layihə idarəetməsinin əsas prinsipləri və alətləri..." },
  { id: 7, title: "Süni İntellekt və Gələcək", titleEn: "Artificial Intelligence and the Future", titleRu: "Искусственный интеллект и будущее", category: "IT", date: "2025-12-10", views: 2000, comments: 45, author: "Rəşad Hüseynov", image: "/placeholder.svg", excerpt: "AI texnologiyalarının təhsilə və iş dünyasına təsiri..." },
  { id: 8, title: "Müasir Veb Texnologiyalar", titleEn: "Modern Web Technologies", titleRu: "Современные веб-технологии", category: "IT", date: "2025-12-05", views: 890, comments: 16, author: "Elçin Quliyev", image: "/placeholder.svg", excerpt: "React, Next.js və müasir veb inkişafı..." },
  { id: 9, title: "Biznes Analitikada Yeni Yanaşmalar", titleEn: "New Approaches in Business Analytics", titleRu: "Новые подходы в бизнес-аналитике", category: "Business", date: "2025-11-28", views: 650, comments: 8, author: "Aynur Məmmədova", image: "/placeholder.svg", excerpt: "Data-driven qərar vermə prosesi..." },
];

export const blogCategories = [
  { key: "IT", count: 4 },
  { key: "Design", count: 1 },
  { key: "Marketing", count: 1 },
  { key: "Business", count: 2 },
  { key: "Language", count: 1 },
];

export const staticComments = [
  { id: 1, name: "Nicat Əliyev", date: "2026-01-16", text: "Çox faydalı məqalə idi, təşəkkür edirəm! Xüsusilə praktiki məsləhətlər çox işimə yaradı. Daha çox belə məqalələr gözləyirik." },
  { id: 2, name: "Sara Hüseynova", date: "2026-01-17", text: "Bu mövzuda daha ətraflı yazılar görmək istərdim. Çox maraqlı perspektiv təqdim etmisiniz, əla iş!" },
  { id: 3, name: "Tural Məmmədov", date: "2026-01-18", text: "Məqaləni oxuduqdan sonra yeni kurs almağa qərar verdim. AmareStudy-nin təhsil yanaşması həqiqətən fərqlidir." },
];
