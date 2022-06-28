
let man= {
     name: 'Dmitry',
     age: 31,
     sayName() {
        alert(this.name)
     }
}

console.log(man.age)
console.log(man.name)
man.sayName()

// --------------------------------------------------------

let page = {
    title: 'samuraiJS',
    content: ``,
    render() {
        document.title = this.title
        document.write(this.content)
    }
}

page.content = `<div>Content about React</div>`
page.render()

// --------------------------------------------------------


let page2 = {
    title: 'samuraiJS',
    _content: ``,
    setContent(value) {
        this._content = value
    },
    getContent() {
        return this._content
    },
    render: function() {
        document.write(this._content)
    }
}

// page2._content = `<div>Content about React</div>`            // DON'T !!! 
page2.setContent(`<div>Content about React</div>`)
// console.log(page2._content)                                  // DON'T !!!
console.log(page2.getContent())
page2.render()

// --------------------------------------------------------

let store = {

    _subscriber() {
        console.log('no subscribers(observers')
    },

    _state: {
        firstName: 'it-incubator.by',
        lastName: 'it-kamasutra.com'
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._subscriber = observer
    },

    setFirstName(value) {
        this._state.firstName = value
        this._subscriber()
    }
}

let state = store.getState()
store.setFirstName('samuraiJS.com')
state = store.getState()

store.subscribe(() => {
    let state = store.getState()
    renderPage(state)
})

store.setFirstName('youtube.com')
