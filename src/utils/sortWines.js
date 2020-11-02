import {
  NAME_ASC,
  NAME_DES,
  PRICE_ASC,
  PRICE_DES,
} from "../consts/sortingOptions"

export function sortAsc(arr, field) {
  return arr.sort(function (a, b) {
    if (a[field] > b[field]) {
      return 1
    }
    if (b[field] > a[field]) {
      return -1
    }
    return 0
  })
}

export function sortDesc(arr, field) {
  return arr.sort(function (a, b) {
    if (a[field] > b[field]) {
      return -1
    }
    if (b[field] > a[field]) {
      return 1
    }
    return 0
  })
}

export const sortWines = (sortBy, wines) => {
  switch (sortBy) {
    case NAME_DES:
      return sortDesc(wines, "name")

    case NAME_ASC:
      return sortAsc(wines, "name")

    case PRICE_DES:
      return sortDesc(wines, "price")

    case PRICE_ASC:
      return sortAsc(wines, "price")

    default:
      return wines
  }
}
