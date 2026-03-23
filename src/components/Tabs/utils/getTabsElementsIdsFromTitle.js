import getIdFromTitle from "@/utils/getIdFromTitle"

const getTabsElementsIdsFromTitle = (title) => {
  const titleFormatted = getIdFromTitle(title)
  const buttonId = `${titleFormatted}-tab`
  const contentId = `${titleFormatted}-tabpanel`

  return { buttonId, contentId }
}

export default getTabsElementsIdsFromTitle
