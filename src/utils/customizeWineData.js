function createRandomPrice(min, max) {
  const randomPrice = min + Math.random() * (max - min)
  return randomPrice.toFixed(2, 10)
}

const customizeWinaData = (wine, type) => {
  const { winery, wine: name, rating, location, image } = wine

  const [country, region] = location.split("·")

  const newWineData = {
    winery,
    name,
    rating: {
      average: (Math.random() * 5).toFixed(2, 10),
      reviews: rating.reviews,
    },
    location: {
      country,
      region,
    },
    price: createRandomPrice(30, 100),
    type,
    image,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  }

  return newWineData
}

export default customizeWinaData
