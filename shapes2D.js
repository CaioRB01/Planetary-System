class rectangle{

    constructor(x, y, w, h){
        this.points = [];

        this.points.push(new Vector(2, [x, y]));
        this.points.push(new Vector(2, [x+w, y]));
        this.points.push(new Vector(2, [x+w, y+h]));
        this.points.push(new Vector(2, [x, y+h]));
        this.color = '#000000'
        this.t = new tranformations();
    }

    setColor(newColor){
        this.color = newColor;
    }

    translate(dx, dy){
        for(let i = 0; i < this.points.length; i++){
            this.points[i] = this.t.translate2D(this.points[i], dx, dy);
        }
    }

    rotate(ang){
        for(let i = 0; i < this.points.length; i++){
            this.points[i] = this.t.rotation2D(this.points[i], ang);
        }
    }

    draw(){

        strokeWeight(0)
        stroke(this.color)
        fill(this.color)
        beginShape(TRIANGLES);

        vertex(this.points[0].get(1), this.points[0].get(2));
        vertex(this.points[1].get(1), this.points[1].get(2));
        vertex(this.points[3].get(1), this.points[3].get(2));

        vertex(this.points[1].get(1), this.points[1].get(2));
        vertex(this.points[2].get(1), this.points[2].get(2));
        vertex(this.points[3].get(1), this.points[3].get(2));

        endShape(CLOSE);
    }

}

class line{

    constructor(x1, y1, x2 ,y2){
        this.points = [];

        this.points.push(new Vector(2,[x1, y1]));
        this.points.push(new Vector(2,[x2, y2]));
        this.color ='#000000'
        this.t = new tranformations();
    }

    setColor(newColor){
        this.color= newColor;
    }

    translate(dx, dy){
        for(let i = 0; i < this.points.length; i++){
            this.points[i] = this.t.translate2D(this.points[i], dx, dy);
        }
    }

    rotate(ang){
        for(let i = 0; i < this.points.length; i++){
            this.points[i]= this.t.rotation2D(this.points[i], ang);
        }
    }

    draw(){
        stroke(this.color);
        strokeWeight(1);
        beginShape(LINES);

        vertex(this.points[0].get(1), this.points[0].get(2));
        vertex(this.points[1].get(1), this.points[1].get(2));

        endShape();
    }
}

class triangle{

    constructor(x1, y1, x2, y2, x3, y3){
        this.points= [];

        this.points.push(new Vector(2, [x1, y1]));
        this.points.push(new Vector(2, [x2, y2]));
        this.points.push(new Vector(2, [x3, y3]));
        this.color = '#000000'
        this.t = new tranformations();
    }

    setColor(newColor){
        this.color = newColor;
    }

    translate(dx, dy){
        for(let i = 0; i < this.points.length; i++){
            this.points[i] = this.t.translate2D(this.points[i], dx, dy);
        }
    }

    rotate(ang){
        for(let i = 0; i < this.points.length; i++){
            this.points[i] = this.t.rotation2D(this.points[i], ang);
        }
    }

    draw(){

        strokeWeight(0)
        stroke(this.color)
        fill(this.color)
        beginShape(TRIANGLES);

        vertex(this.points[0].get(1), this.points[0].get(2));
        vertex(this.points[1].get(1), this.points[1].get(2));
        vertex(this.points[2].get(1), this.points[2].get(2));

        endShape(CLOSE);
    }
}

class circle{

    constructor(x, y, r, t){
        this.points = [];
        this.tr = new tranformations();
        this.t = t;
        this.ang = 360/this.t;

        this.points.push(new Vector(2, [0, 0]));
        this.points.push(new Vector(2, [0+r, 0]));

        for(let i = 1; i < t; i++){
            this.points.push(this.tr.rotation2D(this.points[i], this.ang));
        }

        for(let d = 0; d <= t; d++){
            this.points[d] = this.tr.translate2D(this.points[d], x, y);
        }
        
        this.color = '#000000'
    }

    setColor(newColor){
        this.color = newColor;
    }

    translate(dx, dy){
        for(let  i= 0; i < this.points.length; i++){
            this.points[i] = this.tr.translate2D(this.points[i], dx, dy);
        }
    }

    rotate(ang){
        for(let i = 0; i < this.points.length; i++){
            this.points[i] = this.tr.rotation2D(this.points[i], ang);
        }
    }

    draw(){

        strokeWeight(0);
        stroke(this.color)
        fill(this.color);
        beginShape(TRIANGLES);

        for(var a = 1; a <= this.t; a++){
            if(a < this.t){
                vertex(this.points[0].get(1), this.points[0].get(2));
                vertex(this.points[a].get(1), this.points[a].get(2));
                vertex(this.points[a+1].get(1), this.points[a+1].get(2));
            }
            else if(a == this.t){
                vertex(this.points[0].get(1), this.points[0].get(2));
                vertex(this.points[a].get(1), this.points[a].get(2));
                vertex(this.points[1].get(1), this.points[1].get(2));
            }
        }
        
        endShape(CLOSE);
    }
}