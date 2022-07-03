
let initialState = {
    friends: [
        { id: 1, name: 'Badger', avatar: 'https://quizswish.com/wp-content/uploads/2020/08/badger-bb-311x311.jpg' },
        { id: 2, name: 'Skinny Pete', avatar: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/breaking-bad/e/e2/Skinny_Pete.jpg' },
        { id: 3, name: 'Combo', avatar: 'https://render.fineartamerica.com/images/rendered/default/front/spiral-notebook/images/artworkimages/medium/2/combo-breaking-bad-joseph-oland.jpg?&targetx=-317&targety=-1&imagewidth=1534&imageheight=961&modelwidth=680&modelheight=961&backgroundcolor=6C8CAB&orientation=0&producttype=spiralnotebook' },
    ]
}

const sidebarReducer = (state = initialState, action) => {
    let stateCopy = {...state}
    return stateCopy
}

export default sidebarReducer
