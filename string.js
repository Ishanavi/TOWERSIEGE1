class String
{
    constructor(bodyA,pointB)
    {
        var options = 
        {
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.04
        }

        this.pointB = pointB
        this.string = Constraint.create(options)
        World.add(world,this.string)
    }

    display()
    {
        if(this.string.bodyA)
        {
        var pointA = this.string.bodyA.position
        var pointB = this.pointB
        push();
        stroke(255,245,0)
        strokeWeight(4)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop();
        }
    }

    fly()
    {
        this.string.bodyA = null
    }
}