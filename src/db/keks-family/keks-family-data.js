import {
  EOptionType,
  EWeightType,
} from "../common-enums";

// Pizza
// weight: {
//   type: EWeightType.Length,
//   mass: 45,
// },

const menuList = {
  "1": {
    "id": "1",
    "availability": true,
    "title": "Филадельфия (8 шт.)",
    "category": "coldRolls",
    "price": 299,
    "description": "Лосось, сыр, огурец"
  },
  "2": {
    "id": "2",
    "availability": true,
    "title": "Калифорния с лососем (8 шт.)",
    "category": "coldRolls",
    "price": 289,
    "description": "Лосось, огурец, авакадо, масаго"
  },
  "3": {
    "id": "3",
    "availability": true,
    "title": "Мехико (8 шт.)",
    "category": "coldRolls",
    "price": 289,
    "description": "Тигровые креветки, краб, гуакамоле из авакадо, масаго"
  },
  "4": {
    "id": "4",
    "availability": true,
    "title": "Итальяно (8 шт.)",
    "category": "coldRolls",
    "price": 256,
    "description": "4 вида сыра, томаты, угорь"
  },
  "5": {
    "id": "5",
    "availability": true,
    "title": "Калифорния (8 шт.)",
    "category": "coldRolls",
    "price": 199,
    "description": "Краб, огурец, авакадо, масаго"
  },
  "6": {
    "id": "6",
    "availability": true,
    "title": "UMMA (8 шт.)",
    "category": "coldRolls",
    "price": 299,
    "description": "Маринованный лосось, краб, гуакамоле, масаго, сыр"
  },
  "7": {
    "id": "7",
    "availability": true,
    "title": "Канада (8 шт.)",
    "category": "coldRolls",
    "price": 299,
    "description": "Угорь, лосось, сыр, огурец, соус терияки"
  },
  "8": {
    "id": "8",
    "availability": true,
    "title": "Бусидо с икрой (8 шт.)",
    "category": "coldRolls",
    "price": 319,
    "description": "Красная икра, сыр, авакадо"
  },
  "9": {
    "id": "9",
    "availability": true,
    "title": "Наруто (8 шт.)",
    "category": "coldRolls",
    "price": 289,
    "description": "Маринованный лосось, креветки, сладкий перец, дайкон, сыр"
  },
  "10": {
    "id": "10",
    "availability": true,
    "title": "Мадрид веджи (8 шт.)",
    "category": "coldRolls",
    "price": 189,
    "description": "Перец, томаты, огурец, сыр, сладкий лук"
  },
  "11": {
    "id": "11",
    "availability": true,
    "title": "Филадельфия-тобико (8 шт.)",
    "category": "coldRolls",
    "price": 255,
    "description": "Лосось, сыр, авокадо, огурец, масаго"
  },
  "12": {
    "id": "12",
    "availability": true,
    "title": "Коноха (8 шт.)",
    "category": "coldRolls",
    "price": 265,
    "description": "Тигровые креветки, авокадо, томаты, сыр, спайс соус, гаукамоле"
  },
  "13": {
    "id": "13",
    "availability": true,
    "title": "Томаго (8 шт.)",
    "category": "coldRolls",
    "price": 199,
    "description": "Японский омлет, подкопченная индейка, сыр, огурцы, овощной соус, терияки"
  },
  "14": {
    "id": "14",
    "availability": true,
    "title": "Нью-Йорк (8 шт.)",
    "category": "coldRolls",
    "price": 279,
    "description": "Подкопченная говядина, сыр, огурец, гуакамоле, сладкий лук, мяскной соус"
  },
  "15": {
    "id": "15",
    "availability": true,
    "title": "Умани (5 шт.)",
    "category": "coldRolls",
    "price": 120,
    "description": "Снежный краб, японский майонез, масаго, огурец, унаги"
  },
  "16": {
    "id": "16",
    "availability": true,
    "title": "Иппон (8 шт.)",
    "category": "coldRolls",
    "price": 299,
    "description": "Лосось собсвенного посола, сыр, огурцы, мыта, кинза"
  },
  "17": {
    "id": "17",
    "availability": true,
    "title": "Футомаки (8 шт.)",
    "category": "coldRolls",
    "price": 199,
    "description": "Тигровые креветки, сыр, сладкий перец, масаго"
  },
  "18": {
    "id": "18",
    "availability": true,
    "title": "Усума (8 шт.)",
    "category": "coldRolls",
    "price": 219,
    "description": "Лосось собсвенного посола, сыр, огурцы, кунжут, терияки"
  },
  "19": {
    "id": "19",
    "availability": true,
    "title": "Сакура (8 шт.)",
    "category": "coldRolls",
    "price": 259,
    "description": "Лосось, огурец, сырная соломка, мясаго, соус спайс, терияки"
  },
  "20": {
    "id": "20",
    "availability": true,
    "title": "Сакэ тэмпура (6 шт.)",
    "category": "hotRolls",
    "price": 249,
    "description": "Лосось, сыр, тэмпура"
  },
  "21": {
    "id": "21",
    "availability": true,
    "title": "Чикаго (8 шт.)",
    "category": "hotRolls",
    "price": 299,
    "description": "Лосось, сыр, томаго, масаго, соус спайс, унаги"
  },
  "22": {
    "id": "22",
    "availability": true,
    "title": "Окинава с угрем (8 шт.)",
    "category": "hotRolls",
    "price": 255,
    "description": "Угорь, сыр, кунжут, яки соус, соус унаги"
  },
  "23": {
    "id": "23",
    "availability": true,
    "title": "Мадара (8 шт.)",
    "category": "hotRolls",
    "price": 325,
    "description": "Угорь, подкопченная индейка, сыр, кунжут, томаго, горчица, масаго"
  },
  "24": {
    "id": "24",
    "availability": true,
    "title": "Унаги-фурай (6 шт.)",
    "category": "hotRolls",
    "price": 249,
    "description": "Угорь, сыр, авакадо, тэмпура, соус унаги"
  },
  "25": {
    "id": "25",
    "availability": true,
    "title": "Джирайя (8 шт.)",
    "category": "hotRolls",
    "price": 325,
    "description": "Тигровые креветки, лосось, красная икра, снежный краб, японский майонез, масаго"
  },
  "26": {
    "id": "26",
    "availability": true,
    "title": "Окинава с лососем (8 шт.)",
    "category": "hotRolls",
    "price": 255,
    "description": "Лосось, сыр, яки соус, масаго"
  },
  "27": {
    "id": "27",
    "availability": true,
    "title": "Oisi (8 шт)",
    "category": "hotRolls",
    "price": 289,
    "description": "Рис, сыр, подкопченная индейка, огурец, вяленные томаты, перец халапенью,кисло-сладкий соус, овощной соус"
  },
  "28": {
    "id": "28",
    "availability": true,
    "title": "Киба (8 шт)",
    "category": "hotRolls",
    "price": 209,
    "description": "Лосось,сыр,авокадо,сладкий перец,масаго,соус спайс, терияки"
  },
  "29": {
    "id": "29",
    "availability": true,
    "title": "Гаара (8 шт)",
    "category": "hotRolls",
    "price": 289,
    "description": "Лосось, снежный краб, сыр,японский майонез,томаго, чеддер,кунжут,унаги,терияки"
  },
  "30": {
    "id": "30",
    "availability": true,
    "title": "Дзиро (8 шт)",
    "category": "hotRolls",
    "price": 289,
    "description": "Лосось, тигровые креветки,авокадо,салат чука, мясной соус,унаги"
  },
  "31": {
    "id": "31",
    "availability": true,
    "title": "Окинава с крабом (8 шт)",
    "category": "hotRolls",
    "price": 240,
    "description": "Краб, сыр, яки соус, масаго"
  },
  "32": {
    "id": "32",
    "availability": true,
    "title": "Эби тэмпура (8 шт)",
    "category": "hotRolls",
    "price": 249,
    "description": "Тигровые креветки,сыр,томаты,авокадо,масаго,тэмпура"
  },
  "33": {
    "id": "33",
    "availability": true,
    "title": "Сакэ хот (с лососем) (8 шт)",
    "category": "hotRolls",
    "price": 289,
    "description": "Лосось, сыр, томаго, соус терияки"
  },
  "34": {
    "id": "34",
    "availability": true,
    "title": "Кани тэмпура (8 шт)",
    "category": "hotRolls",
    "price": 249,
    "description": "Краб, авокадо, масаго, ас соус, тэмпура"
  },
  "35": {
    "id": "35",
    "availability": true,
    "title": "Итачи (8 шт)",
    "category": "hotRolls",
    "price": 289,
    "description": "Лосось,кунжут,краб,спайс соус,соус шрирача,терияки"
  },
  "36": {
    "id": "36",
    "availability": true,
    "title": "Рио (from Токио) (8 шт)",
    "category": "hotRolls",
    "price": 299,
    "description": "Лосось, тигровые креветки,авокадо,сыр, масаго"
  },
  "37": {
    "id": "37",
    "availability": true,
    "title": "Калифорния хот (8 шт)",
    "category": "hotRolls",
    "price": 255,
    "description": "Снежный краб, сыр, японский майонез, унаги,масаго"
  },
  "38": {
    "id": "38",
    "availability": true,
    "title": "Унаги хот (8 шт)",
    "category": "hotRolls",
    "price": 289,
    "description": "Угорь,сыр,томаго,масаго,сыр гауда,соус унаги"
  },
  "39": {
    "id": "39",
    "availability": true,
    "title": "J'pan (1 шт)",
    "category": "sandviches",
    "price": 299,
    "description": "Лосось,тигровые креветки,снежный краб,японский майонез,сыр,\r\nсалат чука,масаго,кунжут"
  },
  "40": {
    "id": "40",
    "availability": true,
    "title": "Катана Сакэ/Эби (1 шт)",
    "category": "sandviches",
    "price": 259,
    "description": "Рис,лосось,креветки,снежный краб,сыр,японский майонез,авокадо,\r\nсалат чука, соус спайс, терияки,темпура"
  },
  "41": {
    "id": "41",
    "availability": true,
    "title": "Клаб с индейкой/говядиной (1 шт)",
    "category": "sandviches",
    "price": 190,
    "description": "Подкопченная индейка/говядина,томаго,сыр чеддер,вяленные\r\nпомидоры,огурец,пекинская капуста,терияки"
  },
  "42": {
    "id": "42",
    "availability": true,
    "title": "Акаси (1 шт)",
    "category": "sandviches",
    "price": 319,
    "description": "Рис,лосось,сыр,снежный краб,японский майонез,\r\nсалат чука, огурец, спайс соус,масаго,чипсовая крошка"
  },
  "43": {
    "id": "43",
    "availability": true,
    "title": "Том-Кха",
    "category": "soups",
    "description": "Подкпченная индейка, кокосовое молоко,имбирь,грибы,томаты,\r\nчерри,порей,специи",
    "options": "Порция средняя 300 мл(239 руб).Большая 440 мл (299 руб)"
  },
  "44": {
    "id": "44",
    "availability": true,
    "title": "Том-Ям",
    "category": "soups",
    "description": "Тигровые креветки,лосось,кокосовое молоко,имбирь,грибы,\r\nтоматы черри,порей,специи",
    "options": "Порция средняя 300 мл(239 руб).Большая 440 мл (299 руб)"
  },
  "45": {
    "id": "45",
    "availability": true,
    "title": "Скандинавский суп",
    "category": "soups",
    "description": "Лосось,сливки,порей,морковь,картофель,грибы,рыбный соус",
    "options": "Порция средняя 300 мл(219 руб).Большая 440 мл (249 руб)"
  },
  "46": {
    "id": "46",
    "availability": true,
    "title": "Оки-Бо (8 роллов,62 шт)",
    "category": "sets",
    "price": 1799,
    "description": "Филадельфия,Калифорния,Сакэ темпура,Кани-Маки(Краб),Umma, \r\nРИО(from Токио), Окинава с угрем, Мадрид(веджи)"
  },
  "47": {
    "id": "47",
    "availability": true,
    "title": "Калифорния сет (4 ролла, 32 шт)",
    "category": "sets",
    "price": 779,
    "description": "Калифорния,Калифорния хот,Кани-маки(краб),Кани тэмпура"
  },
  "48": {
    "id": "48",
    "availability": true,
    "title": "Классика (3 ролла, 24 шт)",
    "category": "sets",
    "price": 759,
    "description": "Филадельфия,Калифорния,Канада"
  },
  "49": {
    "id": "49",
    "availability": true,
    "title": "Топ сет (7 роллов, 54 шт)",
    "category": "sets",
    "price": 1599,
    "description": "Каппа-маки(огурец),Филадельфия,Калифорния,Джирайя,РИО(from Токио),\r\nЧикаго,Сакэ тэмпура"
  },
  "50": {
    "id": "50",
    "availability": true,
    "title": "Тихиро сет (4 ролла, 30 шт)",
    "category": "sets",
    "price": 799,
    "description": "Филадельфия, Окинава с лососем,Сакэ-маки(лосось),Сакэ тэмпура"
  },
  "51": {
    "id": "51",
    "availability": true,
    "title": "Маки сет (6 роллов, 48 шт)",
    "category": "sets",
    "price": 550,
    "description": "Каппа-маки(огурец),Чука-маки,Сакэ-маки(лосось),Кани-маки(краб),Магуро маки(тунец),Унаги маки(угорь)"
  },
  "52": {
    "id": "52",
    "availability": true,
    "title": "География (5 роллов, 40 шт)",
    "category": "sets",
    "price": 1245,
    "description": "Мехико, Итальяно,Нью-Йорк,Канада,Мадрид(веджи)"
  },
  "53": {
    "id": "53",
    "availability": true,
    "title": "Хот-Сет (3 ролла, 3 гункана/27 шт)",
    "category": "sets",
    "price": 959,
    "description": "Калифорния хот,Сакэ хот(запеченный лосось),Унаги хот(запеченный угорь),\r\nКани спайси гункан (с крабом), Саке спайси гункан (С лососем),Унаги спайси гункан (с угрем)"
  },
  "54": {
    "id": "54",
    "availability": true,
    "title": "Umma (5 роллов, 38 шт)",
    "category": "sets",
    "price": 1399,
    "description": "Umma,Рио,Итачи,Мадара,Сакэ тэмпура"
  },
  "55": {
    "id": "55",
    "availability": true,
    "title": "Окинава сет (4 ролла, 30 шт)",
    "category": "sets",
    "price": 969,
    "description": "Окинава с лососем, Окинава с крабом, Окинава с угрем, Унаги-Фурай"
  },
  "56": {
    "id": "56",
    "availability": true,
    "title": "Салат чука",
    "category": "salads",
    "price": 120,
    "description": "Морские водоросли чука, ореховый соус"
  },
  "57": {
    "id": "57",
    "availability": true,
    "title": "Греческий салат",
    "category": "salads",
    "price": 150,
    "description": "Огурцы,томаты, сыр сиртаки, перец, оливки,орегано,красный лук,оливковое масло"
  },
  "58": {
    "id": "58",
    "availability": true,
    "title": "Поке (с креветками/лососем)",
    "category": "salads",
    "price": 259,
    "description": "Булгур,мята,тигровые креветки/лосось,кукуруза,огурец,авокадо,салат чука,ореховый соус,\r\nцитрусовый дрессинг"
  },
  "59": {
    "id": "59",
    "availability": true,
    "title": "Креветки Тэмпура (150 гр)",
    "category": "snacks",
    "price": 249,
    "description": "Тигровые креветки, кляр, тэмпура, тройной соус, унаги"
  },
  "60": {
    "id": "60",
    "availability": true,
    "title": "Картофельные шарики (150 гр)",
    "category": "snacks",
    "price": 70,
    "description": "Хрустящие картофельные шарики"
  },
  "61": {
    "id": "61",
    "availability": true,
    "title": "Мидии (5 шт)",
    "category": "snacks",
    "price": 250,
    "description": "Мидии гигант,соусы: спайс,яки,мясной, овощной"
  },
  "62": {
    "id": "62",
    "availability": true,
    "title": "Эдо с креветками/лососем (1 шт)",
    "category": "snacks",
    "price": 259,
    "description": "Рис, тигровые креветки/лосось, крабовый микс,салат чука,гуакамоле,ореховый соус, соус спайс"
  }
}

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
    content: 'https://images.unsplash.com/photo-1579584239904-4e9048d7bcc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=20',
    contentTitle: '#СДЕЛАЙСАМ',
    contentSubTitle: 'Заказжи набор #СДЕЛАЙСАМ и собери свой собственный ролл!',
    resourceUrl: '/soup',
    preview: 'https://images.unsplash.com/photo-1579584239904-4e9048d7bcc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=20',
    previewTitle: 'Новый формат #СДЕЛАЙСАМ',
    buttonTitle: '#СДЕЛАЙСАМ'
  },
  3: {
    id: 3,
    type: 'image',
    content: 'https://images.unsplash.com/photo-1563612116828-a62f45c706e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=20',
    contentTitle: 'Суши с лососем',
    contentSubTitle: '',
    resourceUrl: '/salads',
    preview: 'https://images.unsplash.com/photo-1563612116828-a62f45c706e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=20',
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

export const ECategories = {
  coldRolls: {
    category: 'coldRolls',
    title: 'Холодные роллы'
  },
  hotRolls: {
    category: 'hotRolls',
    title: 'Теплые роллы'
  },
  sandviches: {
    category: 'sandviches',
    title: 'Сэндвичи'
  },
  soups: {
    category: 'soups',
    title: 'Супы'
  },
  sets: {
    category: 'sets',
    title: 'Сеты'
  },
  salads: {
    category: 'salads',
    title: 'Поке и салаты'
  },
  snacks: {
    category: 'snacks',
    title: 'Закуски'
  }
};

const deliveryOptions = {
  minPrice: 600,
  deliveryPolicy: {
    receivingOrders: 'ежедневно 11:00-00:30 (ПТ с 14:00)',
    orderArea: 'г. Нальчик. Доставку в пригород Нальчика, уточняйте у оператора',
    price: 'бесплатно при заказе от 800 руб.',
    minPriceOrder: 'По городу 600 руб. с учетом всех скидок. Минимальную сумму заказа за пределы города, можно уточнить у оператора',
    deliveryTime: 'от 40 минут',
    payment: 'наличными курьеру или переводом на карту',
  }
};

const pickupOptions = {
  pickupAddress: [
    { title: 'Тарчокова, 131', value: 1 },
  ]
};

const contacts = {
  description:
    '🕚 Режим работы: 11:00-00:30(ПТ с 14:00)\n' +
    '📍 Формат Take-away | Доставка🚁от 800₽ бесплатно\n' +
    '🍣 Самовывоз-ролл в подарок\n',
  phone: '+79280776877',
  whatsapp: 'https://wa.me/79280776877',
  mapLink: 'https://yandex.ru/maps/-/CCUEVAQjGC',
  instagram: 'https://www.instagram.com/umma.bar/',
  addressName: 'ул. Тарчокова, 131, Нальчик',
}

const prices = {
  discount: 0,
  servicePercent: 0,
}

export const keksFamilyData = {
  prices,
  menuList,
  recommendations,
  dictionary: {
    contacts,
    pickupOptions,
    deliveryOptions,
    dishOptions: EOptionType,
    dishCategories: ECategories,
  }
}
