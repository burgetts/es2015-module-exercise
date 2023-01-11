/* Returns a randomly selected item from array of items */
function choice(items) {
    const randomIndex = Math.floor(Math.random() * items.length)
    const choice = items[randomIndex]
    return choice
}

/* Removes first matching item from items, if item exists, and returns it. Otherwise returns undefined. */
function remove(items, item) {
    for (let i=0; i < items.length; i++){
        if (items[i] === item){
           return items.splice(i,1)
        }
    }
    return undefined;
}

export {choice, remove};