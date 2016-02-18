var colors = ["#7F7F7F", "#BFBFBF", "#3F3F3F", "#ff0000", "#FF7F7F", "#7F0000", "#ff1100", "#FF887F", "#7F0800", "#ff2200", "#FF907F", "#7F1100", "#ff3300", "#FF997F", "#7F1900", "#ff4400", "#FFA17F", "#7F2200", "#ff5500", "#FFAA7F", "#7F2A00", "#ff6600", "#FFB27F", "#7F3300", "#ff7700", "#FFBB7F", "#7F3B00", "#ff8800", "#FFC37F", "#7F4400", "#ff9900", "#FFCC7F", "#7F4C00", "#ffaa00", "#FFD47F", "#7F5500", "#ffbb00", "#FFDD7F", "#7F5D00", "#ffcc00", "#FFE57F", "#7F6600", "#ffdd00", "#FFEE7F", "#7F6E00", "#ffee00", "#FFF67F", "#7F7700", "#ffff00", "#FFFF7F", "#7F7F00", "#eeff00", "#F6FF7F", "#777F00", "#ddff00", "#EEFF7F", "#6E7F00", "#ccff00", "#E5FF7F", "#667F00", "#bbff00", "#DDFF7F", "#5D7F00", "#aaff00", "#D4FF7F", "#557F00", "#a4ff00", "#D1FF7F", "#527F00", "#9eff00", "#CEFF7F", "#4F7F00", "#99ff00", "#CCFF7F", "#4C7F00", "#88ff00", "#C3FF7F", "#447F00", "#77ff00", "#BBFF7F", "#3B7F00", "#66ff00", "#B2FF7F", "#337F00", "#55ff00", "#AAFF7F", "#2A7F00", "#44ff00", "#A1FF7F", "#227F00", "#33ff00", "#99FF7F", "#197F00", "#22ff00", "#90FF7F", "#117F00", "#11ff00", "#88FF7F", "#087F00", "#00ff00", "#7FFF7F", "#007F00", "#00ff11", "#7FFF88", "#007F08", "#00ff22", "#7FFF90", "#007F11", "#00ff33", "#7FFF99", "#007F19", "#00ff44", "#7FFFA1", "#007F22", "#00ff55", "#7FFFAA", "#007F2A", "#00ff66", "#7FFFB2", "#007F33", "#00ff77", "#7FFFBB", "#007F3B", "#00ff88", "#7FFFC3", "#007F44", "#00ff99", "#7FFFCC", "#007F4C", "#00ffaa", "#7FFFD4", "#007F55", "#00ffbb", "#7FFFDD", "#007F5D", "#00ffcc", "#7FFFE5", "#007F66", "#00ffdd", "#7FFFEE", "#007F6E", "#00ffee", "#7FFFF6", "#007F77", "#00ffff", "#7FFFFF", "#007F7F", "#00eeff", "#7FF6FF", "#00777F", "#00ddff", "#7FEEFF", "#006E7F", "#00ccff", "#7FE5FF", "#00667F", "#00bbff", "#7FDDFF", "#005D7F", "#00aaff", "#7FD4FF", "#00557F", "#0099ff", "#7FCCFF", "#004C7F", "#0088ff", "#7FC3FF", "#00447F", "#0077ff", "#7FBBFF", "#003B7F", "#0066ff", "#7FB2FF", "#00337F", "#0055ff", "#7FAAFF", "#002A7F", "#0044ff", "#7FA1FF", "#00227F", "#0033ff", "#7F99FF", "#00197F", "#0022ff", "#7F90FF", "#00117F", "#0011ff", "#7F88FF", "#00087F", "#0000ff", "#7F7FFF", "#00007F", "#1100ff", "#887FFF", "#08007F", "#2200ff", "#907FFF", "#11007F", "#3300ff", "#997FFF", "#19007F", "#4400ff", "#A17FFF", "#22007F", "#5500ff", "#AA7FFF", "#2A007F", "#6600ff", "#B27FFF", "#33007F", "#7700ff", "#BB7FFF", "#3B007F", "#8800ff", "#C37FFF", "#44007F", "#9900ff", "#CC7FFF", "#4C007F", "#aa00ff", "#D47FFF", "#55007F", "#bb00ff", "#DD7FFF", "#5D007F", "#cc00ff", "#E57FFF", "#66007F", "#dd00ff", "#EE7FFF", "#6E007F", "#ee00ff", "#F67FFF", "#77007F", "#ff00ff", "#FF7FFF", "#7F007F", "#ff00ee", "#FF7FF6", "#7F0077", "#ff00dd", "#FF7FEE", "#7F006E", "#ff00cc", "#FF7FE5", "#7F0066", "#ff00bb", "#FF7FDD", "#7F005D", "#ff00aa", "#FF7FD4", "#7F0055", "#ff0099", "#FF7FCC", "#7F004C", "#ff0088", "#FF7FC3", "#7F0044", "#ff0077", "#FF7FBB", "#7F003B", "#ff0066", "#FF7FB2", "#7F0033", "#ff0055", "#FF7FAA", "#7F002A", "#ff0044", "#FF7FA1", "#7F0022", "#ff0033", "#FF7F99", "#7F0019", "#ff0022", "#FF7F90", "#7F0011", "#ff0011", "#FF7F88", "#7F0008"];

