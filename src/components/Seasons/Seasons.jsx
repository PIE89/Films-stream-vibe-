import Accordion from "../Accordion"
import AccordionGroup from "../AccordionGroup"
import EpisodeCard from "../EpisodeCard"
import seasonsItems from "./seasonItems"
import "./Seasons.scss"

const Seasons = () => {
  return (
    <AccordionGroup mode="dark" isOrderedList={false} className="seasons">
      {seasonsItems.map(({ title, subtitle, episodes }, index) => (
        <Accordion
          title={title}
          id={`season-${index}`}
          name="seasons"
          isOpen={index === 0}
          key={index}
          titleLevelClassName="h4"
          subtitle={subtitle}
          isArrowButton
        >
          <ul className="seasons__list">
            {episodes.map((episode, index) => (
              <li className="seasons__item" key={index}>
                <EpisodeCard {...episode} />
              </li>
            ))}
          </ul>
        </Accordion>
      ))}
    </AccordionGroup>
  )
}

export default Seasons
