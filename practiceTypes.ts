interface IPoints {
    x: number;
    y: number;
}

class Punto implements IPoints {
    x: number;
    y: number;
    p1:object
    p2:object

    constructor(p1:{x:number,y:number},p2:{x:number,y:number}) {
        this.p1=p1
        this.p2=p2

    }
    puntos(){
        let op1=this.p2['x']-this.p1['x'];
        let op2=this.p2['y']-this.p1['y'];
        return Math.sqrt(Math.pow(op1,2)+Math.pow(op2,2));

    }
}

let puntoEX = new Punto({x:1,y:2},{x:3,y:4})
console.log(puntoEX.puntos())


