function createRandomValue(min, max) {
  return min + Math.random() * (max - min)
}

const customizeWinaData = (wine, type) => {
  const { winery, wine: name, rating, location, image } = wine

  const [country, region] = location.split("·")
  const isBestSeller = Math.random() >= 0.9 // 10% of wines
  const isDiscounted = Math.random() >= 0.8 // 20% of wines
  const discountPercentage = Math.floor(createRandomValue(10, 50))

  const newWineData = {
    winery,
    name,
    rating: {
      average: createRandomValue(3, 5).toFixed(),
      reviews: rating.reviews,
    },
    location: {
      country,
      region,
    },
    price: createRandomValue(30, 100).toFixed(2, 10),
    type,
    image,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    isBestSeller,
    isDiscounted,
    discountPercentage,
  }

  return newWineData
}

export default customizeWinaData
