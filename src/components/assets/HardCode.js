import React from 'react'
import { FaBeer } from 'react-icons/fa'

export const hardHotelObject = {

  code: 228426,
  name: 'ibis Barcelona Santa Coloma',
  categoryCode: '2EST',
  categoryName: '2 STARS',
  destinationCode: 'BCN',
  destinationName: 'Barcelona',
  zoneCode: 25,
  zoneName: 'Santa Coloma de Gramanet',
  latitude: '41.456033',
  longitude: '2.205552',

  minRate: 121.72,
  maxRate: 426.04,
  currency: 'EUR',
  rooms: [{
    code: 'DBL.ST',
    name: 'DOUBLE STANDARD',
    rates: [{
      rateKey: '20201105|20201112|W|102|228426|DBL.ST|ID_B2B_59|RO|PAQ|1~1~0||N@03~~24879~538223438~N~5E2F076A8FD54F4158549101700700AAUK0000406005600020124879',
      rateClass: 'NOR',
      rateType: 'RECHECK',
      net: 121.72,
      allotment: 3,
      paymentType: 'AT_WEB',
      packaging: false,
      boardCode: 'RO',
      boardName: 'ROOM ONLY',
      cancellationPolicies: [{
        amount: 60.86,
        from: '2020-10-28'
      },
      {
        amount: 121.72,
        from: '2020-11-02'
      }],
      taxes: {
        taxes: [{
          included: false,
          amount: 3.50,
          currency: 'EUR'
        }],
        allincluded: false
      },
      rooms: 1,
      adults: 1,
      children: 0
    }]

  }],
  label: {
    posh: 'Posh',
    essential: 'Essential',
    hip: 'Hip'

  },
  images: [{ type: 'bar', path: '"00/000008/000008a_hb_ro_064.jpg",' },{ type: 'Double room', path: '"00/000008/000008a_hb_ro_064.jpg",' }],
  Checkin: {
    content: 'Check-in hour',
    timeFrom: '14:00:00',
    timeTo: '00:00:00'
  },
  Checkout: {
    content: 'Check-out hour',
    timeFrom: '07:00:00',
    timeTo: '10:00:00'
  },
  petsPolicy: { pets: 'Pets allowed' },
  Numberofrooms: { number: 150, Icon: '' },
  CheckinRules: { title: 'Identification card at arrival' },
  hotelAmenities: [
    { title: 'Airconditioning', Icon: '' },
    { title: 'Bar', Icon: '' },
    { title: 'Parking', Icon: '' },
    { title: 'MiniBar', Icon: '' },
    { title: 'Room Service', Icon: '' },
    { title: 'Spa', Icon: '' },
    { title: 'Bathrobe', Icon: '' },
    { title: 'Bathroom amenities (free toiletries)', Icon: '' },
    { title: 'Bathtub', Icon: '' },
    { title: 'Cable television', Icon: '' },
    { title: 'Coffee/Tea maker', Icon: '' },
    { title: 'Free wifi', Icon: <FaBeer /> },
    { title: 'Fitness Center', Icon: '' },
    { title: 'Restaurant facility', Icon: '' },
    { title: 'Rooftop deck', Icon: '' },
    { title: 'Sauna', Icon: '' },
    { title: 'Concierge', Icon: '' },
    { title: 'pool', Icon: '' },
    { title: 'Luggage room', Icon: '' }

  ],
  ranking: 27,
  description: 'This modern hotel is excellently situated in the centre of Barcelona, just a few steps away from Plaça de Catalunya, La Rambla, Passeig de Gràcia and University of Barcelona. The hotel features a convention centre and is within walking distance from the trade fair centre Fira de Barcelona. The Sants railway station offering direct connection to the airport is within a 5-minute walk.',
  address: 'Carrer De Viladomat,197 ',
  postalCode: '08015',
  city: 'BARCELONA',
  email: 'recepcion.viladomat@aa-hoteles.com',
  license: 'HB-004071',
  Phone: { phoneNumber: '+34973283910', phoneType: 'PHONEHOTEL' },
  roomsTypes: [{
    roomName: 'Double room',
    bedType: { name: 'Double bed', number: 2, size: 'Double bed 131-150 width' },
    roomAmenities: [{ title: 'Bidet', Icon: '' },
      { title: 'Coffee/Tea maker', Icon: '' },
      { title: 'Bathtub only', Icon: '' },
      { title: 'Bath or Shower', Icon: '' },
      { title: 'Hairdryer', Icon: '' },
      { title: 'Roomsize', Icon: '20 m2' },
      { title: 'Desk with lamp', Icon: '' }
    ]

  }],
  RoomsOccupancey:[{
    roomType: "FAM.ST-4",
    roomCode: "FAM",
    characteristicCode: "ST-4",
    hotelRoomDescription: { content: "2 ADULTS + 4 CHILDS" }
  },
  {
    roomType: "DBT.ST-3",
    roomCode: "DBT",
    characteristicCode: "ST-3",
    hotelRoomDescription: { content: "STANDARD 2 ADULTS + 1 CHILD" }
  }]

}
