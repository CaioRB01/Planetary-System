class parallelogram{

    constructor(x, y, z, w, h, l){
        this.points = [];

        this.points.push(new Vector(3, [x, y, z]));
        this.points.push(new Vector(3, [x + w, y, z]));
        this.points.push(new Vector(3, [x+w, y+h, z]));
        this.points.push(new Vector(3, [x, y+h, z]));

        this.points.push(new Vector(3, [x, y, z+l]));
        this.points.push(new Vector(3, [x+w, y, z+l]));
        this.points.push(new Vector(3, [x+w, y+h, z+l]));
        this.points.push(new Vector(3, [x, y+h, z+l]));
        this.color = '#000000'
        this.t = new tranformations();
    }

    setColor(newColor){
        this.color= newColor;
    }

    translate(dx, dy, dz){
        for(let i = 0; i < this.points.length; i++){
            this.points[i]= this.t.translate3D(this.points[i], dx, dy, dz);
        }
    }

    rotationX(ang){
        for(let i = 0; i < this.points.length; i++){
            this.points[i] = this.t.rotation3DX(this.points[i], ang);
        }
    }

    rotationY(ang){
        for(let i = 0; i < this.points.length; i++){
            this.points[i] = this.t.rotation3DY(this.points[i], ang);
        }
    }

    rotationZ(ang){
        for(let i = 0; i < this.points.length; i++){
            this.points[i] = this.t.rotation3DZ(this.points[i], ang);
        }
    }

    draw(){

        fill(this.color);
        beginShape(TRIANGLES);
        //frente
        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3));
        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));

        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));
        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));

        //costas
        vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3));
        vertex(this.points[5].get(1), this.points[5].get(2), this.points[5].get(3));
        vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3));

        vertex(this.points[5].get(1), this.points[5].get(2), this.points[5].get(3));
        vertex(this.points[6].get(1), this.points[6].get(2), this.points[6].get(3));
        vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3));

        //esquerda
        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3));
        vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3));
        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));

        vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3));
        vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3));
        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));

        //direita
        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
        vertex(this.points[5].get(1), this.points[5].get(2), this.points[5].get(3));
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));

        vertex(this.points[5].get(1), this.points[5].get(2), this.points[5].get(3));
        vertex(this.points[6].get(1), this.points[6].get(2), this.points[6].get(3));
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));

        //baixo
        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3));
        vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3));
        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));

        vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3));
        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
        vertex(this.points[5].get(1), this.points[5].get(2), this.points[5].get(3));

        //topo
        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));
        vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3));
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));

        vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3));
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));
        vertex(this.points[6].get(1), this.points[6].get(2), this.points[6].get(3));

        endShape(CLOSE);
    }

}

class plane{

    constructor(x, y, z, w, h, l){
        this.points = [];

        this.points.push(new Vector(3, [x, y, z]));
        this.points.push(new Vector(3, [x+w, y, z]));
        this.points.push(new Vector(3, [x, y+h, z]));
        this.points.push(new Vector(3, [x+w, y+h, z]));

        this.points.push(new Vector(3, [x, y, z+l]));
        this.points.push(new Vector(3, [x+w, y, z+l]));
        this.points.push(new Vector(3, [x+w, y+h, z+l]));
        this.points.push(new Vector(3, [x, y+h, z+l]));
        this.color = '#000000'
        this.t = new tranformations();
    }

    setColor(newColor){
        this.color = newColor;
    }

    translate(dx, dy, dz){
        for(let i = 0; i < this.points.length; i++){
            this.points[i] = this.t.translate3D(this.points[i], dx, dy, dz);
        }
    }

    rotationX(ang){
        for(let i = 0; i < this.points.length; i++){
            this.points[i] = this.t.rotation3DX(this.points[i], ang);
        }
    }

    rotationY(ang){
        for(let i = 0; i < this.points.length; i++){
            this.points[i] = this.t.rotation3DY(this.points[i], ang);
        }
    }

    rotationZ(ang){
        for(let i = 0; i < this.points.length; i++){
            this.points[i] = this.t.rotation3DZ(this.points[i], ang);
        }
    }

    draw(){
        fill(this.color)
        beginShape(TRIANGLES);

        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3));
        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));

        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));
        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3));

        endShape(CLOSE);
    }
}

class sphere{

