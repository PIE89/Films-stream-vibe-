import { Button } from "@/components/Button"
import PersonCard from "@/components/PersonCard"
import ReviewCard from "@/components/ReviewCard"
import Slider from "@/components/Slider"
import SliderNavigation from "@/components/Slider/components/SliderNavigation"
import "MovieDetails.scss"

const MovieDetails = () => {
  const titleId = "movie-details"
  const castSliderNavigationId = "movie-card-slider-navigation"
  const castItems = [
    {
      imgSrc: "./src/assets/images/people/cast.jpg",
      imgAlt: "Ivan Popov",
    },
    {
      imgSrc: "./src/assets/images/people/cast.jpg",
      imgAlt: "Ivan Popov",
    },
    {
      imgSrc: "./src/assets/images/people/cast.jpg",
      imgAlt: "Ivan Popov",
    },
    {
      imgSrc: "./src/assets/images/people/cast.jpg",
      imgAlt: "Ivan Popov",
    },
    {
      imgSrc: "./src/assets/images/people/cast.jpg",
      imgAlt: "Ivan Popov",
    },
    {
      imgSrc: "./src/assets/images/people/cast.jpg",
      imgAlt: "Ivan Popov",
    },
    {
      imgSrc: "./src/assets/images/people/cast.jpg",
      imgAlt: "Ivan Popov",
    },
    {
      imgSrc: "./src/assets/images/people/cast.jpg",
      imgAlt: "Ivan Popov",
    },
    {
      imgSrc: "./src/assets/images/people/cast.jpg",
      imgAlt: "Ivan Popov",
    },
  ]

  const reviewItems = [
    {
      name: "Aniket Roy",
      subtitle: "From India",
      description:
        "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
      ratingValue: 4.5,
    },
    {
      name: "Swaraj",
      subtitle: "From India",
      description:
        "A restless king promises his lands to the local tribals in exchange of a stone (Panjurli, a deity of Keradi Village) wherein he finds solace and peace of mind.",
      ratingValue: 5,
    },
    {
      name: "Aniket Roy",
      subtitle: "From India",
      description:
        "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
      ratingValue: 4.5,
    },
    {
      name: "Swaraj",
      subtitle: "From India",
      description:
        "A restless king promises his lands to the local tribals in exchange of a stone (Panjurli, a deity of Keradi Village) wherein he finds solace and peace of mind.",
      ratingValue: 5,
    },
    {
      name: "Aniket Roy",
      subtitle: "From India",
      description:
        "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
      ratingValue: 4.5,
    },
    {
      name: "Swaraj",
      subtitle: "From India",
      description:
        "A restless king promises his lands to the local tribals in exchange of a stone (Panjurli, a deity of Keradi Village) wherein he finds solace and peace of mind.",
      ratingValue: 5,
    },
    {
      name: "Aniket Roy",
      subtitle: "From India",
      description:
        "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
      ratingValue: 4.5,
    },
    {
      name: "Swaraj",
      subtitle: "From India",
      description:
        "A restless king promises his lands to the local tribals in exchange of a stone (Panjurli, a deity of Keradi Village) wherein he finds solace and peace of mind.",
      ratingValue: 5,
    },
  ]

  return (
    <section
      className="movie-details container"
      title=""
      aria-labelledby={titleId}
    >
      <h2 className="visually-hidden" id={titleId}>
        Detailed movie information
      </h2>

      <div className="movie-details__main">
        <div className="movie-details__panel">
          <h3 className="movie-details__title">Description</h3>
          <div className="movie-details__description">
            <p>
              A fiery young man clashes with an unflinching forest officer in a
              south Indian village where spirituality, fate and folklore rule
              the lands.
            </p>
          </div>
        </div>

        <div className="movie-details__panel">
          <header className="movie-details__header">
            <h3 className="movie-details__title">Cast</h3>
            <SliderNavigation
              id={castSliderNavigationId}
              hasPagination={false}
              buttonMode="black-08"
              mode="rounded"
            />
          </header>
          <Slider
            navigationTargetElementId={castSliderNavigationId}
            hasScrollbarOnMobile={false}
            sliderParams={{
              slidesPerViews: "auto",
              spaceBetween: 10,
              breakPoints: {
                1024: {
                  slidesPerViews: "auto",
                  spaceBetween: 20,
                  allowTouchMoves: false,
                },
              },
            }}
          >
            {castItems.map((castItem, index) => (
              <PersonCard {...castItem} key={index} />
            ))}
          </Slider>
        </div>

        <div className="movie-details__panel">
          <header className="movie-details__panel-header">
            <h3 className="movie-details__title">Reviews</h3>
            <Button
              mode="black-08"
              iconName="plus"
              label="Add your review"
              href="/"
            />
          </header>

          <Slider
            navigationMode="rounded"
            isNavigationHiddenMobile={false}
            hasScrollbarOnMobile={false}
            sliderParams={{
              slidesPerView: 2,
              sliderPerGroup: 2,
              breakPoints: {
                0: {
                  slidesPerView: 1,
                  sliderPerGroup: 1,
                  spaceBetween: 16,
                },
                1024: {
                  slidesPerView: 2,
                  sliderPerGroup: 2,
                  allowTouchMoves: false,
                  spaceBetween: 20,
                },
              },
            }}
          >
            {reviewItems.map((reviewItem, index) => (
              <ReviewCard {...reviewItem} key={index} />
            ))}
          </Slider>
        </div>
      </div>

      <aside className="movie-details__info">
        <div className="movie-details__panel"></div>
      </aside>
    </section>
  )
}

export default MovieDetails
