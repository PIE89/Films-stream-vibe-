import Accordion from "../Accordion"
import AccordionGroup from "../AccordionGroup"
import seasonsItems from "./seasonItems"
import "./Seasons.scss"

const Seasons = () => {
  return (
    <AccordionGroup mode="dark" isOrderedList={false}>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iusto
          velit optio, neque dolores magni soluta animi sint veritatis at, error
          nihil sit suscipit nesciunt necessitatibus ex quibusdam aspernatur
          debitis!
        </Accordion>
      ))}
    </AccordionGroup>
  )
}

export default Seasons
