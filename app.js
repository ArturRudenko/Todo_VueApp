new Vue({
    el: "#app",
    data: {
        newTaskValue: '',
        editValue: '',
        tasks: [
            {
                text:'Walk a dog',
                isCompleted:false,
                isEditing: false,
                id:1
            },
            {
                text:'Buy some food',
                isCompleted:false,
                isEditing: false,
                id:2
            },
            {
                text:'Wash a car',
                isCompleted:true,
                isEditing: false,
                id:3
            },
        ],
    },
    methods: {
        alert: function(text){
            alert(text)
        },
        addTask: function() {
            this.tasks.push({
                text: this.newTaskValue,
                isCompleted: false
            });
            this.newTaskValue = '';
        },
        removeTask: function(taskId) {
            for(let i = 0; i <= this.tasks.length; i++) {
                if(this.tasks[i].id === taskId){
                    this.tasks.splice(this.tasks.indexOf(this.tasks[i]), 1)
                }
            }
        },
        changeEditing: function(taskId,taskText) {
            this.editValue = taskText;
            this.tasks = this.tasks.map(task => {
                if(task.id === taskId) {
                    task.isEditing = !task.isEditing;
                }
                return task;
            });
        },
        editTask: function(taskId) {
            this.tasks = this.tasks.map(task => {
                if(task.id === taskId) {
                    task.text = this.editValue
                    task.isEditing = !task.isEditing;
                }
                return task;
            });
        },

    },
})