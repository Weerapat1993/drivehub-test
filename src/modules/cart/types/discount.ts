import { Sys } from "../../../types/contentful"

export interface IDiscount {
  id: string
  code: string
  amount: number
}

export interface DiscountAPIResponse {
  sys: Sys
  amount: number
  code: string
}
