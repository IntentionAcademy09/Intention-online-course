import html from "../images/Html.png";
import css from "../images/Css.png";
import js from "../images/Js.png";
import react from "../images/React.png";

export const courses = [
  {
    id: 1,
    title: "HTML 5",
    caption: "Web saytlar yaratishni 0 dan o'rganing",
    level: "beginner",
    lesson: 10,
    price: "150 000 so'm",
    image: html,
    lessons: [
      {
        id: 1,
        title: "Kirish va birinchi HTML sahifa",
      },
      {
        id: 2,
        title: "Matn bilan ishlash: sarlavha, paragraf va formatlash",
      },
      {
        id: 3,
        title: "Havolalar va rasmlar",
      },
      {
        id: 4,
        title: "Ro'yxatlar",
      },
      {
        id: 5,
        title: "Jadvallar",
      },
      {
        id: 6,
        title: "Formalar: input, label va button",
      },
      {
        id: 7,
        title: "Formalar: select, textarea va validatsiya",
      },
      {
        id: 8,
        title: "Semantik teglar",
      },
      {
        id: 9,
        title: "Multimedia, iframe va meta teglar",
      },
      {
        id: 10,
        title: "Yakuniy loyiha: 3 sahifali shaxsiy sayt",
      },
    ],
  },

  {
    id: 2,
    title: "Css 3",
    caption: "Web saytlarga chiroyli dizayn berish",
    level: "beginner",
    lesson: 15,
    price: "200 000 so'm",
    image: css,
    modules: [
      {
        id: 1,
        title: "CSS dizayn",
        lessons: [
          {
            id: 1,
            title: "CSS ranglar, fon va gradientlar",
          },
          {
            id: 2,
            title: "Matn, shrift va typography",
          },
          {
            id: 3,
            title: "Margin, Padding va Box Model",
          },
          {
            id: 4,
            title: "Border, Shadow va elementlarni bezash",
          },
          {
            id: 5,
            title: "Rasmlar va Background Image",
          },
        ],
      },
      {
        id: 2,
        title: "CSS layout",
        lessons: [
          {
            id: 6,
            title: "Display va Position",
          },
          {
            id: 7,
            title: "Flexbox",
          },
          {
            id: 8,
            title: "CSS Grid",
          },
          {
            id: 9,
            title: "Responsive dizayn va Media Query",
          },
          {
            id: 10,
            title: "Z-index va elementlarni joylashtirish",
          },
        ],
      },
      {
        id: 3,
        title: "CSS animatsiya va zamonaviy effektlar",
        lessons: [
          {
            id: 11,
            title: "Transition va Transform",
          },
          {
            id: 12,
            title: "Keyframes va CSS animatsiyalar",
          },
          {
            id: 13,
            title: "Hover effektlar va interaktiv elementlar",
          },
          {
            id: 14,
            title: "Pseudo-class va Pseudo-elementlar",
          },
          {
            id: 15,
            title: "Yakuniy loyiha: Zamonaviy Responsive Web Sayt",
          },
        ],
      },
    ],
  },

  {
    id: 3,
    title: "Java script",
    caption: "Java script dasturlash tilini mukammal o'rganing",
    level: "Intermediate",
    lesson: 30,
    price: "600 000 so'm",
    image: js,
    modules: [
      {
        id: 1,
        title: "JavaScript asoslari",
        lessons: [
          {
            id: 1,
            title: "JavaScript bilan tanishuv",
          },
          {
            id: 2,
            title: "O'zgaruvchilar: let, const va var",
          },
          {
            id: 3,
            title: "Ma'lumot turlari va operatorlar",
          },
          {
            id: 4,
            title: "Shart operatorlari: if, else va switch",
          },
          {
            id: 5,
            title: "For va while sikllari",
          },
          {
            id: 6,
            title: "Funksiyalar va parametrlar",
          },
          {
            id: 7,
            title: "Scope va hoisting",
          },
          {
            id: 8,
            title: "Array va Object bilan ishlash",
          },
          {
            id: 9,
            title: "String metodlari",
          },
          {
            id: 10,
            title: "Array metodlari: map, filter va reduce",
          },
        ],
      },
      {
        id: 2,
        title: "DOM va interaktivlik",
        lessons: [
          {
            id: 11,
            title: "DOM bilan tanishuv",
          },
          {
            id: 12,
            title: "HTML elementlarini tanlash",
          },
          {
            id: 13,
            title: "Elementlar va CSS stillarini o'zgartirish",
          },
          {
            id: 14,
            title: "Event listener va hodisalar",
          },
          {
            id: 15,
            title: "Form va inputlar bilan ishlash",
          },
          {
            id: 16,
            title: "Form validatsiyasi",
          },
          {
            id: 17,
            title: "ClassList va elementlarni boshqarish",
          },
          {
            id: 18,
            title: "Local Storage bilan ishlash",
          },
          {
            id: 19,
            title: "JSON formatida ma'lumotlar",
          },
          {
            id: 20,
            title: "Amaliy loyiha: Todo App",
          },
        ],
      },
      {
        id: 3,
        title: "JavaScript zamonaviy imkoniyatlari",
        lessons: [
          {
            id: 21,
            title: "Destructuring",
          },
          {
            id: 22,
            title: "Spread va Rest operatorlari",
          },
          {
            id: 23,
            title: "Import va Export modullari",
          },
          {
            id: 24,
            title: "Callback funksiyalar",
          },
          {
            id: 25,
            title: "Promise bilan ishlash",
          },
          {
            id: 26,
            title: "Async va Await",
          },
          {
            id: 27,
            title: "Fetch API orqali ma'lumot olish",
          },
          {
            id: 28,
            title: "Xatolarni boshqarish: try va catch",
          },
          {
            id: 29,

            title: "Amaliy loyiha: API bilan ishlash",
          },
          {
            id: 30,
            title: "Yakuniy loyiha: Interaktiv Web Sayt",
          },
        ],
      },
    ],
  },

  {
    id: 4,
    title: "React js",
    caption: "Java script dasturlash tiliga asoslangan framework",
    description: `React — zamonaviy veb-ilovalar yaratishning kuchli vositasi! ⚛️
React — JavaScript kutubxonasi bo‘lib, interaktiv va tezkor foydalanuvchi interfeyslarini yaratishga yordam beradi. U sahifani kichik komponentlarga bo‘lib, kodni tartibli, qayta ishlatiladigan va boshqarish oson holga keltiradi.`,
    level: "Intermediate",
    lesson: 40,
    price: "800 000  so'm",
    image: react,
  },
  {
    id: 4,
    title: "React js",
    caption: "Java script dasturlash tiliga asoslangan framework",
    description: `React — zamonaviy veb-ilovalar yaratishning kuchli vositasi! ⚛️
React — JavaScript kutubxonasi bo‘lib, interaktiv va tezkor foydalanuvchi interfeyslarini yaratishga yordam beradi. U sahifani kichik komponentlarga bo‘lib, kodni tartibli, qayta ishlatiladigan va boshqarish oson holga keltiradi.`,
    level: "Intermediate",
    lesson: 40,
    price: "800 000  so'm",
    image: react,
  },
  {
    id: 4,
    title: "React JS",
    caption: " Java script dasturlash tiliga asoslangan framework",
    description: `React JS — zamonaviy veb-ilovalarni yaratish uchun kuchli vosita! ⚛️React — zamonaviy veb-ilovalar yaratishning kuchli vositasi! ⚛️
        React — JavaScript kutubxonasi bo‘lib, interaktiv va tezkor foydalanuvchi interfeyslarini yaratishga yordam beradi. U sahifani kichik komponentlarga bo‘lib, kodni tartibli, qayta ishlatiladigan va boshqarish oson holga keltiradi`,
    level: "Intermediate",
    lessons: 40,
    price: " 800 000 so'm ",
    image: react,
    modules: [
      {
        id: 1,
        title: "React asoslari",
        lessons: [
          {
            id: 1,
            title: "React nima?",
          },
          {
            id: 2,
            title: "React nima uchun kerak?",
          },
          {
            id: 3,
            title: "React o‘rnatish va loyiha yaratish",
          },
          {
            id: 4,
            title: "Vite orqali React yaratish",
          },
          {
            id: 5,
            title: "React loyiha strukturasi",
          },
          {
            id: 6,
            title: "JSX nima?",
          },
          {
            id: 7,
            title: "JSX qoidalari",
          },
          {
            id: 8,
            title: "JSX ichida JavaScript ishlatish",
          },
          {
            id: 9,
            title: "Functional Components",
          },
          {
            id: 10,
            title: "Componentlarni yaratish va ishlatish",
          },
          {
            id: 11,
            title: "Props nima?",
          },
          {
            id: 12,
            title: "Props bilan ishlash",
          },
          {
            id: 13,
            title: "Children props",
          },
          {
            id: 14,
            title: "Events bilan ishlash",
          },
          {
            id: 15,
            title: "Click event",
          },
          {
            id: 16,
            title: "useState Hook",
          },
          {
            id: 17,
            title: "State qiymatini o‘zgartirish",
          },
          {
            id: 18,
            title: "Input bilan ishlash",
          },
          {
            id: 19,
            title: "Formalar bilan ishlash",
          },
          {
            id: 20,
            title: "Conditional Rendering",
          },
        ],
      },
      {
        id: 2,
        title: "React bilan chuqurroq ishlash",
        lessons: [
          {
            id: 1,
            title: "Ro‘yxatlarni chiqarish (map)",
          },
          {
            id: 2,
            title: "List va key",
          },
          {
            id: 3,
            title: "React’da CSS ishlatish",
          },
          {
            id: 4,
            title: "React’da Tailwind CSS",
          },
          {
            id: 5,
            title: "Componentlarni ajratish",
          },
          {
            id: 6,
            title: "useEffect Hook",
          },
          {
            id: 7,
            title: "Dependency array",
          },
          {
            id: 8,
            title: "API nima?",
          },
          {
            id: 9,
            title: "fetch orqali ma’lumot olish",
          },
          {
            id: 10,
            title: "API ma’lumotlarini chiqarish",
          },
          {
            id: 11,
            title: "Loading va Error holatlari",
          },
          {
            id: 12,
            title: "React Router o‘rnatish",
          },
          {
            id: 13,
            title: "Sahifalar orasida navigatsiya",
          },
          {
            id: 14,
            title: "Dynamic Routes",
          },
          {
            id: 15,
            title: "useRef Hook",
          },
          {
            id: 16,
            title: "Lifting State Up",
          },
          {
            id: 17,
            title: "Context API",
          },
          {
            id: 18,
            title: "Custom Hooks",
          },
          {
            id: 19,
            title: "React loyihasini optimallashtirish",
          },
          {
            id: 20,
            title: "Yakuniy loyiha",
          },
        ],
      },
    ],
  },
]
