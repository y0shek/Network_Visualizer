var colors = ["#7F7F7F", "#BFBFBF", "#3F3F3F", "#ff0000", "#FF7F7F", "#7F0000", "#ff1100", "#FF887F", "#7F0800", "#ff2200", "#FF907F", "#7F1100", "#ff3300", "#FF997F", "#7F1900", "#ff4400", "#FFA17F", "#7F2200", "#ff5500", "#FFAA7F", "#7F2A00", "#ff6600", "#FFB27F", "#7F3300", "#ff7700", "#FFBB7F", "#7F3B00", "#ff8800", "#FFC37F", "#7F4400", "#ff9900", "#FFCC7F", "#7F4C00", "#ffaa00", "#FFD47F", "#7F5500", "#ffbb00", "#FFDD7F", "#7F5D00", "#ffcc00", "#FFE57F", "#7F6600", "#ffdd00", "#FFEE7F", "#7F6E00", "#ffee00", "#FFF67F", "#7F7700", "#ffff00", "#FFFF7F", "#7F7F00", "#eeff00", "#F6FF7F", "#777F00", "#ddff00", "#EEFF7F", "#6E7F00", "#ccff00", "#E5FF7F", "#667F00", "#bbff00", "#DDFF7F", "#5D7F00", "#aaff00", "#D4FF7F", "#557F00", "#a4ff00", "#D1FF7F", "#527F00", "#9eff00", "#CEFF7F", "#4F7F00", "#99ff00", "#CCFF7F", "#4C7F00", "#88ff00", "#C3FF7F", "#447F00", "#77ff00", "#BBFF7F", "#3B7F00", "#66ff00", "#B2FF7F", "#337F00", "#55ff00", "#AAFF7F", "#2A7F00", "#44ff00", "#A1FF7F", "#227F00", "#33ff00", "#99FF7F", "#197F00", "#22ff00", "#90FF7F", "#117F00", "#11ff00", "#88FF7F", "#087F00", "#00ff00", "#7FFF7F", "#007F00", "#00ff11", "#7FFF88", "#007F08", "#00ff22", "#7FFF90", "#007F11", "#00ff33", "#7FFF99", "#007F19", "#00ff44", "#7FFFA1", "#007F22", "#00ff55", "#7FFFAA", "#007F2A", "#00ff66", "#7FFFB2", "#007F33", "#00ff77", "#7FFFBB", "#007F3B", "#00ff88", "#7FFFC3", "#007F44", "#00ff99", "#7FFFCC", "#007F4C", "#00ffaa", "#7FFFD4", "#007F55", "#00ffbb", "#7FFFDD", "#007F5D", "#00ffcc", "#7FFFE5", "#007F66", "#00ffdd", "#7FFFEE", "#007F6E", "#00ffee", "#7FFFF6", "#007F77", "#00ffff", "#7FFFFF", "#007F7F", "#00eeff", "#7FF6FF", "#00777F", "#00ddff", "#7FEEFF", "#006E7F", "#00ccff", "#7FE5FF", "#00667F", "#00bbff", "#7FDDFF", "#005D7F", "#00aaff", "#7FD4FF", "#00557F", "#0099ff", "#7FCCFF", "#004C7F", "#0088ff", "#7FC3FF", "#00447F", "#0077ff", "#7FBBFF", "#003B7F", "#0066ff", "#7FB2FF", "#00337F", "#0055ff", "#7FAAFF", "#002A7F", "#0044ff", "#7FA1FF", "#00227F", "#0033ff", "#7F99FF", "#00197F", "#0022ff", "#7F90FF", "#00117F", "#0011ff", "#7F88FF", "#00087F", "#0000ff", "#7F7FFF", "#00007F", "#1100ff", "#887FFF", "#08007F", "#2200ff", "#907FFF", "#11007F", "#3300ff", "#997FFF", "#19007F", "#4400ff", "#A17FFF", "#22007F", "#5500ff", "#AA7FFF", "#2A007F", "#6600ff", "#B27FFF", "#33007F", "#7700ff", "#BB7FFF", "#3B007F", "#8800ff", "#C37FFF", "#44007F", "#9900ff", "#CC7FFF", "#4C007F", "#aa00ff", "#D47FFF", "#55007F", "#bb00ff", "#DD7FFF", "#5D007F", "#cc00ff", "#E57FFF", "#66007F", "#dd00ff", "#EE7FFF", "#6E007F", "#ee00ff", "#F67FFF", "#77007F", "#ff00ff", "#FF7FFF", "#7F007F", "#ff00ee", "#FF7FF6", "#7F0077", "#ff00dd", "#FF7FEE", "#7F006E", "#ff00cc", "#FF7FE5", "#7F0066", "#ff00bb", "#FF7FDD", "#7F005D", "#ff00aa", "#FF7FD4", "#7F0055", "#ff0099", "#FF7FCC", "#7F004C", "#ff0088", "#FF7FC3", "#7F0044", "#ff0077", "#FF7FBB", "#7F003B", "#ff0066", "#FF7FB2", "#7F0033", "#ff0055", "#FF7FAA", "#7F002A", "#ff0044", "#FF7FA1", "#7F0022", "#ff0033", "#FF7F99", "#7F0019", "#ff0022", "#FF7F90", "#7F0011", "#ff0011", "#FF7F88", "#7F0008"];

