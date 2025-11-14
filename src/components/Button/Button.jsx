import './Button.scss'
import classNames from 'classNames'
import {Icon} from "@/components/Icon/index.js";

const Button = (props) => {
  const {
    className,
    href,
    type = 'button', // 'button' || 'link'
    target,
    label,
    mode = '', // 'transparent
    isLabelHidden = false,
    iconName,
    iconPosition = 'before', // 'before' || 'after'
    hasFillIcon,
  } = props;

  const isLink = href !== undefined;
  const Component = isLink ? 'a' : 'button';
  const linkProps = { href, target };
  const buttonProps = { type };
  const specificProps = isLink ? linkProps : buttonProps;
  const title = isLabelHidden ? label : undefined;
  const iconComponent = iconName && (
    <Icon
      className='button__icon'
      hasFill={hasFillIcon}
      name={iconName}/>
  );

  return (
    <Component
      className={classNames(className, "button", {
        [`button--${mode}`]: mode,
      })}
      title={title}
      aria-label={title}
      {...specificProps}
    >
      {iconPosition === 'before' && iconComponent}
      {!isLabelHidden && (
        <span className='button__label'>{label}</span>)}
      {iconPosition === 'after' && iconComponent}
    </Component>
  )
}

export {Button}