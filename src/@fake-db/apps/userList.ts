// ** Mock
import mock from 'src/@fake-db/mock'

// ** Types
import { UsersType, ProjectListDataType } from 'src/types/apps/userTypes'

const data: { users: UsersType[] } = {
  users: [
    {
      _id: 1,
      lastName: 'Galen Slixby',
      company: 'Yotz PVT LTD',
      role: 'editor',
      firstName: 'gslixby0',
      address: 'El Salvador',
      phone: '(479) 232-9151',
      email: 'gslixby0@abc.net.au',
      currentPlan: 'enterprise',
      status: 'inactive',
      avatar: '',
      avatarColor: 'primary'
    },
    {
      _id: 2,
      lastName: 'Halsey Redmore',
      company: 'Skinder PVT LTD',
      role: 'author',
      firstName: 'hredmore1',
      address: 'Albania',
      phone: '(472) 607-9137',
      email: 'hredmore1@imgur.com',
      currentPlan: 'team',
      status: 'pending',
      avatar: '/images/avatars/3.png'
    },
    {
      _id: 3,
      lastName: 'Marjory Sicely',
      company: 'Oozz PVT LTD',
      role: 'maintainer',
      firstName: 'msicely2',
      address: 'Russia',
      phone: '(321) 264-4599',
      email: 'msicely2@who.int',
      currentPlan: 'enterprise',
      status: 'active',
      avatar: '/images/avatars/1.png'
    },
    {
      _id: 4,
      lastName: 'Cyrill Risby',
      company: 'Oozz PVT LTD',
      role: 'maintainer',
      firstName: 'crisby3',
      address: 'China',
      phone: '(923) 690-6806',
      email: 'crisby3@wordpress.com',
      currentPlan: 'team',
      status: 'inactive',
      avatar: '/images/avatars/3.png'
    },
    {
      _id: 5,
      lastName: 'Maggy Hurran',
      company: 'Aimbo PVT LTD',
      role: 'subscriber',
      firstName: 'mhurran4',
      address: 'Pakistan',
      phone: '(669) 914-1078',
      email: 'mhurran4@yahoo.co.jp',
      currentPlan: 'enterprise',
      status: 'pending',
      avatar: '/images/avatars/1.png'
    },
    {
      _id: 6,
      lastName: 'Silvain Halstead',
      company: 'Jaxbean PVT LTD',
      role: 'author',
      firstName: 'shalstead5',
      address: 'China',
      phone: '(958) 973-3093',
      email: 'shalstead5@shinystat.com',
      currentPlan: 'company',
      status: 'active',
      avatar: '',
      avatarColor: 'error'
    },
    {
      _id: 7,
      lastName: 'Breena Gallemore',
      company: 'Jazzy PVT LTD',
      role: 'subscriber',
      firstName: 'bgallemore6',
      address: 'Canada',
      phone: '(825) 977-8152',
      email: 'bgallemore6@boston.com',
      currentPlan: 'company',
      status: 'pending',
      avatar: '',
      avatarColor: 'warning'
    },
    {
      _id: 8,
      lastName: 'Kathryne Liger',
      company: 'Pixoboo PVT LTD',
      role: 'author',
      firstName: 'kliger7',
      address: 'France',
      phone: '(187) 440-0934',
      email: 'kliger7@vinaora.com',
      currentPlan: 'enterprise',
      status: 'pending',
      avatar: '/images/avatars/4.png'
    },
    {
      _id: 9,
      lastName: 'Franz Scotfurth',
      company: 'Tekfly PVT LTD',
      role: 'subscriber',
      firstName: 'fscotfurth8',
      address: 'China',
      phone: '(978) 146-5443',
      email: 'fscotfurth8@dailymotion.com',
      currentPlan: 'team',
      status: 'pending',
      avatar: '/images/avatars/2.png'
    },
    {
      _id: 10,
      lastName: 'Jillene Bellany',
      company: 'Gigashots PVT LTD',
      role: 'maintainer',
      firstName: 'jbellany9',
      address: 'Jamaica',
      phone: '(589) 284-6732',
      email: 'jbellany9@kickstarter.com',
      currentPlan: 'company',
      status: 'inactive',
      avatar: '/images/avatars/5.png'
    },
    {
      _id: 11,
      lastName: 'Jonah Wharlton',
      company: 'Eare PVT LTD',
      role: 'subscriber',
      firstName: 'jwharltona',
      address: 'United States',
      phone: '(176) 532-6824',
      email: 'jwharltona@oakley.com',
      currentPlan: 'team',
      status: 'inactive',
      avatar: '/images/avatars/4.png'
    },
    {
      _id: 12,
      lastName: 'Seth Hallam',
      company: 'Yakitri PVT LTD',
      role: 'subscriber',
      firstName: 'shallamb',
      address: 'Peru',
      phone: '(234) 464-0600',
      email: 'shallamb@hugedomains.com',
      currentPlan: 'team',
      status: 'pending',
      avatar: '/images/avatars/5.png'
    },
    {
      _id: 13,
      lastName: 'Yoko Pottie',
      company: 'Leenti PVT LTD',
      role: 'subscriber',
      firstName: 'ypottiec',
      address: 'Philippines',
      phone: '(907) 284-5083',
      email: 'ypottiec@privacy.gov.au',
      currentPlan: 'basic',
      status: 'inactive',
      avatar: '/images/avatars/7.png'
    },
    {
      _id: 14,
      lastName: 'Maximilianus Krause',
      company: 'Digitube PVT LTD',
      role: 'author',
      firstName: 'mkraused',
      address: 'Democratic Republic of the Congo',
      phone: '(167) 135-7392',
      email: 'mkraused@stanford.edu',
      currentPlan: 'team',
      status: 'active',
      avatar: '/images/avatars/6.png'
    },
    {
      _id: 15,
      lastName: 'Zsazsa McCleverty',
      company: 'Kaymbo PVT LTD',
      role: 'maintainer',
      firstName: 'zmcclevertye',
      address: 'France',
      phone: '(317) 409-6565',
      email: 'zmcclevertye@soundcloud.com',
      currentPlan: 'enterprise',
      status: 'active',
      avatar: '/images/avatars/2.png'
    },
    {
      _id: 16,
      lastName: 'Bentlee Emblin',
      company: 'Yambee PVT LTD',
      role: 'author',
      firstName: 'bemblinf',
      address: 'Spain',
      phone: '(590) 606-1056',
      email: 'bemblinf@wired.com',
      currentPlan: 'company',
      status: 'active',
      avatar: '/images/avatars/6.png'
    },
    {
      _id: 17,
      lastName: 'Brockie Myles',
      company: 'Wikivu PVT LTD',
      role: 'maintainer',
      firstName: 'bmylesg',
      address: 'Poland',
      phone: '(553) 225-9905',
      email: 'bmylesg@amazon.com',
      currentPlan: 'basic',
      status: 'active',
      avatar: '',
      avatarColor: 'success'
    },
    {
      _id: 18,
      lastName: 'Bertha Biner',
      company: 'Twinte PVT LTD',
      role: 'editor',
      firstName: 'bbinerh',
      address: 'Yemen',
      phone: '(901) 916-9287',
      email: 'bbinerh@mozilla.com',
      currentPlan: 'team',
      status: 'active',
      avatar: '/images/avatars/7.png'
    },
    {
      _id: 19,
      lastName: 'Travus Bruntjen',
      company: 'Cogidoo PVT LTD',
      role: 'admin',
      firstName: 'tbruntjeni',
      address: 'France',
      phone: '(524) 586-6057',
      email: 'tbruntjeni@sitemeter.com',
      currentPlan: 'enterprise',
      status: 'active',
      avatar: '',
      avatarColor: 'primary'
    },
    {
      _id: 20,
      lastName: 'Wesley Burland',
      company: 'Bubblemix PVT LTD',
      role: 'editor',
      firstName: 'wburlandj',
      address: 'Honduras',
      phone: '(569) 683-1292',
      email: 'wburlandj@uiuc.edu',
      currentPlan: 'team',
      status: 'inactive',
      avatar: '/images/avatars/6.png'
    },
    {
      _id: 21,
      lastName: 'Selina Kyle',
      company: 'Wayne Enterprises',
      role: 'admin',
      firstName: 'catwomen1940',
      address: 'USA',
      phone: '(829) 537-0057',
      email: 'irena.dubrovna@wayne.com',
      currentPlan: 'team',
      status: 'active',
      avatar: '/images/avatars/1.png'
    },
    {
      _id: 22,
      lastName: 'Jameson Lyster',
      company: 'Quaxo PVT LTD',
      role: 'editor',
      firstName: 'jlysterl',
      address: 'Ukraine',
      phone: '(593) 624-0222',
      email: 'jlysterl@guardian.co.uk',
      currentPlan: 'company',
      status: 'inactive',
      avatar: '/images/avatars/8.png'
    },
    {
      _id: 23,
      lastName: 'Kare Skitterel',
      company: 'Ainyx PVT LTD',
      role: 'maintainer',
      firstName: 'kskitterelm',
      address: 'Poland',
      phone: '(254) 845-4107',
      email: 'kskitterelm@ainyx.com',
      currentPlan: 'basic',
      status: 'pending',
      avatar: '/images/avatars/3.png'
    },
    {
      _id: 24,
      lastName: 'Cleavland Hatherleigh',
      company: 'Flipopia PVT LTD',
      role: 'admin',
      firstName: 'chatherleighn',
      address: 'Brazil',
      phone: '(700) 783-7498',
      email: 'chatherleighn@washington.edu',
      currentPlan: 'team',
      status: 'pending',
      avatar: '/images/avatars/2.png'
    },
    {
      _id: 25,
      lastName: 'Adeline Micco',
      company: 'Topicware PVT LTD',
      role: 'admin',
      firstName: 'amiccoo',
      address: 'France',
      phone: '(227) 598-1841',
      email: 'amiccoo@whitehouse.gov',
      currentPlan: 'enterprise',
      status: 'pending',
      avatar: '',
      avatarColor: 'error'
    },
    {
      _id: 26,
      lastName: 'Hugh Hasson',
      company: 'Skinix PVT LTD',
      role: 'admin',
      firstName: 'hhassonp',
      address: 'China',
      phone: '(582) 516-1324',
      email: 'hhassonp@bizjournals.com',
      currentPlan: 'basic',
      status: 'inactive',
      avatar: '/images/avatars/4.png'
    },
    {
      _id: 27,
      lastName: 'Germain Jacombs',
      company: 'Youopia PVT LTD',
      role: 'editor',
      firstName: 'gjacombsq',
      address: 'Zambia',
      phone: '(137) 467-5393',
      email: 'gjacombsq@jigsy.com',
      currentPlan: 'enterprise',
      status: 'active',
      avatar: '/images/avatars/5.png'
    },
    {
      _id: 28,
      lastName: 'Bree Kilday',
      company: 'Jetpulse PVT LTD',
      role: 'maintainer',
      firstName: 'bkildayr',
      address: 'Portugal',
      phone: '(412) 476-0854',
      email: 'bkildayr@mashable.com',
      currentPlan: 'team',
      status: 'active',
      avatar: '',
      avatarColor: 'warning'
    },
    {
      _id: 29,
      lastName: 'Candice Pinyon',
      company: 'Kare PVT LTD',
      role: 'maintainer',
      firstName: 'cpinyons',
      address: 'Sweden',
      phone: '(170) 683-1520',
      email: 'cpinyons@behance.net',
      currentPlan: 'team',
      status: 'active',
      avatar: '/images/avatars/7.png'
    },
    {
      _id: 30,
      lastName: 'Isabel Mallindine',
      company: 'Voomm PVT LTD',
      role: 'subscriber',
      firstName: 'imallindinet',
      address: 'Slovenia',
      phone: '(332) 803-1983',
      email: 'imallindinet@shinystat.com',
      currentPlan: 'team',
      status: 'pending',
      avatar: '',
      avatarColor: 'info'
    },
    {
      _id: 31,
      lastName: 'Gwendolyn Meineken',
      company: 'Oyondu PVT LTD',
      role: 'admin',
      firstName: 'gmeinekenu',
      address: 'Moldova',
      phone: '(551) 379-7460',
      email: 'gmeinekenu@hc360.com',
      currentPlan: 'basic',
      status: 'pending',
      avatar: '/images/avatars/1.png'
    },
    {
      _id: 32,
      lastName: 'Rafaellle Snowball',
      company: 'Fivespan PVT LTD',
      role: 'editor',
      firstName: 'rsnowballv',
      address: 'Philippines',
      phone: '(974) 829-0911',
      email: 'rsnowballv@indiegogo.com',
      currentPlan: 'basic',
      status: 'pending',
      avatar: '/images/avatars/5.png'
    },
    {
      _id: 33,
      lastName: 'Rochette Emer',
      company: 'Thoughtworks PVT LTD',
      role: 'admin',
      firstName: 'remerw',
      address: 'North Korea',
      phone: '(841) 889-3339',
      email: 'remerw@blogtalkradio.com',
      currentPlan: 'basic',
      status: 'active',
      avatar: '/images/avatars/8.png'
    },
    {
      _id: 34,
      lastName: 'Ophelie Fibbens',
      company: 'Jaxbean PVT LTD',
      role: 'subscriber',
      firstName: 'ofibbensx',
      address: 'Indonesia',
      phone: '(764) 885-7351',
      email: 'ofibbensx@booking.com',
      currentPlan: 'company',
      status: 'active',
      avatar: '/images/avatars/4.png'
    },
    {
      _id: 35,
      lastName: 'Stephen MacGilfoyle',
      company: 'Browseblab PVT LTD',
      role: 'maintainer',
      firstName: 'smacgilfoyley',
      address: 'Japan',
      phone: '(350) 589-8520',
      email: 'smacgilfoyley@bigcartel.com',
      currentPlan: 'company',
      status: 'pending',
      avatar: '',
      avatarColor: 'error'
    },
    {
      _id: 36,
      lastName: 'Bradan Rosebotham',
      company: 'Agivu PVT LTD',
      role: 'subscriber',
      firstName: 'brosebothamz',
      address: 'Belarus',
      phone: '(882) 933-2180',
      email: 'brosebothamz@tripadvisor.com',
      currentPlan: 'team',
      status: 'inactive',
      avatar: '',
      avatarColor: 'success'
    },
    {
      _id: 37,
      lastName: 'Skip Hebblethwaite',
      company: 'Katz PVT LTD',
      role: 'admin',
      firstName: 'shebblethwaite10',
      address: 'Canada',
      phone: '(610) 343-1024',
      email: 'shebblethwaite10@arizona.edu',
      currentPlan: 'company',
      status: 'inactive',
      avatar: '/images/avatars/1.png'
    },
    {
      _id: 38,
      lastName: 'Moritz Piccard',
      company: 'Twitternation PVT LTD',
      role: 'maintainer',
      firstName: 'mpiccard11',
      address: 'Croatia',
      phone: '(365) 277-2986',
      email: 'mpiccard11@vimeo.com',
      currentPlan: 'enterprise',
      status: 'inactive',
      avatar: '/images/avatars/1.png'
    },
    {
      _id: 39,
      lastName: 'Tyne Widmore',
      company: 'Yombu PVT LTD',
      role: 'subscriber',
      firstName: 'twidmore12',
      address: 'Finland',
      phone: '(531) 731-0928',
      email: 'twidmore12@bravesites.com',
      currentPlan: 'team',
      status: 'pending',
      avatar: '',
      avatarColor: 'primary'
    },
    {
      _id: 40,
      lastName: 'Florenza Desporte',
      company: 'Kamba PVT LTD',
      role: 'author',
      firstName: 'fdesporte13',
      address: 'Ukraine',
      phone: '(312) 104-2638',
      email: 'fdesporte13@omniture.com',
      currentPlan: 'company',
      status: 'active',
      avatar: '/images/avatars/6.png'
    },
    {
      _id: 41,
      lastName: 'Edwina Baldetti',
      company: 'Dazzlesphere PVT LTD',
      role: 'maintainer',
      firstName: 'ebaldetti14',
      address: 'Haiti',
      phone: '(315) 329-3578',
      email: 'ebaldetti14@theguardian.com',
      currentPlan: 'team',
      status: 'pending',
      avatar: '',
      avatarColor: 'info'
    },
    {
      _id: 42,
      lastName: 'Benedetto Rossiter',
      company: 'Mybuzz PVT LTD',
      role: 'editor',
      firstName: 'brossiter15',
      address: 'Indonesia',
      phone: '(323) 175-6741',
      email: 'brossiter15@craigslist.org',
      currentPlan: 'team',
      status: 'inactive',
      avatar: '',
      avatarColor: 'warning'
    },
    {
      _id: 43,
      lastName: 'Micaela McNirlan',
      company: 'Tambee PVT LTD',
      role: 'admin',
      firstName: 'mmcnirlan16',
      address: 'Indonesia',
      phone: '(242) 952-0916',
      email: 'mmcnirlan16@hc360.com',
      currentPlan: 'basic',
      status: 'inactive',
      avatar: '',
      avatarColor: 'error'
    },
    {
      _id: 44,
      lastName: 'Vladamir Koschek',
      company: 'Centimia PVT LTD',
      role: 'author',
      firstName: 'vkoschek17',
      address: 'Guatemala',
      phone: '(531) 758-8335',
      email: 'vkoschek17@abc.net.au',
      currentPlan: 'team',
      status: 'active',
      avatar: '',
      avatarColor: 'success'
    },
    {
      _id: 45,
      lastName: 'Corrie Perot',
      company: 'Flipopia PVT LTD',
      role: 'subscriber',
      firstName: 'cperot18',
      address: 'China',
      phone: '(659) 385-6808',
      email: 'cperot18@goo.ne.jp',
      currentPlan: 'team',
      status: 'pending',
      avatar: '/images/avatars/3.png'
    },
    {
      _id: 46,
      lastName: 'Saunder Offner',
      company: 'Skalith PVT LTD',
      role: 'maintainer',
      firstName: 'soffner19',
      address: 'Poland',
      phone: '(200) 586-2264',
      email: 'soffner19@mac.com',
      currentPlan: 'enterprise',
      status: 'pending',
      avatar: '',
      avatarColor: 'primary'
    },
    {
      _id: 47,
      lastName: 'Karena Courtliff',
      company: 'Feedfire PVT LTD',
      role: 'admin',
      firstName: 'kcourtliff1a',
      address: 'China',
      phone: '(478) 199-0020',
      email: 'kcourtliff1a@bbc.co.uk',
      currentPlan: 'basic',
      status: 'active',
      avatar: '/images/avatars/1.png'
    },
    {
      _id: 48,
      lastName: 'Onfre Wind',
      company: 'Thoughtmix PVT LTD',
      role: 'admin',
      firstName: 'owind1b',
      address: 'Ukraine',
      phone: '(344) 262-7270',
      email: 'owind1b@yandex.ru',
      currentPlan: 'basic',
      status: 'pending',
      avatar: '',
      avatarColor: 'error'
    },
    {
      _id: 49,
      lastName: 'Paulie Durber',
      company: 'Babbleblab PVT LTD',
      role: 'subscriber',
      firstName: 'pdurber1c',
      address: 'Sweden',
      phone: '(694) 676-1275',
      email: 'pdurber1c@gov.uk',
      currentPlan: 'team',
      status: 'inactive',
      avatar: '',
      avatarColor: 'warning'
    },
    {
      _id: 50,
      lastName: 'Beverlie Krabbe',
      company: 'Kaymbo PVT LTD',
      role: 'editor',
      firstName: 'bkrabbe1d',
      address: 'China',
      phone: '(397) 294-5153',
      email: 'bkrabbe1d@home.pl',
      currentPlan: 'company',
      status: 'active',
      avatar: '/images/avatars/2.png'
    }
  ]
}