    constructor(x, y, z, r, st, se){
        this.points = [];
        this.st = st;
        this.se = se;
        this.tr = new tranformations();
        this.stackStep = Math.PI/st;
        this.sectorStep = 2*Math.PI/se;

        for(let i = 0; i <= st; i++){

            var stackAng= Math.PI/2-i*this.stackStep;
            for(let j = 0; j <= se; j++){
                var secAng = j*this.sectorStep;

                var ex = (r*Math.cos(stackAng))*Math.cos(secAng);
                var uy = (r*Math.cos(stackAng))*Math.sin(secAng);
                var ze = r*Math.sin(stackAng);

                this.points.push(new Vector(3, [ex, uy, ze]));
            }
        }

        for(let d = 0; d < this.points.length; d++){
            this.points[d] = this.tr.translate3D(this.points[d], x, y, z);
        }
    }

    setColor(newColor){
        this.color = newColor;
    }
    setStroke(color){
        stroke(color);
    }
    translate(dx, dy, dz){
        for(let i = 0; i < this.points.length; i++){
            this.points[i]= this.tr.translate3D(this.points[i], dx, dy, dz);
        }
    }

    rotateX(ang){
        for(let i = 0; i < this.points.length; i++){
            this.points[i] = this.tr.rotation3DX(this.points[i], ang);
        }
    }

    rotateY(ang){
        for(let i = 0; i < this.points.length; i++){
            this.points[i] = this.tr.rotation3DY(this.points[i], ang);
        }
    }

    rotateZ(ang){
        for(let i = 0; i < this.points.length; i++){
            this.points[i] = this.tr.rotation3DZ(this.points[i], ang);
        }
    }

    draw(){
        fill(this.color);
        stroke(this.color);
        strokeWeight(0);
        beginShape(TRIANGLES);

        for(var i = 0; i < this.st; i++){
            var k1 = i*(this.se+1);
            var k2 = k1+this.se+1;

            for(var j = 0; j < this.se; j++, k1++, k2++){

                if(i != 0){
                    vertex(this.points[k1].get(1), this.points[k1].get(2), this.points[k1].get(3));
                    vertex(this.points[k2].get(1), this.points[k2].get(2), this.points[k2].get(3));
                    vertex(this.points[k1+1].get(1), this.points[k1+1].get(2), this.points[k1+1].get(3));
                }
                if(i != (this.st-1)){
                    vertex(this.points[k1+1].get(1), this.points[k1+1].get(2), this.points[k1+1].get(3));
                    vertex(this.points[k2].get(1), this.points[k2].get(2), this.points[k2].get(3));
                    vertex(this.points[k2+1].get(1), this.points[k2+1].get(2), this.points[k2+1].get(3));
                }
            }
        }
        endShape(CLOSE);
    }
}

class pyramid{

    constructor(x, y, z, w, h, hp){
        this.points = [];
        this.t = new tranformations();
        this.l = l;

        this.points.push(new Vector(3, [x, y, z]));
        this.points.push(new Vector(3, [x+w, y, z]));
        this.points.push(new Vector(3, [x, y+h, z]));
        this.points.push(new Vector(3, [x+w, y+h, z]));
        var prePoint= this.t.translate3D(this.points[0], w/2, h/2, 0)

        this.points.push(this.t.translate3D(prePoint, 0, 0, hp));
    }

    setColor(newColor){
        this.color= newColor;
    }

    translate(dx, dy, dz){
        for(let i = 0; i < this.points.length; i++){
            this.points[i] = this.t.translate3D(this.points[i], dx, dy, dz);
        }
    }

    rotateX(ang){
        for(let i = 0; i < this.points.length; i++){
            this.points[i] = this.t.rotation3DX(this.points[i], ang);
        }
    }

    rotateY(ang){
        for(let i = 0; i < this.points.length; i++){
            this.points[i] = this.t.rotation3DY(this.points[i], ang);
        }
    }

    rotateZ(ang){
        for(let i = 0; i < this.points.length; i++){
            this.points[i] = this.t.rotation3DZ(this.points[i], ang);
        }
    }

    draw(){
        fill(this.color);
        beginShape(TRIANGLES);

        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3));
        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));

        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));
        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));

        for(let a = 0; a < 4; a++){
            if(a < 3){
                vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3));
                vertex(this.points[a].get(1), this.points[a].get(2), this.points[a].get(3));
                vertex(this.points[a+1].get(1), this.points[a+1].get(2), this.points[a+1].get(3));
            }
            if(a == 3){
                vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3));
                vertex(this.points[a].get(1), this.points[a].get(2), this.points[a].get(3));
                vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3));
            }
        }

        endShape(CLOSE);
    }

}