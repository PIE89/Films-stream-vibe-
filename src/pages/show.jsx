import Seasons from "@/components/Seasons"
import ShowBanner from "@/components/ShowBanner"
import MovieDetails from "@/sections/MovieDetails"

export const metadata = {
  title: "Show - Stranger Things",
}

export default function () {
  return (
    <>
      <ShowBanner />
      <MovieDetails seasons={<Seasons />} />
    </>
  )
}
