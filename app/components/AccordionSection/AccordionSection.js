import './AccordionSection.scss'
import Component from '../Component'
import AccordionSectionTitle from '../AccordionSectionTitle/AccordionSectionTitle'
import AccordionSectionContent from '../AccordionSectionContent/AccordionSectionContent'

export default class AccordionSection extends Component {
  render() {
    const { title, content, active } = this.props

    const wrapper = document.createElement('div')

    wrapper.classList.add(`AccordionSection${active ? '--active' : ''}`)

    wrapper.appendChild(AccordionSectionTitle(title))
    wrapper.appendChild(AccordionSectionContent(content))

    wrapper.setAttribute('ref', this.ref)
    wrapper.addEventListener('click', () => {
      super.updateAll(
        {
          active: false
        },
        AccordionSection.name
      )

      super.update(
        this.ref,
        {
          ...this.props,
          active: !active
        },
        this
      )
    })

    return wrapper
  }
}
