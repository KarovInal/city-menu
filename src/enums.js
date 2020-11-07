export const ECategories = {
  sushi: {
    title: 'Суши',
    category: 'sushi',
  },
  soup: {
    title: 'Супы',
    category: 'soup',
  },
  salads: {
    title: 'Салаты',
    category: 'salads',
  },
};

export const EOptionType = {
  CheckBox: 'checkBox',
  Radio: 'radio',
};

export const EmptyOptionId = '00';

export const EDishOptions = {
  [EmptyOptionId]: {
    id: EmptyOptionId,
    title: '',
    price: 0,
    available: true
  },
  '1001': {
    id: '1001',
    title: 'Оливковое масло',
    price: 0,
    available: true
  },
  '1002': {
    id: '1002',
    title: 'Авакадо',
    price: 100,
    available: true
  },
  '1003': {
    id: '1003',
    title: 'Лайм+Авакадо',
    price: 150,
    available: true
  },
  '300': {
    id: '300',
    title: 'Классика',
    price: 0,
    available: true,
  },
  '301': {
    id: '301',
    title: 'Премиум',
    price: 60,
    available: true,
  },
  '302': {
    id: '302',
    title: 'Для пары',
    price: 130,
    available: true,
  },
  '310': {
    id: '310',
    title: 'Сироп',
    price: 0,
    available: true,
  },
  '311': {
    id: '311',
    title: 'Карамель',
    price: 89,
    available: true,
  },
  '312': {
    id: '312',
    title: 'Клубничка',
    price: 55,
    available: true,
  },
  '320': {
    id: '320',
    title: 'Влажные салфетки',
    price: 0,
    available: true,
  },
  '321': {
    id: '321',
    title: 'Доп. салфетки',
    price: 10,
    available: true,
  },
  '322': {
    id: '322',
    title: 'Доп. инструменты',
    price: 0,
    available: true,
  },
  '700': {
    id: '700',
    title: 'Классика',
    price: 0,
    available: true,
  },
  '701': {
    id: '701',
    title: 'Премиум',
    price: 60,
    available: true,
  },
  '702': {
    id: '702',
    title: 'Для пары',
    price: 130,
    available: true,
  },
}
