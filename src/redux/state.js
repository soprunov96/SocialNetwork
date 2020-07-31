const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {

        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It is my first post', likesCount: 0},
                {id: 3, message: 'yes', likesCount: 0},
                {id: 4, message: 'no', likesCount: 0},
            ],
            newPostText: 'Igor_Soprunov'

        },

        dialogsPage: {
            messages: [
                {id: 1, message: 'hi'},
                {id: 2, message: 'hello'},
                {id: 3, message: 'How are you?'},
                {id: 4, message: 'Oy'},
                {id: 5, message: 'Yo'},
            ],
            dialogs: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Ihor'},
                {id: 5, name: 'Valera'},
            ]
        }

    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state Change')
    },
    _addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            this._addPost();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._updateNewPostText(action.newText);
            this._callSubscriber(this._state);
        }
    }

};

export let addPostActionCreator = () => {
    return {type: ADD_POST}

};

export let updateNewPostTextActionCreator = (text) => {

    return {type: UPDATE_NEW_POST_TEXT, newText: text};
};


window.store = store;


export default store;