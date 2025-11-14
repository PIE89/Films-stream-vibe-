import './Footer.scss'
import classNames from 'classNames'

const Footer = (props) => {
  const {className} = props;
  return (
    <div className={classNames(className, "footer")}>
      Footer
    </div>
  )
}

export {Footer}