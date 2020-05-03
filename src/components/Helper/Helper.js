import { MyProvider, ProjectContext } from '../Provider/Provider'
const { project, setProject } = useContext(ProjectContext)

// this function to match each room from bookingAPI to the right image from contentAPI, looping going through two arrays of objects.
// this function is used in file thumbilCarsoel.js
export const getRoomPicture = () => {
  const [rooms] = project.results.hotels.rooms
  const [images] = project.hotels.images

  for (const room of rooms) {
    for (const image of images) {
      if (room.code === image.roomCode) return image.path
      break
    }
  }
}
