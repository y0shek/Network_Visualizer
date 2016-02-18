<!DOCTYPE html>
<html lang="en">
   

    <head>
        <meta charset="utf-8">
        <meta name="description" content="Tipcloud is a social network app that gives Big Data back to the people who made it. Give and receive tips from trusted friends, and help build the largest and most accurate anonymous census database in the world.">
        <meta name="keywords" content="TipCloud,Tip Cloud,Tips,Tip,Cloud,TipNet,network,visualizer,Share,Recommendations,census,Big Data,data,Tip points,d3.js,">
        <meta name="author" content="Just the Tip">

        <title>TipCloud Survey</title>

        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="stylesheet" type="text/css" href="css/normalize.css">
        <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=true"></script>
        <script src="js/jquery-1.11.2.min.js"></script>
        <script src="js/d3.min.js"></script>
        <script src="js/ol.js" type="text/javascript"></script>
        <script src="js/underscore.js"></script>
            <style type="text/css"> 
            html, body{
                background-color: white;
                width: 100%;
                height: 100%;
                margin: 0px;
                padding: 0px;
            }         
        </style>
    </head>


    <body>
        <div id = "survey" style = "width: 960px; margin-left: auto; margin-right:auto;">
            <h3 align = "center"> Tipcloud Survey</h3>
        <br>
        Your preferred color is <?php echo $_POST["color"]; ?>.
        </div>

    </body>
    
</html>