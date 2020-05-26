let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11}
      ],
      newPostText: 'it-kamasutra.com'  
    },
    dialogsPage: {
      messages: [
          {id: 1, message: 'Hi'},
          {id: 2, message: 'How are you?'},
          {id: 3, message: 'What are you doing?'}
      ],
      dialogs: [
          {id: 1, name: 'Andry'},
          {id: 2, name: 'Dima'},
          {id: 3, name: 'Alex'},
          {id: 4, name: 'Lera'},
          {id: 5, name: 'Sveta'},
          {id: 6, name: 'Victor'},
          {id: 7, name: 'Sasha'}
      ]    
    } 
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {

  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  }
}

export default store;