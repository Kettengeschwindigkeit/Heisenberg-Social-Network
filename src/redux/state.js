import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import sidebarReducer from "./sidebar-reducer"


let store = {

    _state: {

        profilePage: {
            posts: [
                { id: 1, message: 'Hey! What up beyotch!', likesCount: 12 },
                { id: 2, message: 'Yo yo yo!!', likesCount: 11 }
            ],
            newPostText: 'it-kamasutra.com'
        },

        dialogsPage: {

            dialogs: [
                { id: 1, name: 'Badger', avatar: 'https://quizswish.com/wp-content/uploads/2020/08/badger-bb-311x311.jpg' },
                { id: 2, name: 'Skinny Pete', avatar: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/breaking-bad/e/e2/Skinny_Pete.jpg' },
                { id: 3, name: 'Combo', avatar: 'https://render.fineartamerica.com/images/rendered/default/front/spiral-notebook/images/artworkimages/medium/2/combo-breaking-bad-joseph-oland.jpg?&targetx=-317&targety=-1&imagewidth=1534&imageheight=961&modelwidth=680&modelheight=961&backgroundcolor=6C8CAB&orientation=0&producttype=spiralnotebook' },
                { id: 4, name: 'Emilio', avatar: 'https://m.media-amazon.com/images/M/MV5BMTI1OTQ1MjEzM15BMl5BanBnXkFyZXN1bWU@._V1_FMjpg_UX1000_.jpg' },
                { id: 5, name: 'Krazy-8', avatar: 'https://www.personality-database.com/profile_images/64557.png' },
                { id: 6, name: 'Tuco', avatar: 'http://thx-trailer.com/replica/Breaking_bad/grill.jpg' },
                { id: 7, name: 'Jane', avatar: 'https://i.pinimg.com/736x/c0/85/5f/c0855f79316c897231219ba0fcb36372.jpg' }
            ],

            messages: [
                { id: 1, message: 'Hey! What up beyotch!' },
                { id: 2, message: 'Yo!' },
                { id: 3, message: 'Yo!' },
                { id: 4, message: 'Yo!' }
            ],
            newMessageBody: ''
        },

        sidebarPage: {

            friends: [
                { id: 1, name: 'Badger', avatar: 'https://quizswish.com/wp-content/uploads/2020/08/badger-bb-311x311.jpg' },
                { id: 2, name: 'Skinny Pete', avatar: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/breaking-bad/e/e2/Skinny_Pete.jpg' },
                { id: 3, name: 'Combo', avatar: 'https://render.fineartamerica.com/images/rendered/default/front/spiral-notebook/images/artworkimages/medium/2/combo-breaking-bad-joseph-oland.jpg?&targetx=-317&targety=-1&imagewidth=1534&imageheight=961&modelwidth=680&modelheight=961&backgroundcolor=6C8CAB&orientation=0&producttype=spiralnotebook' },
            ]
        }

    },

    _callSubscriber() {
        console.log('state was changed')
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action)

        this._callSubscriber(this._state)
    }
}


export default store
window.store = store
