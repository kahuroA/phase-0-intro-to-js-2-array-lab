// Write your solution here!
const cats=["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}


function destructivelyPrependCat(name){
    cats.unshift(name);
}


function destructivelyRemoveLastCat(){
    cats.pop();
}


function destructivelyRemoveFirstCat(){
    cats.shift();
}


function appendCat(name){
    const new_cats= [...cats, name];
    return new_cats;
}

function prependCat(name){
    const new_cats=[name, ...cats]
    return new_cats;
}

function removeLastCat(){
    return cats.slice(0,-1);
}

function removeFirstCat(){
    return cats.slice(1);
}
