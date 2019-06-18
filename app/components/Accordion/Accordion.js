import './Accordion.scss'
import AccordionSection from '../AccordionSection/AccordionSection'
import AccordionItem from '../../models/AccordionItem'
import Component from '../Component'
import NewSection from '../../mocks/section.json'

export default class Accordion extends Component {
  async fetchAPI () {
    const newItem = AccordionItem(NewSection.title, NewSection.content)

    setTimeout(() => {
      super.update(
        this.ref,
        {
          ...this.props,
          elements: [...this.props.elements, newItem],
          updated: true
        },
        this
      )
    }, 4000)
  }

  render () {
    const { elements, updated } = this.props
    const dlElement = document.createElement('dl')

    if (!updated) {
      this.fetchAPI()
    }

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
    dlElement.classList.add('Accordion')

    return dlElement
  }
}
