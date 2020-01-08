
var width = 1000;
var height = 530;

var svg = d3.select('svg')
    .attr('width', width)
    .attr('height', height);


var hover = function(d) { 
  var div = document.getElementById('tooltip'); 
  div.style.left = event.pageX +'px'; 
  div.style.top = event.pageY + 'px'; 
  div.innerHTML = d.properties.boro_name; // .boro_name represents the text that will be displayed. In this case I need to access the name of every neighborgood
}; 


d3.json('data.json').then(function (data) {


    // var geoID = function (d) {
    //     return "c" + d.properties.boro_code;
    // };

    //var click = function (d) {
    //    d3.selectAll('path').attr('fill-opacity', 0.2)
    //    d3.select('#' + geoID(d)).attr('fill-opacity', 1);
    // };

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



