import { Sys } from "../../../types/contentful"

export interface ICar {
  id: string
  title: string
  price: number
  photo: string
}

export interface CarAPIResponse {
  sys: Sys
  title: string
  price: number
  photo: string
}
