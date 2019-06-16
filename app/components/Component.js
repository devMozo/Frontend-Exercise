import keys from '../utils/keys'

export default class Component {
  constructor(props) {
    this.props = props
    this.ref = keys()
  }

  setProps(props) {
    this.props = props
  }

  static updateAll(props) {}

  update(ref, props, instance) {
    const event = new CustomEvent('UpdateDOM', {
      detail: {
        ref,
        newProps: props,
        instance
      }
    })

    document.dispatchEvent(event)
  }
}