const projectListData: ProjectListDataType[] = [
  {
    id: 1,
    hours: '18:42',
    progressValue: 78,
    totalTask: '122/240',
    progressColor: 'success',
    projectType: 'React Project',
    projectTitle: 'BGC eCommerce App',
    img: '/images/icons/project-icons/react.png'
  },
  {
    id: 2,
    hours: '20:42',
    progressValue: 18,
    totalTask: '9/56',
    progressColor: 'error',
    projectType: 'Figma Project',
    projectTitle: 'Falcon Logo Design',
    img: '/images/icons/project-icons/figma.png'
  },
  {
    id: 3,
    hours: '120:87',
    progressValue: 62,
    totalTask: '290/320',
    progressColor: 'primary',
    projectType: 'VueJs Project',
    projectTitle: 'Dashboard Design',
    img: '/images/icons/project-icons/vue.png'
  },
  {
    id: 4,
    hours: '89:19',
    progressValue: 8,
    totalTask: '7/63',
    progressColor: 'error',
    projectType: 'Xamarin Project',
    projectTitle: 'Foodista Mobile App',
    img: '/images/icons/project-icons/xamarin.png'
  },
  {
    id: 5,
    hours: '230:10',
    progressValue: 49,
    totalTask: '120/186',
    progressColor: 'warning',
    projectType: 'Python Project',
    projectTitle: 'Dojo React Project',
    img: '/images/icons/project-icons/python.png'
  },
  {
    id: 6,
    hours: '342:41',
    progressValue: 92,
    totalTask: '99/109',
    progressColor: 'success',
    projectType: 'Sketch Project',
    projectTitle: 'Blockchain Website',
    img: '/images/icons/project-icons/sketch.png'
  },
  {
    id: 7,
    hours: '12:45',
    progressValue: 88,
    totalTask: '98/110',
    progressColor: 'success',
    projectType: 'HTML Project',
    projectTitle: 'Hoffman Website',
    img: '/images/icons/project-icons/html5.png'
  }
]

