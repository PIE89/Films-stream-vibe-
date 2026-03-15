import './Navigation.scss'
import classNames from 'classnames'

const Navigation = ({className, url}) => {

  const menus = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'Movies & Shows',
      path: '/movies',
    },
    {
      title: 'Support',
      path: '/support',
    },
    {
      title: 'Subscriptions',
      path: '/subscriptions',
    },
  ];


  const menuField = menus.map(({title, path}, index) => {
    return (
      <li key={index} className='navigation__menu-item'>
        <a href={path} className={classNames("navigation__menu-link", {
          'is-active': url === path,
        })}>{title}</a>
      </li>
    )
  })

  return (
    <nav className={classNames(className, "navigation")}>
      <ul className='navigation__menu-list'>{menuField}</ul>
    </nav>
  )
}

export {Navigation}