// ** Mock
import mock from 'src/@fake-db/mock'

const data = {
  users: [
    {
      id: 1,
      fullName: 'Galen Slixby',
      firstName: 'Galen',
      lastName: 'Slixby',
      birthday: '',
      company: 'Yotz PVT LTD',
      role: 'admin',
      username: 'gslixby0',
      contact: '(479) 232-9151',
      email: 'gslixby0@abc.net.au',
      avatar: '',
      avatarColor: 'primary',
      country: 'Viet Nam',
      address: '31 Lang Ha Street Ba Dinh District,Hanoi,Vietnam',
      gender: 'Male'
    },
    {
      id: 2,
      fullName: 'Halsey Redmore',
      firstName: 'Halsey',
      lastName: 'Redmore',
      birthday: '',
      company: 'Skinder PVT LTD',
      role: 'manager',
      username: 'hredmore1',
      contact: '(472) 607-9137',
      email: 'hredmore1@imgur.com',
      avatar: '/images/avatars/3.png',
      country: 'Viet Nam',
      address: '14 Ngo Quyen StreetHoan Kiem District,Hanoi,Vietnam',
      gender: 'Male'
    },
    {
      id: 3,
      fullName: 'Marjory Sicely',
      firstName: 'Marjory',
      lastName: 'Sicely',
      birthday: '',
      company: 'Oozz PVT LTD',
      role: 'subscriber',
      username: 'msicely2',
      contact: '(321) 264-4599',
      email: 'msicely2@who.int',
      avatar: '/images/avatars/1.png',
      country: 'Viet Nam',
      address: '23/8/6 Dinh Tien Hoang Str,Ho Chi Minh City,Vietnam',
      gender: 'Male'
    },
    {
      id: 4,
      fullName: 'Cyrill Risby',
      firstName: 'Cyrill',
      lastName: 'Risby',
      birthday: '',
      company: 'Oozz PVT LTD',
      role: 'admin',
      username: 'crisby3',
      contact: '(923) 690-6806',
      email: 'crisby3@wordpress.com',
      avatar: '/images/avatars/3.png',
      country: 'Viet Nam',
      address: '678 Truong Chinh St. Ward 15,Ho Chi Minh City,Vietnam',
      gender: 'Male'
    },
    {
      id: 5,
      fullName: 'Maggy Hurran',
      firstName: 'Maggy',
      lastName: 'Hurran',
      birthday: '',
      company: 'Aimbo PVT LTD',
      role: 'subscriber',
      username: 'mhurran4',
      contact: '(669) 914-1078',
      email: 'mhurran4@yahoo.co.jp',
      avatar: '/images/avatars/1.png',
      country: 'Viet Nam',
      address: '37 Nguyen Truong To St.,Hanoi,Vietnam',
      gender: 'Male'
    },
    {
      id: 6,
      fullName: 'Silvain Halstead',
      firstName: 'Silvain',
      lastName: 'Halstead',
      birthday: '',
      company: 'Jaxbean PVT LTD',
      role: 'manager',
      username: 'shalstead5',
      contact: '(958) 973-3093',
      email: 'shalstead5@shinystat.com',
      avatar: '',
      avatarColor: 'error',
      country: 'Viet Nam',
      address: '14/Alley 234 Truong Chinh Khuong Thuong Ward, Ho Chi Minh City,Vietnam',
      gender: 'Male'
    },
    {
      id: 7,
      fullName: 'Breena Gallemore',
      firstName: 'Breena',
      lastName: 'Gallemore',
      birthday: '',
      company: 'Jazzy PVT LTD',
      role: 'subscriber',
      username: 'bgallemore6',
      contact: '(825) 977-8152',
      email: 'bgallemore6@boston.com',
      avatar: '',
      avatarColor: 'warning',
      country: 'Viet Nam',
      address: '21 Ngo Quyen Vinh Ninh Ward, Ho Chi Minh City,Vietnam',
      gender: 'Male'
    },
    {
      id: 8,
      fullName: 'Kathryne Liger',
      firstName: 'Kathryne',
      lastName: 'Liger',
      birthday: '',
      company: 'Pixoboo PVT LTD',
      role: 'manager',
      username: 'kliger7',
      contact: '(187) 440-0934',
      email: 'kliger7@vinaora.com',
      avatar: '/images/avatars/4.png',
      country: 'Viet Nam',
      address: '27-29 Hai Ba Trung Ben Nghe Ward, Ho Chi Minh City,Vietnam',
      gender: 'Male'
    },
    {
      id: 9,
      fullName: 'Franz Scotfurth',
      firstName: 'Franz',
      lastName: 'Scotfurth',
      birthday: '',
      company: 'Tekfly PVT LTD',
      role: 'subscriber',
      username: 'fscotfurth8',
      contact: '(978) 146-5443',
      email: 'fscotfurth8@dailymotion.com',
      avatar: '/images/avatars/2.png',
      country: 'Viet Nam',
      address: '586 Ba Trieu StreetThanh Hoa city, Ho Chi Minh City,Vietnam',
      gender: 'Male'
    },
    {
      id: 10,
      fullName: 'Jillene Bellany',
      firstName: 'Jillene',
      lastName: 'Bellany',
      birthday: '',
      company: 'Gigashots PVT LTD',
      role: 'subscriber',
      username: 'jbellany9',
      contact: '(589) 284-6732',
      email: 'jbellany9@kickstarter.com',
      avatar: '/images/avatars/5.png',
      country: 'Viet Nam',
      address: '164 Nam Ky Khoi Nghia St. Ward 6 Dist. 3, Ho Chi Minh City,Vietnam',
      gender: 'Male'
    },
    {
      id: 11,
      fullName: 'Jonah Wharlton',
      firstName: 'Jonah',
      lastName: 'Wharlton',
      birthday: '',
      company: 'Eare PVT LTD',
      role: 'subscriber',
      username: 'jwharltona',
      contact: '(176) 532-6824',
      email: 'jwharltona@oakley.com',
      avatar: '/images/avatars/4.png',
      country: 'Viet Nam',
      address: 'Indochina Tower. 4 Nguyen Dinh Chieu Street. Da Kao Ward., Ho Chi Minh City,Vietnam',
      gender: 'Male'
    },
    {
      id: 12,
      fullName: 'Seth Hallam',
      firstName: 'Seth',
      lastName: 'Hallam',
      birthday: '',
      company: 'Yakitri PVT LTD',
      role: 'subscriber',
      username: 'shallamb',
      contact: '(234) 464-0600',
      email: 'shallamb@hugedomains.com',
      avatar: '/images/avatars/5.png',
      country: 'Viet Nam',
      address: '154 Cong Quynh Street Pham Ngu Lao Ward District 1, Ho Chi Minh City,Vietnam',
      gender: 'Male'
    },
    {
      id: 13,
      fullName: 'Yoko Pottie',
      firstName: 'Yoko',
      lastName: 'Pottie',
      birthday: '',
      company: 'Leenti PVT LTD',
      role: 'subscriber',
      username: 'ypottiec',
      contact: '(907) 284-5083',
      email: 'ypottiec@privacy.gov.au',
      avatar: '/images/avatars/7.png',
      country: 'Viet Nam',
      address: '26 Le Ngoc Han Pham Dinh Ho Ward, Ho Chi Minh City,Vietnam',
      gender: 'Male'
    },
    {
      id: 14,
      fullName: 'Maximilianus Krause',
      firstName: 'Maximilianus',
      lastName: 'Krause',
      birthday: '',
      company: 'Digitube PVT LTD',
      role: 'manager',
      username: 'mkraused',
      contact: '(167) 135-7392',
      email: 'mkraused@stanford.edu',
      avatar: '/images/avatars/6.png',
      country: 'Viet Nam',
      address: '483/22 Le Van Sy St. Ward 12 Dist. 3, Ho Chi Minh City,Vietnam',
      gender: 'Male'
    },
    {
      id: 15,
      fullName: 'Zsazsa McCleverty',
      firstName: 'Zsazsa',
      lastName: 'McCleverty',
      birthday: '',
      company: 'Kaymbo PVT LTD',
      role: 'admin',
      username: 'zmcclevertye',
      contact: '(317) 409-6565',
      email: 'zmcclevertye@soundcloud.com',
      avatar: '/images/avatars/2.png',
      country: 'Viet Nam',
      address: '174C Nguyen Huu Canh Street Ward 22, Ho Chi Minh City,Vietnam',
      gender: 'Male'
    },
    {
      id: 16,
      fullName: 'Bentlee Emblin',
      firstName: 'Bentlee',
      lastName: 'Emblin',
      birthday: '',
      company: 'Yambee PVT LTD',
      role: 'subscriber',
      username: 'bemblinf',
      contact: '(590) 606-1056',
      email: 'bemblinf@wired.com',
      avatar: '/images/avatars/6.png',
      country: 'Viet Nam',
      address: '92 Pho Quang Ward 2, Ho Chi Minh City,Vietnam',
      gender: 'Male'
    },
    {
      id: 17,
      fullName: 'Brockie Myles',
      firstName: 'Brockie',
      lastName: 'Myles',
      birthday: '',
      company: 'Wikivu PVT LTD',
      role: 'subscriber',
      username: 'bmylesg',
      contact: '(553) 225-9905',
      email: 'bmylesg@amazon.com',
      avatar: '',
      avatarColor: 'success',
      country: 'Viet Nam',
      address: '266/28 To Hien Thanh St. Ward 15 Dist. 10, Ho Chi Minh City,Vietnam',
      gender: 'Male'
    },
    {
      id: 18,
      fullName: 'Bertha Biner',
      firstName: 'Bertha',
      lastName: 'Biner',
      birthday: '',
      company: 'Twinte PVT LTD',
      role: 'subscriber',
      username: 'bbinerh',
      contact: '(901) 916-9287',
      email: 'bbinerh@mozilla.com',
      avatar: '/images/avatars/7.png',
      country: 'Viet Nam',
      address: '249 Ung Van Khiem Ward 25, Ho Chi Minh City,Vietnam',
      gender: 'Male'
    },
    {
      id: 19,
      fullName: 'Travus Bruntjen',
      firstName: 'Travus',
      lastName: 'Bruntjen',
      birthday: '',
      company: 'Cogidoo PVT LTD',
      role: 'admin',
      username: 'tbruntjeni',
      contact: '(524) 586-6057',
      email: 'tbruntjeni@sitemeter.com',
      avatar: '',
      avatarColor: 'primary',
      country: 'Viet Nam',
      address: '106A Nguyen Dinh Chieu Dakao Ward Dist.1, Ho Chi Minh City,Vietnam',
      gender: 'Male'
    },
    {
      id: 20,
      fullName: 'Wesley Burland',
      firstName: 'Wesley',
      lastName: 'Burland',
      birthday: '',
      company: 'Bubblemix PVT LTD',
      role: 'manager',
      username: 'wburlandj',
      contact: '(569) 683-1292',
      email: 'wburlandj@uiuc.edu',
      avatar: '/images/avatars/6.png',
      country: 'Viet Nam',
      address: '34 Ho Tung Mau St. Mai Dich Ward, Ho Chi Minh City,Vietnam',
      gender: 'Male'
    },
    {
      id: 21,
      fullName: 'Selina Kyle',
      firstName: 'Selina',
      lastName: 'Kyle',
      birthday: '',
      company: 'Wayne Enterprises',
      role: 'admin',
      username: 'catwomen1940',
      contact: '(829) 537-0057',
      email: 'irena.dubrovna@wayne.com',
      avatar: '/images/avatars/1.png',
      country: 'Viet Nam',
      address: '266/28 To Hien Thanh St. Ward 15 Dist. 10, Ho Chi Minh City,Vietnam',
      gender: 'Male'
    },
    {
      id: 22,
      fullName: 'Jameson Lyster',
      firstName: 'Jameson',
      lastName: 'Lyster',
      birthday: '',
      company: 'Quaxo PVT LTD',
      role: 'subscriber',
      username: 'jlysterl',
      contact: '(593) 624-0222',
      email: 'jlysterl@guardian.co.uk',
      avatar: '/images/avatars/8.png',
      country: 'Viet Nam',
      address: '157/14 Ho Van Hue St. Ward 9, Ho Chi Minh City,Vietnam',
      gender: 'Male'
    },
    {
      id: 23,
      fullName: 'Kare Skitterel',
      firstName: 'Kare',
      lastName: 'Skitterel',
      birthday: '',
      company: 'Ainyx PVT LTD',
      role: 'subscriber',
      username: 'kskitterelm',
      contact: '(254) 845-4107',
      email: 'kskitterelm@ainyx.com',
      avatar: '/images/avatars/3.png',
      country: 'Viet Nam',
      address: '339 Nguyen Van Luong Ward 12 Dist.6, Ho Chi Minh City,Vietnam',
      gender: 'Male'
    },
    {
      id: 24,
      fullName: 'Cleavland Hatherleigh',
      firstName: 'Cleavland',
      lastName: 'Hatherleigh',
      birthday: '',
      company: 'Flipopia PVT LTD',
      role: 'subscriber',
      username: 'chatherleighn',
      contact: '(700) 783-7498',
      email: 'chatherleighn@washington.edu',
      avatar: '/images/avatars/2.png',
      country: 'Viet Nam',
      address: '226 Tran Hung Dao Street Phan Thiet City, Ho Chi Minh City,Vietnam',
      gender: 'Male'
    },
    {
      id: 25,
      fullName: 'Adeline Micco',
      firstName: 'Adeline',
      lastName: 'Micco',
      birthday: '',
      company: 'Topicware PVT LTD',
      role: 'admin',
      username: 'amiccoo',
      contact: '(227) 598-1841',
      email: 'amiccoo@whitehouse.gov',
      avatar: '',
      avatarColor: 'error',
      country: 'Viet Nam',
      address: '223 Hung Vuong St., Ho Chi Minh City,Vietnam',
      gender: 'Male'
    },
    {
      id: 26,
      fullName: 'Hugh Hasson',
      firstName: 'Hugh',
      lastName: 'Hasson',
      birthday: '',
      company: 'Skinix PVT LTD',
      role: 'admin',
      username: 'hhassonp',
      contact: '(582) 516-1324',
      email: 'hhassonp@bizjournals.com',
      avatar: '/images/avatars/4.png',
      country: 'Viet Nam',
      address: '283/21 Pham Ngu Lao Street  Pham Ngu Lao Ward District 1, Ho Chi Minh City,Vietnam',
      gender: 'Male'
    },
    {
      id: 27,
      fullName: 'Germain Jacombs',
      firstName: 'Germain',
      lastName: 'Jacombs',
      birthday: '',
      company: 'Youopia PVT LTD',
      role: 'manager',
      username: 'gjacombsq',
      contact: '(137) 467-5393',
      email: 'gjacombsq@jigsy.com',
      avatar: '/images/avatars/5.png',
      country: 'Viet Nam',
      address: '298 Nguyen Trong Tuyen Street Ward 1, Ho Chi Minh City,Vietnam',
      gender: 'Male'
    },
    {
      id: 28,
      fullName: 'Bree Kilday',
      firstName: 'Bree',
      lastName: 'Kilday',
      birthday: '',
      company: 'Jetpulse PVT LTD',
      role: 'subscriber',
      username: 'bkildayr',
      contact: '(412) 476-0854',
      email: 'bkildayr@mashable.com',
      avatar: '',
      avatarColor: 'warning',
      country: 'Viet Nam',
      address: '21 Ngo Quyen Vinh Ninh Ward, Ho Chi Minh City,Vietnam',
      gender: 'Male'
    },
    {
      id: 29,
      fullName: 'Candice Pinyon',
      firstName: 'Candice',
      lastName: 'Pinyon',
      birthday: '',
      company: 'Kare PVT LTD',
      role: 'manager',
      username: 'cpinyons',
      contact: '(170) 683-1520',
      email: 'cpinyons@behance.net',
      avatar: '/images/avatars/7.png',
      country: 'Viet Nam',
      address: 'D20/537A Trinh Quang Nghi St. Hamlet 4 Phong Phu Ward, Ho Chi Minh City,Vietnam',
      gender: 'Male'
    },
    {
      id: 30,
      fullName: 'Isabel Mallindine',
      firstName: 'Isabel',
      lastName: 'Mallindine',
      birthday: '',
      company: 'Voomm PVT LTD',
      role: 'subscriber',
      username: 'imallindinet',
      contact: '(332) 803-1983',
      email: 'imallindinet@shinystat.com',
      avatar: '',
      avatarColor: 'info',
      country: 'Viet Nam',
      address: '48 Le Loi Ward Ben Nghe Dist.1, Ho Chi Minh City,Vietnam',
      gender: 'Male'
    }
  ]
}

