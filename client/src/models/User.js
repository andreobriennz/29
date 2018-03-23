class User {
    constructor (name = '', email = '', games = []) {
        this.name = name
        this.email = email
        this.games = []
    }

    isLoggedIn () {
        if (!(this.name.length >= 3)) {
            return false
        }
        return true
    }
};

const user = new User ()

export { User, user }