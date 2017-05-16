const App = {
    list: document.createElement('ul'),
    init() {
        const megaroster = document.querySelector('form')
        megaroster.addEventListener('submit', (ev) => this.handleSubmit(ev))
    },
    
    handleSubmit(event) {
        event.preventDefault()
        const form = event.target
        const details = document.querySelector('.details')

        const li = document.createElement('li')
        li.textContent = form.personName.value

        App.list.insertBefore(li, App.list.firstChild)
        details.appendChild(App.list)
    },
}

App.init()

