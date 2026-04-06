import MovieBannerCard from "../MovieBannerCard"

const ShowBanner = () => {
  const titleID = "show-banner-title"

  return (
    <section className="container" aria-labelledby={titleID}>
      <MovieBannerCard
        title="Stranger Things"
        description="When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl."
        titleID={titleID}
        imgSrc="./src/assets/images/movie-banner/3.jpg"
        isSmallPaddingY
      />
    </section>
  )
}

export default ShowBanner
