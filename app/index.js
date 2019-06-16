import Accordion from './components/Accordion/Accordion'
import AccordionItem from './models/AccordionItem'
import MockSections from './mocks/sections.json'
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

document.addEventListener('UpdateDOM', e => {
  const { ref, newProps, instance } = e.detail

  try {
    instance.setProps(newProps)
    const element = instance.render()
    app.querySelector(`*[ref=${ref}]`).replaceWith(element)
  } catch (err) {
    console.log(
      `We've had the following problem processing your component: ${err}`
    )
  }
})
