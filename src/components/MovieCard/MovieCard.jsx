import { Image } from "minista"
import "./MovieCard.scss"
import Badge from "../Badge"
import RatingView from "../RatingView"

const MovieCard = (props) => {
  const {
    title,
    imgSrc,
    duration,
    views,
    href = "/movie",
    released,
    rating,
    season,
  } = props

  return (
    <a className="movie-card" href={href} title={title}>
      <h3 className="visually-hidden">{title}</h3>
      <Image src={imgSrc} className="movie-card__image" />
      <div className="movie-card__body">
        {duration && (
          <Badge iconName="clock" iconAriaLabel="Duration" hasFillIcon>
            {duration}
          </Badge>
        )}

        {season && (
          <Badge iconName="season" hasFillIcon>
            {season}
          </Badge>
        )}

        {rating && (
          <Badge className="movie-card__rating-badge" isBig>
            <RatingView {...rating} />
          </Badge>
        )}

        {views && (
          <Badge iconName="eye" iconAriaLabel="Views" hasFillIcon>
            {views}
          </Badge>
        )}

        {released && (
          <Badge className="movie-card__released-badge">
            Released at{" "}
            <time
              className="movie-card__released-badge-label"
              dateTime={released.dateTime}
            >
              {released.label}
            </time>
          </Badge>
        )}
      </div>
    </a>
  )
}

export default MovieCard
