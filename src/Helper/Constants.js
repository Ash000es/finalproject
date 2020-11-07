
import React from 'react'
import travelShoe from '../assets/travelShoe.png'
import swimSuite from '../assets/swimSuite.jpg'
import travelBag from '../assets/travelBag.jpg'
import boatHire from '../assets/boatHire.jpg'
import barcaAttraction from '../assets/barcaAttraction.jpg'
import aqua from '../assets/aqua.jpg'
import breakfast from '../assets/breakfast.jpg'
import cake from '../assets/cake.jpg'
import wine from '../assets/wine.jpg'
import sushi from '../assets/sushi.jpg'

// homepage results const

let keys
if (process.env.NODE_ENV === 'production') {
  keys = process.env
} else {
  keys = require('../keys.json')
}
const { REACT_APP_googleAPIKey } = keys
export const googleURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${REACT_APP_googleAPIKey}`
export const popularCities = [{ code: 'SAT' }, { code: 'BCN' }, { code: 'IBZ' }, { code: 'LIS' }, { code: 'PMI' }, { code: 'MAH' }, { code: 'MKS' }, { code: 'NAP' }, { code: 'TIV' }]

export const D = new Date()

export const vcCodes = ['3LL', '4LL', '5LL', 'VILLA', 'AT3', 'VTV']
export const hotelcodes = ['3EST', '4EST', '5EST', '4LUX', '5LUX', 'APTH3', 'APTH4', 'APTH5', 'BB3', 'BB4', 'BB5', 'BOU', 'SUP', 'HIST', 'RSORT', 'H5_5', 'H4_4', 'H3_5', 'H3S', 'HR4', 'HR5', 'HRS']
export const poshCodes = ['5EST', '4LUX', '5LUX', 'APTH5', 'BOU', 'H5_5', 'HR5']
export const boldCodes = ['4EST', 'APTH4', 'BB4', 'BB5', 'SUP', 'RSORT', 'H4_4', 'HR4']
export const essentialCodes = ['3EST', 'APTH3', 'BB3', 'H3_5', 'H3S', 'HRS']
export const homesCodes = ['3LL', '4LL', '5LL', 'VILLA', 'AT3', 'VTV']
export const categoryCodes = ['3EST', '4EST', '4LUX', '5EST', '5LUX', 'SUP', 'HIST', 'RSORT', 'H5_5', 'H4_4', 'H3_5', 'H3S', 'BOU', 'BB4', 'BB5', 'BB3', 'HR4', 'HR5', 'HRS', '3LL', '5LL', 'APTH3', 'APTH4', 'APTH5', 'AT3', 'VILLA', 'VTV']
export const extras = [
  { title: 'Kings Breakfast ', price: 10, allotment: 6, image: breakfast, summary: 'Kings Breakfast is served in bed and includes: orange juice, pastry, posh eggs, a selection of cheeses, coffee' },

  { title: 'Double trouble', price: 20, allotment: 6, image: cake, summary: 'We call it death by chocolate, two layers of dark and white chocolate infusion will send you to seven heavens' },
  { title: 'House Red', price: 30, allotment: 6, image: wine, summary: 'our !995 red merlot is famous for its sweet berry tasts, ideal to accompany chicken or fish dishes' },
  { title: 'Save 50% on our sushi delight', price: 30, allotment: 6, image: sushi, summary: 'Book now and get a 50% discount on our Sushi resturant ' }

]

export const masterLinkSmall = 'https://photos.hotelbeds.com/giata/'
export const masterLinkLarge = 'https://photos.hotelbeds.com/giata/bigger/'
// cont
const blue = '#0088BC'
const orange = '#FF8B00'
const lightGrey = '#E6E6E6'
const grey = '#6B6B6B'
const black = '#404040'
const redish = '#FF5A5A'
const lightWhite = '#F2F2F2'
const fontFamily1 = 'robot'
const fontFamily2 = 'Gotham'
const fontSizePara = 16
const fontSizeHead = 29
const fontSizeSubHead = 22
const border = '1px solid lightgrey'

export const colorStyles = {
  blue: blue,
  orange: orange,
  lightGrey: lightGrey,
  grey: grey,
  black: black,
  redish: redish
}
const codes_Gym = [
  {
    FacilityCode: 470,
    FacilityGroupCode: 70,
    icon: 12,
    name: 'Gym'

  },
  {
    FacilityCode: 295,
    FacilityGroupCode: 90,
    icon: 12,
    name: 'Gym'

  },
  {
    FacilityCode: 308,
    FacilityGroupCode: 60,
    icon: 12,
    name: 'Gym'

  }

]
const codes_Air_conditioning = [
  {
    FacilityCode: 20,
    FacilityGroupCode: 30,
    icon: 3,
    name: 'Air conditioning'

  },
  {
    FacilityCode: 180,
    FacilityGroupCode: 60,
    icon: 24,
    name: 'Air conditioning'

  }
]
const codes_Pool = [
  {
    FacilityCode: 306,
    FacilityGroupCode: 60,
    icon: 29,
    name: 'Pool'

  },
  {
    FacilityCode: 326,
    FacilityGroupCode: 60,
    icon: 8,
    name: 'Pool'

  },
  {
    FacilityCode: 363,
    FacilityGroupCode: 73,
    icon: 29,
    name: 'Pool'

  },
  {
    FacilityCode: 364,
    FacilityGroupCode: 73,
    icon: 29,
    name: 'Pool'

  },
  {
    FacilityCode: 365,
    FacilityGroupCode: 73,
    icon: 29,
    name: 'Pool'

  },
  {
    FacilityCode: 360,
    FacilityGroupCode: 73,
    icon: 29,
    name: 'Pool'

  },

  {
    FacilityCode: 361,
    FacilityGroupCode: 73,
    icon: 29,
    name: 'Pool'

  },
  {
    FacilityCode: 362,
    FacilityGroupCode: 73,
    icon: 29,
    name: 'Pool'

  },
  {
    FacilityCode: 313,
    FacilityGroupCode: 60,
    icon: 29,
    name: 'Pool'

  },
  {
    FacilityCode: 573,
    FacilityGroupCode: 70,
    icon: 8,
    name: 'Pool'

  }
]

const codes_Internet = [
  {
    FacilityCode: 250,
    FacilityGroupCode: 70,
    icon: 22,
    name: 'Wi-fi'

  },
  {
    FacilityCode: 100,
    FacilityGroupCode: 60,
    icon: 22,
    name: 'Wi-fi'

  },
  {
    FacilityCode: 261,
    facilityGroupCode: 60,
    icon: 22,
    name: 'Wi-fi'
  },
  {
    FacilityCode: 550,
    facilityGroupCode: 70,
    icon: 22,
    name: 'Wi-fi'
  }
]
const codes_petFriendly = [
  {
    FacilityCode: 535,
    FacilityGroupCode: 70,
    icon: 22,
    name: 'Pet Friendly'

  },
  {
    FacilityCode: 540,
    FacilityGroupCode: 70,
    icon: 22,
    name: 'Pet Friendly'

  }
]
const codes_Spa = [
  {
    FacilityCode: 460,
    FacilityGroupCode: 74,
    icon: 12,
    name: 'Spa'

  },
  {
    FacilityCode: 620,
    FacilityGroupCode: 74,
    icon: 30,
    name: 'Spa'

  }
]
const codes_Breakfast = [
  {
    FacilityCode: 35,
    FacilityGroupCode: 80,
    icon: 31,
    name: 'Breakfast'

  },
  {
    FacilityCode: 180,
    FacilityGroupCode: 80,
    icon: 3,
    name: 'Breakfast'

  },
  {
    FacilityCode: 264,
    FacilityGroupCode: 80,
    icon: 3,
    name: 'Breakfast'

  },
  {
    FacilityCode: 30,
    FacilityGroupCode: 80,
    icon: 31,
    name: 'Breakfast'

  }
]
const codes_Parking = [
  {
    FacilityCode: 500,
    FacilityGroupCode: 70,
    icon: 12,
    name: 'Parking'

  },
  {
    FacilityCode: 560,
    FacilityGroupCode: 70,
    icon: 12,
    name: 'Parking'

  },
  {
    FacilityCode: 330,
    FacilityGroupCode: 70,
    icon: 12,
    name: 'Parking'

  }
]
export const amenDirectory = {
  Pool: codes_Pool,
  'Pet Friendly': codes_petFriendly,
  'Wi-fi': codes_Internet,
  Spa: codes_Spa,
  Parking: codes_Parking,
  Gym: codes_Gym
}

export const amenitiesToFilter = [
  ...Object.keys(amenDirectory)
  // 'Restaurant',
  // 'Bar',
  // 'Room service'

]

// const thirdarr = [...firstst, ...amncode]

export const amenCodes = [
  ...codes_Pool, ...codes_petFriendly, ...codes_Internet, ...codes_Spa, ...codes_Parking, ...codes_Gym,

  {
    FacilityCode: 200,
    FacilityGroupCode: 71,
    icon: 8,
    name: 'Restaurant'

  },
  {
    FacilityCode: 130,
    FacilityGroupCode: 71,
    icon: 3,
    name: 'Bar'

  },
  {
    FacilityCode: 270,
    FacilityGroupCode: 70,
    icon: 12,
    name: 'Room service'

  }

]

export const objectToMap = [{
  image: 'https://cdn.shopify.com/s/files/1/0088/0069/8415/products/Pink-Portable-Safe_800x_800x_751570aa-4362-4162-bd20-ec81fd7e3aed_250x.png?v=1561240120',
  headLine: 'ASOS DESIGN Maternity lounge jumpsuit',
  descripText: 'nothing yet',
  price: 32

}, {
  image: 'https://source.unsplash.com/random',
  headLine: 'ASOS DESIGN Maternity lounge jumpsuit',
  descripText: 'nothing yet',
  price: 32

}, {
  image: 'https://source.unsplash.com/random',
  headLine: 'ASOS DESIGN Maternity lounge jumpsuit',
  descripText: 'nothing yet',
  price: 32

}, {
  image: 'https://source.unsplash.com/random',
  headLine: 'ASOS DESIGN Maternity lounge jumpsuit',
  descripText: 'nothing yet',
  price: 32

}, {
  image: 'https://source.unsplash.com/random',
  headLine: 'ASOS DESIGN Maternity lounge jumpsuit',
  descripText: 'nothing yet',
  price: 32

}, {
  image: 'https://source.unsplash.com/random',
  headLine: 'ASOS DESIGN Maternity lounge jumpsuit',
  descripText: 'nothing yet',
  price: 32

}, {
  image: 'https://source.unsplash.com/random',
  headLine: 'ASOS DESIGN Maternity lounge jumpsuit',
  descripText: 'nothing yet',
  price: 32

}, {
  image: 'https://source.unsplash.com/random',
  headLine: 'ASOS DESIGN Maternity lounge jumpsuit',
  descripText: 'nothing yet',
  price: 32

}, {
  image: 'https://source.unsplash.com/random',
  headLine: 'ASOS DESIGN Maternity lounge jumpsuit',
  descripText: 'nothing yet',
  price: 32

}

]
export const ShopHomepage = [
  {
    id: 3,
    title: 'Air Max',
    subtitle: 'Deluxe',
    image: travelBag

  },
  {
    id: 1,
    title: 'Huarache',
    subtitle: 'Gripp',
    image: travelShoe

  },
  {
    id: 2,
    title: 'Air Max',
    subtitle: '270 P',
    image: swimSuite

  }

]

export const ActivityHomepage = [
  {
    id: 3,
    title: 'Air Max',
    subtitle: 'Deluxe',
    image: barcaAttraction

  },
  {
    id: 2,
    title: 'Air Max',
    subtitle: '270 P',
    image: boatHire

  },
  {
    id: 1,
    title: 'Huarache',
    subtitle: 'Gripp',
    image: aqua

  }

]
export const travelEssentialsObjects = [
  {
    threeImages: ['https://cdn.shopify.com/s/files/1/0088/0069/8415/products/Pink-Portable-Safe_800x_800x_751570aa-4362-4162-bd20-ec81fd7e3aed_250x.png?v=1561240120', 'https://cdn.shopify.com/s/files/1/0088/0069/8415/products/Pink_Portable_Lock_Box_Safe_0001_Pink_SAFEGO_on_Lounge_Chair_800x_055c2b48-5029-4ee0-8dd8-ba3855e09adf_200x.jpg?v=1561240120', 'https://cdn.shopify.com/s/files/1/0088/0069/8415/products/Pink_Portable_Lock_Box_Safe_0003_rs101.15.pink_800x_5e42be27-fea9-482f-bbc5-406e0c0f4d0b_200x.jpg?v=1561240120'],
    price: 20,
    descripText: 'Perfect for kids and adults, SAFEGO is the ideal way to safeguard your cell phone, passport, credit cards, medicine, jewellery, and more.',
    headline: 'SafeGo portable safe'
  },
  {
    threeImages: ['https://cdn.shopify.com/s/files/1/2615/8854/products/RaspberryRed_Groesse_2048x.png?v=1573902059', 'https://cdn.shopify.com/s/files/1/2615/8854/products/Produktbild_f7e94d5e-0582-4e27-91f5-6b62c17f14a7_2048x.jpg?v=1573409750', 'https://instagram.flis9-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/109330310_957600721346332_1470037953476186504_n.jpg?_nc_ht=instagram.flis9-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=w8nfYs04OwYAX__4P4M&oh=205fcbe37397a85d26b540286808dd17&oe=5F9699A8'],
    price: 30,
    descripText: 'The ColibriOne Raspberry Red insulated drinking bottle. The high-quality powder coating and laser engraving make it look elegant and sporty. Our specially developed rubber loop is intended to facilitate everyday transport and simplify handling in use.',
    headline: 'RASPBERRY RED - 500ML BOTTLE'
  },
  // {
  //   threeImages: ['https://bgberlin.com/wp-content/uploads/category-covers-_0017_POSTCARDS-cover-Front.jpg', 'https://bgberlin.com/wp-content/uploads/category-covers-_0016_POSTCARDS-cover-Open.jpg', 'https://bgberlin.com/wp-content/uploads/product-cover_51_Glam-LPS-3d.jpg'],
  //   price: 40,
  //   descripText: '100% Polyester Spandex and water resistant luggage cover, never lose your lugggae again at the airport',
  //   headline: 'Luggae cover'
  // },
  {
    threeImages: ['https://margo-muenchen.shop/wp-content/uploads/2019/08/Travel_kit_rose_01b_.jpg', 'https://margo-muenchen.shop/wp-content/uploads/2019/08/Travel_kit_rose_01a_.jpg', 'https://margo-muenchen.shop/wp-content/uploads/2019/08/170912_margo_003_-800x534.jpg'],
    price: 50,
    descripText: '2-in-1 toiletry bag in a modern rectangular shape that keeps creams, powders, make-up and jewelry spacious but compact. Also fits in your carry-on case.Made of high-quality synthetic leather, black textile lining, safety compartment with sturdy zipper inside, piped inside compartments for a quick overview',
    headline: '2-IN-1 Travelset Toiletry bag with JETBAG'
  },
  {
    threeImages: ['https://assets.awaytravel.com/spree/products/1518/original/Blush_Medium_PDP_01.jpg?format=jpg&quality=75&width=1410', 'https://assets.awaytravel.com/spree/products/1524/original/Away_medium_pink_7.jpg?format=jpg&quality=75&width=1410', 'https://assets.awaytravel.com/spree/products/1523/original/Blush_Medium_PDP_06.jpg?format=jpg&quality=75&width=1410'],
    price: 99,
    descripText: 'Our Medium suitcase is a checked bag built to last, with a durable polycarbonate hard shell and 360° spinner wheels that ensure a smooth ride. Plus, its interior compression system and hidden laundry bag make packing that much easier.',
    headline: 'The weekender'
  },
  {
    threeImages: ['https://www.togandbil.com/wp-content/uploads/2019/04/TOBBIL-Weekender-1-Beige.jpeg', 'https://www.togandbil.com/wp-content/uploads/2019/04/TOBBIL-Weekender-6-Beige.jpeg', 'https://www.togandbil.com/wp-content/uploads/sb-instagram-feed-images/111946845_421164528849777_4850002034976375623_nfull.jpg'],
    price: 20,
    descripText: 'Hand luggage compliant real leather handmade practical shoulder strap with leather padding removable & adjustable',
    headline: 'The everywhere bag'
  },
  {
    threeImages: ['https://cdn.shopify.com/s/files/1/1640/4313/products/DSC04286_1080x.jpg?v=1598887125', 'https://cdn.shopify.com/s/files/1/1640/4313/products/nachhaltiger-rucksack-rot-upcycling-5_900x.jpg?v=1598880509', 'https://cdn.shopify.com/s/files/1/1640/4313/products/nachhaltiger-rucksack-rot-airpaq-upcycling_900x.jpg?v=1598880341'],
    price: 120,
    descripText: 'Airbags are designed to perform in extreme situations, and for a job like this, nothing can be left to chance. The textiles from Airbags are hence ideal for producing quality backpacks and accessoires.',
    headline: 'Airpaq 2.0 backpack'
  },
  {
    threeImages: ['https://cdn.shopify.com/s/files/1/0784/0207/products/2_e7a46463-ff25-4f2f-a066-d9be81b5273d_800x.jpg?v=1582706039', 'https://cdn.shopify.com/s/files/1/0784/0207/products/3_ae821767-0f98-42cc-883c-f117c797af62_800x.jpg?v=1582706039', 'https://cdn.shopify.com/s/files/1/0784/0207/products/1_f823cad2-c070-4abf-9c90-5e34d390a99e_800x.jpg?v=1582706039'],
    price: 25,
    descripText: 'Throw on the White Sun Floral Cover Up over your bikini and hit the beach bar! White lace shapes this sheer swim cover-up with short sleeve.',
    headline: 'WHITE SUN FLORAL COVER UP'
  },
  {
    threeImages: ['https://cdn.shopify.com/s/files/1/1703/6727/files/06_tropicfeel_shoes_in_the_world_77244848-f05b-4ffd-9eae-df23ce8afc1a_500x.jpg?v=1599599205', 'https://cdn.shopify.com/s/files/1/1703/6727/products/tropicfeel-web-ecommerce-rosewood-05_360x.jpg?v=1600160713', 'https://cdn.shopify.com/s/files/1/1703/6727/products/tropicfeel-web-ecommerce-rosewood-03_360x.jpg?v=1600160713'],
    price: 20,
    descripText: 'Cala is the all-terrain sneaker with 4-in-1 versatility: providing the benefits of aqua shoes, the comfort of sport shoes, the technical outsole materials of hiking shoes, and the styling of your favorite daily pieces.,At just 228 grams per shoe you can easily bring them wherever you go,Innovative built in drainage system that clears out water and dries quickly',
    headline: 'CALA CHOCOLATE RED travel shoe'

  },
  {
    threeImages: ['https://cdn.shopify.com/s/files/1/0276/0192/8266/products/Passport-II-Pro_B_10_180x.png?v=1597812049', 'https://cdn.shopify.com/s/files/1/0276/0192/8266/products/Passport-II-Pro_B_1_180x.png?v=1597812048', 'https://cdn.shopify.com/s/files/1/0276/0192/8266/products/Passport-II-Pro_B_2_540x.png?v=1597812050'],
    price: 69,
    descripText: 'Travel in Over 200 Countries,Compatible with outlets in over 200 countries and regions. Worry-free travelling in USA, UK, Europe, Canada, Japan, Mexico, Asia, the Middle East, and more.Power 6 Devices Simultaneously',
    headline: 'Passport II Pro - The perfect home and travel adapter'
  },
  {
    threeImages: ['https://canary.contestimg.wish.com/api/webimage/5cbdf5de7ab4b765c8ac4148-original.jpg', 'https://canary.contestimg.wish.com/api/webimage/5cbdf5de7ab4b765c8ac4148-1-large.jpg', 'https://canary.contestimg.wish.com/api/webimage/5cbdf5de7ab4b765c8ac4148-5-large.jpg'],
    price: 69,
    descripText: 'East to clean portable Compact Multifunctional Lightweight Outdoor Travel Blanket Nylon Mat for Beach Picnic Camping Hiking Activities',
    headline: 'Sand and water proof beach blanket'
  }
]