// POST: Add new user
mock.onPost('/apps/users/add-user').reply(config => {
  // Get event from post data
  const user = JSON.parse(config.data).data

  const lastId = Math.max(...data.users.map(u => u._id), 0)

  user.id = lastId + 1

  data.users.unshift({ ...user, avatar: '', avatarColor: 'primary', status: 'active' })

  return [201, { user }]
})

// GET: DATA
mock.onGet('/apps/users/list').reply(config => {
  const { q = '', role = null, status = null, currentPlan = null } = config.params ?? ''

  const queryLowered = q.toLowerCase()

  const filteredData = data.users.filter(
    user =>
      (user.firstName.toLowerCase().includes(queryLowered) ||
        user.lastName.toLowerCase().includes(queryLowered) ||
        user.role.toLowerCase().includes(queryLowered) ||
        (user.email.toLowerCase().includes(queryLowered) &&
          user.currentPlan.toLowerCase().includes(queryLowered) &&
          user.status.toLowerCase().includes(queryLowered))) &&
      user.role === (role || user.role) &&
      user.currentPlan === (currentPlan || user.currentPlan) &&
      user.status === (status || user.status)
  )

  return [
    200,
    {
      allData: data.users,
      users: filteredData,
      params: config.params,
      total: filteredData.length
    }
  ]
})

// DELETE: Deletes User
mock.onDelete('/apps/users/delete').reply(config => {
  // Get user id from URL
  const userId = config.data

  const userIndex = data.users.findIndex(t => t._id === userId)
  data.users.splice(userIndex, 1)

  return [200]
})

// GET: DATA
mock.onGet('/apps/users/project-list').reply(config => {
  const { q = '' } = config.params ?? ''

  const queryLowered = q.toLowerCase()

  const filteredData = projectListData.filter(
    user =>
      user.projectTitle.toLowerCase().includes(queryLowered) ||
      user.projectType.toLowerCase().includes(queryLowered) ||
      user.totalTask.toLowerCase().includes(queryLowered) ||
      user.hours.toLowerCase().includes(queryLowered) ||
      String(user.progressValue).toLowerCase().includes(queryLowered)
  )

  return [200, filteredData]
})
