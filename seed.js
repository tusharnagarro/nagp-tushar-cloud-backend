var StatusENUMS = {
    ACTIVE : "ACTIVE"
};

var userList ={
    1:{title:"Tushar",officeMobNo:"9999999999",personalMobNo:"9221313231",address:"asdadasdad",status: StatusENUMS.ACTIVE},
    2:{title:"Satyam",officeMobNo:"8888888888",personalMobNo:"9221313231",address:"asdadasdad",status: StatusENUMS.ACTIVE},
    3:{title:"Naveen",officeMobNo:"7777777777",personalMobNo:"9221313231",address:"asdadasdad",status: StatusENUMS.ACTIVE}
};

var next_user_id = 4;

module.exports = {
    StatusENUMS:StatusENUMS,
    userList:userList,
    next_user_id:next_user_id
};