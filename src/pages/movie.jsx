import MovieBanner from "@/sections/MovieBanner"
import MovieDetails from "@/sections/MovieDetails"

export const metadata = {
  title: "Movie",
}

export default () => {
  return (
    <>
      <MovieBanner />
      <MovieDetails />
    </>
  )
}
