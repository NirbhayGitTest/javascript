class Encapsulation {

    #demo = "ABC"    // to make anyting private in javascript ,, we use # 

    get getData(){
        return this.#demo
    }

    set modifyData(value){
        this.#demo = value
    }

}

let en = new Encapsulation()


console.log(en.getData);
en.modifyData = "XYZ"
console.log(en.getData);  //After modifying the data by using setter

