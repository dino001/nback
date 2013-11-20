<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
    <head>
        <meta http-equiv="Pragma" content="no-cache">
        <meta http-equiv="Cache-Control" content="no-cache">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <title>Dual 2-Back</title>
        <script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>
        <script type="text/javascript" src="js/nback.js"></script>
        <link rel="stylesheet" type="text/css" href="css/main.css">        
    </head>
    <body>
        <div id="wrapper">
            <div id="header">
                <h3>Dual 2-back Game</h3>
                <a href="http://brainworkshop.sourceforge.net/tutorial.html" target="_blank">How to play</a>
            </div>
            <div id="content">
                <div id="gameDiv">
                    <canvas id="gameCanvas" width="400" height="400">
                    </canvas>
                    <img id="imgSquare" src="image/square_blue.png" style="display: none;"/>
                    <div class="instruction space" id="pressSpace">Press SPACE to start a new session</div>
                    <div class="instruction pressA" id="pressA">Press A: Position match</div>
                    <div class="instruction pressL" id="pressL">Press L: Audio match</div>
                </div>
                <div id="scoreBoard">
                    <b>Score:</b>
                    <ul id="scoreList">                        
                    </ul>
                </div>
            </div>
            <div id="footer"> 
            </div>
        </div>
    </body>
</html>
