

class Person{

    /**
     * 构造方法
     * @param name 姓名
     * @param age 年龄
     */
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    say(){
        return `我是${this.name},我今年${this.age}岁了！哈哈哈哈！！！！`;
    }
}

export default Person;