window.__toggleInstances__ = []

export const toggle = () => {
  document.querySelectorAll('[data-toggle]').forEach(el => {
    const toggled = new Toggle(el)
    toggled.addToggleHandler()
  })
}

class Toggle {
  constructor (element) {
    this.el = element
    this.target = this.isModal() ? document.querySelector(this.el.dataset.toggle) : this.el.querySelector(this.el.dataset.toggle)
    this.initState = this.getInstanceInitialState()
    this.saveTogleInstance()
    this.target.style.display = 'none'
  }

  isModal () {
    return typeof this.el.dataset.modal !== 'undefined'
  }

  addToggleHandler () {
    this.el.addEventListener('click', this.toggleState.bind(this))
  }

  toggleState (e) {
    // console.warn(e)
    if (e) {
      e.stopPropagation()
    }
    const state = window.getComputedStyle(this.target).display
    this.target.style.display = (state === this.initState) ? 'none' : this.initState
  }

  getInstanceInitialState () {
    const instance = this.findToggleInstance(this.target)
    return instance ? instance.initState : window.getComputedStyle(this.target).display
  }

  saveTogleInstance () {
    if (!this.findToggleInstance(this.target)) {
      window.__toggleInstances__.push(this)
    }
  }

  findToggleInstance (element) {
    return window.__toggleInstances__.filter(ti => ti.target === this.target)[0]
  }
}

export default {
  toggle
}