// POST: Add new user
mock.onPost('/apps/users/add-user').reply(config => {
  // Get event from post data
  const user = JSON.parse(config.data).data
  const { length } = data.users
  let lastIndex = 0
  if (length) {
    lastIndex = data.users[length - 1].id
  }
  user.id = lastIndex + 1
  data.users.unshift({ ...user, avatar: '', avatarColor: 'primary', status: 'active' })

  return [201, { user }]
})

// GET: Updated DATA
mock.onGet('/apps/users/list').reply(config => {
  const { q = '', role = null } = config.params ?? ''
  const queryLowered = q.toLowerCase()

  const filteredData = data.users.filter(
    user =>
      (user.username.toLowerCase().includes(queryLowered) ||
        user.fullName.toLowerCase().includes(queryLowered) ||
        user.role.toLowerCase().includes(queryLowered) ||
        (user.email.toLowerCase().includes(queryLowered) &&
          user.currentPlan.toLowerCase().includes(queryLowered) &&
          user.status.toLowerCase().includes(queryLowered))) &&
      user.role === (role || user.role)
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

// GET: particular user data
mock.onGet('/apps/user').reply(config => {
  const { id } = config.params
  const userData = data.users.filter(user => user.id === parseInt(id, 10))
  if (userData.length) {
    return [200, userData[0]]
  } else {
    return [404, { message: 'Unable to find the requested user!' }]
  }
})

// DELETE: Deletes User
mock.onDelete('/apps/users/delete').reply(config => {
  // Get user id from URL
  const userId = config.data
  const userIndex = data.users.findIndex(t => t.id === userId)
  data.users.splice(userIndex, 1)

  return [200]
})
