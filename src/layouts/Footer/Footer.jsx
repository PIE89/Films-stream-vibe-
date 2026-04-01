import "./Footer.scss"
import classNames from "classnames"
import { Button } from "@/components/Button/index.js"

const Footer = (props) => {
  const { className } = props

  const menu = [
    {
      title: "Home",
      links: ["Categories", "Devices", "Pricing", "FAQ"],
    },
    {
      title: "Movies",
      links: ["Gernes", "Trending", "New Release", "Popular"],
    },
    {
      title: "Shows",
      links: ["Gernes", "Trending", "New Release", "Popular"],
    },
    {
      title: "Support",
      links: ["Contact Us"],
    },
    {
      title: "Subscription",
      links: ["Plans", "Features"],
    },
    {
      title: "Connect With Us",
      icons: ["facebook", "twitter", "linkedin"],
    },
  ]

  const menuItems = menu.map((item, index) => (
    <div className="footer__menu-group">
      <h5 className="footer__menu-group-title h6">{item.title}</h5>
      <ul className="footer__menu-group-list" key={index}>
        {item.links &&
          item.links.map((link, i) => (
            <li key={i} className="footer__menu-group-list-item">
              {<a className="footer__menu-group-link">{link}</a>}
            </li>
          ))}
        {item.icons &&
          item.icons.map((icon, i) => (
            <li key={i} className="footer__menu-group-list-item">
              <Button
                className="footer__menu-group-button"
                label={icon}
                isLabelHidden
                mode="transparent"
                iconName={icon}
              />
            </li>
          ))}
      </ul>
    </div>
  ))

  return (
    <footer className={classNames(className, "footer")}>
      <div className="footer__inner container">
        <div className="footer__menu">{menuItems}</div>

        <div className="footer__policy">
          <div className="footer__policy-copyright">
            <p>
              @<time dateTime="2025">2025</time> streamvib, All Rights Reserved
            </p>
          </div>
          <div className="footer__policy-links">
            <a href="/">Terms of Use</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
