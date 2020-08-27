import React, { Component } from 'react'

import PeopleIcon from '@material-ui/icons/People'
import PersonIcon from '@material-ui/icons/Person'
import HotelOutlinedIcon from '@material-ui/icons/HotelOutlined'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import ApartmentOutlinedIcon from '@material-ui/icons/ApartmentOutlined'
import KingBedOutlinedIcon from '@material-ui/icons/KingBedOutlined'
import SingleBedOutlinedIcon from '@material-ui/icons/SingleBedOutlined'
import FitnessCenterOutlinedIcon from '@material-ui/icons/FitnessCenterOutlined'
import FreeBreakfastOutlinedIcon from '@material-ui/icons/FreeBreakfastOutlined'
import LocalParkingOutlinedIcon from '@material-ui/icons/LocalParkingOutlined'
import SpaOutlinedIcon from '@material-ui/icons/SpaOutlined'
import WifiOutlinedIcon from '@material-ui/icons/WifiOutlined'
import PoolOutlinedIcon from '@material-ui/icons/PoolOutlined'
import PetsOutlinedIcon from '@material-ui/icons/PetsOutlined'
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined'
import RestaurantOutlinedIcon from '@material-ui/icons/RestaurantOutlined'
import AccessibleOutlinedIcon from '@material-ui/icons/AccessibleOutlined'
import AirportShuttleOutlinedIcon from '@material-ui/icons/AirportShuttleOutlined'
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined'
import EuroOutlinedIcon from '@material-ui/icons/EuroOutlined'
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined'
import BathtubOutlinedIcon from '@material-ui/icons/BathtubOutlined'
import BeachAccessOutlinedIcon from '@material-ui/icons/BeachAccessOutlined'
import RemoveCircleOutlinedIcon from '@material-ui/icons/RemoveCircleOutlined'
import RoomServiceOutlinedIcon from '@material-ui/icons/RoomServiceOutlined'
import DeckOutlinedIcon from '@material-ui/icons/DeckOutlined'
import WavesOutlinedIcon from '@material-ui/icons/WavesOutlined'
import LocalLaundryServiceOutlinedIcon from '@material-ui/icons/LocalLaundryServiceOutlined'
import RowingOutlinedIcon from '@material-ui/icons/RowingOutlined'
import LiveTvOutlinedIcon from '@material-ui/icons/LiveTvOutlined'
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined'
import EmojiFoodBeverageOutlinedIcon from '@material-ui/icons/EmojiFoodBeverageOutlined'
import LocalBarOutlinedIcon from '@material-ui/icons/LocalBarOutlined'
import VolumeOffOutlinedIcon from '@material-ui/icons/VolumeOffOutlined'
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined'
import HotTubOutlinedIcon from '@material-ui/icons/HotTubOutlined'
import ChildCareOutlinedIcon from '@material-ui/icons/ChildCareOutlined'
import WeekendOutlinedIcon from '@material-ui/icons/WeekendOutlined'
import SquareFootOutlinedIcon from '@material-ui/icons/SquareFootOutlined'
import ContactsOutlinedIcon from '@material-ui/icons/ContactsOutlined'
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined'
import WcOutlinedIcon from '@material-ui/icons/WcOutlined'
import KitchenOutlinedIcon from '@material-ui/icons/KitchenOutlined'
import { BabyBed } from '../components/IconsComp/BabayBed'
// import { BananaBoat } from '../components/IconsComp/BananaBoat'
import { Desk } from '../components/IconsComp/Desk'
import { Diving } from '../components/IconsComp/Diving'
import { Garden } from '../components/IconsComp/Garden'
import { HairDryer } from '../components/IconsComp/HairDryer'
import { Iron } from '../components/IconsComp/Iron'
import { JetSki } from '../components/IconsComp/JetSki'
// import { PersonSurfing } from '../components/IconsComp/PersonSurfing'
import { Safe } from '../components/IconsComp/Safe'
import { Skiing } from '../components/IconsComp/Skiing'
import { SmokeDetector } from '../components/IconsComp/SmokeDetector'
import { Surfing } from '../components/IconsComp/Surfing'
import { Thermometer } from '../components/IconsComp/Thermometer'
import { Toiletries } from '../components/IconsComp/Toiletries'
import { Towels } from '../components/IconsComp/Towels'
import { WaterSki } from '../components/IconsComp/WaterSki'
import { WaterSlides } from '../components/IconsComp/WaterSlides'
// import { WaterSurfing } from '../components/IconsComp/WaterSurfing'
const style = {
  width: 24,
  height: 24,
  // color: #0088BC,
  fill: '#0088BC',
  position: 'relative',
  right: 5,
  bottom: 5

}
export const searchResultsAmen = [

  {
    FacilityCode: 500,
    FacilityGroupCode: 70,
    icon: <LocalParkingOutlinedIcon style={style} />,
    name: 'parking'

  },
  {
    FacilityCode: 560,
    FacilityGroupCode: 70,
    icon: <LocalParkingOutlinedIcon style={style} />,
    name: 'parking'

  },
  {
    FacilityCode: 330,
    FacilityGroupCode: 70,
    icon: <LocalParkingOutlinedIcon style={style} />,
    name: 'parking'

  },
  {
    FacilityCode: 460,
    FacilityGroupCode: 74,
    icon: <SpaOutlinedIcon style={style} />,
    name: 'Spa'

  },
  {
    FacilityCode: 620,
    FacilityGroupCode: 74,
    icon: <SpaOutlinedIcon style={style} />,
    name: 'Spa'

  },
  {
    FacilityCode: 535,
    FacilityGroupCode: 70,
    icon: <PetsOutlinedIcon style={style} />,
    name: 'pets allowed'

  },
  {
    FacilityCode: 540,
    FacilityGroupCode: 70,
    icon: <PetsOutlinedIcon style={style} />,
    name: 'pets allowed'

  },
  {
    FacilityCode: 250,
    FacilityGroupCode: 70,
    icon: <WifiOutlinedIcon style={style} />,
    name: 'Internet'

  },
  {
    FacilityCode: 100,
    FacilityGroupCode: 60,
    icon: <WifiOutlinedIcon style={style} />,
    name: 'Internet'

  },
  {
    FacilityCode: 261,
    facilityGroupCode: 60,
    icon: <WifiOutlinedIcon style={style} />,
    name: 'Wi-fi'
  },
  {
    FacilityCode: 550,
    facilityGroupCode: 70,
    icon: <WifiOutlinedIcon style={style} />,
    name: 'Wi-fi'
  },
  {
    FacilityCode: 306,
    FacilityGroupCode: 60,
    icon: <PoolOutlinedIcon style={style} />,
    name: 'pool'

  },
  {
    FacilityCode: 326,
    FacilityGroupCode: 60,
    icon: <PoolOutlinedIcon style={style} />,
    name: 'Private Pool'

  },
  {
    FacilityCode: 363,
    FacilityGroupCode: 73,
    icon: <PoolOutlinedIcon style={style} />,
    name: 'pool'

  },
  {
    FacilityCode: 364,
    FacilityGroupCode: 73,
    icon: <PoolOutlinedIcon style={style} />,
    name: 'pool'

  },
  {
    FacilityCode: 365,
    FacilityGroupCode: 73,
    icon: <PoolOutlinedIcon style={style} />,
    name: 'pool'

  },
  {
    FacilityCode: 360,
    FacilityGroupCode: 73,
    icon: <PoolOutlinedIcon style={style} />,
    name: 'pool'

  },

  {
    FacilityCode: 361,
    FacilityGroupCode: 73,
    icon: <PoolOutlinedIcon style={style} />,
    name: 'pool'

  },
  {
    FacilityCode: 362,
    FacilityGroupCode: 73,
    icon: <PoolOutlinedIcon style={style} />,
    name: 'pool'

  },
  {
    FacilityCode: 313,
    FacilityGroupCode: 60,
    icon: <PoolOutlinedIcon style={style} />,
    name: 'pool'

  },
  {
    FacilityCode: 573,
    FacilityGroupCode: 70,
    icon: <PoolOutlinedIcon style={style} />,
    name: 'Private pool'

  },
  {
    FacilityCode: 20,
    FacilityGroupCode: 30,
    icon: <AcUnitOutlinedIcon style={style} />,
    name: 'Air conditioning'

  },
  {
    FacilityCode: 180,
    FacilityGroupCode: 60,
    icon: <AcUnitOutlinedIcon style={style} />,
    name: 'Air conditioning'

  },
  {
    FacilityCode: 470,
    FacilityGroupCode: 70,
    icon: <FitnessCenterOutlinedIcon style={style} />,
    name: 'Gym'

  },
  {
    FacilityCode: 295,
    FacilityGroupCode: 90,
    icon: <FitnessCenterOutlinedIcon style={style} />,
    name: 'Gym'

  },
  {
    FacilityCode: 308,
    FacilityGroupCode: 60,
    icon: <FitnessCenterOutlinedIcon style={style} />,
    name: 'Gym'

  },
  {
    FacilityCode: 35,
    FacilityGroupCode: 80,
    icon: <FreeBreakfastOutlinedIcon style={style} />,
    name: 'Breakfast'

  },
  {
    FacilityCode: 180,
    FacilityGroupCode: 80,
    icon: <FreeBreakfastOutlinedIcon style={style} />,
    name: 'Breakfast'

  },
  {
    FacilityCode: 264,
    FacilityGroupCode: 80,
    icon: <FreeBreakfastOutlinedIcon style={style} />,
    name: 'Breakfast'

  },
  {
    FacilityCode: 30,
    FacilityGroupCode: 80,
    icon: <FreeBreakfastOutlinedIcon style={style} />,
    name: 'Breakfast'

  },
  {
    FacilityCode: 320,
    FacilityGroupCode: 70,
    icon: <LocalParkingOutlinedIcon style={style} />,
    name: 'parking'

  }

]
export const hotelAmen = [
  ...searchResultsAmen,
  {
    FacilityCode: 312,
    FacilityGroupCode: 60,
    icon: <WbSunnyOutlinedIcon style={style} />,
    name: 'Solarium'

  },
  {
    FacilityCode: 295,
    FacilityGroupCode: 70,
    icon: <AccessibleOutlinedIcon style={style} />,
    name: 'Wheelchair-accessible'

  },

  {
    FacilityCode: 565,
    FacilityGroupCode: 85,
    icon: <CreditCardOutlinedIcon style={style} />,
    name: 'Credit card is compulsory as a deposit, no deposit in cash is accepted'

  },
  {
    FacilityCode: 562,
    FacilityGroupCode: 70,
    icon: <AirportShuttleOutlinedIcon style={style} />,
    name: 'Airport Shuttle'

  },
  {
    FacilityCode: 561,
    FacilityGroupCode: 85,
    icon: <EuroOutlinedIcon style={style} />,
    name: 'Deposit on arrival'

  },

  {
    FacilityCode: 557,
    FacilityGroupCode: 85,
    icon: <ContactsOutlinedIcon style={style} />,
    name: 'Identification card at arrival'

  },
  {
    FacilityCode: 551,
    FacilityGroupCode: 85,
    icon: <NightsStayOutlinedIcon style={style} />,
    name: 'Charges for late arrival'

  },
  {
    FacilityCode: 430,
    FacilityGroupCode: 70,
    icon: <WbSunnyOutlinedIcon style={style} />,
    name: 'Sun terrace'

  },
  {
    FacilityCode: 440,
    FacilityGroupCode: 74,
    icon: <SpaOutlinedIcon style={style} />,
    name: 'Steam bath'

  },
  {
    FacilityCode: 410,
    FacilityGroupCode: 90,
    icon: <Surfing style={style} />,
    name: 'Surfing'

  },
  {
    FacilityCode: 610,
    FacilityGroupCode: 73,
    icon: <WaterSlides style={style} />,
    name: 'WaterSlides'

  },
  {
    FacilityCode: 40,
    FacilityGroupCode: 40,
    icon: <BeachAccessOutlinedIcon style={style} />,
    name: 'Beach'

  },
  {
    FacilityCode: 330,
    FacilityGroupCode: 70,
    icon: <LocalParkingOutlinedIcon style={style} />,
    name: 'Garage'

  },
  {
    FacilityCode: 328,
    FacilityGroupCode: 60,
    icon: <BeachAccessOutlinedIcon style={style} />,
    name: 'Private Beach Area'

  },
  {
    FacilityCode: 327,
    FacilityGroupCode: 60,
    icon: <Towels style={style} />,
    name: 'Towels and bed linen at surcharge'

  },

  {
    FacilityCode: 314,
    FacilityGroupCode: 60,
    icon: <Garden style={style} />,
    name: 'Garden'

  },
  {
    FacilityCode: 310,
    FacilityGroupCode: 60,
    icon: <SpaOutlinedIcon style={style} />,
    name: 'Turkish steam bath'

  },
  {
    FacilityCode: 307,
    FacilityGroupCode: 60,
    icon: <SpaOutlinedIcon style={style} />,
    name: 'Sauna'

  },
  {
    FacilityCode: 420,
    FacilityGroupCode: 74,
    icon: <SpaOutlinedIcon style={style} />,
    name: 'Sauna'

  },
  {
    FacilityCode: 3,
    FacilityGroupCode: 85,
    icon: <RemoveCircleOutlinedIcon style={style} />,
    name: 'No hen/stag or any other parties allowed'

  },

  {
    FacilityCode: 115,
    FacilityGroupCode: 60,
    icon: <KitchenOutlinedIcon style={style} />,
    name: 'Kitchen'

  },
  {
    FacilityCode: 12,
    FacilityGroupCode: 70,
    icon: <SmokeDetector style={style} />,

    name: 'Smoke detector'

  },
  {
    FacilityCode: 110,
    FacilityGroupCode: 60,
    icon: <KitchenOutlinedIcon style={style} />,
    name: 'Kitchenette'

  },
  {
    FacilityCode: 135,
    FacilityGroupCode: 70,
    icon: <WbSunnyOutlinedIcon style={style} />,
    name: 'Terrace'

  },
  {
    FacilityCode: 140,
    FacilityGroupCode: 60,
    icon: <WavesOutlinedIcon style={style} />,
    name: 'Microwave'

  },
  {
    FacilityCode: 145,
    FacilityGroupCode: 60,
    icon: <LocalLaundryServiceOutlinedIcon style={style} />,
    name: 'Washing machine'

  },
  {
    FacilityCode: 147,
    FacilityGroupCode: 60,
    icon: <Iron style={style} />,

    name: 'Ironing set'

  },
  // {
  //   FacilityCode: 160,
  //   FacilityGroupCode: 90,
  //   icon: <BananaBoat style={style} />,
  //   name: 'Banana boating'

  // },
  {
    FacilityCode: 250,
    FacilityGroupCode: 60,
    icon: <AccessibleOutlinedIcon style={style} />,
    name: 'Wheelchair-accessible'

  },
  {
    FacilityCode: 170,
    FacilityGroupCode: 90,
    icon: <WaterSki style={style} />,
    name: 'Waterskiing'

  },
  {
    FacilityCode: 180,
    FacilityGroupCode: 90,
    icon: <JetSki style={style} />,
    name: 'Jet ski'

  },
  {
    FacilityCode: 190,
    FacilityGroupCode: 60,
    icon: <Thermometer style={style} />,
    name: 'Central heating'

  },
  {
    FacilityCode: 200,
    FacilityGroupCode: 90,
    icon: <Diving style={style} />,
    name: 'Diving'

  },
  {
    FacilityCode: 203,
    FacilityGroupCode: 85,
    icon: <PeopleAltOutlinedIcon style={style} />,
    name: 'Only Adults'

  },
  {
    FacilityCode: 210,
    FacilityGroupCode: 90,
    icon: <Surfing style={style} />,
    name: 'Windsurfing'

  },
  {
    FacilityCode: 240,
    FacilityGroupCode: 60,
    icon: <WbSunnyOutlinedIcon style={style} />,
    name: 'Terrace'

  },
  {
    FacilityCode: 240,
    FacilityGroupCode: 90,
    icon: <RowingOutlinedIcon style={style} />,
    name: 'Canoeing'

  },
  {
    FacilityCode: 280,
    FacilityGroupCode: 70,
    icon: <LocalLaundryServiceOutlinedIcon style={style} />,
    name: 'Laundry service'

  },
  {
    FacilityCode: 525,
    FacilityGroupCode: 70,
    icon: <RoomServiceOutlinedIcon style={style} />,
    name: 'Bellboy service'

  }

]
export const roomsAmen = [
  {
    FacilityCode: 55,
    FacilityGroupCode: 60,
    icon: <LiveTvOutlinedIcon style={style} />,
    name: 'TV'

  },
  {
    FacilityCode: 288,
    FacilityGroupCode: 60,
    icon: <LiveTvOutlinedIcon style={style} />,
    name: 'Satellite TV '

  },
  {
    FacilityCode: 289,
    FacilityGroupCode: 60,
    icon: <LiveTvOutlinedIcon style={style} />,
    name: 'Cable TV'

  },
  {
    FacilityCode: 993,
    FacilityGroupCode: 61,
    icon: 20,
    name: 'Bunk beds'

  },
  {
    FacilityCode: 993,
    FacilityGroupCode: 62,
    icon: 20,
    name: 'Bunk beds'

  },
  {
    FacilityCode: 998,
    FacilityGroupCode: 10,
    icon: 17,
    name: 'YES Connecting rooms'

  },
  {
    FacilityCode: 95,
    FacilityGroupCode: 10,
    icon: 2,
    name: 'Junior suites'

  },
  {
    FacilityCode: 992,
    FacilityGroupCode: 61,
    icon: 20,
    name: 'Rollaways on demand'

  },
  {
    FacilityCode: 992,
    FacilityGroupCode: 62,
    icon: 20,
    name: 'Rollaways on demand'

  },
  {
    FacilityCode: 90,
    FacilityGroupCode: 10,
    icon: 2,
    name: 'Double rooms'

  },
  {
    FacilityCode: 80,
    FacilityGroupCode: 10,
    icon: 2,
    name: 'Single rooms'

  },
  {
    FacilityCode: 299,
    FacilityGroupCode: 60,
    icon: <WcOutlinedIcon style={style} />,
    name: 'Shared bathroom'

  },
  {
    FacilityCode: 275,
    FacilityGroupCode: 60,
    icon: 19,
    name: 'Extra beds on demand'

  },
  {
    FacilityCode: 276,
    FacilityGroupCode: 60,
    icon: <Toiletries style={style} />,
    name: 'Toiletries'

  },
  {
    FacilityCode: 264,
    FacilityGroupCode: 60,
    icon: <BabyBed style={style} />,
    name: 'Cot available on demand'

  },

  {
    FacilityCode: 1,
    FacilityGroupCode: 61,
    icon: <SingleBedOutlinedIcon style={style} />,
    name: 'Single bed 90-130 width'

  },

  {
    FacilityCode: 1,
    FacilityGroupCode: 62,
    icon: <SingleBedOutlinedIcon style={style} />,
    name: 'Single bed 90-130 width'

  },
  {
    FacilityCode: 10,
    FacilityGroupCode: 60,
    icon: <WcOutlinedIcon style={style} />,
    name: 'Bathroom'

  },
  {
    FacilityCode: 100,
    FacilityGroupCode: 10,
    icon: 2,
    name: 'Suites'

  },
  {
    FacilityCode: 11,
    FacilityGroupCode: 60,
    icon: <WcOutlinedIcon style={style} />,
    name: 'Private external bathroom'
  },

  {
    FacilityCode: 124,
    FacilityGroupCode: 10,
    icon: 2,
    name: 'Disability-friendly rooms'

  },
  {
    FacilityCode: 126,
    FacilityGroupCode: 10,
    icon: 2,
    name: 'Triple rooms'

  },
  {
    FacilityCode: 127,
    FacilityGroupCode: 10,
    icon: 2,
    name: 'Quadruple rooms'

  },
  {
    FacilityCode: 128,
    FacilityGroupCode: 10,
    icon: 2,
    name: 'Executive rooms'

  },
  {
    FacilityCode: 129,
    FacilityGroupCode: 10,
    icon: 2,
    name: 'Superior rooms'

  },
  {
    FacilityCode: 120,
    FacilityGroupCode: 60,
    icon: <LocalBarOutlinedIcon style={style} />,
    name: 'Minibar'

  },
  {
    FacilityCode: 131,
    FacilityGroupCode: 10,
    icon: 2,
    name: 'Family rooms'

  },
  {
    FacilityCode: 132,
    FacilityGroupCode: 10,
    icon: 2,
    name: 'Twin rooms'

  },
  {
    FacilityCode: 143,
    FacilityGroupCode: 60,
    icon: <EmojiFoodBeverageOutlinedIcon style={style} />,
    name: 'Tea and coffee making facilities '

  },
  {
    FacilityCode: 150,
    FacilityGroupCode: 61,
    icon: <KingBedOutlinedIcon style={style} />,
    name: 'Double bed 131-150 width'

  },
  {
    FacilityCode: 150,
    FacilityGroupCode: 62,
    icon: <KingBedOutlinedIcon style={style} />,
    name: 'Double bed 131-150 width'

  },
  {
    FacilityCode: 155,
    FacilityGroupCode: 61,
    icon: <KingBedOutlinedIcon style={style} />,
    name: 'King-size bed 150-183 width'

  },
  {
    FacilityCode: 155,
    FacilityGroupCode: 62,
    icon: <KingBedOutlinedIcon style={style} />,
    name: 'King-size bed 150-183 width'

  },
  {
    FacilityCode: 200,
    FacilityGroupCode: 60,
    icon: <Safe style={style} />,
    name: 'Safe'

  },
  {
    FacilityCode: 260,
    FacilityGroupCode: 60,
    icon: <AccessibleOutlinedIcon style={style} />,
    name: 'Disability-friendly bathroom'

  },
  {
    FacilityCode: 279,
    FacilityGroupCode: 60,
    icon: <Desk style={style} />,
    name: 'Desk'

  },
  {
    FacilityCode: 284,
    FacilityGroupCode: 61,
    icon: <WeekendOutlinedIcon style={style} />,
    name: 'Sofa bed'

  },
  {
    FacilityCode: 284,
    FacilityGroupCode: 62,
    icon: <WeekendOutlinedIcon style={style} />,
    name: 'Sofa bed'

  },
  {
    FacilityCode: 294,
    FacilityGroupCode: 61,
    icon: <KingBedOutlinedIcon style={style} />,
    name: 'Queen-size bed 150-154 width'

  },
  {
    FacilityCode: 294,
    FacilityGroupCode: 62,
    icon: <KingBedOutlinedIcon style={style} />,
    name: 'Queen-size bed 150-154 width'

  },
  {
    FacilityCode: 295,
    FacilityGroupCode: 60,
    icon: <SquareFootOutlinedIcon style={style} />,
    name: 'Room size (sqm)'

  },

  {
    FacilityCode: 30,
    FacilityGroupCode: 60,
    icon: <BathtubOutlinedIcon style={style} />,
    name: 'Bathtub'

  },
  {
    FacilityCode: 302,
    FacilityGroupCode: 60,
    icon: <ChildCareOutlinedIcon style={style} />,
    name: 'Children share the bed with parents'

  },
  {
    FacilityCode: 305,
    FacilityGroupCode: 60,
    icon: <HotTubOutlinedIcon style={style} />,
    name: 'Hot tub'

  },
  {
    FacilityCode: 410,
    FacilityGroupCode: 74,
    icon: <HotTubOutlinedIcon style={style} />,
    name: 'Hot tub'

  },
  {
    FacilityCode: 56,
    FacilityGroupCode: 10,
    icon: 17,
    name: 'Connecting rooms'

  },
  {
    FacilityCode: 303,
    FacilityGroupCode: 60,
    icon: <VolumeOffOutlinedIcon style={style} />,
    name: 'Soundproof room'

  },
  {
    FacilityCode: 274,
    FacilityGroupCode: 60,
    icon: <SportsEsportsOutlinedIcon style={style} />,
    name: 'Video games console"'

  }

]
