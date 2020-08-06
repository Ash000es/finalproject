import React, { Component } from 'react'
import windsurfing from '../assets/windsurfing.svg'
import safebox from '../assets/safebox.svg'
import heating from '../assets/thermometer.svg'
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
import surfing from '../assets/surfing.svg'
import waterski from '../assets/waterski.svg'
import smokedetector from '../assets/smokedetector.svg'
import towels from '../assets/towels.svg'
import personsurfing from '../assets/personsurfing.svg'
import jetski from '../assets/jetski.svg'
import iron from '../assets/iron.svg'
import garden from '../assets/garden.svg'
import hairdryer from '../assets/hairdryer.svg'
import babybed from '../assets/babybed.svg'
import bananaboat from '../assets/bananaboat.svg'
import desk from '../assets/desk.svg'
import toiletries from '../assets/toiletries.svg'
import waterslide from '../assets/waterslide.svg'
import diving from '../assets/diving.svg'
import single from '../assets/single.svg'

export const searchResultsAmen = [

  {
    FacilityCode: 500,
    FacilityGroupCode: 70,
    icon: <LocalParkingOutlinedIcon />,
    name: 'parking'

  },
  {
    FacilityCode: 560,
    FacilityGroupCode: 70,
    icon: <LocalParkingOutlinedIcon />,
    name: 'parking'

  },
  {
    FacilityCode: 330,
    FacilityGroupCode: 70,
    icon: <LocalParkingOutlinedIcon />,
    name: 'parking'

  },
  {
    FacilityCode: 460,
    FacilityGroupCode: 74,
    icon: <SpaOutlinedIcon />,
    name: 'Spa'

  },
  {
    FacilityCode: 620,
    FacilityGroupCode: 74,
    icon: <SpaOutlinedIcon />,
    name: 'Spa'

  },
  {
    FacilityCode: 535,
    FacilityGroupCode: 70,
    icon: <PetsOutlinedIcon />,
    name: 'pets allowed'

  },
  {
    FacilityCode: 540,
    FacilityGroupCode: 70,
    icon: <PetsOutlinedIcon />,
    name: 'pets allowed'

  },
  {
    FacilityCode: 250,
    FacilityGroupCode: 70,
    icon: <WifiOutlinedIcon />,
    name: 'Internet'

  },
  {
    FacilityCode: 100,
    FacilityGroupCode: 60,
    icon: <WifiOutlinedIcon />,
    name: 'Internet'

  },
  {
    FacilityCode: 261,
    facilityGroupCode: 60,
    icon: <WifiOutlinedIcon />,
    name: 'Wi-fi'
  },
  {
    FacilityCode: 550,
    facilityGroupCode: 70,
    icon: <WifiOutlinedIcon />,
    name: 'Wi-fi'
  },
  {
    FacilityCode: 306,
    FacilityGroupCode: 60,
    icon: <PoolOutlinedIcon />,
    name: 'pool'

  },
  {
    FacilityCode: 326,
    FacilityGroupCode: 60,
    icon: <PoolOutlinedIcon />,
    name: 'Private Pool'

  },
  {
    FacilityCode: 363,
    FacilityGroupCode: 73,
    icon: <PoolOutlinedIcon />,
    name: 'pool'

  },
  {
    FacilityCode: 364,
    FacilityGroupCode: 73,
    icon: <PoolOutlinedIcon />,
    name: 'pool'

  },
  {
    FacilityCode: 365,
    FacilityGroupCode: 73,
    icon: <PoolOutlinedIcon />,
    name: 'pool'

  },
  {
    FacilityCode: 360,
    FacilityGroupCode: 73,
    icon: <PoolOutlinedIcon />,
    name: 'pool'

  },

  {
    FacilityCode: 361,
    FacilityGroupCode: 73,
    icon: <PoolOutlinedIcon />,
    name: 'pool'

  },
  {
    FacilityCode: 362,
    FacilityGroupCode: 73,
    icon: <PoolOutlinedIcon />,
    name: 'pool'

  },
  {
    FacilityCode: 313,
    FacilityGroupCode: 60,
    icon: <PoolOutlinedIcon />,
    name: 'pool'

  },
  {
    FacilityCode: 573,
    FacilityGroupCode: 70,
    icon: <PoolOutlinedIcon />,
    name: 'Private pool'

  },
  {
    FacilityCode: 20,
    FacilityGroupCode: 30,
    icon: <AcUnitOutlinedIcon />,
    name: 'Air conditioning'

  },
  {
    FacilityCode: 180,
    FacilityGroupCode: 60,
    icon: <AcUnitOutlinedIcon />,
    name: 'Air conditioning'

  },
  {
    FacilityCode: 470,
    FacilityGroupCode: 70,
    icon: <FitnessCenterOutlinedIcon />,
    name: 'Gym'

  },
  {
    FacilityCode: 295,
    FacilityGroupCode: 90,
    icon: <FitnessCenterOutlinedIcon />,
    name: 'Gym'

  },
  {
    FacilityCode: 308,
    FacilityGroupCode: 60,
    icon: <FitnessCenterOutlinedIcon />,
    name: 'Gym'

  },
  {
    FacilityCode: 35,
    FacilityGroupCode: 80,
    icon: <FreeBreakfastOutlinedIcon />,
    name: 'Breakfast'

  },
  {
    FacilityCode: 180,
    FacilityGroupCode: 80,
    icon: <FreeBreakfastOutlinedIcon />,
    name: 'Breakfast'

  },
  {
    FacilityCode: 264,
    FacilityGroupCode: 80,
    icon: <FreeBreakfastOutlinedIcon />,
    name: 'Breakfast'

  },
  {
    FacilityCode: 30,
    FacilityGroupCode: 80,
    icon: <FreeBreakfastOutlinedIcon />,
    name: 'Breakfast'

  },
  {
    FacilityCode: 320,
    FacilityGroupCode: 70,
    icon: <LocalParkingOutlinedIcon />,
    name: 'parking'

  }

]
export const hotelAmen = [
  ...searchResultsAmen,
  {
    FacilityCode: 312,
    FacilityGroupCode: 60,
    icon: <WbSunnyOutlinedIcon />,
    name: 'Solarium'

  },
  {
    FacilityCode: 295,
    FacilityGroupCode: 70,
    icon: <AccessibleOutlinedIcon />,
    name: 'Wheelchair-accessible'

  },

  {
    FacilityCode: 565,
    FacilityGroupCode: 85,
    icon: <CreditCardOutlinedIcon />,
    name: 'Credit card is compulsory as a deposit, no deposit in cash is accepted'

  },
  {
    FacilityCode: 562,
    FacilityGroupCode: 70,
    icon: <AirportShuttleOutlinedIcon />,
    name: 'Airport Shuttle'

  },
  {
    FacilityCode: 561,
    FacilityGroupCode: 85,
    icon: <EuroOutlinedIcon />,
    name: 'Deposit on arrival'

  },

  {
    FacilityCode: 557,
    FacilityGroupCode: 85,
    icon: <ContactsOutlinedIcon />,
    name: 'Identification card at arrival'

  },
  {
    FacilityCode: 551,
    FacilityGroupCode: 85,
    icon: <NightsStayOutlinedIcon />,
    name: 'Charges for late arrival'

  },
  {
    FacilityCode: 430,
    FacilityGroupCode: 70,
    icon: <WbSunnyOutlinedIcon />,
    name: 'Sun terrace'

  },
  {
    FacilityCode: 440,
    FacilityGroupCode: 74,
    icon: <SpaOutlinedIcon />,
    name: 'Steam bath'

  },
  {
    FacilityCode: 410,
    FacilityGroupCode: 90,
    icon: <img src={surfing} alt='surfing' style={{ width: 24, height: 24 }} />,
    name: 'Surfing'

  },
  {
    FacilityCode: 610,
    FacilityGroupCode: 73,
    icon: <img src={waterslide} alt='surfing' style={{ width: 24, height: 24 }} />,
    name: 'WaterSlides'

  },
  {
    FacilityCode: 40,
    FacilityGroupCode: 40,
    icon: <BeachAccessOutlinedIcon />,
    name: 'Beach'

  },
  {
    FacilityCode: 330,
    FacilityGroupCode: 70,
    icon: <LocalParkingOutlinedIcon />,
    name: 'Garage'

  },
  {
    FacilityCode: 328,
    FacilityGroupCode: 60,
    icon: <BeachAccessOutlinedIcon />,
    name: 'Private Beach Area'

  },
  {
    FacilityCode: 327,
    FacilityGroupCode: 60,
    icon: <img src={towels} alt='surfing' style={{ width: 24, height: 24 }} />,
    name: 'Towels and bed linen at surcharge'

  },

  {
    FacilityCode: 314,
    FacilityGroupCode: 60,
    icon: <DeckOutlinedIcon />,
    name: 'Garden'

  },
  {
    FacilityCode: 310,
    FacilityGroupCode: 60,
    icon: <SpaOutlinedIcon />,
    name: 'Turkish steam bath'

  },
  {
    FacilityCode: 307,
    FacilityGroupCode: 60,
    icon: <SpaOutlinedIcon />,
    name: 'Sauna'

  },
  {
    FacilityCode: 420,
    FacilityGroupCode: 74,
    icon: <SpaOutlinedIcon />,
    name: 'Sauna'

  },
  {
    FacilityCode: 3,
    FacilityGroupCode: 85,
    icon: <RemoveCircleOutlinedIcon />,
    name: 'No hen/stag or any other parties allowed'

  },

  {
    FacilityCode: 115,
    FacilityGroupCode: 60,
    icon: <KitchenOutlinedIcon />,
    name: 'Kitchen'

  },
  {
    FacilityCode: 12,
    FacilityGroupCode: 70,
    icon: <img src={smokedetector} alt='surfing' style={{ width: 24, height: 24 }} />,
    name: 'Smoke detector'

  },
  {
    FacilityCode: 110,
    FacilityGroupCode: 60,
    icon: <KitchenOutlinedIcon />,
    name: 'Kitchenette'

  },
  {
    FacilityCode: 135,
    FacilityGroupCode: 70,
    icon: <WbSunnyOutlinedIcon />,
    name: 'Terrace'

  },
  {
    FacilityCode: 140,
    FacilityGroupCode: 60,
    icon: <WavesOutlinedIcon />,
    name: 'Microwave'

  },
  {
    FacilityCode: 145,
    FacilityGroupCode: 60,
    icon: <LocalLaundryServiceOutlinedIcon />,
    name: 'Washing machine'

  },
  {
    FacilityCode: 147,
    FacilityGroupCode: 60,
    icon: <img src={iron} alt='surfing' style={{ width: 24, height: 24 }} />,
    name: 'Ironing set'

  },
  {
    FacilityCode: 160,
    FacilityGroupCode: 90,
    icon: <img src={bananaboat} alt='surfing' style={{ width: 24, height: 24 }} />,
    name: 'Banana boating'

  },
  {
    FacilityCode: 250,
    FacilityGroupCode: 60,
    icon: <AccessibleOutlinedIcon />,
    name: 'Wheelchair-accessible'

  },
  {
    FacilityCode: 170,
    FacilityGroupCode: 90,
    icon: <img src={waterski} alt='surfing' style={{ width: 24, height: 24 }} />,
    name: 'Waterskiing'

  },
  {
    FacilityCode: 180,
    FacilityGroupCode: 90,
    icon: <img src={jetski} alt='surfing' style={{ width: 24, height: 24 }} />,
    name: 'Jet ski'

  },
  {
    FacilityCode: 190,
    FacilityGroupCode: 60,
    icon: <img src={heating} alt='surfing' style={{ width: 24, height: 24 }} />,
    name: 'Central heating'

  },
  {
    FacilityCode: 200,
    FacilityGroupCode: 90,
    icon: <img src={diving} alt='surfing' style={{ width: 24, height: 24 }} />,
    name: 'Diving'

  },
  {
    FacilityCode: 203,
    FacilityGroupCode: 85,
    icon: <PeopleAltOutlinedIcon />,
    name: 'Only Adults'

  },
  {
    FacilityCode: 210,
    FacilityGroupCode: 90,
    icon: <img src={windsurfing} alt='surfing' style={{ width: 24, height: 24 }} />,
    name: 'Windsurfing'

  },
  {
    FacilityCode: 240,
    FacilityGroupCode: 60,
    icon: <WbSunnyOutlinedIcon />,
    name: 'Terrace'

  },
  {
    FacilityCode: 240,
    FacilityGroupCode: 90,
    icon: <RowingOutlinedIcon />,
    name: 'Canoeing'

  },
  {
    FacilityCode: 280,
    FacilityGroupCode: 70,
    icon: <LocalLaundryServiceOutlinedIcon />,
    name: 'Laundry service'

  },
  {
    FacilityCode: 525,
    FacilityGroupCode: 70,
    icon: <RoomServiceOutlinedIcon />,
    name: 'Bellboy service'

  }

]
export const roomsAmen = [
  {
    FacilityCode: 55,
    FacilityGroupCode: 60,
    icon: <LiveTvOutlinedIcon />,
    name: 'TV'

  },
  {
    FacilityCode: 288,
    FacilityGroupCode: 60,
    icon: <LiveTvOutlinedIcon />,
    name: 'Satellite TV '

  },
  {
    FacilityCode: 289,
    FacilityGroupCode: 60,
    icon: <LiveTvOutlinedIcon />,
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
    icon: <WcOutlinedIcon />,
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
    icon: <img src={toiletries} alt='surfing' style={{ width: 24, height: 24 }} />,
    name: 'Toiletries'

  },
  {
    FacilityCode: 264,
    FacilityGroupCode: 60,
    icon: <img src={babybed} alt='surfing' style={{ width: 24, height: 24 }} />,
    name: 'Cot on demand'

  },

  {
    FacilityCode: 1,
    FacilityGroupCode: 61,
    icon: <SingleBedOutlinedIcon />,
    name: 'Single bed 90-130 width'

  },

  {
    FacilityCode: 1,
    FacilityGroupCode: 62,
    icon: <SingleBedOutlinedIcon />,
    name: 'Single bed 90-130 width'

  },
  {
    FacilityCode: 10,
    FacilityGroupCode: 60,
    icon: <WcOutlinedIcon />,
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
    icon: <WcOutlinedIcon />,
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
    icon: <LocalBarOutlinedIcon />,
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
    icon: <EmojiFoodBeverageOutlinedIcon />,
    name: 'Tea and coffee making facilities '

  },
  {
    FacilityCode: 150,
    FacilityGroupCode: 61,
    icon: <KingBedOutlinedIcon />,
    name: 'Double bed 131-150 width'

  },
  {
    FacilityCode: 150,
    FacilityGroupCode: 62,
    icon: <KingBedOutlinedIcon />,
    name: 'Double bed 131-150 width'

  },
  {
    FacilityCode: 155,
    FacilityGroupCode: 61,
    icon: <KingBedOutlinedIcon />,
    name: 'King-size bed 150-183 width'

  },
  {
    FacilityCode: 155,
    FacilityGroupCode: 62,
    icon: <KingBedOutlinedIcon />,
    name: 'King-size bed 150-183 width'

  },
  {
    FacilityCode: 200,
    FacilityGroupCode: 60,
    icon: <img src={safebox} alt='surfing' style={{ width: 24, height: 24 }} />,
    name: 'Safe'

  },
  {
    FacilityCode: 260,
    FacilityGroupCode: 60,
    icon: <AccessibleOutlinedIcon />,
    name: 'Disability-friendly bathroom'

  },
  {
    FacilityCode: 279,
    FacilityGroupCode: 60,
    icon: <img src={desk} alt='surfing' style={{ width: 24, height: 24 }} />,
    name: 'Desk'

  },
  {
    FacilityCode: 284,
    FacilityGroupCode: 61,
    icon: <WeekendOutlinedIcon />,
    name: 'Sofa bed'

  },
  {
    FacilityCode: 284,
    FacilityGroupCode: 62,
    icon: <WeekendOutlinedIcon />,
    name: 'Sofa bed'

  },
  {
    FacilityCode: 294,
    FacilityGroupCode: 61,
    icon: <KingBedOutlinedIcon />,
    name: 'Queen-size bed 150-154 width'

  },
  {
    FacilityCode: 294,
    FacilityGroupCode: 62,
    icon: <KingBedOutlinedIcon />,
    name: 'Queen-size bed 150-154 width'

  },
  {
    FacilityCode: 295,
    FacilityGroupCode: 60,
    icon: <SquareFootOutlinedIcon />,
    name: 'Room size (sqm)'

  },

  {
    FacilityCode: 30,
    FacilityGroupCode: 60,
    icon: <BathtubOutlinedIcon />,
    name: 'Bathtub'

  },
  {
    FacilityCode: 302,
    FacilityGroupCode: 60,
    icon: <ChildCareOutlinedIcon />,
    name: 'Children share the bed with parents'

  },
  {
    FacilityCode: 305,
    FacilityGroupCode: 60,
    icon: <HotTubOutlinedIcon />,
    name: 'Hot tub'

  },
  {
    FacilityCode: 410,
    FacilityGroupCode: 74,
    icon: <HotTubOutlinedIcon />,
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
    icon: <VolumeOffOutlinedIcon />,
    name: 'Soundproof room'

  },
  {
    FacilityCode: 274,
    FacilityGroupCode: 60,
    icon: <SportsEsportsOutlinedIcon />,
    name: 'Video games console"'

  }

]
