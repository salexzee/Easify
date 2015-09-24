(function(global){"use strict";var validateArray,validateString,validateNum,randomNumberFromItemLength,randomLetter,randomNumberAsString,randomSpecialChar;randomNumberFromItemLength=function(item){return Math.floor(Math.random()*item.length)};validateArray=function(arr){if(Array.isArray(arr)===true){return true}return false};validateString=function(str){if(!str){return false}if(typeof str==="string"){return true}else{return false}};validateNum=function(num){if(typeof num!=="number"){return false}return true};randomLetter=function(){var letters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];return letters[randomNumberFromItemLength(letters)]};randomNumberAsString=function(){return String(Math.ceil(Math.random()*9))};randomSpecialChar=function(){var specials=["!","@","#","$","%","&","*"];return specials[randomNumberFromItemLength(specials)]};var Easify=function(){return new Easify.init};Easify.VERSION="0.8.1";Easify.init=function(){var self=this};Easify.prototype={cap:function(str){if(validateString(str)){var strList=str.split("");strList[0]=strList[0].toUpperCase();str=strList.join("");return str}else{return false}},downcase:function(str){if(validateString(str)){return str.toLowerCase()}else{return false}},string:function(str){return validateString(str)},last:function(str){if(validateString(str)){return str[str.length-1]}else{return false}},password:function(len){var length=len||12;if(validateNum(length)){var password="";var possibilities=[randomLetter,randomSpecialChar,randomNumberAsString];for(var i=0;i<length;i++){password+=possibilities[randomNumberFromItemLength(possibilities)]()}return password}else{return false}},remove:function(str,amount){if(validateString(str)&&validateNum(amount)){if(amount>str.length){amount=str.length}var arr=str.split("");var newString="";var num;for(var i=0;i<amount;i++){num=randomNumberFromItemLength(arr);arr.splice(num,1)[0]}newString=arr.join("");return newString}else{return false}},removeAll:function(str,letter){if(validateString(str)&&validateString(letter)){if(letter.length!==1){return false}var newString;var arr=str.split("");for(var i=0;i<arr.length;i++){if(arr[i]===letter){arr.splice(i,1);i=i-1}}newString=arr.join("");return newString}else{return false}},randomize:function(str){if(validateString(str)){var arr=str.split("");var newString="";var num;while(arr.length>0){num=randomNumberFromItemLength(arr);newString+=arr[num];arr.splice(num,1)}return newString}else{return false}},randomcase:function(str){if(validateString(str)){var arr=str.split("");var newString="";for(var i=0;i<arr.length;i++){if(Math.round(Math.random()*1)===1){newString+=arr[i].toLowerCase()}else{newString+=arr[i].toUpperCase()}}return newString}else{return false}},repeat:function(str,count){if(validateString(str)&&validateNum(count)){var repeatedString="";for(var i=0;i<count;i++){repeatedString+=str}return repeatedString.trim()}else{return false}},reverse:function(str){if(validateString(str)){var arr=str.split("");arr=arr.reverse();var newString=arr.join("");return newString}else{return false}},trim:function(str){if(validateString(str)){return str.trim()}else{return false}},upcase:function(str){if(validateString(str)){return str.toUpperCase()}else{return false}},format:function(str,o){if(validateString(str)){return str.replace(/{([^{}]*)}/g,function(a,b){var r=o[b];return typeof r==="string"||typeof r==="number"?r:a})}else{return false}},wrap:function(str,element){if(validateString(str)&&validateString(element)){return"<"+element+">"+str+"</"+element+">"}else{return false}},bridge:function(arr1,arr2){if(validateArray(arr1)&&validateArray(arr2)){var newArr=arr1;for(var i=0;i<arr2.length;i++){newArr.push(arr2[i])}return newArr}else{return false}},unify:function(arr1,arr2){var newArr=arr1.concat(arr2.filter(function(i){return arr1.indexOf(i)<0}));return newArr},checkTypes:function(arr){if(validateArray(arr)){var returnedArray=[];for(var i=0;i<arr.length;i++){returnedArray.push(this.checkType(arr[i]))}return returnedArray}else{return false}},has:function(arr,value){if(validateArray(arr)){var isIn=false;for(var i=0;i<arr.length;i++){if(arr[i]===value){isIn=true}}return isIn}else{return false}},array:function(arr){if(validateArray(arr)){return true}else{return false}},parlay:function(arr,indexes){if(validateArray(arr)){for(var i=0;i<indexes.length;i++){if(!validateNum(indexes[i])){return false}}var newArr=[];for(var i=0;i<indexes.length;i++){if(indexes[i]<arr.length){newArr.push(arr[indexes[i]])}}return newArr}else{return false}},removeItem:function(arr,index){if(validateArray(arr)&&validateNum(index)){var newArray=[];for(var i=0;i<arr.length;i++){if(i!==index){newArray.push(arr[i])}}return newArray}else{return false}},shuffle:function(arr){if(validateArray(arr)){var inputArr=arr;var newArr=[];var num;while(inputArr.length>0){num=randomNumberFromItemLength(inputArr);newArr.push(inputArr[num]);this.removeItem(inputArr,num)}return newArr}else{return false}},stray:function(arr){if(validateArray(arr)){return arr[randomNumberFromItemLength(arr)]}else{return false}},combine:function(obj1,obj2){if(this.isObject(obj1)&&this.isObject(obj2)){var keys1=Object.keys(obj1);var keys2=Object.keys(obj2);var newObj={};for(var i=0;i<keys1.length;i++){newObj[keys1[i]]=obj1[keys1[i]]}for(var i=0;i<keys2.length;i++){newObj[keys2[i]]=obj2[keys2[i]]}return newObj}else if(this.array(obj1)){var newObj={};for(var i=0;i<obj1.length;i++){var keys=Object.keys(obj1[i]);for(var j=0;j<keys.length;j++){newObj[keys[j]]=obj1[i][keys[j]]}}return newObj}return},drop:function(obj,dropKeys){if(this.isObject(obj)&&validateArray(dropKeys)){var keys=Object.keys(obj);for(var i=0;i<keys.length;i++){if(this.has(dropKeys,keys[i])){delete obj[keys[i]]}}}},isObject:function(obj){if(validateArray(obj)){return false}else if(obj===null){return false}else if(typeof obj==="object"){return true}else{return false}},keys:function(obj){if(this.isObject(obj)){return Object.keys(obj)}else{return false}},maintain:function(obj,mKeys){if(this.isObject(obj)&&validateArray(mKeys)){var keys=Object.keys(obj);var newObj={};for(var i=0;i<keys.length;i++){if(this.has(mKeys,keys[i])){newObj[keys[i]]=obj[keys[i]]}}return newObj}else{return false}},objectPush:function(obj,property,value){if(this.isObject(obj)&&validateString(property)){obj[property]=value;return{property:value}}else{return false}},proto:function(obj){return obj.__proto__},rename:function(obj,original,update){if(this.isObject(obj)&&validateString(original)&&validateString(update)){var keys=Object.keys(obj);var newObj={};if(keys.indexOf(original)!==-1){var index=keys.indexOf(original);for(var i=0;i<keys.length;i++){if(keys[i]!==original){newObj[keys[i]]=obj[keys[i]]}else{newObj[update]=obj[original]}}}else{return}return newObj}else{return false}},clone:function(obj){if(this.isObject(obj)){var copy=obj.constructor();for(var attr in obj){if(obj.hasOwnProperty(attr)){copy[attr]=obj[attr]}}return copy}else{return false}},size:function(obj){if(this.isObject(obj)){return Object.keys(obj).length}else{return false}},toArray:function(obj){if(this.isObject(obj)){var keys=Object.keys(obj);var mainArr=[];for(var i=0;i<keys.length;i++){mainArr.push([keys[i],obj[keys[i]]])}return mainArr}else{return false}},values:function(obj){if(this.isObject(obj)){var keys=Object.keys(obj);var arr=[];for(var i=0;i<keys.length;i++){arr.push(obj[keys[i]])}return arr}else{return false}},insertHTML:function(selectorType,selector,input,amount){if(validateString(selectorType)&&validateString(selector)&&validateString(input)){var element;var elements=[];var num=0;if(selectorType.toLowerCase()==="id"){element=document.getElementById(selector);element.innerHTML=input}else if(selectorType.toLowerCase()==="class"){if(validateNum(amount)){num=amount}elements=document.getElementsByClassName(selector);for(var i=0;i<(amount||elements.length);i++){if(i===elements.length){break}element=elements[i];element.innerHTML=input}}else{throw'You must pass either "id" or "class" as the selectorType argument to insertHTML function.'}return true}throw"insertHTML arguments are invalid.";return false},id:function(id){return document.getElementById(id)},className:function(classname){return document.getElementsByClassName(classname)},tagName:function(tag){return document.getElementsByTagName(tag)},name:function(name){return document.getElementsByName(name)},compare:function(d1,d2){if(validateArray(d1)&&validateArray(d2)){if(JSON.stringify(d1)===JSON.stringify(d2)){return true}else{return false}}else if(this.isObject(d1)&&this.isObject(d2)){var arr1=this.toArray(d1);var arr2=this.toArray(d2);if(JSON.stringify(arr1)===JSON.stringify(arr2)){return true}else{return false}}else{if(d1===d2){return true}else{return false}}},equal:function(a,b){return a===b},notEqual:function(a,b){return a!==b},similar:function(a,b){return a==b},notSimilar:function(a,b){return a!=b},truthy:function(a){if(a){return true}else{return false}},falsey:function(a){if(!a){return true}else{return false}},ifTrue:function(comparison,callback){if(comparison){callback()}else{return false}},ifFalse:function(comparison,callback){if(!comparison){callback()}else{return false}},type:function(a){if(Array.isArray(a)===true){return"array"}else if(a===null){return"null"}else{switch(typeof a){case"string":return"string";case"number":return"number";case"boolean":return"boolean";case"function":return"function";case"object":return"object";case"undefined":return"undefined";default:return null}}},methods:function(){return Object.keys($E.prototype)},methodCount:function(){return this.methods().length},add:function(a,b){if(validateNum(a)&&validateNum(b)){return a+b}else if(this.array(a)){var val=0;for(var i=0;i<a.length;i++){if(validateNum(a[i])){val+=a[i]}}return val}else{return false}},subtract:function(a,b){if(validateNum(a)&&validateNum(b)){return a-b}else if(this.array(a)){var val=a[0];for(var i=1;i<a.length;i++){if(validateNum(a[i])){val-=a[i]}}return val}else{return false}},multiply:function(a,b){if(validateNum(a)&&validateNum(b)){return a*b}else if(this.array(a)){var val=a[0];for(var i=1;i<a.length;i++){if(validateNum(a[i])){val*=a[i]}}return val}else{return false}},divide:function(a,b){if(validateNum(a)&&validateNum(b)){return a/b}else if(this.array(a)){var val=a[0];for(var i=1;i<a.length;i++){if(validateNum(a[i])){val/=a[i]}}return val}else{return false}},number:function(num){return validateNum(num)},odd:function(num){if(validateNum(num)){if(num%2!==0){return true}else{return false}}else{return false}},even:function(num){if(validateNum(num)){if(num%2===0){return true}else{return false}}else{return false}},PI:function(){return Math.PI},random:function(num){if(validateNum(num)){return Math.floor(Math.random()*num)+1}else{return false}},between:function(a,b){if(validateNum(a)&&validateNum(b)){if(a<b){var num=Math.floor(Math.random()*b)+1;while(num<a||num>b){num=Math.floor(Math.random()*b)+1}return num}else if(b<a){var num=Math.floor(Math.random()*a)+1;while(num<b||num>a){num=Math.floor(Math.random()*a)+1}return num}else{return Math.floor(a)}}else{return false}},bw:function(){var bw=["Fuck","Shit","Motherfucker","Ass","Asshole","Bitch"];var word=bw[randomNumberFromItemLength(bw)];document.body.innerHTML='<h1 style="font-weight: bold; text-align: center; font-size: 10em; margin-top: 100px; font-family: sans-serif;">'+word+"</h1>";return word}};Easify.init.prototype=Easify.prototype;global.Easify=global.$E=Easify;console.log("Easify loaded!")})(window);