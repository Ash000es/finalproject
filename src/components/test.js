Write function below
const allItemsCheck= {
    hotel: false,
    extra: false,
    product:false
  }
const someOrder ={
    items:  [
    {name: 'dragon food', price: 9, quantity:1}, 
    {name: 'dragon cage', price: 10, quantity:8},
    {name:'babies', quantity:1, price: 100, shipping: true, shippingPrice: 20 },
    {name: 'dragon food', price: 40,quantity:1, shipping: true, shippingPrice: 20}

      ]
    }
    const totalHotelRooms = order => order.items.filter(x => !x.shipping).reduce((prev, cur) => prev +(cur.price * cur.quantity), 0)
    const totalshippingItems = order => order.items.filter(x => x.shipping).reduce((prev, cur) => prev +(cur.price * cur.quantity) + cur.shippingPrice, 0)
    const orderTotal= order =>{  
     const total1= totalItems(order)
     const total2= shippingItems(order)
      return total1 + total2

    }
    result = orderTotal(someOrder)
    console.log(result)
// filter the results based on the global filter state object
// const filterAll = (filters) => {
//   // start by setting it to neutral
//   let res = hotelsresults

//   // applying all special cases of filters that are ON
//   if (filters.hotelsOnly) {
//     res = showHotelsOnly(res, hotelsresults, vcCodes)
//   }
//   if (filters.villasOnly) {
//     res = showHomesOnly(res, hotelsresults, hotelcodes)
//   }
//   if (filters.starRating.includes('3 stars') || filters.starRating.includes('4 stars') || filters.starRating.includes('5 stars')) {
//     res = updateStarRatings(res, hotelsresults, filters.starRating)
//   }
//   if (filters.Amenities.length > 0) {
//     res = filterAmenSelection(res, hotelsresults, filters.Amenities)
//     // real word case would be take the hotelresults ARR, get the codes
//     // crud find(filter,options)
//     //  make a new DB query with these codes and apply filter on the server side then return new db arr
//     // then new dbarr needs to be pathced with api retunred arr to get full object to map
//     console.log(res, 'res amen here')
//   }
//   if (filters.priceFilter[0] > PRICE_FILTER_MIN || filters.priceFilter[1] < PRICE_FILTER_MAX) {
//     res = updatePrice(filters.priceFilter[0], filters.priceFilter[1], res, hotelsresults)
//   }
//   if (filters.sortBy === 'Sortby Price') {
//     res = sortbyPrice(res, hotelsresults)
//   }
//   if (filters.sortBy === 'Sortby review') {
//     res = sortByReview(res, hotelsresults)
//   }
//   if (filters.sortBy === 'Sortby recommended') {
//     res = sortByRecommended(res, hotelsresults)
//   }

//   setTempFilteredHotels(res)
//   setFilters(filters)
// }
