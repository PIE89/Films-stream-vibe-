import './Header.scss'
import classNames from 'classNames'
import {Navigation} from "@/components/Navigation/index.js";
import {Logo} from "@/components/Logo/index.js";
import {Button} from "@/components/Button/index.js";
import {BurgerButton} from "@/components/BurgerButton/index.js";

const Header = (props) => {
  const {className, url} = props;
  return (
    <div className={classNames(className, "header")}>
      <div className="header__inner container">
        <Logo loading='eager'/>

        <dialog className="header__overlay-menu-dialog">
          <Navigation url={url} className='header__menu'/>

          <div className="header__actions">
          <Button
            className='header__button'
            label='Search'
            isLabelHidden
            mode='transparent'
            iconName='search'
          />
          <Button
            className='header__button'
            label='Notify'
            isLabelHidden
            mode='transparent'
            iconName='notify'
          />
        </div>
        </dialog>

        <BurgerButton className='header__burger-button visible-tablet'/>
      </div>

    </div>
  )
}

export {Header}