class LinearAlgebra {

    tranpose(a) {
        let c;

        if(a instanceof Vector) {
            c = new Vector(a.dim);
            c.cols = a.rows
            c.rows = a.cols
            c.elements = a.elements

            for(let i = 1; i <= c.dim; i++) {
                c.set(i, a.get(i));
            }

        } else if(a instanceof Matrix) {
            c = new Matrix(a.cols, a.rows);
        
            for(let i = 1; i <= c.rows; i++) {
                for(let j = 1; j <= c.cols; j++) {
                    c.set(i, j, a.get[j, i]);
                }
            }
        } else {
            throw new Error("O parametro deve ser um objeto de classe Vector ou da classe Matrix.")
        }
        

        return c;
    }

    sum(a, b) {

        if(!(a instanceof Matriz) || !(b instanceof Matriz)){
            throw new Error("Os parametros devem ser objetos da mesma calsse Vector ou da classe Matriz");
        }
        
        if(a.rows != b.rows || a.cols != b.cols){
            throw new Error("As matrizes não possuem a mesma dimensão")
        }

        let c;

        if(a instanceof Vector && b instanceof Vector){
            c = new Vector(a.dim);
            c.rows = a.rows
            c.cols = a.cols

            for(let i = 1; i<=a.rows; i++){
                    c.set(i, a.get(i) + b.get(i))
            }
        }else if(a instanceof Matrix && b instanceof Matrix){
            c = new Matrix(a.rows, a.cols);
        
            for(let i = 1; i <= a.rows; i++) {
                for(let j = 1; j <= a.cols; j++) {
                    c.set(i, j, a.get(i, j) + b.get(i, j))
                }
            }
        }else {
            throw new Error("Os parametros deve ser objetos de classe Vector ou da classe Matrix.")
        }
        
        return c
    }

    times(a, b) {
        
        let c;
        
        if( typeof(a) == "number") {

            if(!(b instanceof Matriz)){
                throw new Error("O parametro deve ser um objeto da mesma calsse Vector ou da classe Matriz");
            }

            if(!(b instanceof Matriz)){
                throw new Error("O parametro B deve ser um objeto da classe Vector ou da classe Matriz.")
            }

            if(b instanceof Vector) {

                c = new Vector(b.dim);
                c.rows = b.rows
                c.cols = b.cols

                for(let i = 1; i<=b.rows; i++){
                        c.set(i, j, a * b.get(i))
                    }

            }else if (b instanceof Matriz) {

                c = new Matriz(b.rows, b.cols);

                for(let i = 1; i<=b.rows; i++){
                    for(let j = 1; j<=b.cols; j++){
                        c.set(i, j, a * b.get(i, j))
                    }
                }
            }

        } else {

            if(!(a instanceof Matriz) || !(b instanceof Matriz)){
                throw new Error("Os parametros devem ser objetos da mesma calsse Vector ou da classe Matriz");
            }

            if(a.rows != b.rows || a.cols != b.cols){
            throw new Error("As matrizes não possuem a mesma dimensão")
            }

            if(a instanceof Vector && b instanceof Vector){
            c = new Vector(a.dim);
            c.rows = a.rows
            c.cols = a.cols

            for(let i = 1; i<=a.rows; i++){
                for(let j = 1; j<=a.cols; j++){
                    c.set(i, j, a.get(i, j) * b.get(i, j))
                }
            }

            }
        }

        return c
    }

    dot(a, b){

        if(!(a instanceof Matriz) || !(b instanceof Matriz)){
            throw new Error("Os parâmetros devem ser objetos da classe vetor e matrix.")
        }

        if(a.cols != b.rows){
            throw new Error("A quantidade de linhas da matriz A não é igual a quantidade de colunas da matriz B.")
        }

        let c;

        if(a instanceof Vector && b instanceof Vector){
            c = 0;
            for(let i = 1; i <= a.dim; i++){
                c = c + a.get(i) * b.get(i); 
            }
        }else{
            c = new Matriz(a.rows, b.cols)

            for (let i = 1; i <= a.rows; i++){
                for (let j = 1; j <= b.cols; j++){
                    for (let k = 1; k <= a.cols; k++){
                        c.set(i, j, c.get(i,j) + a.get(i, k) * b.get(k, j))
                    }
                }
            }
        }

        return c
    }

    gauss(a){

        // Checando parametro
        if(a.cols <= 1 || a.rows <= 1 ){
            throw new Error("O parametro A deve ser um objeto da classe Matriz")
        }
        if(!(a instanceof Matriz)){
            throw new Error("O parametro A deve ser um objeto da classe Matriz")
        }

        // Declarando variaveis
        let c = new Matriz(a.rows, a.cols)
        let trocaLinha;
        let pivo;
        let backup;
        

        // Setando Matriz
        for(let i = 1; i <= a.rows; i++){
            for(let j = 1; j <= a.cols; j++){
                c.set(i,j, a.get(i,j))
            }
        }

        // Inicializção do Pivo
        for (let i = 1; i <= c.cols - 1 && i <= c.rows; i++) {
            pivo = Math.abs(c.get(i, i))
            backup = i

            // Procurar o maior Pivo
            for(let x = i + 1; x <= c.rows; x++){
                if(pivo < Math.abs(c.get(x, i))){
                    pivo = Math.abs(c.get(x, i))
                    backup = x
                }
            }

            // Trocar linhas
            for(let y = 1; y <= c.cols; y++){
                trocaLinha = c.get(i,y)
                c.set(i, y, c.get(backup,y))
                c.set(backup, y, trocaLinha)
            }

            // Zerar elementos abaixo
            for(let z = i + 1; z <= c.rows; z++){
                
                // Calculo da constante
                let k = -1 * c.get(z, i)/c.get(i, i)
                
                for(let w = 1; w <= c.cols; w++){
                    c.set(z, w, c.get(z, w) + (c.get(i,w) * k))
                }
            }
        }
        return c
    }

    solve(a){
        let c = this.gauss(a)
        let i;

        if(c.rows < c.cols){
            i = c.rows
        }else if(c.rows >= c.cols){
            i = c.cols-1
        }

        // Zerar elementos acima
        for(;i >= 1 ;i--){

            for(let x = i - 1; x >= 1; x--){

                // Calcular a constante
                let k = -1 * c.get(x, i)/c.get(i, i)
                for(let y = i; y <= c.cols; y++){
                    c.set(x, y, c.get(x, y) + (c.get(i, y) * k))
                }
            
            }

            // Transformar a diagonal em 1
            let z = 1/c.get(i,i)
            for(let w = i; w <= c.cols; w++){
                c.set(i,w, parseFloat((c.get(i,w) * z).toFixed()))
            }
        }
        return c
    }

    det(matriz){
        if(matriz.cols == 1){
            let det = matriz.get(1,1)
        }else{
            let c = this.gauss(matriz)
            for(let i = 1; i <= matriz.cols; i++){
                let det = det * c.get(1,1)
            }
        }
        return det
    }

    inverse(a){
		if(typeof a!="object" || !(a instanceof Matriz)){
			throw "A should be a matrix"
		}
		if(a.cols!=a.rows){
			throw "matrix dimensions are incompatible with this process"
		}

		let ma= new Matriz(a.rows, a.cols*2)
		for(var r=1; r<=a.rows; r++){
			for(var c=1; c<=a.cols*2; c++){
				if(c<=a.cols){
					ma.set(r, c, a.get(r, c));
				}
				else if((c-a.rows)==r){
					ma.set(r, c, 1);
				}
			}
		}
    }
}