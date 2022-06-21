class Student{
    study(){
        console.log('I am studying!');
    }
}

function run(){
    function getInstance(){
        // 大量代码
        const student = new Student()
        return student
    }

    function dealWithInstance(student){
        // 大量代码
        student.study()
    }

    const student = getInstance()
    dealWithInstance(student)
}

function run2(){
    function getStudent(callback){
        const student = new Student()
        callback(student) // 将实例提供给回调函数
    }

    // 将获取实例和执行写到一起,提升可读性
    getStudent((student)=>{
        student.study()
    })
}

run2()