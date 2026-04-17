import "./Logo.scss"
import classNames from "classnames"
import logoImgSrc from "@/assets/images/logo.svg"

const Logo = ({ loading = "lazy", className }) => {
  const title = "Home"
  return (
    <a
      className={classNames(className, "logo")}
      href="/"
      title={title}
      aria-label={title}
    >
      <img
        className="logo__image"
        src={logoImgSrc}
        alt="logo"
        width={199}
        height={60}
        loading={loading}
      />
    </a>
  )
}

export { Logo }
