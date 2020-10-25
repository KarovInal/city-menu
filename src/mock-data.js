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
    preview: 'https://citymenu.s3.eu-north-1.amazonaws.com/1.jpg',
  },
  2: {
    id: 2,
    availability: true,
    title: "Филадельфия лайт сяке",
    category: ECategories.sushi.category,
    description: 'Лосось, сыр сливочный, огурец, рис, нори.',
    price: 319,
    weight: 200,
    preview: 'https://citymenu.s3.eu-north-1.amazonaws.com/2.jpg',
  },
  3: {
    id: 3,
    availability: true,
    title: "Филадельфия классика",
    category: ECategories.sushi.category,
    description: 'Лосось, сыр сливочный, рис, нори.',
    price: 718,
    weight: 230,
    preview: 'https://citymenu.s3.eu-north-1.amazonaws.com/3.jpg',
    options: [
      {
        title: 'Тип порции',
        type: EOptionType.Radio,
        optionId: 30,
        values: ['300', '301', '302']
      },
      {
        title: 'Добавки',
        type: EOptionType.Radio,
        optionId: 31,
        values: ['310', '311', '312']
      },
      {
        title: 'Добавить',
        type: EOptionType.CheckBox,
        optionId: 32,
        values: ['320', '321', '322']
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
    preview: 'https://citymenu.s3.eu-north-1.amazonaws.com/7.jpg',
  },
  5: {
    id: 5,
    availability: true,
    title: "Копченый лосось",
    category: ECategories.sushi.category,
    description: 'Вкусный копченый лосось, рис, нори.',
    price: 349,
    weight: 320,
    preview: 'https://citymenu.s3.eu-north-1.amazonaws.com/5.jpg',
  },
  6: {
    id: 6,
    availability: true,
    title: "Лайт сяке",
    category: ECategories.sushi.category,
    description: 'Сливочный сыр, лайт сяке',
    price: 309,
    weight: 200,
    preview: 'https://citymenu.s3.eu-north-1.amazonaws.com/6.jpg',
  },
  7: {
    id: 7,
    availability: true,
    title: "Суши классика",
    category: ECategories.sushi.category,
    description: 'Вкусный суши - классика',
    price: 318,
    weight: 530,
    preview: 'https://citymenu.s3.eu-north-1.amazonaws.com/4.jpg',
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
    preview: 'https://citymenu.s3.eu-north-1.amazonaws.com/8.jpg',
  },
  9: {
    id: 9,
    availability: true,
    title: "Дзосуй",
    category: ECategories.soup.category,
    description: 'рисовый суп с мясом краба, яйцом и зеленым луком',
    price: 377,
    weight: 290,
    preview: 'https://citymenu.s3.eu-north-1.amazonaws.com/9.jpg',
  },
  10: {
    id: 10,
    availability: true,
    title: "Тартар из тунца",
    category: ECategories.salads.category,
    description: 'с трюфельным маслом, авокадо и понзу-цитрусовым дрессингом. Сервируется с «бородинскими» чипсами',
    price: 499,
    weight: 196,
    preview: 'https://citymenu.s3.eu-north-1.amazonaws.com/10.jpg',
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
  0: {
    id: 0,
    type: 'video',
    content: 'https://citymenu.s3.eu-north-1.amazonaws.com/122036396_810544103115758_8936971079802055256_n.mp4',
    contentTitle: 'Суши с лососем',
    contentSubTitle: '',
    resourceUrl: '/salads',
    preview: 'https://citymenu.s3.eu-north-1.amazonaws.com/photo-1556906918-c3071bd11598.jpeg',
    previewTitle: 'Новинка! Суши с лососем',
    buttonTitle: 'Хочу!'
  },
  1: {
    id: 1,
    type: 'image',
    content: 'https://static.yakitoriya.ru/media/cache/73/0a/730ab1749ee366824b7de9dbf42c1c5c.jpg',
    contentTitle: 'Только сейчас! Скидка на cет "Де Люкс"',
    contentSubTitle: 'Тайга рору (7 шт.), Бали маки (7 шт.), Драгон рору (7 шт.), Red Драгон (8 шт.), Филадельфия (8 шт.), Калифорния (8 шт.)',
    resourceUrl: '/2',
    preview: 'https://static.yakitoriya.ru/media/cache/73/0a/730ab1749ee366824b7de9dbf42c1c5c.jpg',
    previewTitle: 'Скидка 10% на cет "Де Люкс"',
    buttonTitle: 'Подробнее'
  },
  2: {
    id: 2,
    type: 'image',
    content: 'https://images.unsplash.com/photo-1579584239904-4e9048d7bcc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2271&q=20',
    contentTitle: '#СДЕЛАЙСАМ',
    contentSubTitle: 'Заказжи набор #СДЕЛАЙСАМ и собери свой собственный ролл!',
    resourceUrl: '/soup',
    preview: 'https://images.unsplash.com/photo-1579584239904-4e9048d7bcc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2271&q=20',
    previewTitle: 'Новый формат #СДЕЛАЙСАМ',
    buttonTitle: '#СДЕЛАЙСАМ'
  },
  3: {
    id: 3,
    type: 'image',
    content: 'https://images.unsplash.com/photo-1563612116828-a62f45c706e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=971&q=20',
    contentTitle: 'Суши с лососем',
    contentSubTitle: '',
    resourceUrl: '/salads',
    preview: 'https://images.unsplash.com/photo-1563612116828-a62f45c706e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=971&q=20',
    previewTitle: 'Новинка! Суши с лососем',
    buttonTitle: 'Хочу!'
  },
  4: {
    id: 4,
    type: 'video',
    content: 'https://citymenu.s3.eu-north-1.amazonaws.com/101035952_534787064069096_2721405740717801247_n.mp4',
    contentTitle: 'Свежи фрукты',
    contentSubTitle: 'Черника, клубника и многое другое!',
    resourceUrl: '/1',
    preview: 'https://citymenu.s3.eu-north-1.amazonaws.com/photo-1592180385035-96dce8cd3c9f.jpeg',
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
