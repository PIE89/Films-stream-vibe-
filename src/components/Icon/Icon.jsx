import './Icon.scss'
import { Icon as IconMinista } from "minista"
import classNames from 'classNames'

const Icon = ({name, className, hasFill = false}) => {
  return (
    <span className={classNames(className, "icon")}>
      <IconMinista
        iconId={name}
        fill={hasFill ? 'currentColor' : 'none'}
        stroke={hasFill ? 'none' : 'currentColor'}
      />
    </span>
  )
}

export {Icon}