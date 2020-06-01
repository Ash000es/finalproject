// TODO: these files are in assets folder, but the assets folder should not be inside components
// it should be directly under src, can you please show me an example of your codes easier?

import React from 'react'
import { FaGlassMartiniAlt, FaParking, FaWineGlassAlt, FaSpa, FaBath, FaSuitcaseRolling } from 'react-icons/fa'
import LabelBold from '../LabelBold'
import LabelEssential from '../LabelEssential'
import Labelposh from '../LabelPosh'
import AcUnitIcon from '@material-ui/icons/AcUnit'
import FitnessCenter from '@material-ui/icons/AcUnit'
import PoolIcon from '@material-ui/icons/AcUnit'
import WifiIcon from '@material-ui/icons/Wifi'
import LiveTvIcon from '@material-ui/icons/LiveTv'
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast'
import RestaurantIcon from '@material-ui/icons/Restaurant'
import RoomServiceIcon from '@material-ui/icons/RoomService'
import DeckIcon from '@material-ui/icons/Deck'

export const hardHotelObject = {

  code: 228426,
  name: 'ibis Barcelona Santa Coloma',
  categoryCode: '2EST',
  categoryName: '4 STARS',
  destinationCode: 'BCN',
  destinationName: 'Barcelona',
  zoneCode: 25,
  zoneName: 'Santa Coloma de Gramanet',
  latitude: '41.456033',
  longitude: '2.205552',

  minRate: 121.72,
  maxRate: 426.04,
  currency: 'EUR',
  CheckinDate: '27-03-2020',
  CheckoutDate: '30-03-2020',
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
    posh: <Labelposh />,
    essential: <LabelEssential />,
    bold: <LabelBold />

  },
  images: [{ type: 'bar', path: '"00/000008/000008a_hb_ro_064.jpg",' }, { type: 'Double room', path: 'http://photos.hotelbeds.com/giata/00/000001/000001a_hb_ro_005.jpg' }],
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
    { title: 'Airconditioning', Icon: <AcUnitIcon /> },
    { title: 'Bar', Icon: <FaGlassMartiniAlt /> },
    { title: 'Parking', Icon: <FaParking /> },
    { title: 'MiniBar', Icon: <FaWineGlassAlt /> },
    { title: 'Room Service', Icon: <RoomServiceIcon /> },
    { title: 'Spa', Icon: <FaSpa /> },
    { title: 'Bathrobe', Icon: <FaBath /> },
    { title: 'free toiletries', Icon: <FaBath /> },
    { title: 'Bathtub', Icon: <FaBath /> },
    { title: 'Cable television', Icon: <LiveTvIcon /> },
    { title: 'Coffee/Tea maker', Icon: <FreeBreakfastIcon /> },
    { title: 'Free wifi', Icon: <WifiIcon /> },
    { title: 'Fitness Center', Icon: <FitnessCenter /> },
    { title: 'Restaurant facility', Icon: <RestaurantIcon /> },
    { title: 'Rooftop deck', Icon: <DeckIcon /> },
    { title: 'Sauna', Icon: <FaSpa /> },
    { title: 'Concierge', Icon: <RoomServiceIcon /> },
    { title: 'pool', Icon: <PoolIcon /> },
    { title: 'Luggage room', Icon: <FaSuitcaseRolling /> }

  ],
  ranking: 27,
  distanceToCentre: 3,
  reviewScore: 4,
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
  RoomsOccupancey: [{
    roomType: 'FAM.ST-4',
    roomCode: 'FAM',
    characteristicCode: 'ST-4',
    hotelRoomDescription: { content: '2 ADULTS + 4 CHILDS' }
  },
  {
    roomType: 'DBT.ST-3',
    roomCode: 'DBT',
    characteristicCode: 'ST-3',
    hotelRoomDescription: { content: 'STANDARD 2 ADULTS + 1 CHILD' }
  }]

}
