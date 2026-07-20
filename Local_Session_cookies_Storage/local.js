//local storagr ->> aapke browser ke ander data store karna jo ki browser band hone ke baad bhi delete in hota
// session-> ye aapka data temproray store karta hai , mtlb band hua data gya
//cookies-> ye bhi data store karta hai and aapka browser ke cookies naame ki property me save hota hai and cookie concept kam data or light data ke liye hota hai

//localStorge me S capital hoga to browser ki database ki baat krenge
//1. store kaise kare
//2. data fetch kaise kare
//3. remove kaise kare
//4. update kaise kre
/*localStorage.setItem("name","Sankhi"); 
let val =localStorage.getItem("name");
localStorage.removeItem("name");
localStorage.setItem("name", "SankhiSingh")
*/
//local storage sirf string ko accept karta hai
//JSON.stringify([])//object ko string me convert karta hai
//localStorage.setItem("student",JSON.stringify({name:"sankhi", class:"12th"}))
//local storage me array store nhi kr sakte to use string me convert karte hai 
//aur JSON.parse karke uske actual form me la sakte hai 
//JSON.parse(localStorage.getItem("student"));
 // Saving data as key/value pair
        localStorage.setItem("name", "GeeksforGeeks");
        localStorage.setItem("color", "green");
         // Updating data
        localStorage.setItem("name", "GeeksforGeeks(GfG)");
        localStorage.setItem("color", "Blue");
// Get the data by key
        let name = localStorage.getItem("name");
        console.log("This is - ", name);
        let color=localStorage.getItem("colore");
        console.log(color);        
        let key1=localStorage.key(1);
        //key is a method which returns the name of the key
        let items=localStorage.length;
        // length is a property which returns the number of key/value pairs
        console.log("Total number of item is ", items);
        localStorage.removeItem("color");
        items=localStorage.length;
        
        console.log("after removal,Total number of item is ", items);
        localStorage.clear();
        console.log("after clearing ", localStorage.length);
//non string
// Store an object
let user = {
  name: 'anjali',
  age: 30
};
localStorage.setItem('user', JSON.stringify(user));
let storedUser = JSON.parse(localStorage.getItem('user'));
console.log(storedUser.name);
console.log(storedUser.age);        