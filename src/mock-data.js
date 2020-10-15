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

const recommendations = {
  1: {
    id: 1,
    type: 'image',
    content: 'https://static.yakitoriya.ru/media/cache/73/0a/730ab1749ee366824b7de9dbf42c1c5c.jpg',
    contentTitle: 'Только сейчас! Скидка на cет "Де Люкс"',
    contentSubTitle: 'Тайга рору (7 шт.), Бали маки (7 шт.), Драгон рору (7 шт.), Red Драгон (8 шт.), Филадельфия (8 шт.), Калифорния (8 шт.), Киото рору (8 шт.), Сякэ рору (8 шт.), Каппа маки (4 ш.т), Ролл с креветкой (8 шт.), Ролл Инь Янь (5 шт.) - 11 порций роллов (78 шт.)',
    resourceUrl: 'https://yakitoriya.ru/menu-dostavki/sety/set-de-lyuks',
    preview: 'https://static.yakitoriya.ru/media/cache/73/0a/730ab1749ee366824b7de9dbf42c1c5c.jpg',
    previewTitle: 'Скидка 10% на cет "Де Люкс"',
    buttonTitle: 'Подробнее'
  },
  2: {
    id: 2,
    type: 'video',
    content: 'https://stream.mux.com/ZKiKip89FCVwfuW5vow01Y01GwhZPanRIY/low.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJleHAiOjE2MDI3OTkwODgsImF1ZCI6InYiLCJzdWIiOiJaS2lLaXA4OUZDVndmdVc1dm93MDFZMDFHd2haUGFuUklZIn0.UU9pLuil14lecxIdQ5W2UjIe-UmDAcfW4AUEaSysIUHycnMALiRnBVc9k4HFgal1tZVKaxruaBWVihFSdgZrf17Fw68YfP_I5n92Qxf83wDZxkGl6sPZwhJtnnwG05P-79GnklVRyRgEXoVSho0b02VyyLmumqKhUBbM4Ol0eKv5GOjfIq4G_ms-Ebi7hrpyR5ND3HnmD1yG5SAKu45eDSse2gQ_mBdH-0Vn2uAeHm5AQ96yOQ5TAbJ7pd-LjRyjC7hvXxf1uhYvJv_3ck5oHtSd4J30K-iS1U90uqz0YNiPqJH9AEj7eRulhuEfrglUp8fLKY_KrodohMcodiu8Yg',
    contentTitle: 'Свежи фрукты',
    contentSubTitle: 'Черника, клубника и многое другое!',
    resourceUrl: 'https://yakitoriya.ru/menu-dostavki/sety/set-de-lyuks',
    preview: 'https://images.unsplash.com/photo-1580691155297-c6dfa3ca61c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=10',
    previewTitle: 'Скидка 10% на фрукты!',
    buttonTitle: 'Перейти'
  }
};

export const mockData = {
  menuList,
  recommendations,
  dictionary: {
    dishOptions: EOptionType,
    dishCategories: ECategories,
  }
}
