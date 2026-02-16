export interface Course {
  id: number;
  title: string;
  titleAz: string;
  titleRu: string;
  category: string;
  price: number;
  rating: number;
  students: number;
  duration: string;
  level?: string;
  image: string;
}

// First 6 courses (used on home page)
export const featuredCourses: Course[] = [
  { id: 1, title: "Web Development", titleAz: "Veb İnkişaf", titleRu: "Веб-разработка", category: "IT", price: 299, rating: 4.8, students: 450, duration: "12 həftə", image: "/placeholder.svg" },
  { id: 2, title: "UI/UX Design", titleAz: "UI/UX Dizayn", titleRu: "UI/UX Дизайн", category: "Design", price: 249, rating: 4.9, students: 380, duration: "10 həftə", image: "/placeholder.svg" },
  { id: 3, title: "Digital Marketing", titleAz: "Rəqəmsal Marketinq", titleRu: "Цифровой маркетинг", category: "Business", price: 199, rating: 4.7, students: 520, duration: "8 həftə", image: "/placeholder.svg" },
  { id: 4, title: "Data Science", titleAz: "Data Elmi", titleRu: "Наука о данных", category: "IT", price: 349, rating: 4.8, students: 310, duration: "16 həftə", image: "/placeholder.svg" },
  { id: 5, title: "English Language", titleAz: "İngilis Dili", titleRu: "Английский язык", category: "Language", price: 149, rating: 4.6, students: 680, duration: "24 həftə", image: "/placeholder.svg" },
  { id: 6, title: "Project Management", titleAz: "Layihə İdarəetməsi", titleRu: "Управление проектами", category: "Business", price: 279, rating: 4.7, students: 290, duration: "10 həftə", image: "/placeholder.svg" },
];

// All 12 courses (used on courses page)
export const allCourses: Course[] = [
  ...featuredCourses,
  { id: 7, title: "Python Programming", titleAz: "Python Proqramlaşdırma", titleRu: "Программирование Python", category: "IT", price: 199, rating: 4.9, students: 560, duration: "14 həftə", level: "beginner", image: "/placeholder.svg" },
  { id: 8, title: "Graphic Design", titleAz: "Qrafik Dizayn", titleRu: "Графический дизайн", category: "Design", price: 229, rating: 4.5, students: 340, duration: "10 həftə", level: "intermediate", image: "/placeholder.svg" },
  { id: 9, title: "Russian Language", titleAz: "Rus Dili", titleRu: "Русский язык", category: "Language", price: 129, rating: 4.4, students: 220, duration: "20 həftə", level: "beginner", image: "/placeholder.svg" },
  { id: 10, title: "Cyber Security", titleAz: "Kiber Təhlükəsizlik", titleRu: "Кибербезопасность", category: "IT", price: 399, rating: 4.8, students: 180, duration: "16 həftə", level: "advanced", image: "/placeholder.svg" },
  { id: 11, title: "Business Analytics", titleAz: "Biznes Analitika", titleRu: "Бизнес-аналитика", category: "Business", price: 259, rating: 4.6, students: 310, duration: "12 həftə", level: "intermediate", image: "/placeholder.svg" },
  { id: 12, title: "Mobile App Development", titleAz: "Mobil Tətbiq İnkişafı", titleRu: "Мобильная разработка", category: "IT", price: 329, rating: 4.7, students: 290, duration: "14 həftə", level: "intermediate", image: "/placeholder.svg" },
];

// Add levels to featured courses too
featuredCourses[0].level = "intermediate";
featuredCourses[1].level = "beginner";
featuredCourses[2].level = "beginner";
featuredCourses[3].level = "advanced";
featuredCourses[4].level = "beginner";
featuredCourses[5].level = "intermediate";

export const courseCategories = [
  { key: "filterAll", value: "All" },
  { key: "filterIT", value: "IT" },
  { key: "filterDesign", value: "Design" },
  { key: "filterBusiness", value: "Business" },
  { key: "filterLanguage", value: "Language" },
  { key: "filterScience", value: "Science" },
];

export const staticReviews = [
  { id: 1, name: "Aysel M.", rating: 5, comment: "This course changed my life! The content is high quality and the instructor is very professional.", date: "2025-12-15" },
  { id: 2, name: "Orxan H.", rating: 4, comment: "After completing this course, finding a new job became much easier. Highly recommended!", date: "2025-11-28" },
  { id: 3, name: "Leyla A.", rating: 5, comment: "Excellently organized course. The practical exercises are very valuable and effective.", date: "2025-10-10" },
];
