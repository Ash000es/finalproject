// homepage results const
export const popularCities = ['IBZ', 'BCN', 'LON', 'MAD', 'MCO']
export const apikey = 'kw7vpx3nefnq47b8dk6kehg4'
export const sec = 'nyM8qx6n8S'
export const D = new Date()
export const getSignature = () => {
  return (apikey + sec + Math.round(D.getTime() / 1000))
}
