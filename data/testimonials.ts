export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Aysel Məmmədova",
    role: "Web Developer",
    quote: "AmareStudy sayəsində karyeramı tamamilə dəyişdirdim. Kurslar çox keyfiyyətli və müəllimlər çox peşəkardır.",
  },
  {
    id: 2,
    name: "Orxan Həsənov",
    role: "UI/UX Designer",
    quote: "Burada öyrəndiklərim həyatımda böyük dəyişiklik yaratdı. Hər kəsə tövsiyə edirəm!",
  },
  {
    id: 3,
    name: "Leyla Əliyeva",
    role: "Data Analyst",
    quote: "Çox rahat öyrənmə mühiti və dəstəkləyici komanda. Sertifikatım karyeramda böyük rol oynadı.",
  },
];