var width = 1280,
  height = 720,
  layout_gravity = -0.01,
  damper = 0.1,
  nodes = [],
  center = {x: width / 2, y: height / 2},
  max_radius = 70,
  look_radius = 45,
  min_radius = 5,
  collisionPadding = 4,
  nodes = [],
  vis, force;
;

//return the correct photo DIR

function photoSize(radius){
if(radius >35){
  return "images/usr" + (this.id%8) + "/l.jpg";
} else if (radius<=35 && radius >15){
  return "images/usr" + (this.id%8) + "/m.jpg";
} else if (radius<=15 && radius >min_radius){
  return "images/usr" + (this.id%8) + "/s.jpg";
} else return "";
}

//manual fill first Droplet

usrDroplet = {
id         : 0,
coords     : [0,0],
radius     : 45,
color      : colors[3],
userName   : "Mario",
uLocation  : "Mushroom Kingdom",
photo      : photoSize,
x          : width/2,
y          : height/2
}

//push it onto the dataset

nodes.push(usrDroplet);

//get random data for the next 50 droplets

for(var i=1; i < 51; i++){
  nodes.push({
    id        : i,
    coords    : [(Math.random()*180)-90, (Math.random()*360)-180],
    radius    : Math.round(Math.random()*26)+10,
    userName  : "Droplet " + i,
    color     : colors[Math.round(Math.random()*278)],
    uLocation : "City "+ i,
    photo     : photoSize,
    x         : Math.round(Math.random()*width),
    y         : Math.round(Math.random()*height)
  });
}

///////////////////////////////////////
//////////POPULATE DATA////////////////
///////////////////////////////////////
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

//grab onto user's droplet
var root = nodes[0];
root.fixed = true;

///////////////////////////////////////
//////////POPULATE DATA////////////////
///////////////////////////////////////

//start gravity

var force = d3.layout.force()
    .gravity(0.05)
    .charge(function(d, i) { return i ? 0 : -2000; })
    .nodes(nodes)
    .size([width, height]);

force.start();

//create the window

 vis = d3.select("#viewer").append("svg")
  .attr("width", width)
  .attr("height", height);

//create the background

  vis.append("rect")
  .attr("x", 0)
  .attr("y", 0)
  .attr("height", height)
  .attr("width", width)
  .attr("fill", "lightblue")
  ;

//create <g> (group) element to hold all of the user's images and info 
//(gives us an origin point for each user's visual elements)

var eventsMaster = vis.selectAll("g")
  .data(force.nodes(), function(d){
    return d.id
  });


var events = eventsMaster.enter()
  .append("g")
  .attr("transform", function(d){return "translate("+d.x+","+d.y+")"})
  .on("click", function(d) {
    clickNode(d);
    })
  .call(force.drag)
  .on("mouseover", mouseOver)
  .on("mouseout", mouseOut)
  ;

//methods for resize on hover and out

