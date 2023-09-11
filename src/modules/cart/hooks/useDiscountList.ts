import { useQuery } from '@apollo/client'
import { QUERY_DISCOUNT_LIST } from '../graphql/query'
import { DiscountAPIResponse, IDiscount } from '../types/discount'

export const useCarLists = () => {
  const { data, loading, error } = useQuery(QUERY_DISCOUNT_LIST)
  const list: IDiscount[] = (data?.carCollection?.items || []).map((item: DiscountAPIResponse) => ({
      id: item?.sys?.id,
      code: item?.code,
      amount: item?.amount,
  }))
  return { data, loading, error, list }
}