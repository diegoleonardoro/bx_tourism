var width = 1000;
var height = 530;

var svg = d3.select('svg')
    .attr('width', width)
    .attr('height', height);


d3.json('data.json').then(function (data) {

    var geoID = function (d) {
        return "c" + d.properties.boro_code;
    };

    var click = function (d) {
        d3.selectAll('path').attr('fill-opacity', 0.2)
        d3.select('#' + geoID(d)).attr('fill-opacity', 1);
    };

    var projection = d3.geoEquirectangular()
        .scale(300)
        .center([-3.0026, 16.7666])
        .translate([480, 250])
        .fitExtent([[0, 0], [870, 500]], data)
    //.fitSize([900, 800], data);

    var geoGenerator = d3.geoPath()
        .projection(projection);

    var u = d3.select('svg')
        .selectAll('path')
        .data(data.features)

    var color = d3.scaleLinear()
        .domain([0, 4])
        .range(["grey", "black"]);

    u.enter()
        .append('path')
        .attr('d', geoGenerator)
        .attr('fill', function (d, i) { return color(i); })
        .attr('id', geoID)
        .on("click", click);

    click(data.features[3]);
    u.exit().remove();


    d3.csv('pointsofinterest.csv').then(function (attractions) {
        var attractionPoint = svg.selectAll('circle').data(attractions);
        var attractionText = svg.selectAll('text').data(attractions);

        var projection = d3.geoEquirectangular()


        attractionPoint.enter()
            .append('circle')
            .attr('cx', function (d) {
                return projection([d.lon, d.lat])[0]
            })
            .attr('cy', function (d) {
                return projection([d.lon, d.lat])[1]
            })
            .attr('r', 4)
            .attr('fill', 'steelblue');


        attractionText.enter()
            .append('text')
            .attr('x', function (d) {
                return projection([d.lon, d.lat])[0]
            })
            .attr('y', function (d) {
                return projection([d.lon, d.lat])[1]
            })
            .attr('dx', 5)
            .attr('dy', 3)
            .text(function (d) { return d.name });
)
});


});
