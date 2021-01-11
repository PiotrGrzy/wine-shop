import { useState, useEffect } from "react"

export function useMedia(query) {
  const [matches, setMatches] = useState(window.matchMedia(query).matches)

  useEffect(() => {
    const handleWindowResize = () => {
      const media = window.matchMedia(query)
      if (media.matches !== matches) setMatches(media.matches)
    }
    window.addEventListener("resize", handleWindowResize)
    return () => window.removeEventListener("resize", handleWindowResize)
  }, [matches, query])

  return matches
}
