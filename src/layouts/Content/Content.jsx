import './Content.scss'
import classNames from 'classNames'

const Content = (props) => {
  const {className , children} = props;
  return (
    <div className={classNames(className, "content")}>
      {children}
    </div>
  )
}

export {Content}