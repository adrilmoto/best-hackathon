export default {
  position: 0,
  config: {
    colors: {
      primary: 'light-green-7'
    },
    sections: {
      first: {
        order: 2
      },
      about: {
        order: 1
      },
      reviews: {
        oreder: 3
      },
      partners: {
        oreder: 4
      }
    },
    info: {
      title: 'Скарн - найм жилья без посредников',
      org_inn: '',
      org_phone: '',
      org_email_sales: '',
      org_email_support: '',
      site_name: 'Скарн',
      year_of_foundation: '2011',
      phone: '+7 (343) 266 45 98'
    }
  },
  routes: {
    home: [
      { _id: 'about', name: 'О компании' },
      { _id: 'advantage', name: 'Преимущества' },
      { _id: 'reviews', name: 'Отзывы' },
      { _id: 'partners', name: 'Партнеры' },
      { _id: 'contacts', name: 'Контакты' }
    ],
    account: []
  }
}
