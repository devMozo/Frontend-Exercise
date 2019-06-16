import './AccordionSectionTitle.scss'

export default title => {
  const dtElement = document.createElement('dt')

  dtElement.innerHTML = title
  dtElement.classList.add('AccordionSectionTitle')

  return dtElement
}
