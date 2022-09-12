//Описание Директива let позволяет объявить локальную переменную с областью видимости, ограниченной текущим блоком кода . В отличие от ключевого слова var , которое объявляет переменную глобально или локально во всей функции, независимо от области блока.

var declaration 

console.log(declaration);
// 1: если мы сейчас попытаемся логировать переменую (declaration), то нам вернется (undefined); 

function getdate (){
    var date = new Date()

return date
}

getdate()
console.log(date) //Reference Error

// 2: В коде мы пытаемся получить доступ к переменой век функции,в которой она была обьявлена.
// Так как переменная (date) ограничена обласьтю видимосью фуннкции (getDate), онп доступно 
// только внутри (getDate) или для любой вложеной в нее функции.



