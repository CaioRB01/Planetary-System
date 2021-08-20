class tranformations extends LinearAlgebra{
    reflection2DX(vector){
        let reflex = new Matriz(3,3,[-1,0,0,0,1,0,0,0,1])
        let c = new Vector(vector.dim+1)
        c.set(1,vector.get(1))
        c.set(2,vector.get(2))
        c.set(3,1)
        c = this.dot(reflex,c)
        
        let result = new Vector(vector.dim)

        result.set(1,c.get(1,1))
        result.set(2,c.get(2,1))

        return result
    }

    reflection2DY(vector){
        let reflex = new Matriz(3,3,[1,0,0,0,-1,0,0,0,1])
        let c = new Vector(vector.dim+1)
        c.set(1,vector.get(1))
        c.set(2,vector.get(2))
        c.set(3,1)
        c = this.dot(reflex,c)
        
        let result = new Vector(vector.dim)

        result.set(1,c.get(1,1))
        result.set(2,c.get(2,1))

        return result
    }

    reflection3DX(vector){
        let reflex = new Matriz(4,4,[-1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])
        let c = new Vector(vector.dim+1)
        c.set(1,vector.get(1))
        c.set(2,vector.get(2))
        c.set(3,vector.get(3))
        c.set(4,1)
        c = this.dot(reflex,c)
        
        let result = new Vector(vector.dim)

        result.set(1,c.get(1,1))
        result.set(2,c.get(2,1))
        result.set(3,c.get(3,1))

        return result
    }

    reflection3DY(vector){
        let reflex = new Matriz(4,4,[1,0,0,0,0,-1,0,0,0,0,1,0,0,0,0,1])
        let c = new Vector(vector.dim+1)
        c.set(1,vector.get(1))
        c.set(2,vector.get(2))
        c.set(3,vector.get(3))
        c.set(4,1)
        c = this.dot(reflex,c)
        
        let result = new Vector(vector.dim)

        result.set(1,c.get(1,1))
        result.set(2,c.get(2,1))
        result.set(3,c.get(3,1))

        return result
    }

    reflection3DZ(vector){
        let reflex = new Matriz(4,4,[1,0,0,0,0,1,0,0,0,0,-1,0,0,0,0,1])
        let c = new Vector(vector.dim+1)
        c.set(1,vector.get(1))
        c.set(2,vector.get(2))
        c.set(3,vector.get(3))
        c.set(4,1)
        c = this.dot(reflex,c)
        
        let result = new Vector(vector.dim)

        result.set(1,c.get(1,1))
        result.set(2,c.get(2,1))
        result.set(3,c.get(3,1))

        return result
    }

    projection2DX(vector){
        let shadow = new Matriz(3,3,[1,0,0,0,0,0,0,0,1])
        let c = new Vector(vector.dim+1)
        c.set(1,vector.get(1))
        c.set(2,vector.get(2))
        c.set(3,1)
        c = this.dot(shadow,c)

        let result = new Vector(vector.dim)

        result.set(1,c.get(1,1))
        result.set(2,c.get(2,1))

        return result
    }

    projection2DY(vector){
        let shadow = new Matriz(3,3,[0,0,0,0,1,0,0,0,1])
        let c = new Vector(vector.dim+1)
        c.set(1,vector.get(1))
        c.set(2,vector.get(2))
        c.set(3,1)
        c = this.dot(shadow,c)

        let result = new Vector(vector.dim)

        result.set(1,c.get(1,1))
        result.set(2,c.get(2,1))

        return result
    }

    projection3DX(vector){
        let shadow = new Matriz(4,4,[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1])
        let c = new Vector(vector.dim+1)
        c.set(1,vector.get(1))
        c.set(2,vector.get(2))
        c.set(3,vector.get(3))
        c.set(4,1)
        c = this.dot(shadow,c)

        let result = new Vector(vector.dim)

        result.set(1,c.get(1,1))
        result.set(2,c.get(2,1))
        result.set(3,c.get(3,1))

        return result
    }

    projection3DY(vector){
        let shadow = new Matriz(4,4,[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1])
        let c = new Vector(vector.dim+1)
        c.set(1,vector.get(1))
        c.set(2,vector.get(2))
        c.set(3,vector.get(3))
        c.set(4,1)
        c = this.dot(shadow,c)

        let result = new Vector(vector.dim)

        result.set(1,c.get(1,1))
        result.set(2,c.get(2,1))
        result.set(3,c.get(3,1))

        return result
    }

    projection3DZ(vector){
        let shadow = new Matriz(4,4,[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1])
        let c = new Vector(vector.dim+1)
        c.set(1,vector.get(1))
        c.set(2,vector.get(2))
        c.set(3,vector.get(3))
        c.set(4,1)
        c = this.dot(shadow,c)

        let result = new Vector(vector.dim)

        result.set(1,c.get(1,1))
        result.set(2,c.get(2,1))
        result.set(3,c.get(3,1))

        return result
    }

    roration2D(vector, angle){
        let rad = (angle*Math.PI)/180

        let rotation = new Matriz(3,3,[Math.cos(rad),-Math.sin(rad),0,Math.sin(rad),Math.cos(rad),0,0,0,1])
        let c = new Vector(vector.dim+1)
        c.set(1,vector.get(1))
        c.set(2,vector.get(2))
        c.set(3,1)
        c = this.dot(rotation,c)

        let result = new Vector(vector.dim)
        result.set(1,c.get(1,1))
        result.set(2,c.get(2,1))

        return result
    }

    rotation3DX(vector, angle){
        let rad = (angle*Math.PI)/180

        let rotation = new Matriz(4,4,[1,0,0,0,0,Math.cos(rad),-Math.sin(rad),0,0,Math.sin(rad),Math.cos(rad),0,0,0,0,1])
        let c = new Vector(vector.dim+1)
        c.set(1,vector.get(1))
        c.set(2,vector.get(2))
        c.set(3,vector.get(3))
        c.set(4,1)
        c = this.dot(rotation,c)

        let result = new Vector(vector.dim)
        result.set(1,c.get(1,1))
        result.set(2,c.get(2,1))
        result.set(3,c.get(3,1))

        return result
    }

    rotation3DY(vector, angle){
        let rad = (angle*Math.PI)/180

        let rotation = new Matriz(4,4,[Math.cos(rad),0,Math.sin(rad),0,0,1,0,0,-Math.sin(rad),0,Math.cos(rad),0,0,0,0,1])
        let c = new Vector(vector.dim+1)
        c.set(1,vector.get(1))
        c.set(2,vector.get(2))
        c.set(3,vector.get(3))
        c.set(4,1)
        c = this.dot(rotation,c)

        let result = new Vector(vector.dim)
        result.set(1,c.get(1,1))
        result.set(2,c.get(2,1))
        result.set(3,c.get(3,1))

        return result
    }

    rotation3DZ(vector, angle){
        let rad = (angle*Math.PI)/180

        let rotation = new Matriz(4,4,[Math.cos(rad),-Math.sin(rad),0,0,Math.sin(rad),Math.cos(rad),0,0,0,0,1,0,0,0,0,1])
        let c = new Vector(vector.dim+1)
        c.set(1,vector.get(1))
        c.set(2,vector.get(2))
        c.set(3,vector.get(3))
        c.set(4,1)
        c = this.dot(rotation,c)

        let result = new Vector(vector.dim)
        result.set(1,c.get(1,1))
        result.set(2,c.get(2,1))
        result.set(3,c.get(3,1))

        return result
    }

    translate2D(vector, dx, dy){

        let translate = new Matriz(3,3,[1,0,dx,0,1,dy,0,0,1])

        let c = new Vector(vector.dim+1)
        c.set(1,vector.get(1))
        c.set(2,vector.get(2))
        c.set(3,1)
        c = this.dot(translate,c)

        let result = new Vector(vector.dim)
        result.set(1,c.get(1,1))
        result.set(2,c.get(2,1))

        return result
    }

    translate3D(vector, dx, dy, dz){
        let translate = new Matriz(4,4,[1,0,0,dx,0,1,0,dy,0,0,1,dz,0,0,0,1])

        let c = new Vector(vector.dim+1)
        c.set(1,vector.get(1))
        c.set(2,vector.get(2))
        c.set(3,vector.get(3))
        c.set(4,1)
        c = this.dot(translate,c)

        let result = new Vector(vector.dim)
        result.set(1,c.get(1,1))
        result.set(2,c.get(2,1))
        result.set(3,c.get(3,1))

        return result
    }

    shearing(vector, kx, ky){
        let shearingX = new Matriz(3,3,[1,ky,0,0,1,0,0,0,1])
        let shearingY = new Matriz(3,3,[1,0,0,kx,1,0,0,0,1])
        let c = new Vector(vector.dim+1)
        c.set(1,vector.get(1))
        c.set(2,vector.get(2))
        c.set(3,1)

        if(ky != 0){
            c = this.dot(shearingX,c)
        }else if(kx != 0){
            c = this.dot(shearingY,c)
        }else if(ky != 0 && kx != 0){
            shearingX = this.dot(shearingX,shearingY)
            c = this.dot(shearingX,c)
        }
        let result = new Vector(vector.dim)

        result.set(1,c.get(1,1))
        result.set(2,c.get(2,1))

        return result
    }
}