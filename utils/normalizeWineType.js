const normalizeWineType = type => {
  if (type === "reds") {
    return "red"
  } else if (type === "whites") {
    return "white"
  } else {
    return type
  }
}

module.exports = normalizeWineType
