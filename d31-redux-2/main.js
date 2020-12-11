// actions
const addAction = {
    type: 'ADD1',
};
const removeAction = {
    type: 'REMOVE1',
};
const addActionTen = {
    type : 'ADD10',
};
const removeActionTen = {
    type: 'REMOVE10',
};
const resetAction = {
    type: 'RESET',
}

//REDUCER
const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case 'ADD1' :
            return state +1;
        case 'REMOVE1' :
            return state -1;
        case 'ADD10':
            return state +10;
        case 'REMOVE10' :
            return state -10;
        case 'RESET': 
            return state = 0;
        default:
            return state;      
        }
}

//STORE
const { createStore } = Redux;
const store = createStore(counterReducer);

// MAIN
const renderStore = document.getElementById('render-store');
const render = () => {
    renderStore.innerHTML = store.getState();
}

store.subscribe(render);
render();
// renvoyer la state à 0 au lancement du navigateur

const add = document.getElementById('add');
add.addEventListener('click', () => {
    store.dispatch(addAction)
});

const remove = document.getElementById('remove');
remove.addEventListener('click', () => {
    store.dispatch(removeAction)
});

const addTen = document.getElementById('addTen');
addTen.addEventListener('click', () => {
    store.dispatch(addActionTen)
});

const removeTen = document.getElementById('removeTen');
removeTen.addEventListener('click', () => {
    store.dispatch(removeActionTen)
});

const reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    store.dispatch(resetAction)
})