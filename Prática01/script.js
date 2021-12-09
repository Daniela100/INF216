function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
    console.log('Taking a break...');
    await sleep(2000);
    console.log('Two seconds later...');
}

async function movimenta() {
    let space = document.getElementById("space")

    let ctx = space.getContext("2d");
    console.log(space.style.widht);
}