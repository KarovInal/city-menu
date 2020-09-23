import { ECategories, EOptionType } from "../../enums";

export const mockData = [
  {
    id: 1,
    availability: true,
    title: "Филадельфия шудо (копченый лосось) в кунжуте",
    category: ECategories.Sushi,
    description: 'Лосось копченый, огурец, сыр сливочный, кунжут, рис, нори.',
    price: 249,
    weight: 220,
    preview: './static/images/1.jpg',
  },
  {
    id: 2,
    availability: true,
    title: "Филадельфия лайт сяке",
    category: ECategories.Sushi,
    description: 'Лосось, сыр сливочный, огурец, рис, нори.',
    price: 319,
    weight: 200,
    preview: './static/images/2.jpg',
  },
  {
    id: 3,
    availability: true,
    title: "Филадельфия классика",
    category: ECategories.Sushi,
    description: 'Лосось, сыр сливочный, рис, нори.',
    price: 718,
    weight: 230,
    preview: './static/images/3.jpg',
    options: [
      {
        title: 'Тип порции',
        type: EOptionType.Radio,
        optionId: 1,
        values: [
          {
            title: 'Классика',
            additionalPrice: 0,
            availability: true,
          },
          {
            title: 'Премиум',
            additionalPrice: 60,
            availability: true,
          },
          {
            title: 'Для пары',
            additionalPrice: 130,
            availability: true,
          },
        ]
      }
    ]
  },
  {
    id: 4,
    availability: true,
    title: "Суп",
    category: ECategories.Soup,
    description: 'Вкусный суп',
    price: 149,
    weight: 120,
    preview: './static/images/7.jpg',
  },
  {
    id: 5,
    availability: true,
    title: "Копченый лосось",
    category: ECategories.Sushi,
    description: 'Вкусный копченый лосось, рис, нори.',
    price: 349,
    weight: 320,
    preview: './static/images/5.jpg',
  },
  {
    id: 6,
    availability: true,
    title: "Лайт сяке",
    category: ECategories.Sushi,
    description: 'Сливочный сыр, лайт сяке',
    price: 309,
    weight: 200,
    preview: './static/images/6.jpg',
  },
  {
    id: 7,
    availability: true,
    title: "Суши классика",
    category: ECategories.Sushi,
    description: 'Вкусный суши - классика',
    price: 318,
    weight: 530,
    preview: './static/images/4.jpg',
    options: [
      {
        title: 'Тип порции',
        type: EOptionType.Radio,
        optionId: 1,
        values: [
          {
            title: 'Классика',
            additionalPrice: 0,
            availability: true,
          },
          {
            title: 'Премиум',
            additionalPrice: 60,
            availability: true,
          },
          {
            title: 'Для пары',
            additionalPrice: 130,
            availability: true,
          },
        ]
      }
    ]
  },
];

