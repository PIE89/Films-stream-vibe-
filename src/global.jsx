import "@/styles"
import { Head } from "minista"
import { Header } from "@/layouts/Header/index.js"
import { Content } from "@/layouts/Content/index.js"
import { Footer } from "@/layouts/Footer/index.js"
import appleTouchIcon from "@/assets/favicons/apple-touch-icon.png"
import favicon32 from "@/assets/favicons/favicon-32x32.png"
import favicon16 from "@/assets/favicons/favicon-16x16.png"
import manifest from "@/assets/favicons/site.webmanifest"
import Banner from "./sections/Banner"

export default function ({ title, children, url, isHeaderFixed }) {
  return (
    <>
      <Head htmlAttributes={{ lang: "en" }}>
        <title>Stream Vibe | {title}</title>
        <script src="./src/main.js" type="module" />
        <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
        <link rel="manifest" href={manifest} />
      </Head>
      <Header url={url} isFixed={isHeaderFixed} />
      <Content isResetPadding={isHeaderFixed}>
        {children}
        <Banner />
      </Content>
      <Footer />
    </>
  )
}
