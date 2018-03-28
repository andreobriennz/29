class Info {
    constructor (initalState = false) {
        this.initalState = initalState
        this.storedStates = [initalState]
    }

    change (currentState = false) {
        console.log ('%c Previous state', "background: #edf2ff; color: #313439; font-weight: bold")
        this.state (this.storedStates[this.storedStates.length - 1])

        console.log ('%c Current state', "background: #edf2ff; color: #313439; font-weight: bold")
        this.state (currentState)
    }

    addState (state) {
        this.storedStates.push (state)
    }

    state (message = 'State: ', state, addState = true) {
        console.log ('%c '+message, "background: #edf2ff; color: #313439; font-weight: bold")

        state.forEach (prop => {
            console.table (prop)
        });

        if (addState === true) addState (state)
    }

    allState () {
        console.log (this.storedStates)
    }

    //////////////////////////

    event (event, data = false) {
        console.log ('%c Event: '+event+' ', "background: #1c86f2; color: #fff; font-weight: bold")
        
        console.log (data)
    }

    success (message, data = false) {
        console.log ('%c '+message, "background: #35beb1;; color: #fff; font-weight: bold")
        
        this.table (data)
    }

    debug (message, data = false) {
        console.log ('%c '+message, "background: #f7ba45;; color: #fff; font-weight: bold")

        debugger

        this.table (data)
    }

    error (message, data = false) {
        this.log (message, data)
    }

    alert (message, data = false) {
        console.log ('%c '+message, "background: #f7ba45;; color: #fff; font-weight: bold")
        
        console.log (data)
    }

    log (message, data = false) {
        console.log ('%c '+message, "background: #f03c69;; color: #fff; font-weight: bold")
        
        this.table (data)
    }

    table (data) {
        if (data === false) return

        if (data.constructor === Array) {
            for (let item of data) {
                console.log ('Data: ', item)
            }
            return
        } 

        console.table ('Data:', data)
    }
}

const info = new Info ()

export {Info, info}
