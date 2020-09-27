import { ECategories, EOptionType } from "./enums";

const menuList = [
  {
    id: 1,
    availability: true,
    title: "Филадельфия шудо (копченый лосось) в кунжуте",
    category: ECategories.sushi.category,
    description: 'Лосось копченый, огурец, сыр сливочный, кунжут, рис, нори.',
    price: 249,
    weight: 220,
    preview: './static/images/1.jpg',
  },
  {
    id: 2,
    availability: true,
    title: "Филадельфия лайт сяке",
    category: ECategories.sushi.category,
    description: 'Лосось, сыр сливочный, огурец, рис, нори.',
    price: 319,
    weight: 200,
    preview: './static/images/2.jpg',
  },
  {
    id: 3,
    availability: true,
    title: "Филадельфия классика",
    category: ECategories.sushi.category,
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
    category: ECategories.soup.category,
    description: 'Вкусный суп',
    price: 149,
    weight: 120,
    preview: './static/images/7.jpg',
  },
  {
    id: 5,
    availability: true,
    title: "Копченый лосось",
    category: ECategories.sushi.category,
    description: 'Вкусный копченый лосось, рис, нори.',
    price: 349,
    weight: 320,
    preview: './static/images/5.jpg',
  },
  {
    id: 6,
    availability: true,
    title: "Лайт сяке",
    category: ECategories.sushi.category,
    description: 'Сливочный сыр, лайт сяке',
    price: 309,
    weight: 200,
    preview: './static/images/6.jpg',
  },
  {
    id: 7,
    availability: true,
    title: "Суши классика",
    category: ECategories.sushi.category,
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
  {
    id: 8,
    availability: true,
    title: "Том ям набэ",
    category: ECategories.soup.category,
    description: 'кокосовый суп с тигровыми креветками и грибами. Сервируется с паровым рисом кокосовый суп с тигровыми креветками и грибами. Сервируется с паровым рисом кокосовый суп с тигровыми креветками и грибами. Сервируется с паровым рисом кокосовый суп с тигровыми креветками и грибами. Сервируется с паровым рисом ',
    price: 437,
    weight: 250,
    preview: './static/images/8.jpg',
  },
  {
    id: 9,
    availability: true,
    title: "Дзосуй",
    category: ECategories.soup.category,
    description: 'рисовый суп с мясом краба, яйцом и зеленым луком',
    price: 377,
    weight: 290,
    preview: './static/images/9.jpg',
  }
];

export const mockData = {
  menuList,
  dictionary: {
    dishOptions: EOptionType,
    dishCategories: ECategories,
  }
}
