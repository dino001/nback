function nback(){
    this.count_nback = '2';
    this.count_trial = 24;
    this.speed = 3000; //milisecond to answer
    this.current_step = -1; //Current trial when playing
    
    this.arr_pos = new Array(); //Array of random square position (1-9)
    this.arr_letter = new Array(); //Array of random letter
    
    this.arr_audio = new Object(); //Array of buffered audio
    this.arr_chosen_letters = ['c','h','k','l','q','r','s','t'];
    
    /**
    * Load all audio(.wav) files into Audio objects
    */
    this.buffer_audio = function (){
        var i;
        var letter;
        for (i = 0; i < this.arr_chosen_letters.length; i++){
            letter = this.arr_chosen_letters[i];
            letter_path = 'letters/' + letter + '.wav';
            this.arr_audio[letter] = new Audio(letter_path);
        }        
    };
    this.buffer_audio();
    
    /**
    * Initialzie the arrays for next game
    */
    this.init_game = function (){
        
        var i;
        var random_letter, random_pos;
        for (i=0; i< this.count_trial; i++){
            //Get random letter from the chosen letters
            random_letter = this.arr_chosen_letters[random_int(0, this.arr_chosen_letters.length-1)];            
            //Generate random int number [1,9]
            random_pos = random_int(1,9);
            this.arr_pos[i] = random_pos;
            this.arr_letter[i] = random_letter;
        }
        
    };
    
    /**
    * Start a new game
    */
    this.start_game = function (){
        this.init();
        this.current_step = 1;
    };
    
    /**
    * Draw the square
    */
    this.draw_square = function (pos){
        var canvas = $("#gameCanvas");
        var margin = 20;
        var square_width = Math.floor(canvas.width()/3 - margin*2);
        var ctx = canvas[0].getContext("2d");
        var img = $("#imgSquare");
        //Calculate position based on pos number 1 - 9
        var ypos = Math.floor((pos - 1)/3) * (square_width + 2*margin);
        var xpos = ((pos-1) % 3) * (square_width + 2*margin);
        ctx.drawImage(img[0], xpos + margin, ypos + margin, square_width, square_width);
    };
    
    /**
    * Play sound based on input letter(ch)
    */
    this.play_sound = function (letter){
        this.arr_audio[letter].play();        
    };
    
    /**
    * Draw blank background
    */
    this.draw_background = function (){
        var canvas = $("#gameCanvas");
        var line_width = 1;
        var space_width = Math.floor((canvas.width() - 2 * line_width)/3);        
        var ctx = $(canvas)[0].getContext('2d');        
        //ctx.fillStyle = "rgb(0,0,0)";
        //ctx.fillRect(space_width, 0, line_width, canvas.height());
        ctx.lineWidth = line_width;
        ctx.beginPath();
        //Vertical lines
        ctx.moveTo(space_width, 0);
        ctx.lineTo(space_width, canvas.height());
        ctx.moveTo(space_width*2, 0);
        ctx.lineTo(space_width*2, canvas.height());
        //Horizontal lines
        ctx.moveTo(0, space_width);
        ctx.lineTo(canvas.width(), space_width);
        ctx.moveTo(0, space_width*2);
        ctx.lineTo(canvas.width(), space_width*2);
        ctx.stroke();        
        ctx.closePath();
        console.debug(ctx);               
    };
}

/**
* Return random integer number
*/
function random_int(m, n){
    return Math.floor(m + (1+n-m)*Math.random());  // num is random integer from m to n
}

var nb;

$(function(){            
    nb = new nback();
    nb.init_game();
    nb.draw_background();
    nb.draw_square(8);
    nb.play_sound('t');
});