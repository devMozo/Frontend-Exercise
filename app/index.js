import Accordion from './components/Accordion/Accordion'
import AccordionItem from './models/AccordionItem'
import MockSections from './mocks/sections.json'
import handlerDOM from './services/handlerDOM'

const app = document.getElementById('app')

document.addEventListener('DOMContentLoaded', () => {
  const elements = MockSections.data.map(item =>
    AccordionItem(item.title, item.content)
  )

  const accordion = new Accordion({
    elements
  })

  app.appendChild(accordion.render())
})

handlerDOM(app)
