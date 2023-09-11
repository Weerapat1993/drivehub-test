import { useQuery } from '@apollo/client'
import { QUERY_CAR_COLLECTION } from '../graphql/query'
import { CarAPIResponse, ICar } from '../types/car'

export interface Filter {
  keyword: string,
  sort: string,
}

const filterCar = (filter: Filter) => 
  (item: CarAPIResponse) => 
    item.title.toLowerCase().includes(filter.keyword.toLowerCase())

export const sortCar = (filter: Filter) =>
  ((a: ICar, b: ICar) => {
    switch(filter.sort) {
      case 'asc':
        return a.price - b.price
      case 'desc':
        return b.price - a.price
    }
  })

export const useCarLists = ({ filter }: { filter: Filter }) => {
  const { data, loading, error } = useQuery(QUERY_CAR_COLLECTION)
  const list: ICar[] = (data?.carCollection?.items || [])
    .filter(filterCar(filter))
    .map((item: CarAPIResponse) => ({
      id: item?.sys?.id,
      title: item?.title,
      price: item?.price,
      photo: item?.photo,
    }))
  // const isSort = Boolean(filter.sort)
  return { data, loading, error, list}
}