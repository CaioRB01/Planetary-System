let mercurio, venus, terra, marte, jupiter, saturno, urano, netuno, plutao, lua, sol;

function setup(){
    createCanvas(640, 480, WEBGL);
    sol = new sphere(0, 0, 0, 50, 25, 25);
    mercurio = new sphere(138, 0, 0, 0.766, 20, 20);
    venus = new sphere(188, 0, 0, 1.898, 20, 20);
    terra = new sphere(229, 0, 0, 2, 20, 20);
    lua = new sphere(232, 0, 0, 0.5448, 20, 20);
    marte = new sphere(308, 0, 0, 1.064, 20, 20);
    jupiter = new sphere(858, 0, 0, 22.42, 20, 20);
    saturno = new sphere(1480, 0, 0, 18.9, 20, 20);
    urano = new sphere(2580, 0, 0, 8.02, 20, 20);
    netuno = new sphere(4580, 0, 0, 7.76, 20, 20);
    plutao = new sphere(5980, 0, 0, 0.372, 20, 20);

    createEasyCam();
}

function draw(){
    background(0);
    sol.setColor('#d67230')
    sol.draw();

    mercurio.setColor('#7e6e60');
    mercurio.draw();
    mercurio.rotateZ(20);

    venus.setColor('#f4a32d');
    venus.draw();
    venus.rotateZ(8);

    terra.setColor('#0047ab');
    terra.draw();
    terra.rotateZ(5);

    lua.setColor('#636363');
    lua.draw();
    lua.rotateZ(5);

    marte.setColor('#ba2509');
    marte.draw();
    marte.rotateZ(2.5);

    jupiter.setColor('#bdbab4');
    jupiter.draw();
    jupiter.rotateZ(0.4);

    saturno.setColor('#605640');
    saturno.draw();
    saturno.rotateZ(0.16);

    urano.setColor('#b3d9dc');
    urano.draw(0.05);

    netuno.setColor('#4972fe');
    netuno.draw();
    netuno.rotateZ(0.03);

    plutao.setColor('#eccdb1')
    plutao.draw();
    plutao.rotateZ(0.02);
}
