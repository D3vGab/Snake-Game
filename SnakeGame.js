window.onload = function(){
            
    var canvas, ctx, pecas = 20;
   
    canvas = document.createElement("canvas");
    canvas.width = 600;
    canvas.height = 600;
    ctx = canvas.getContext("2d");

    document.body.appendChild(canvas);
    document.addEventListener("keydown", keyPush);

        setInterval(game, 80);

        const vel = 1;
        var velX = velY = 0;
        var pontoX = pontoY = 10;
        var tamPeca = 20;
        var qntPeca = 30;
        var aX = aY = 15;

        var trail = [];
        tail = 5;

    function game(){

        pontoX += velX;
        pontoY += velY;

        if(pontoX < 0){
            pontoX = qntPeca -1;
        }
        if(pontoX > qntPeca -1){
            pontoX = 0;
        }
        if(pontoY < 0){
            pontoY = qntPeca -1;
        }
        if(pontoY > qntPeca -1){
            pontoY = 0;
        }

        ctx.fillStyle = "#000";
        ctx.fillRect(0,0, canvas.width, canvas.height);
        ctx.fillStyle = "red";
        ctx.fillRect(aX * tamPeca, aY * tamPeca, tamPeca, tamPeca);

        ctx.fillStyle = "gray";
        for(var i=0; i<trail.length; i++){
            ctx.fillRect(trail[i].x * tamPeca, trail[i].y * tamPeca, tamPeca -1, tamPeca-1);

            if(trail[i].x == pontoX && trail[i].y == pontoY){
                velX = velY = 0;
                tail = 5;
            }
        }
        trail.push({x: pontoX, y: pontoY});
            while(trail.length > tail){
                trail.shift();
            }
        if(aX == pontoX && aY == pontoY){
            tail++;

            aX = Math.floor(Math.random() * qntPeca);
            aY = Math.floor(Math.random() * qntPeca);
        }
    }
        function keyPush(event){
            switch (event.keyCode) {
                case 37: // Left
                    velX = -vel;
                    velY = 0;
                    break;
                case 38: // Up
                    velX = 0;
                    velY = -vel;
                    break;
                case 39: // Right
                    velX = vel;
                    velY = 0;
                    break;
                case 40: // Down
                    velX = 0;
                    velY = vel;
                    break;
            
                default:
                    break;
            }
        }
    }