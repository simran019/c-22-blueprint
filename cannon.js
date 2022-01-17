class Cannon
{
    //tube-like structure
    //x,y,w,h
    constructor(x,y,w,h)
    {
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;

        this.cannonImage=loadImage("assets/canon.png");
        this.cannonBaseImage=loadImage("assets/cannonBase.png");

        this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,rectangles_options);
        World.add(world,this.body); 
    }
    show()
    {
        //top
       imageMode(CENTER);
       image(this.cannonImage,this.body.position.x,this.body.position.y,this.w,this.h);
        //bottom
        imageMode(CENTER);
        image(this.cannonBaseImage,110,110,250,200);
    }
}