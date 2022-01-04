import { storageService } from './storageService'
// import { User } from '../models/user.model'
const USER_KEY = 'user'

export function loadUser() {
    let user = storageService.load(USER_KEY)
    // user =  JSON.parse(user)  
    return user
   
}

export function getUser(user) {
    console.log(user);
    const newUser = {
        _id: _makeId(),
        name: user.name,
        password: user.password,
        phone: '+1 (958) 502-3495',
        email: `${user.name}@renovize.com`,
        coins: 100,
        moves: [],
        isAdmin: false
    }
    storageService.store(USER_KEY, newUser)
}

export function addMoveUser(contact, amount,user) {
  // var user = this.loadUser()
  console.log('user',user);
  console.log('amount', amount);
  console.log('contact', contact);
  // console.log(loggedInUser.coins);
    if (user.coins - amount < 0) {
      alert('You cant do that')
      return
    }
    user.coins -= amount
    let sentAt = new Date().toLocaleTimeString()
    user.moves.unshift({ to : contact, amount, sentAt })
    storageService.store(USER_KEY, user)
    console.log(user);
  }

function _makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}
export function logout(){
  const newUser = {
    _id: _makeId(),
    name: '',
    password: 'user.password',
    phone: '+1 (958) 502-3495',
    email: ``,
    coins: 100,
    moves: [],
    isAdmin: false
}
storageService.store(USER_KEY, newUser)
}