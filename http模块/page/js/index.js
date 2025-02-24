// 隔行换色
let trs = document.getElementsByTagName('tr');
for (let i = 0; i < trs.length; i++) {
    if (i % 2 === 0) {
        trs[i].style.backgroundColor = 'red';
    } else {
        trs[i].style.backgroundColor = 'green';
    }
}