function Employee(id,name,salary){
   var _id,
       _name,
       _salary;

   this.id = function(){
         return _id;
   };
   this.name = function(val){
      if (typeof val === "undefined")
         return _name;
      if (val !== "")
         _name = val;
   };
   this.salary = function(val){
      if (typeof val === "undefined")
         return _id;
      if (val > 0)
         _id = val;
   };
   _id = id;
   this.name(name);
   this.salary(salary);
}

//mdn Object.create()