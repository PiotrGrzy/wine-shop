import capitalizeFirstLetter from "./capitalizeFirstLetter"
export const normalizeWineType = type => {
  if (type === "reds") {
    return capitalizeFirstLetter("red")
  } else if (type === "whites") {
    return capitalizeFirstLetter("white")
  } else {
    return capitalizeFirstLetter(type)
  }
}
