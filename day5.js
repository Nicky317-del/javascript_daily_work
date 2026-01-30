let user={
    fulname: "sp acharya",
    address:{
        city:"gurugram",
        state:"haryana",} ,
    mobileno:123456789,
    favourite:["black","white","blue"],
    demo:function(){
        return("demo function")
    }



}
console.log(user.fullname,user.address,user.favourite[1] ,user.demo(),user.address.city);
