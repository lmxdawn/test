

import './css/style.css'
//require("./css/style.css");


document.write("hello webpack!手动阀撒地方所道夫撒地方");

document.write("");


import Person from './js/Person';
let p = new Person('张三',20);
console.log(p.say());

$("#div").click(function (e) {
    let conent = require('./js/content');

    alert(conent);

    // 动态加载js
    require.ensure([], function(require) {
        let Person = require('./js/Person');

        console.log(Person);
    });

})