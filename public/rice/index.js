let top = document.getElementById('top');
let bottom = document.getElementById('bottom');

let ball_list = ["blue", "green","teal","pink"];

var list = []


// 랜덤으로 ball_list의 색깔을 뽑아서 리스트에 저장한다.
for (let i = 0; i < 4; i++){
    let random = Math.floor(Math.random() * ball_list.length);
    list.push(ball_list[random]);
}

console.log(list);

// 리스트에 저장된 색깔을 top과 bottom에 각각 저장한다.

for (let i = 0; i < 4; i++){
    let div = document.createElement('div');
    div.classList.add(list[i]);
    top.appendChild(div);
}