import { EOptionType } from "../common-enums";

const menuList = {
  "1": {
    "id": "1",
    "availability": true,
    "title": "Каша рисовая с молоком",
    "category": "breakfast",
    "price": 85.00,
    // weight: {
    //   type: EWeightType.Milliliter,
    //   mass: 220,
    // },
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c0ed16fbdf.jpg",
  },
  "2": {
    "id": "2",
    "availability": true,
    "title": "Каша овсяная ",
    "category": "breakfast",
    "price": 85.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c0f043f7f5.jpg",
  },
  "3": {
    "id": "3",
    "availability": true,
    "title": "Каша пшеничная с сыром и зеленью",
    "category": "breakfast",
    "price": 85.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c0f81ca972.jpg",
  },
  "4": {
    "id": "4",
    "availability": true,
    "title": "Глазунья ",
    "category": "breakfast",
    "price": 90.00,
    // weight: {
    //   type: EWeightType.Gram,
    //   mass: 150,
    // },
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c0fcbe3bb4.jpg",
  },
  "5": {
    "id": "5",
    "availability": true,
    "title": "Омлет на молоке",
    "category": "breakfast",
    "price": 100.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c10574176b.jpg",
  },
  "6": {
    "id": "6",
    "availability": true,
    "title": "Творожная запеканка",
    "category": "breakfast",
    "price": 200.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c108622f36.jpg",
  },
  "7": {
    "id": "7",
    "availability": true,
    "title": "Дэлян с творогом и зеленью",
    "category": "breakfast",
    "price": 200.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c10f03de01.jpg"
  },
  "8": {
    "id": "8",
    "availability": true,
    "title": "Дэлян с картофелем и сыром",
    "category": "breakfast",
    "price": 200.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c11408cd01.jpg"
  },
  "9": {
    "id": "9",
    "availability": true,
    "title": "Дэлян с фасолью",
    "category": "breakfast",
    "price": 200.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c116f895a2.jpg"
  },
  "10": {
    "id": "10",
    "availability": true,
    "title": "Блины с творогом",
    "category": "breakfast",
    "price": 175.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c11f9e89b1.jpg"
  },
  "11": {
    "id": "11",
    "availability": true,
    "title": "Блины с наполнителем",
    "category": "breakfast",
    "price": 175.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c125bc1177.jpg",
  },
  "12": {
    "id": "12",
    "availability": true,
    "title": "Блины с мясом",
    "category": "breakfast",
    "price": 175.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c128a78971.jpg"
  },
  "13": {
    "id": "13",
    "availability": true,
    "title": "Пицца глазунья",
    "category": "breakfast",
    "price": 190.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c1332c4057.jpg"
  },
  "14": {
    "id": "14",
    "availability": true,
    "title": "Блиный торт",
    "category": "breakfast",
    "price": 155.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5eaeb1c031165.jpg"
  },
  "15": {
    "id": "15",
    "availability": true,
    "title": "Суп-лапша куриная ",
    "category": "forKids",
    "price": 155.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c15150cf6d.jpg"
  },
  "16": {
    "id": "16",
    "availability": true,
    "title": "Шашлычки из семги",
    "category": "forKids",
    "price": 175.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c1540e6eaf.jpg"
  },
  "17": {
    "id": "17",
    "availability": true,
    "title": "Домашние сардельки ",
    "category": "forKids",
    "price": 125.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c1564e3525.jpg"
  },
  "18": {
    "id": "18",
    "availability": true,
    "title": "Куриные шашлычки",
    "category": "forKids",
    "price": 125.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c15902599e.jpg"
  },
  "19": {
    "id": "19",
    "availability": true,
    "title": "Салат домашний",
    "category": "forKids",
    "price": 125.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c15f63a790.jpg",
  },
  "20": {
    "id": "20",
    "availability": true,
    "title": "Наггетсы",
    "category": "forKids",
    "price": 125.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c164631349.jpg"
  },
  "21": {
    "id": "21",
    "availability": true,
    "title": "Картофель фри",
    "category": "forKids",
    "price": 55.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c168118f98.jpg"
  },
  "22": {
    "id": "22",
    "availability": true,
    "title": "Картофельное пюре",
    "category": "forKids",
    "price": 45.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c16ac22d90.jpeg"
  },
  "23": {
    "id": "23",
    "availability": true,
    "title": "Макароны",
    "category": "forKids",
    "price": 45.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c16ca897fc.jpg"
  },
  "24": {
    "id": "24",
    "availability": true,
    "title": "Кетчуп",
    "category": "forKids",
    "price": 25.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c16f85acda.jpg"
  },
  "25": {
    "id": "25",
    "availability": true,
    "title": "Соус сырный",
    "category": "forKids",
    "price": 25.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c171686156.jpg"
  },
  "26": {
    "id": "26",
    "availability": true,
    "title": "Соус барбекю",
    "category": "forKids",
    "price": 25.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c1737b07d3.jpg"
  },
  "27": {
    "id": "27",
    "availability": true,
    "title": "Молочные коктейли",
    "category": "forKids",
    "price": 140.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c1777890e2.jpg",
  },
  "28": {
    "id": "28",
    "availability": true,
    "title": "Фокачча с сыром",
    "category": "pizza",
    "price": 90.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c189a5c6dc.jpg"
  },
  "29": {
    "id": "29",
    "availability": true,
    "title": "Фокачча с семечками ",
    "category": "pizza",
    "price": 120.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c18cb6cb8d.jpg"
  },
  "30": {
    "id": "30",
    "availability": true,
    "title": "Фокачча с песто",
    "category": "pizza",
    "price": 120.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c18f2b59ab.jpg"
  },
  "31": {
    "id": "31",
    "availability": true,
    "title": "Ассорти",
    "category": "pizza",
    "price": 280.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c193fa747e.jpg"
  },
  "32": {
    "id": "32",
    "availability": true,
    "title": "Кекс",
    "category": "pizza",
    "price": 300.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c19b0d7eb6.jpg",
  },
  "33": {
    "id": "33",
    "availability": true,
    "title": "Глазунья ",
    "category": "pizza",
    "price": 190.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c19e36ba0f.jpg"
  },
  "34": {
    "id": "34",
    "availability": true,
    "title": "Пицца \"Кекс\" мясная",
    "category": "pizza",
    "price": 320.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c1a4036e51.jpg",
  },
  "35": {
    "id": "35",
    "availability": true,
    "title": "Пепперони",
    "category": "pizza",
    "price": 250.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c1a6bd2155.jpg"
  },
  "36": {
    "id": "36",
    "availability": true,
    "title": "Маргарита",
    "category": "pizza",
    "price": 210.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c1abc326fe.jpg"
  },
  "37": {
    "id": "37",
    "availability": true,
    "title": "C курицей и болгарским перцем",
    "category": "pizza",
    "price": 270.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c1aefd92a2.jpg"
  },
  "38": {
    "id": "38",
    "availability": true,
    "title": "Пицца Цезарь ",
    "category": "pizza",
    "price": 295.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e563fd131b2d.jpg"
  },
  "39": {
    "id": "39",
    "availability": true,
    "title": "Пицца Филадельфия ",
    "category": "pizza",
    "price": 345.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e56619a1e783.jpg"
  },
  "40": {
    "id": "40",
    "availability": true,
    "title": "Эби темпура",
    "category": "japaneseFood",
    "price": 270.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5f8c7dd7af610.jpg"
  },
  "41": {
    "id": "41",
    "availability": true,
    "title": "Ясай",
    "category": "japaneseFood",
    "price": 150.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5f8c7dd7a6a5f.jpg"
  },
  "42": {
    "id": "42",
    "availability": true,
    "title": "Спайс Сяке",
    "category": "japaneseFood",
    "price": 225.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5f8c7dd79d78b.jpg"
  },
  "43": {
    "id": "43",
    "availability": true,
    "title": "Калифорния",
    "category": "japaneseFood",
    "price": 245.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5f8c7db713c5f.jpg"
  },
  "44": {
    "id": "44",
    "availability": true,
    "title": "Филадельфия",
    "category": "japaneseFood",
    "price": 345.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5f8c7db70ce4b.jpg"
  },
  "45": {
    "id": "45",
    "availability": true,
    "title": "Дракон",
    "category": "japaneseFood",
    "price": 375.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5f8c7db706204.jpg"
  },
  "46": {
    "id": "46",
    "availability": true,
    "title": "Сяке унаги маки",
    "category": "japaneseFood",
    "price": 335.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5f8c7db6f2c8c.jpg"
  },
  "47": {
    "id": "47",
    "availability": true,
    "title": "Унаги",
    "category": "japaneseFood",
    "price": 215.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5f8c7db6e73fc.jpg"
  },
  "48": {
    "id": "48",
    "availability": true,
    "title": "Сяке",
    "category": "japaneseFood",
    "price": 195.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5f8c7d7702f85.jpg"
  },
  "49": {
    "id": "49",
    "availability": true,
    "title": "Спайс Унаги",
    "category": "japaneseFood",
    "price": 265.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5f8c7d76f0f0e.jpg"
  },
  "50": {
    "id": "50",
    "availability": true,
    "title": "Капамаки",
    "category": "japaneseFood",
    "price": 90.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5f8c7d76eaf44.jpg"
  },
  "51": {
    "id": "51",
    "availability": true,
    "title": "Кекс",
    "category": "japaneseFood",
    "price": 295.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5f8c7d76e3dfd.jpg"
  },
  "52": {
    "id": "52",
    "availability": true,
    "title": "Нитатэ сяке",
    "category": "japaneseFood",
    "price": 265.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5f8c7d76dd53a.jpg"
  },
  "53": {
    "id": "53",
    "availability": true,
    "title": "Спайс кани",
    "category": "japaneseFood",
    "price": 215.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5f8c7d76d6b02.jpg"
  },
  "54": {
    "id": "54",
    "availability": true,
    "title": "Свежий",
    "category": "salad",
    "price": 175.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c1da7476b9.jpg"
  },
  "55": {
    "id": "55",
    "availability": true,
    "title": "Греческий",
    "category": "salad",
    "price": 225.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c1dcc81933.jpg"
  },
  "56": {
    "id": "56",
    "availability": true,
    "title": "Италия",
    "category": "salad",
    "price": 395.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c1edc5c7f3.jpg"
  },
  "57": {
    "id": "57",
    "availability": true,
    "title": "С Бураттой",
    "category": "salad",
    "price": 435.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c1f0d46c26.jpg"
  },
  "58": {
    "id": "58",
    "availability": true,
    "title": "Оливье овощной",
    "category": "salad",
    "price": 175.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c1f31ce068.jpg"
  },
  "59": {
    "id": "59",
    "availability": true,
    "title": "Винегрет с опятами ",
    "category": "salad",
    "price": 225.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c1f5e2a571.jpg"
  },
  "60": {
    "id": "60",
    "availability": true,
    "title": "С артишоками",
    "category": "salad",
    "price": 375.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c1f8234bfb.jpg"
  },
  "61": {
    "id": "61",
    "availability": true,
    "title": "Цезарь с курицей ",
    "category": "salad",
    "price": 195.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c1fe5040d8.jpg"
  },
  "62": {
    "id": "62",
    "availability": true,
    "title": "Цезарь с креветками",
    "category": "salad",
    "price": 335.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c201ccf261.jpg"
  },
  "63": {
    "id": "63",
    "availability": true,
    "title": "Цезарь с семгой",
    "category": "salad",
    "price": 375.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c203cb32c1.jpg"
  },
  "64": {
    "id": "64",
    "availability": true,
    "title": "Микс с тигровыми креветками",
    "category": "salad",
    "price": 365.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c207c43190.jpg"
  },
  "65": {
    "id": "65",
    "availability": true,
    "title": "Салатный микс с куриной печенью",
    "category": "salad",
    "price": 245.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c20b093b33.jpg"
  },
  "66": {
    "id": "66",
    "availability": true,
    "title": "Капрезе",
    "category": "salad",
    "price": 395.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c1ea1abfa6.jpg"
  },
  "67": {
    "id": "67",
    "availability": true,
    "title": "Капрезе",
    "category": "salad",
    "price": 395.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5f8c7eff939fb.jpg"
  },
  "68": {
    "id": "68",
    "availability": true,
    "title": "Джэдлибжэ",
    "category": "hotDishes",
    "price": 315.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c212fd38fc.jpg"
  },
  "69": {
    "id": "69",
    "availability": true,
    "title": "Рулет из телятины с сыром, под сливочным соусом",
    "category": "hotDishes",
    "price": 355.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c2169cbdf6.jpg"
  },
  "70": {
    "id": "70",
    "availability": true,
    "title": "Куриная грудка с рисово-овощным гарниром и сливочным соусом",
    "category": "hotDishes",
    "price": 315.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c219b6c653.jpg"
  },
  "71": {
    "id": "71",
    "availability": true,
    "title": "Куриная грудка по-восточному",
    "category": "hotDishes",
    "price": 315.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c21c08b710.jpg"
  },
  "72": {
    "id": "72",
    "availability": true,
    "title": "Телятина с овощами и рисом",
    "category": "hotDishes",
    "price": 315.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c21eb0a9b4.jpg"
  },
  "73": {
    "id": "73",
    "availability": true,
    "title": "Медальоны из индейки",
    "category": "hotDishes",
    "price": 345.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c22273ae85.jpg"
  },
  "74": {
    "id": "74",
    "availability": true,
    "title": "Стейк из говядины по-французски",
    "category": "hotDishes",
    "price": 335.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c22770660b.jpg"
  },
  "75": {
    "id": "75",
    "availability": true,
    "title": "Медальоны из телятины",
    "category": "hotDishes",
    "price": 425.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c22f60fd25.jpg"
  },
  "76": {
    "id": "76",
    "availability": true,
    "title": "Жульен грибной в булочке",
    "category": "hotDishes",
    "price": 175.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c2349bb8f2.jpg"
  },
  "77": {
    "id": "77",
    "availability": true,
    "title": "Семга с рисово-овощным  гарниром и сливочным соусом",
    "category": "hotDishes",
    "price": 475.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c237cd36be.jpg"
  },
  "78": {
    "id": "78",
    "availability": true,
    "title": "Дорада на гриле с лаймовым соусом",
    "category": "hotDishes",
    "price": 455.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c23b244082.jpg"
  },
  "79": {
    "id": "79",
    "availability": true,
    "title": "Изюмидай на ложе из овощей",
    "category": "hotDishes",
    "price": 415.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c23d6bf41d.jpg"
  },
  "80": {
    "id": "80",
    "availability": true,
    "title": "Форель речная жареная",
    "category": "hotDishes",
    "price": 275.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c23fef2d9a.jpg"
  },
  "81": {
    "id": "81",
    "availability": true,
    "title": "Креветки темпура",
    "category": "hotDishes",
    "price": 515.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c24631a275.jpg",
  },
  "82": {
    "id": "82",
    "availability": true,
    "title": "Бефстроганов из говядины в ржаной булке и картофельным пюре",
    "category": "hotDishes",
    "price": 355.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e566639b04a0.jpg"
  },
  "83": {
    "id": "83",
    "availability": true,
    "title": "Отбивная из телятины с гречкой и сливочным соусом ",
    "category": "hotDishes",
    "price": 355.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e5666c2ef2cd.jpg"
  },
  "84": {
    "id": "84",
    "availability": true,
    "title": "Куриные рулетики со шпинатом и диким рисом",
    "category": "hotDishes",
    "price": 345.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e5667a01217f.jpg"
  },
  "85": {
    "id": "85",
    "availability": true,
    "title": "Котлета пожарская с картофельным пюре и грибным соусом",
    "category": "hotDishes",
    "price": 325.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e5668c7b0239.jpg"
  },
  "86": {
    "id": "86",
    "availability": true,
    "title": "Лосось на спарже",
    "category": "hotDishes",
    "price": 495.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e574c3620d61.jpg"
  },
  "87": {
    "id": "87",
    "availability": true,
    "title": "Плато средиземноморское",
    "category": "hotDishes",
    "price": 995.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e574c9594102.jpg"
  },
  "88": {
    "id": "88",
    "availability": true,
    "title": "Куриное филе с овощным рататуем",
    "category": "hotDishes",
    "price": 355.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e6b626e923ca.jpg"
  },
  "89": {
    "id": "89",
    "availability": true,
    "title": "Лягурлибжэ",
    "category": "hotDishes",
    "price": 335.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5eaeabf2280cf.jpg"
  },
  "90": {
    "id": "90",
    "availability": true,
    "title": "Мороженое ",
    "category": "dessert",
    "price": 50.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c253c70713.jpg",
  },
  "91": {
    "id": "91",
    "availability": true,
    "title": "Штрудель яблочный",
    "category": "dessert",
    "price": 195.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c25c82c40c.jpg"
  },
  "92": {
    "id": "92",
    "availability": true,
    "title": "Штрудель вишневый",
    "category": "dessert",
    "price": 195.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c25f396ed6.jpg"
  },
  "93": {
    "id": "93",
    "availability": true,
    "title": "Панакота ванильная ",
    "category": "dessert",
    "price": 125.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c265624fb7.jpg"
  },
  "94": {
    "id": "94",
    "availability": true,
    "title": "Яблоко с медом и орехами",
    "category": "dessert",
    "price": 220.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c26a8bfbb0.jpg"
  },
  "95": {
    "id": "95",
    "availability": true,
    "title": "Мильфей ",
    "category": "dessert",
    "price": 265.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c26d8409c6.jpg"
  },
  "96": {
    "id": "96",
    "availability": true,
    "title": "Тирамису",
    "category": "dessert",
    "price": 220.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c26fcc93e7.jpg"
  },
  "97": {
    "id": "97",
    "availability": true,
    "title": "Крем Брюле",
    "category": "dessert",
    "price": 135.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c272bbb238.jpg"
  },
  "98": {
    "id": "98",
    "availability": true,
    "title": "Торт блинный",
    "category": "dessert",
    "price": 155.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c277755bf4.jpg"
  },
  "99": {
    "id": "99",
    "availability": true,
    "title": "Торт меренговый ",
    "category": "dessert",
    "price": 165.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c27ab58630.jpg"
  },
  "100": {
    "id": "100",
    "availability": true,
    "title": "Торт \"Кекс\"",
    "category": "dessert",
    "price": 155.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c27d5ef939.jpg"
  },
  "101": {
    "id": "101",
    "availability": true,
    "title": "Шоколадный фондан",
    "category": "dessert",
    "price": 260.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5eaecdd44f8fd.jpg"
  },
  "102": {
    "id": "102",
    "availability": true,
    "title": "Эклер",
    "category": "dessert",
    "price": 100.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5eaece40509d7.jpg"
  },
  "103": {
    "id": "103",
    "availability": true,
    "title": "Эклер шоколадный",
    "category": "dessert",
    "price": 100.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5eaecf4bbd1c8.jpg"
  },
  "104": {
    "id": "104",
    "availability": true,
    "title": "Эклер шоколадный",
    "category": "dessert",
    "price": 100.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5eafe01f0e533.jpg"
  },
  "105": {
    "id": "105",
    "availability": true,
    "title": "Бургер NERO",
    "category": "burger",
    "price": 280.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c2e3c97da4.jpg"
  },
  "106": {
    "id": "106",
    "availability": true,
    "title": "Бургер",
    "category": "burger",
    "price": 280.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c2e753446e.jpg",
  },
  "107": {
    "id": "107",
    "availability": true,
    "title": "Феттучине с сыром",
    "category": "pasta",
    "price": 210.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c2eaca85e7.jpg"
  },
  "108": {
    "id": "108",
    "availability": true,
    "title": "Феттучине с грибами",
    "category": "pasta",
    "price": 265.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c2ed557f7a.jpg"
  },
  "109": {
    "id": "109",
    "availability": true,
    "title": "Феттучине с курицей и помидорами черри",
    "category": "pasta",
    "price": 295.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c2f0183784.jpg"
  },
  "110": {
    "id": "110",
    "availability": true,
    "title": "Феттучине с семгой и соусом песто",
    "category": "pasta",
    "price": 455.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c2f63e59b9.jpg"
  },
  "111": {
    "id": "111",
    "availability": true,
    "title": "Феттучине со страчателлой",
    "category": "pasta",
    "price": 335.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c2f95e6d86.jpg"
  },
  "112": {
    "id": "112",
    "availability": true,
    "title": "Спагетти НЕРО с морепродуктами",
    "category": "pasta",
    "price": 435.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c2fdcb52ef.jpg"
  },
  "113": {
    "id": "113",
    "availability": true,
    "title": "Суп чечевичный",
    "category": "soup",
    "price": 190.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c305d68f68.jpg"
  },
  "114": {
    "id": "114",
    "availability": true,
    "title": "Суп-лапша куриная",
    "category": "soup",
    "price": 155.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c308057cb5.jpg"
  },
  "115": {
    "id": "115",
    "availability": true,
    "title": "Мясной суп в хлеб",
    "category": "soup",
    "price": 295.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c30b385ff8.jpg"
  },
  "116": {
    "id": "116",
    "availability": true,
    "title": "Суп том-ям",
    "category": "soup",
    "price": 335.00,
    "preview": "https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/dishes/5e4c30d6bacba.jpg"
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

export const ECategories = {
  breakfast: {
    category: 'breakfast',
    title: 'Завтраки'
  },
  forKids: {
    category: 'forKids',
    title: 'Детское меню'
  },
  pizza: {
    category: 'pizza',
    title: 'Пицца'
  },
  japaneseFood: {
    category: 'japaneseFood',
    title: 'Японская кухня'
  },
  salad: {
    category: 'salad',
    title: 'Салаты'
  },
  hotDishes: {
    category: 'hotDishes',
    title: 'Горячие блюда'
  },
  dessert: {
    category: 'dessert',
    title: 'Десерты'
  },
  burger: {
    category: 'burger',
    title: 'Бургеры'
  },
  pasta: {
    category: 'pasta',
    title: 'Паста'
  },
  soup: {
    category: 'soup',
    title: 'Супы'
  },
};

const deliveryOptions = {
  minPrice: 500,
  deliveryPolicy: {
    receivingOrders: 'ежедневно с 11:00 до 22:00',
    orderArea: 'г. Нальчик. Доставку в пригород Нальчика, уточняйте у оператора',
    price: 'бесплатно',
    minPriceOrder: 'По городу 500 руб. с учетом всех скидок. Минимальную сумму заказа за пределы города, можно уточнить у оператора',
    deliveryTime: 'от 40 минут',
    payment: 'наличными курьеру или переводом на карту',
  }
};

const pickupOptions = {
  pickupAddress: [
    { title: 'Кирова, 1д, ТРК "Галерея", 4 этаж, Нальчик', value: 1 },
  ]
};

const contacts = {
  description:
    '🕚 Режим работы: ПН-ВС 11:00-23:00\n' +
    '📍 ТЦ"Галерея" 4 этаж\n' +
    '🎳 Боулинг: 7(928)076-076-8\n' +
    '☕️ Кофейня\n' +
    '🌈 Детский городок',
  phone: '+79287099111',
  email: 'mailto:viktorya015@mail.ru',
  whatsapp: 'https://wa.me/79287099111',
  mapLink: 'https://yandex.ru/maps/-/CCUAJMgA9C',
  instagram: 'https://www.instagram.com/kekc_family/',
  addressName: 'Кирова, 1д, ТРК "Галерея", 4 этаж, Нальчик',
}

const prices = {
  discount: 0,
  servicePercent: 12,
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
