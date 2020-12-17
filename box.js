class Box 
{
    constructor(x,y)
    {
        var options =
        {
            'isStatic':false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

        this.red = random(0,255)
        this.green = random(0,255)
        this.blue = random(0,255)
        this.width = 40
        this.height = 40
        this.body = Bodies.rectangle(x,y,this.width,this.height,options)
        World.add(world,this.body)
    }

    display()
    {
        var pos = this .body.position
        push()
        fill(this.red,this.blue,this.green)
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height)
        pop()
    }
}