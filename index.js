const App = {
    list: document.createElement('ul'),
    init() {
        const megaroster = document.querySelector('form')
        megaroster.addEventListener('submit', (ev) => this.handleSubmit(ev))
        //megaroster.addEventListener('click', )
    },
    
    handleSubmit(event) {
        console.log(event)
        event.preventDefault()
        const form = event.target
        const details = document.querySelector('.details')

        const li = document.createElement('li')
        li.textContent = form.personName.value
        //li.style.marginRight = '5px'

        const delbutton = document.createElement('button')
        const probutton = document.createElement('button')
        delbutton.innerHTML = "Delete"
        probutton.innerHTML = "Promote"
        delbutton.style.marginLeft = '5px'
        probutton.style.marginLeft = '5px'

        li.appendChild(delbutton)
        li.appendChild(probutton)

        App.list.insertBefore(li, App.list.firstChild)
        details.appendChild(App.list)
        delbutton.addEventListener('click', this.handleDelete)
        probutton.addEventListener('click', this.handlePromote)
    },

    handleDelete(event) {
        //console.log(event)
        // event.preventDefault()
        const form = event.target
        node = form.parentNode
        // const details = document.querySelector('.details')

        App.list.removeChild(node)

    },
    handlePromote(event) {
        //console.log(hi)
        const form = event.target
        node = form.parentNode
        node.style.border = "thin dotted red"
    },
}

App.init()

