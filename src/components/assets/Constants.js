// homepage results const
const popularCities = ['IBZ', 'BCN', 'LON', 'MAD', 'MCO']
const apikey = 'kw7vpx3nefnq47b8dk6kehg4'
const sec = 'nyM8qx6n8S'
const D = new Date()
const getSignature = () => {
  return (apikey + sec + Math.round(D.getTime() / 1000))
}
export default Constants
