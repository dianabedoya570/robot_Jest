
const { createRobot}= require("./index")

describe("turnRight",()=>{
    it("Should upload robot orientation went it turnRight",()=>{
        const result = createRobot(1,1,'N');
        result.turnRight();
        expect(result.getPosition()).toMatchObject({orientation:'E'})
    })
   it("Should upload robot orientation went it turnRight",()=>{
        const result = createRobot(1,1,'E');
        result.turnRight();
        expect(result.getPosition()).toMatchObject({orientation:'S'})
    })
    it("Should upload robot orientation went it turnRight",()=>{
        const result = createRobot(1,1,'S');
        result.turnRight();
        expect(result.getPosition()).toMatchObject({orientation:'W'})
    })
    it("Should upload robot orientation went it turnRight",()=>{
        const result = createRobot(1,1,'W');
        result.turnRight();
        expect(result.getPosition()).toMatchObject({orientation:'N'})
    })
 });

 describe("turnLeft",()=>{
    it("Should upload robot orientation went it turnLeft",()=>{
        const result = createRobot(1,1,'N');
        result.turnLeft();
        expect(result.getPosition()).toMatchObject({orientation:'W'})
    })
   it("Should upload robot orientation went it turnLeft",()=>{
        const result = createRobot(1,1,'E');
        result.turnLeft();
        expect(result.getPosition()).toMatchObject({orientation:'N'})
    })
    it("Should upload robot orientation went it turnLeft",()=>{
        const result = createRobot(1,1,'S');
        result.turnLeft();
        expect(result.getPosition()).toMatchObject({orientation:'E'})
    })
    it("Should upload robot orientation went it turnLeft",()=>{
        const result = createRobot(1,1,'W');
        result.turnLeft();
        expect(result.getPosition()).toMatchObject({orientation:'S'})
    })
 });

 describe("advance",()=>{
    it("Should upload robot position went it advance to W, recognice an error",()=>{
        const result = createRobot(0,0,'W');
        const resp= result.advance();
        expect(resp).toBe("fuera de los limites establecidos");
    })
   it("Should upload robot position went it advance to S, recognice an error",()=>{
        const result = createRobot(0,0,'S');
        const resp= result.advance();
        expect(resp).toBe("fuera de los limites establecidos");
    })
    it("Should upload robot position went it advance to N, recognice an error",()=>{
        const result = createRobot(10,10,'N');
        const resp= result.advance();
        expect(resp).toBe("fuera de los limites establecidos");
    })
    it("Should upload robot position went it advance to E, recognice an error",()=>{
        const result = createRobot(10,10,'E');
        const resp= result.advance();
        expect(resp).toBe("fuera de los limites establecidos");
    })

    it("Should upload robot position went it advance to W",()=>{
        const result = createRobot(5,5,'W');
        const resp= result.advance();
        expect(resp).toBe("ok");
	    expect(result.getPosition()).toMatchObject({x:4 ,y:5});
    })
    it("Should upload robot position went it advance to N",()=>{
        const result = createRobot(5,5,'N');
        const resp= result.advance();
        expect(resp).toBe("ok");
	expect(result.getPosition()).toMatchObject({x:5 ,y:6});
    })
    it("Should upload robot position went it advance to S",()=>{
        const result = createRobot(5,5,'S');
        const resp= result.advance();
        expect(resp).toBe("ok");
	expect(result.getPosition()).toMatchObject({x:5 ,y:4});
    })
    it("Should upload robot position went it advance to E",()=>{
        const result = createRobot(5,5,'E');
        const resp= result.advance();
        expect(resp).toBe("ok");
	expect(result.getPosition()).toMatchObject({x:6 ,y:5});
    })


 });

 describe("instructions",()=>{
    it("Should upload robot position in a rout",()=>{
        const result = createRobot(1,1,'N');
        result.instructions("AARAALAAL");
        expect(result.getPosition()).toMatchObject({x:3,y:5,orientation:'W'})
    })
   
    it("Should upload robot position in a rout",()=>{
        const result = createRobot(10,5,'S');
        result.instructions("AARAALAALA");
        expect(result.getPosition()).toMatchObject({x:9,y:1,orientation:'W'})
    })
 });
