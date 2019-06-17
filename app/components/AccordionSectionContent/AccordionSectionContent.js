import './AccordionSectionContent.scss'

export default content => {
  const ddElement = document.createElement('dd')

  ddElement.innerHTML = content
  ddElement.classList.add('AccordionSectionContent')

  return ddElement
}
