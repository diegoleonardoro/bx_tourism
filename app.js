
var width = 1000;
var height = 530;
var db = d3.map(); 
var sparkline = d3.charts.sparkline().height(50).width(138); 


var svg = d3.select('svg')
    .attr('width', width)
    .attr('height', height);

var setDb = function(data) {  // This function parses data and formats it into a structure that the sparkline function
  data.forEach(function(d) { 
    db.set(d.geoID, [ 
       {"x": 1, "y": +d.q1}, 
       {"x": 2, "y": +d.q2}, 
       {"x": 3, "y": +d.q3}, 
       {"x": 4, "y": +d.q4} 
    ]); 
  }); 
}; 


var geoID = function (d) { //creates unique IDs for each neighbrohood
         return "c" + d.properties.boro_code;
     };


var hover = function(d) {
    var div = document.getElementById('tooltip');
    div.style.left = d3.event.pageX +'px';
    div.style.top = d3.event.pageY + 'px';
    div.innerHTML = d.properties.NAME_1;
    
    var id = geoID(d); //unique geoID for the boroigh we are hovering over
    d3.select("#tooltip").datum(db.get(id)).call(sparkline.draw);  // draws a line chart in the tooltip selection.
};



  //var click = function (d) {
    //    d3.selectAll('path').attr('fill-opacity', 0.2)
    //    d3.select('#' + geoID(d)).attr('fill-opacity', 1);
    // };


d3.json('data.json').then(function (data) {

    var bronx_neighborhoods = data.features.filter(obj => { return obj.properties.boro_name === "Bronx" })

    console.log(bronx_neighborhoods)

    var projection = d3.geoEquirectangular()
        .scale(400)
        .center([-3.0026, 16.7666])
        .translate([480, 250])
        .fitExtent([[0, 0], [1000, 530]], { type: "FeatureCollection", features: bronx_neighborhoods })
    //.fitSize([900, 800], data);

    var geoGenerator = d3.geoPath()
        .projection(projection);

    var u = d3.select('svg')
        .selectAll('path')
        .data(bronx_neighborhoods)

    var color = d3.scaleLinear()
        .domain([0, 4])
        .range(["grey", "black"]);

    u.enter()
        .append('path')
        .attr('d', geoGenerator)
        .attr('fill', 'black')
        .on("mouseover", hover);

    //.attr('id', geoID)
    //.on("click", click);

    //click(data.features[3]);
    //u.exit().remove();

    // console.log(data.features.map(x => x.properties.boro_name = "Bronx"))

    //var result = jsObjects.filter(obj => {
    //     return obj.b === 6
    // })

});



