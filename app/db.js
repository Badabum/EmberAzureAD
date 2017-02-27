import Ember from 'ember'

export default Ember.Object.create({
    _records:[{
            id:1,
            name:'John Doe',
            email:'ihorkorotenko@gmail.com',
            createdDate: new Date(),
            cars:[
                {
                    type:"hybrid",
                    model:'Toyota'
                }
            ],
        },{
            id:2,
            name:'Janny Doe',
            email:'ihkorotenko@gmail.com',
            createdDate: new Date(),
            cars:[
                {
                    type:"diesel",
                    model:'Mercedes'
                }
            ]
        }],
        _roles:[{
            name:'Admin',
            permissions:['ReadAll','WriteAll','CreateUser','EditUser']
        },{
            name:'RegularUser',
            permissions:['ReadAll','WriteOwn','ReadUser']
        }],
        users(){
            return Ember.copy(this._records);
        },
        permissionsFor(roles){
            let result = [];
            let rolesEntry = this._roles;
            roles.forEach(function(role, index, collection){
                let roleEntry = rolesEntry.find(function(item, index,enumerable){
                    return item.name===role;
                });
                result.pushObject(roleEntry);
            })
            return result;
        },
        addUser(user){
            this._records.push(user);
        },
        removeUser(user){
            const index = this._records.indexOf(user);
            this._records.splice(index, 1);
        }     
});