var width = 1280,
  height = 720,
  layout_gravity = -0.01,
  damper = 0.1,
  nodes = [],
  center = {x: width / 2, y: height / 2},
  max_radius = 70,
  min_radius = 5,
  collisionPadding = 4,
  nodes = [],
  vis, force;
;

//return the correct photo DIR

function photoSize(){
if(this.radius <= max_radius && this.radius >35){
  return "images/usr" + (this.id%8) + "/l.jpg";
} else if (this.radius<=35 && this.radius >15){
  return "images/usr" + (this.id%8) + "/m.jpg";
} else if (this.radius<=15 && this.radius >min_radius){
  return "images/usr" + (this.id%8) + "/s.jpg";
} else return "";
}

//manual fill first Droplet

usrDroplet = {
coords     : [0,0],
id         : 0,
radius     : max_radius,
color      : colors[3],
userName   : "Mario",
uLocation  : "Mushroom Kingdom",
photo      : photoSize
}

//push it onto the dataset

nodes.push(usrDroplet);

//get random data for the next 50 droplets

for(var i=1; i < 51; i++){
  nodes.push({
    coords    : [(Math.random()*180)-90, (Math.random()*360)-180],
    id        : i,
    radius    : Math.round(Math.random()*30)+10,
    userName  : "Droplet " + i,
    color     : colors[Math.round(Math.random()*278)],
    uLocation : "City "+ i,
    photo     : photoSize
  });
}

/*
$.ajax({
  url: 'http://tipcloud.duckdns.org/tip.cloud/json/users.json',
  type: 'get',
  dataType: 'json',
  error: function(data){
  },
  success: function(data){
    var dataString = JSON.stringify(data);
    var obj = JSON.parse(dataString);
    alert(obj[1].firstName +", "+ obj[1].lastName);
  }
});
*/

$(function() {
    console.log( "Ready... Set... Go!" );

//GOOGLE MAPS INTEGRATION

// Create the Google Map…
var map = new google.maps.Map(d3.select("#map").node(), {
  zoom: 2,
  center: new google.maps.LatLng(0, 0),
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  streetViewControl: false
});

// Load the station data. When the data comes back, create an overlay.
  var overlay = new google.maps.OverlayView();

  // Add the container when the overlay is added to the map.
  overlay.onAdd = function() {
    var layer = d3.select(this.getPanes().overlayLayer).append("div")
        .attr("class", "stations");

    // Draw each svg_elem as a separate SVG element.
    // We could use a single SVG, but what size would it have?
    overlay.draw = function() {
      var projection = this.getProjection(),
          padding = 10;

var svg_elem = layer.selectAll("svg")
  .data(nodes, function(d){return d.id;})
  .each(transform) // update existing svg_elems
  .enter().append("svg")
  .each(transform)
  .attr("class", "svg_elem")
  .attr("height", function(d){return d.radius*4;})
  .attr("width", function(d){return d.radius*4;})
  .attr("padding-right", "100px")
  ;

var images = svg_elem
  .append("pattern")
    .attr("id", function(d){
      return "d"+d.id;
      })
      .attr("x", 0)
      .attr("y", 0)
      .attr("height", 1)
      .attr("width", 1)
      .append("image")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", function(d){
          return d.radius*2;
        })
        .attr("height", function(d){
           return d.radius*2;
        })
        .attr("xlink:href", function(d){
          return d.photo();
        })
          ;


var circles = svg_elem
  .append("circle")
  .attr("r", function(d){
    return d.radius;
  })
  .attr("fill", function(d){
    return "url(#d"+d.id+")"
  })
  .attr("stroke", function(d){
    return d.color;
  })
  .attr("stroke-width", function(d){
   return d.radius/8+3;
  })
  .attr("cx", function(d){return d.radius*2;})
  .attr("cy", function(d){return d.radius*2;})
  ;

var names = svg_elem
  .append("text")
  .text(function(d){
    return d.userName;
  })
  .attr("x", function(d){return d.radius*2;})
  .attr("y", function(d){return d.radius*.9;})
  .attr("text-anchor", "middle")
  .attr("font-family", "sans-serif")
  .attr("font-size", function(d){
    return d.radius/6 +8;
  })
  .attr("font-weight", 900)
  .attr("fill", "black")
  .attr("stroke", "white")
  .attr("stroke-width",0)
  ;

var cities = svg_elem
    .append("text")
    .text(function(d){
      return d.uLocation;
    })
    .attr("x", function(d){return d.radius*2;})
    .attr("y", function(d){return d.radius*3.4;})
    .attr("text-anchor", "middle")
    .attr("font-family", "sans-serif")
    .attr("font-size", function(d){
      return d.radius/6 +8;
    })
    .attr("font-weight", 900)
    .attr("fill", "black")
    .attr("stroke", "white")
    .attr("stroke-width",0)
    ;


      function transform(d) {
        a = new google.maps.LatLng(d.coords[0], d.coords[1]);
        b = projection.fromLatLngToDivPixel(a);
        return d3.select(this)
            .style("left", (b.x - (d.radius*2)) + "px")
            .style("top", (b.y - (d.radius*2)) + "px");
      }
    };
  };

  // Bind our overlay to the map…
  overlay.setMap(map);
}); //end Jquery Ready
