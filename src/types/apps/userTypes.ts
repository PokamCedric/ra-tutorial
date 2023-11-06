// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

export type UsersType = {
  _id: string | number
  role: string
  email: string
  status: string
  avatar: string
  company: string
  address: string
  phone: string
  lastName: string
  firstName: string
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
