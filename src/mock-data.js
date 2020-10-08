import { ECategories, EOptionType } from "./enums";

const menuList = {
  1: {
    id: 1,
    availability: true,
    title: "Филадельфия шудо (копченый лосось) в кунжуте",
    category: ECategories.sushi.category,
    description: 'Лосось копченый, огурец, сыр сливочный, кунжут, рис, нори.',
    price: 249,
    weight: 220,
    preview: './static/images/1.jpg',
  },
  2: {
    id: 2,
    availability: true,
    title: "Филадельфия лайт сяке",
    category: ECategories.sushi.category,
    description: 'Лосось, сыр сливочный, огурец, рис, нори.',
    price: 319,
    weight: 200,
    preview: './static/images/2.jpg',
  },
  3: {
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
        optionId: 30,
        values: ['300', '301', '302']
      }
    ]
  },
  4: {
    id: 4,
    availability: true,
    title: "Суп",
    category: ECategories.soup.category,
    description: 'Вкусный суп',
    price: 149,
    weight: 120,
    preview: './static/images/7.jpg',
  },
  5: {
    id: 5,
    availability: true,
    title: "Копченый лосось",
    category: ECategories.sushi.category,
    description: 'Вкусный копченый лосось, рис, нори.',
    price: 349,
    weight: 320,
    preview: './static/images/5.jpg',
  },
  6: {
    id: 6,
    availability: true,
    title: "Лайт сяке",
    category: ECategories.sushi.category,
    description: 'Сливочный сыр, лайт сяке',
    price: 309,
    weight: 200,
    preview: './static/images/6.jpg',
  },
  7: {
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
        optionId: 70,
        values: ['700', '701', '702'],
      }
    ]
  },
  8: {
    id: 8,
    availability: true,
    title: "Том ям набэ",
    category: ECategories.soup.category,
    description: 'кокосовый суп с тигровыми креветками и грибами. Сервируется с паровым рисом кокосовый суп с тигровыми креветками и грибами. Сервируется с паровым рисом кокосовый суп с тигровыми креветками и грибами. Сервируется с паровым рисом кокосовый суп с тигровыми креветками и грибами. Сервируется с паровым рисом ',
    price: 437,
    weight: 250,
    preview: './static/images/8.jpg',
  },
  9: {
    id: 9,
    availability: true,
    title: "Дзосуй",
    category: ECategories.soup.category,
    description: 'рисовый суп с мясом краба, яйцом и зеленым луком',
    price: 377,
    weight: 290,
    preview: './static/images/9.jpg',
  },
  10: {
    id: 10,
    availability: true,
    title: "Тартар из тунца",
    category: ECategories.salads.category,
    description: 'с трюфельным маслом, авокадо и понзу-цитрусовым дрессингом. Сервируется с «бородинскими» чипсами',
    price: 499,
    weight: 196,
    preview: './static/images/10.jpg',
    options: [
      {
        title: 'Заправка',
        type: EOptionType.Radio,
        optionId: 1,
        values: ['01', '02', '03']
      }
    ]
  }
};

export const mockData = {
  menuList,
  dictionary: {
    dishOptions: EOptionType,
    dishCategories: ECategories,
  }
}
