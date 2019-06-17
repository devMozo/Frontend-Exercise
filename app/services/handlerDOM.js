export default app => {
  const components = []

  const updateComponent = (ref, newProps, instance) => {
    instance.setProps({
      ...instance.props,
      ...newProps
    })
    const element = instance.render()
    app.querySelector(`*[ref=${ref}]`).replaceWith(element)
  }

  document.addEventListener('UpdateDOM', e => {
    const { ref, newProps, instance } = e.detail

    components.push({
      instance,
      ref
    })

    try {
      updateComponent(ref, newProps, instance)
    } catch (err) {
      console.log(
        `We've had the following problem processing your component: ${err}`
      )
    }
  })

  document.addEventListener('UpdateAllDOM', e => {
    const { classComponent, newProps } = e.detail

    try {
      components.forEach(cmp => {
        const { instance, ref } = cmp

        if (instance.constructor.name === classComponent) {
          updateComponent(ref, newProps, instance)
        }
      })
    } catch (err) {
      console.log(
        `We've had the following problem processing your components: ${err}`
      )
    }
  })
}
