class BaseComponent {
  constructor() {
    if (this.constructor === BaseComponent) {
      throw new Error(
        "Это абстрактный класс. Нельзя создавать экземпляры абстрактного класса",
      )
    }
  }

  getProxyState(initialState) {
    return new Proxy(initialState, {
      get: (target, prop) => {
        return target[prop]
      },
      set: (target, prop, newValue) => {
        const oldValue = target[prop]

        target[prop] = newValue

        if (newValue !== oldValue) {
          this.updateUI()
        }
        return true
      },
    })
  }

  // перерисовка UI в ответ на обновление состояние
  updateUI() {
    throw new Error("Необходимо реализовать метод UpdateUI!")
  }
}

export default BaseComponent
