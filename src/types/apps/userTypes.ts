// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

export type UsersType = {
  _id: string | number
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  Profession: string
  role: string
  status: string
  avatar: string
  avatarColor?: ThemeColor
}

export type ProjectListDataType = {
  id: string | number
  img: string
  hours: string
  totalTask: string
  projectType: string
  projectTitle: string
  progressValue: number
  progressColor: ThemeColor
}
