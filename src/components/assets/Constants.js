// homepage results const
export const googleAPIKey = 'AIzaSyDn0Lsji2c2LyyRPWgG4WRIprFqdcsTf90'
export const popularCities = ['IBZ', 'BCN', 'LON', 'MAD', 'MCO']
export const apikey = 'kw7vpx3nefnq47b8dk6kehg4'
export const sec = 'nyM8qx6n8S'
export const D = new Date()
export const getSignature = () => {
  return (apikey + sec + Math.round(D.getTime() / 1000))
}
// cont
export const amenities = [
  'Pool',
  'Free breakfast',
  'Spa',
  'Bar',
  'Resturant',
  'Free-Wifi',
  'Room service',
  'Fitness center',
  'concierge',
  'Air conditioning',
  'TV',
  'Pet friendly'
]
export const extras = [
  { title: 'Kings Breakfast ', price: 10, image: 'https://source.unsplash.com/random', summary: 'Kings Breakfast is served in bed and includes: orange juice, pastry, posh eggs, a selection of cheeses, coffee' },

  { title: 'Double trouble', price: 20, image: 'https://source.unsplash.com/random', summary: 'We call it death by chocolate, two layers of dark and white chocolate infusion will send you to seven heavens' },
  { title: 'House Red', price: 30, image: 'https://source.unsplash.com/random', summary: 'our !995 red merlot is famous for its sweet berry tasts, ideal to accompany chicken or fish dishes' }

]