function mouseOver(d) {
  // enlargen circles
  d3.select(this).select("circle").transition()
    .duration(100)
    .attr("r", look_radius)
    .attr("stroke-width", look_radius/8+1);
  // enlargen and UPDATE images from dir
  d3.select(this).select("pattern").select("image").transition()
    .duration(100)
    .attr("width", look_radius*2)
    .attr("height", look_radius*2)
    .attr("xlink:href", function(d){
      return d.photo(look_radius);
    })
    ;
  // move and enlargen text
  d3.select(this).select("text.names").transition()
    .duration(100)
    .attr("font-size", look_radius/6 +12)
    .attr("transform", function(d){
    return "translate(0,"+ (d.radius - look_radius-5) +")"
    })
    ;
  d3.select(this).select("text.cities").transition()
    .duration(100)
    .attr("font-size", look_radius/6+8)
        .attr("transform", function(d){
    return "translate(0,"+ (look_radius-d.radius+5) +")"
    })
    ;
}

function mouseOut(d) {
  // replace circles
  d3.select(this).select("circle").transition()
    .duration(1000)
    .attr("r", d.radius);
  // replace and UPDATE images from dir
  d3.select(this).select("pattern").select("image").transition()
    .duration(1000)
    .attr("")
    .attr("width", d.radius*2)
    .attr("height", d.radius*2)
    .attr("xlink:href", function(d){
      return d.photo(d.radius);
    })
    ;
  // replace text
  d3.select(this).select("text.names").transition()
    .duration(1000)
    .attr("font-size", function(d){
      return d.radius/6+8;
    })
    .attr("transform", "translate(0, 0)")
    ;
  d3.select(this).select("text.cities").transition()
    .duration(1000)
    .attr("font-size", function(d){return d.radius/6+8;})
    .attr("transform", "translate(0,0)")
    ;
}


// on each "tick", visit each node...

force.on("tick", function(e) {
  var q = d3.geom.quadtree(nodes),
      i = 0,
      n = nodes.length;

// ... and then collide the nodes

  while (++i < n) q.visit(collide(nodes[i]));
  {
  vis.selectAll("g")
      .attr("transform", function(d){return "translate("+d.x+","+d.y+")"
    });
  } //end while
}); //end tick

//collision detect

function collide(node) {
  var r = node.radius + 16,
      nx1 = node.x - r,
      nx2 = node.x + r,
      ny1 = node.y - r,
      ny2 = node.y + r;
  return function(quad, x1, y1, x2, y2) {
    if (quad.point && (quad.point !== node)) {
      var x = node.x - quad.point.x,
          y = node.y - quad.point.y,
          l = Math.sqrt(x * x + y * y),
          r = node.radius +12 + quad.point.radius;
      if (l < r) {
        l = (l - r) / l * .5;
        node.x -= x *= l;
        node.y -= y *= l;
        quad.point.x += x;
        quad.point.y += y;
      }
    }
    return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
  };
}


//create patterns within respective groups
//var images lets us control all patterns within all groups
//figure out how to update image file when size is changed!!!

var images = events
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
          return d.photo(d.radius);
        })
          ;

//create circles within respective groups

var circles = events
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
   return d.radius/8+1;
  })
  .attr("cx", 0)
  .attr("cy", 0)
  ;

//create names within respective groups

var names = events
  .append("text")
  .attr("class", "names")
  .text(function(d){
    return d.userName;
  })
  .attr("x", 0)
  .attr("y", function(d){
    return (0 - (d.radius + d.radius/8));
  })
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

var cities = events
    .append("text")
    .attr("class", "cities")
    .text(function(d){
      return d.uLocation;
    })
    .attr("x", 0)
    .attr("x", 0)
    .attr("y", function(d){
      return (0 + (d.radius + (d.radius/4)+2));
    })
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

//GMAPS INTEGRATION START HERE

$(function() {
    console.log( "Ready... Set... Go!" );

//GOOGLE MAPS INTEGRATION

// Create the Google Map…
var map = new google.maps.Map(d3.select("#map").node(), {
  zoom: 2,
  center: new google.maps.LatLng(43.0667, -89.4000),
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  streetViewControl: false
});

// Load the station data. When the data comes back, create an overlay.
  var overlay = new google.maps.OverlayView();

  // Add the container when the overlay is added to the map.
  overlay.onAdd = function() {
    var layer = d3.select(this.getPanes().overlayMouseTarget).append("div")
        .attr("class", "droplets");

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
  .on("mouseover", function(d){
    d3.select(this).transition().duration(100)
      .attr("transform", "scale(1.1)")
  })
    .on("mouseout", function(d){
    d3.select(this).transition().duration(100)
      .attr("transform", "scale(1)")
  })
;

var circles = svg_elem
  .append("circle")
  .attr("class", "woo")
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
  .attr("class", "names")
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

