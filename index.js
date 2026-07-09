//all about DOM
//document.getElementById("abcd");
//console.log(abcd);
//let efgh=document.getElementsByClassName("efgh");
//console.log(efgh);
//let abcd=document.querySelector(".efgh");
//let ha=document.querySelector("h1");
//console.dir(ha);
//ha.textContent="Hello sankhi kaisi ho?"
//ha.innerHTML="<i>hey</i>";//text badlta hai but kisi element ke ander html dalna hai tab use krte hai 
//console.dir(ha);
//ha.hidden=true;
//attribute - except tag all the things are attribute
//ha.setAttribute("class","efgh");
//ha.removeAttribute("class");  
//ha.getAttribute("class");
//let a=document.querySelector("a");
//console.dir(a);
//a.href="https://www.youtube.com/";
//a.textContent="youtube";
//let a=document.querySelector("a");
//a.setAttribute("href","https://www.youtube.com/");
//a.setAttribute("target","_blank");
//let img=document.querySelector("img");
//img.setAttribute("src","https://images.unsplash.com/photo-1682685790910-1e3f5c7d8b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VhJTIwYmVhY2h8ZW58MHx8MHx8&w=1000&q=80");
//let a=document.querySelector("a");
//console.log(a.getAttribute("href"));
//a.removeAttribute("href");
//let h3=document.createElement("h3");
//h3.textContent="Hello sankhi kaisi ho?";
//document.body.prepend(h3);
//console.log(h3);
//create
//append / prepend jaha bhi elemen chahiye wha
//document.querySelector("body").append(h3);
//document.querySelector("div").append(h3);
//console.log(h3);
//js se css badlna
//h3.style.color="red";
//h3.style.backgroundColor="black";
//h3.innerHTML="<i>h3</i>";
//h3.style.fontFamily="cursive";
//let h1=document.querySelector("h1");
//h1.classList.add("hulu");
//h1.classList.remove("hulu"); //toggle laga hai to hata dega aur vice and versa
// dom is a tree structure
// sab node ek dusre se connected hote hai
// parent child sibling
// parentNode, childNodes, firstChild, lastChild, nextSibling, previousSibling
//node, element, text, comment
//element node - h1, p, div, span, a, img
//text node - text content
//comment node - comment
//nodeType - 1, 3, 8
//nodeName - h1, p, div, span, a, img, #text, #comment
//nodeValue - text content, comment content
//nodeValue - null for element node
//nodeValue - text content for text node
//nodeValue - comment content for comment node  
//nodeValue - null for element node
//nodeValue - text content for text node
//nodeValue - comment content for comment node
//what is difference between node and element
//node - h1, p, div, span, a, img, #text, #comment
//element - h1, p, div, span, a, img
//node - parentNode, childNodes, firstChild, lastChild, nextSibling, previousSibling
//element - parentElement, children, firstElementChild, lastElementChild, nextElementSibling, previousElementSibling
//node - nodeType, nodeName, nodeValue
//element - tagName, className, id
//getelementById, getElementsByClassName, getElementsByTagName, querySelector, querySelectorAll
//createElement, createTextNode, appendChild, removeChild, replaceChild
//innerHTML, textContent, innerText
//setAttribute, getAttribute, removeAttribute
//classList.add, classList.remove, classList.toggle
//differecen between innerHTML, textContent, innerText
//innerHTML - returns the HTML content of an element as a string, including any HTML tags
//textContent - returns the text content of an element and its descendants, without any HTML tags
//innerText - returns the visible text content of an element, taking into account CSS styles and layout
//he.innerText="Hello sankhi kaisi ho?";
//what it will show in console
//it will show the visible text content of the h1 element, which is "Hello sankhi kaisi ho?"
//console.log(h1.innerText);
//document.getquerySelector("#h1");
//document.getElementById("h1");
//document.querySelector(".h1");
//document.getElementsByClassName("h1");
//document.getElementsByTagName("h1");
//document.querySelectorAll("h1");
//document.querySelectorAll(".h1");
//document.querySelectorAll("#h1");
//document.querySelectorAll("h1, .h1, #h1");
//document.querySelectorAll("h1, .h1, #h1, div, p, span, a, img");
//document.querySelectorAll("h1, .h1, #h1, div, p, span, a, img, ul, li, ol, table, tr, td, th, form, input, button, select, option, textarea");
//document.querySelectorAll("h1, .h1, #h1, div, p, span, a, img, ul, li, ol, table, tr, td, th, form, input, button, select, option, textarea, header, footer, nav, section, article, aside");
//document.querySelectorAll("h1, .h1, #h1, div, p, span, a, img, ul, li, ol, table, tr, td, th, form, input, button, select, option, textarea, header, footer, nav, section, article, aside, main");
//document.querySelectorAll("h1, .h1, #h1, div, p, span, a, img, ul, li, ol, table, tr, td, th, form, input, button, select, option, textarea, header, footer, nav, section, article, aside, main, iframe");
//document.getElementsByClassName is similar to array but it is not an array it is a HTMLCollection
//document.querySelectorAll is similar to array but it is not an array it is a NodeList
//HTMLCollection and NodeList are both collections of DOM elements, but they have some differences in terms of their properties and methods
//HTMLCollection is a live collection of elements, meaning that if the DOM changes, the collection will automatically update to reflect those changes. NodeList is a static collection of elements, meaning that it does not automatically update when the DOM changes
//HTMLCollection is an array-like object, meaning that it has a length property and can be accessed using index notation, but it does not have all the methods of an array. NodeList is also an array-like object, but it has some additional methods like forEach, entries, keys, and values
//HTMLCollection is returned by methods like getElementsByClassName, getElementsByTagName, and getElementsByName. NodeList is returned by methods like querySelectorAll and childNodes
//select heading of a page and channge its text content to "Hello sankhi kaisi ho?"
//let h1=documentquerySelector("#h1");
//h1.textContent="Hello sankhi kaisi ho?";
//select all the paragraphs of a page and change their text content to "Hello sankhi kaisi ho?"
//let p=document.querySelectorAll("p");
//p.forEach(function(paragraph){
//    paragraph.textContent="Hello sankhi kaisi ho?";
//});
//select all the links of a page and change their href attribute to "https://www.youtube.com/"
//let a=document.querySelectorAll("a"); 
//a.forEach(function(link){
//    link.setAttribute("href", "https://www.youtube.com/");
//});
//select all <li> elements and print their text using loop 
//let li=document.querySelectoryAll("li");
//li.forEach(function(listItem){
// console.log(listItem.textConetent);});
//when should you use textContent instead of innerHTML?
//You should use textContent when you want to get or set the text content of an element without any HTML tags. It is faster and more secure than innerHTML, as it does not parse the HTML and does not allow for script injection. Use innerHTML when you need to get or set the HTML content of an element, including any child elements and their attributes.

