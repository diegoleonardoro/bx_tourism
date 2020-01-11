var width = 1000;
var height = 530;
var db = d3.map(); // Looks for values by geoID.


//var sparkline = d3.charts.sparkline().height(300).width(138); // functiona that will draw the line.


var svg = d3.select('svg')
    .attr('width', width)
    .attr('height', height);


function chart(config) {
    return function () {
        config.width,
            config.height
    };
}


var myChart = chart({ width: 720, height: 80 });


var setDb = function (data) {  // This function parses data and formats it into a structure that the sparkline function
    data.forEach(function (d) {
        db.set(d.geoID, [
            d.q1, // q1, q2, q3, q4, are the data that will be shown in the line graph 
            d.q2,
            d.q3,
            d.q4
        ]);
    });
};


var geoID = function (d) { //returns unique IDs for each neighbrohood
    return d.properties.ntacode;
};


var hover = function (d) {
    var div = document.getElementById('tooltip');
    div.style.left = d3.event.pageX + 'px';
    div.style.top = d3.event.pageY + 'px';
    div.innerHTML = d.properties.ntaname;

    var id = geoID(d); //unique geoID for the borough we are hovering over
    d3.select("#tooltip").datum(db.get(id)).call(myChart);  // draws a line chart in the tooltip selection.
};


//var click = function (d) {
//    d3.selectAll('path').attr('fill-opacity', 0.2)
//    d3.select('#' + geoID(d)).attr('fill-opacity', 1);
// };


var data_tooltip = []

$(document).ready(function () {
    $.getJSON('/tooltip_data', function (deta, status, xhr) {
        console.log("deta", deta)
        data_tooltip.push(deta)
    })

});

console.log("hola", data_tooltip)

//console.log("-----", Object.keys(data_tooltip))



$(document).ready(function () {
    $.getJSON('/data', function (data, status, xhr) {

        console.log(data)

        var bronx_neighborhoods = data.features.filter(obj => { return obj.properties.boro_name === "Bronx" })

        console.log(bronx_neighborhoods.map(x => x.properties.ntacode))

        var projection = d3.geoEquirectangular()
            .scale(400)
            .center([-3.0026, 16.7666])
            .translate([480, 250])
            .fitExtent([[0, 0], [1000, 530]], { type: "FeatureCollection", features: bronx_neighborhoods })
        //.fitSize([900, 800], data);

        var geoGenerator = d3.geoPath()
            .projection(projection);


        var color = d3.scaleLinear()
            .domain([0, 4])
            .range(["grey", "black"]);

        var map = svg.append('g').attr('class', 'boundary');

        //mexico = map.selectAll('path').data(states.features);

        var u = d3.select('svg')
            .selectAll('path')
            .data(bronx_neighborhoods)

        u.enter()
            .append('path')
            .attr('d', geoGenerator)
            .attr('fill', 'black')
            .on("mouseover", hover);
        u.attr('fill', '#eee');
        u.exit().remove();



        d3.csv('neighborhoods-data.csv').then(setDb);

        //console.log("properties", bronx_neighborhoods.map(x => x.properties.ntacode))





        //.attr('id', geoID)
        //.on("click", click);

        //click(data.features[3]);
        //u.exit().remove();

        // console.log(data.features.map(x => x.properties.boro_name = "Bronx"))

        //var result = jsObjects.filter(obj => {
        //     return obj.b === 6
        // })

    })

});
