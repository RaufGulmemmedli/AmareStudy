import type { Course } from "@/data/courses";
import type { BlogPost } from "@/data/blog-posts";

export function getCourseTitle(course: Course, locale: string): string {
  if (locale === "az") return course.titleAz;
  if (locale === "ru") return course.titleRu;
  return course.title;
}

export function getPostTitle(post: BlogPost, locale: string): string {
  if (locale === "en") return post.titleEn;
  if (locale === "ru") return post.titleRu;
  return post.title;
}

export function formatDate(dateStr: string, locale: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString(
    locale === "az" ? "az-AZ" : locale === "ru" ? "ru-RU" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );
}
