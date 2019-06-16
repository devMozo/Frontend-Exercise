import './Accordion.scss'
import AccordionSection from '../AccordionSection/AccordionSection'
import Component from '../Component'

export default class Accordion extends Component {
  render() {
    const { elements } = this.props
    const dlElement = document.createElement('dl')

    if (!Array.isArray(elements)) {
      throw Error('You must pass an array of elements')
    }

    elements.forEach(item => {
      const section = new AccordionSection({
        title: item.getTitle(),
        content: item.getContent()
      })

      dlElement.appendChild(section.render())
    })

    dlElement.setAttribute('ref', this.ref)

    return dlElement
  }
}
