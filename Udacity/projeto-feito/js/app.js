var playerInitX = 202;
var playerInitY = 405;
var enemyInitY = [140, 225, 310];
var rockInitX = [0, 101, 202, 303, 404];
var tinyHeartInitX = [1, 20, 40, 60, 80];
var allRocks = [];
var allEnemies = [];
var player;
var placarVida = [];
var placarLevel;
var placarWin;
var winInterval;

//(re)iniciando o jogo
function resetGame() {
    allRocks = [];
    for( var i = 0; i < 5; i++ ){
        allRocks[i] = new Rocks(i);
    }

    allEnemies = [];
    for( var i = 0; i < 2; i++ ){
        allEnemies[i] = new Enemy(i);
    }

    player = new Player();

    placarVida = [];
    for( var i = 0; i < 5; i++ ){
        placarVida[i] = new PlacarVida(i);
    }

    placarLevel = new PlacarLevel();

    placarWin = new PlacarWin();
}

//calculando em qual coluna as personagens estão
function calcColumn(x) {
    var column = x / 101;
    return column;
}

// Enemies
var Enemy = function(i) {
    this.numb = i;
    this.x = -70;
    this.y = enemyInitY[Math.floor((Math.random() * 3))];
    this.speed = Math.floor((Math.random() * 70) + 10);
    this.pause = false;
    this.sprite = 'images/enemy-bug.png';
};

//joaninhas andando e checando colisão
Enemy.prototype.update = function(dt) {
    if(!this.pause) {
        if( this.x < 505) {
            this.x += this.speed * dt * 3;
        } else {
            this.x = -110;
            this.y = enemyInitY[Math.floor((Math.random() * 3))];
            this.speed = Math.floor((Math.random() * 70) + 10);
        }
        this.checkCollisions();
    }
};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//verifica se inimigo colidiu baseado na coluna que estão
Enemy.prototype.checkCollisions = function() {
    if(this.y == (player.y - 10)) {
        var column = calcColumn(this.x);
        var calcColision = player.column - column;
        if( calcColision <= 0.84 && calcColision >= -0.84) {
            allEnemies.forEach(function(enemy) {
                enemy.pause = true;
                enemy.x = -110;
                setTimeout(function(){ enemy.pause = false; }, 500);
            });
            player.life--;
            player.sprite = 'images/char-death.png';
            placarVida.pop();
            setTimeout(function(){ player.reset(); }, 500);
        }
    }
};

// Player
var Player = function() {
    this.x = playerInitX;
    this.y = playerInitY;
    this.column = 2;
    this.level = 1;
    this.life = 5;
    this.sprite = 'images/char-cat-girl.png';
};

Player.prototype.update = function(dt) {};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//reseta posição inicial do jogador
Player.prototype.reset = function() {
    this.sprite = 'images/char-cat-girl.png';
    this.x = playerInitX;
    this.y = playerInitY;
    this.column = 2;
    if(this.life == 0) {
        resetGame();
    } else {
        placarLevel.sprite = 'images/level-' + this.level + '.png';
    }
};

Player.prototype.handleInput = function(keyCode) {
    //verifica se jogador não morreu
    if( this.sprite == 'images/char-cat-girl.png' ) {
        //verifica se jogador não venceu para poder mover personagem
        if(this.level != 6) {
            if( keyCode == 'up' && this.y > 90 ) {
                this.y = this.y - 85;
                //verifica se personagem pulou em uma pedra
                if( this.y < 90 ) {
                    var iRock = this.column;
                    if( allRocks[iRock] ) {
                        this.level++;
                        //verifica se personagem venceu o jogo
                        if(this.level == 6) {
                            winInterval = setInterval(this.win, 200);
                        } else {
                            allEnemies.push( new Enemy(allEnemies.lengt));
                            setTimeout(function(){ delete allRocks[iRock]; }, 500);
                        }
                    } else {
                        this.life--;
                        this.sprite = 'images/bubbles.png';
                        placarVida.pop();
                    }
                    //se jogador passou de level mas não venceu ainda
                    if(this.level != 6) {
                        setTimeout(function(){ player.reset(); }, 500);
                    }
                }
            } else if( keyCode == 'down' && this.y < 400 ) {
                this.y = this.y + 85;
            } else if( keyCode == 'right' && this.x < 400 ) {
                this.x = this.x + 101;
                this.column = calcColumn(this.x);
            } else if( keyCode == 'left' && this.x > 100 ) {
                this.x = this.x - 101;
                this.column = calcColumn(this.x);
            }
        } else {
            clearInterval(winInterval);
            resetGame();
        }
    }
};

//mostra mensagem de parabéns e personagem fica pulando de alegria
Player.prototype.win = function() {
    allEnemies.forEach(function(enemy) {
        enemy.pause = true;
        enemy.sprite = 'images/char-death.png';
    });
    placarWin.x = 102.5;
    placarWin.y = 200;
    player.y = (player.y > 50) ? 50 : 65 ;
};

// Pedras
var Rocks = function(pos) {
    this.x = rockInitX[pos];
    this.y = 55;
    this.sprite = 'images/Rock.png';
};

Rocks.prototype.update = function(dt) {};

Rocks.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Placares
var PlacarVida = function(index) {
    this.x = tinyHeartInitX[index];
    this.y = 50;
    this.sprite = 'images/tiny-Heart.png';
};

PlacarVida.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

PlacarVida.prototype.update = function(dt) {};

var PlacarLevel = function(index) {
    this.x = 424;
    this.y = 55;
    this.sprite = 'images/level-1.png';
};

PlacarLevel.prototype.update = function(dt) {};

PlacarLevel.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var PlacarWin = function() {
    this.x = -500;
    this.y = -500;
    this.sprite = 'images/you-win.png';
};

PlacarWin.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

PlacarWin.prototype.update = function(dt) {};

// Instantiate objects.
resetGame();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
