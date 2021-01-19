import { useState, useEffect } from "react"

export function useMedia(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches
    }
    return true
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleWindowResize = () => {
        const media = window.matchMedia(query)
        if (media.matches !== matches) setMatches(media.matches)
      }
      window.addEventListener("resize", handleWindowResize)
      return () => window.removeEventListener("resize", handleWindowResize)
    }
  }, [matches, query])

  return matches
}
