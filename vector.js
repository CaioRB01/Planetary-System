class Vector extends Matriz {

    constructor(dim, elements){
        super(dim, 1, elements)
        this.dim = dim
    }

    get(i){
        if(this.rows > this.cols){
            return super.get(i, 1)
        }else{
            return super.get(1, i)
        }
    }

    set(i, value){
        if(this.rows > this.cols){
            return super.set(i, 1, value)
        }else{
            return super.set(1, i, value)
        }
    }
}