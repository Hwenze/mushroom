const initData = {
    history: window.location,
}

const calculate = (state = initData, action) => {
    console.log(state)
    switch (action.type) {
        default:
            return state
    }
}

export { calculate }