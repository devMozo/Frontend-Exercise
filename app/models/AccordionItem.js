export default (initTitle, initContent) => {
  let title = initTitle
  let content = initContent

  const getTitle = () => {
    return title
  }

  const setTitle = newTitle => {
    if (typeof title !== 'string') {
      throw Error('You must pass an string message')
    }

    title = newTitle
  }

  const getContent = () => {
    return content
  }

  const setContent = newContent => {
    if (typeof content !== 'string') {
      throw Error('You must pass an HTML formatted to String')
    }

    content = newContent
  }

  return {
    getTitle,
    setTitle,
    getContent,
    setContent
  }
}
