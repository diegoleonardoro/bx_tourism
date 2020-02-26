

var realEstateData = [

    {
        year: "2018",
        Borough: "Bronx",
        averagePrice1familyHome: "$499,060",
        maximumsaleprice: "$12,303,058"
    },

    {
        year: "2016",
        Borough: "Bronx",
        averagePrice1familyHome: "$478,379",
        maximumsaleprice: "$8,000,000"
    },

    {
        year: "2014",
        Borough: "Bronx",
        averagePrice1familyHome: "$418,437",
        maximumsaleprice: "$3,300,000"
    },

    {
        year: "2012",
        Borough: "Bronx",
        averagePrice1familyHome: "$438,315",
        maximumsaleprice: "$4,650,000"

    },

    {
        year: "2010",
        Borough: "Bronx",
        averagePrice1familyHome: "$407,253",
        maximumsaleprice: "$4,150,000"
    },

    {
        year: "2008",
        Borough: "Bronx",
        averagePrice1familyHome: "$441,962",
        maximumsaleprice: "$3,956,150"
    },


    //--------------
    {
        year: "2018",
        Borough: "Manhattan",
        averagePrice1familyHome: "$8,235,346",
        maximumsaleprice: "$41,000,000"
    },

    {
        year: "2016",
        Borough: "Manhattan",
        averagePrice1familyHome: "$8,176,576",
        maximumsaleprice: "$28,000,000"
    },

    {
        year: "2014",
        Borough: "Manhattan",
        averagePrice1familyHome: "$9,180,342",
        maximumsaleprice: "$51,000,000"
    },

    {
        year: "2012",
        Borough: "Manhattan",
        averagePrice1familyHome: "$7,481,470",
        maximumsaleprice: "$42,000,000"
    },

    {
        year: "2010",
        Borough: "Manhattan",
        averagePrice1familyHome: "$6,587,094",
        maximumsaleprice: "$24,065,000"
    },

    {
        year: "2008",
        Borough: "Manhattan",
        averagePrice1familyHome: "$8,926,012",
        maximumsaleprice: "$49,000,000"
    },

    //--------------
    {
        year: "2018",
        Borough: "Brooklyn",
        averagePrice1familyHome: "$980,737",
        maximumsaleprice: "$12,900,000"
    },


    {
        year: "2016",
        Borough: "Brooklyn",
        averagePrice1familyHome: "$876,864",
        maximumsaleprice: "$11,360,000"
    },

    {
        year: "2014",
        Borough: "Brooklyn",
        averagePrice1familyHome: "$792,853",
        maximumsaleprice: "$10,775,000"
    },


    {
        year: "2012",
        Borough: "Brooklyn",
        averagePrice1familyHome: "$681,672",
        maximumsaleprice: "$11,000,000"
    },

    {
        year: "2010",
        Borough: "Brooklyn",
        averagePrice1familyHome: "$620,904",
        maximumsaleprice: "$7,100,000"
    },

    {
        year: "2008",
        Borough: "Brooklyn",
        averagePrice1familyHome: "$642,727",
        maximumsaleprice: "$8,450,000"
    },



    //--------------

    {
        year: "2018",
        Borough: "Queens",
        averagePrice1familyHome: "$645,921",
        maximumsaleprice: "$5,500,000"
    },

    {
        year: "2016",
        Borough: "Queens",
        averagePrice1familyHome: "$613,139",
        maximumsaleprice: "$3,350,000"
    },

    {
        year: "2014",
        Borough: "Queens",
        averagePrice1familyHome: "$559,955",
        maximumsaleprice: "$5,600,000"
    },

    {
        year: "2012",
        Borough: "Queens",
        averagePrice1familyHome: "$490,878",
        maximumsaleprice: "$5,100,000"
    },

    {
        year: "2010",
        Borough: "Queens",
        averagePrice1familyHome: "$462,265",
        maximumsaleprice: "$2,800,000"
    },

    {
        year: "2008",
        Borough: "Queens",
        averagePrice1familyHome: "$513,661",
        maximumsaleprice: "$5,617,500"
    },


    //--------------

    {
        year: "2018",
        Borough: "Staten Island",
        averagePrice1familyHome: "$520,214",
        maximumsaleprice: "$11,900,000"
    },

    {
        year: "2016",
        Borough: "Staten Island",
        averagePrice1familyHome: "$483,340",
        maximumsaleprice: "$3,800,000"
    },

    {
        year: "2014",
        Borough: "Staten Island",
        averagePrice1familyHome: "$435,757",
        maximumsaleprice: "$3,933,000"
    },

    {
        year: "2012",
        Borough: "Staten Island",
        averagePrice1familyHome: "$456,373",
        maximumsaleprice: "$5,700,000"
    },


    {
        year: "2010",
        Borough: "Staten Island",
        averagePrice1familyHome: "$423,258",
        maximumsaleprice: "$3,150,000"
    },

    {
        year: "2008",
        Borough: "Staten Island",
        averagePrice1familyHome: "$429,639",
        maximumsaleprice: "$3,100,000"
    },


    //--------------
];








$(document).ready(function () {
    $.getJSON('/average_home_price', function (data, status, xhr) {

        var margin = { top: 10, right: 30, bottom: 30, left: 60 },
            width = 900 - margin.left - margin.right,
            height = 700 - margin.top - margin.bottom;

        svgLineChart = d3.select("#linechart")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")")


        var x = d3.scaleLinear()
            .domain([2008, 2018])
            .range([0, width]);


        svgLineChart.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));


        var y = d3.scaleLinear()
            .domain([400000, 1000000])
            .range([height, 0]);

        svgLineChart.append("g")
            .call(d3.axisLeft(y));




        svgLineChart.append("rect")
            .attr('x', width - 750)
            .attr('y', height - 650)
            .attr('width', 10)
            .attr('height', 10)
            .style('fill', "orange");

        svgLineChart.append("rect")
            .attr('x', width - 750)
            .attr('y', height - 633)
            .attr('width', 10)
            .attr('height', 10)
            .style('fill', "green");

        svgLineChart.append("rect")
            .attr('x', width - 750)
            .attr('y', height - 615)
            .attr('width', 10)
            .attr('height', 10)
            .style('fill', "grey");


        svgLineChart.append("rect")
            .attr('x', width - 750)
            .attr('y', height - 597)
            .attr('width', 10)
            .attr('height', 10)
            .style('fill', "black");



        svgLineChart.append("text")
            .attr('x', width - 735)
            .attr('y', height - 641)
            .text("Staten Island")


        svgLineChart.append("text")
            .attr('x', width - 735)
            .attr('y', height - 623)
            .text("The Bronx")

        svgLineChart.append("text")
            .attr('x', width - 735)
            .attr('y', height - 605)
            .text("Queens")


        svgLineChart.append("text")
            .attr('x', width - 735)
            .attr('y', height - 587)
            .text("Brooklyn")




        /*
        realEstateData.map(x => x["PriceInt"] = x.averagePrice1familyHome.replace('$', ''));
        realEstateData.map(x => x["PriceInt"] = x.PriceInt.replace(/,/, ''));
        realEstateData.map(x => x["PriceInt"] = x.PriceInt.replace(/,/, ''));
        realEstateData.map(x => x["PriceInt"] = Number(x["PriceInt"]))


        var bx = realEstateData2.map(x => x.BronxInt)
        var man = realEstateData2.map(x => x.ManhattanInt)
        var bk = realEstateData2.map(x => x.BrooklynInt)
        var qns = realEstateData2.map(x => x.QueensInt)
        var si = realEstateData2.map(x => x.StatenIslandInt)
        */


        // --------- Bronx  --------- // 
        //var bronx = realEstateData2.filter(x => x.Borough == "Bronx")

        svgLineChart.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "green")
            .attr("stroke-width", 3)
            .attr("class", "line")
            .attr("d", d3.line()
                .x(function (d) { return x(d.year) })
                .y(function (d) { return y(d.BronxInt) })
            )
            .style("opacity", "0.5");

        // --------- Brooklyn  --------- // 
        //var brooklyn = realEstateData.filter(x => x.Borough == "Brooklyn")
        svgLineChart.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "black")
            .attr("stroke-width", 3)
            .attr("class", "line")
            .attr("d", d3.line()
                .x(function (d) { return x(d.year) })
                .y(function (d) { return y(d.BrooklynInt) })
            )
            .style("opacity", "0.5");

        // --------- Queens  --------- // 

        //var queens = realEstateData.filter(x => x.Borough == "Queens")
        svgLineChart.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "grey")
            .attr("stroke-width", 3)
            .attr("class", "line")
            .attr("d", d3.line()
                .x(function (d) { return x(d.year) })
                .y(function (d) { return y(d.QueensInt) })
            )
            .style("opacity", "0.5");

        // --------- Staten Island  --------- // 
        //var statenIsland = realEstateData.filter(x => x.Borough == "Staten Island")
        svgLineChart.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "orange")
            .attr("stroke-width", 3)
            .attr("class", "line")
            .attr("d", d3.line()
                .x(function (d) { return x(d.year) })
                .y(function (d) { return y(d.StatenIslandInt) })
            )
            .style("opacity", "0.5");






        var color = d3.scaleOrdinal(d3.schemeCategory10);

        color.domain(d3.keys(data[0]).filter(function (key) {
            return key !== "year", "Bronx", "Manhattan", "Brooklyn", "Queens", "StatenIsland";
        }));


        var values = color.domain().map(function (column) {
            return {
                column: column,
                values: data.map(function (d) {
                    return {
                        date: d.year,
                        value: +d[column]
                    };
                })
            }
        })



        var mouseG = svgLineChart.append("g")
            .attr("class", "mouse-over-effects");

        mouseG.append("path") // this is the black vertical line to follow mouse
            .attr("class", "mouse-line")
            .style("stroke", "green")
            .style("stroke-width", "1px")
            .style("opacity", "0");

        var lines = document.getElementsByClassName('line'); //line represents the line with the data. 

        var mousePerLine = mouseG.selectAll('.mouse-per-line')
            .data(values)
            .enter()
            .append("g")
            .attr("class", "mouse-per-line");


        mousePerLine.append("circle")
            .attr("r", 7)
            .style("stroke", function (d) {
                return color(d.name);
            })
            .style("fill", "pink")
            .style("stroke-width", "1px")
            .style("opacity", "0");

        mousePerLine.append("text")
            .attr("transform", "translate(10,3)");


        // mouseG containts the vertical line

        mouseG.append('svg:rect') // append a rect to catch mouse movements on canvas
            .attr('width', width) // can't catch mouse events on a g element
            .attr('height', height)
            .attr('fill', 'none')
            .attr('pointer-events', 'all')
            .on('mouseout', function () { // on mouse out hide line, circles and text
                d3.select(".mouse-line")
                    .style("opacity", "0");
                d3.selectAll(".mouse-per-line circle")
                    .style("opacity", "0");
                d3.selectAll(".mouse-per-line text")
                    .style("opacity", "0");
            })

            .on('mouseover', function () { // on mouse in show line, circles and text
                d3.select(".mouse-line")  // vertical line 
                    .style("opacity", "1");
                d3.selectAll(".mouse-per-line circle") //circles 
                    .style("opacity", "1");
                d3.selectAll(".mouse-per-line text")// text 
                    .style("opacity", "1");
            })


            .on('mousemove', function () { // mouse moving over canvas
                var mouse = d3.mouse(this);
                d3.select(".mouse-line")
                    .attr("d", function () {
                        var d = "M" + mouse[0] + "," + height;
                        d += " " + mouse[0] + "," + 0;
                        return d;
                    });

                d3.selectAll(".mouse-per-line")
                    .attr("transform", function (d, i) {
                        console.log(width / mouse[0])
                        var xDate = x.invert(mouse[0]),
                            bisect = d3.bisector(function (d) { return d.year; }).right;
                        idx = bisect(d.values, xDate);

                        var beginning = 0,
                            end = lines[i].getTotalLength(),
                            target = null;

                        while (true) {
                            target = Math.floor((beginning + end) / 2);
                            pos = lines[i].getPointAtLength(target);
                            if ((target === end || target === beginning) && pos.x !== mouse[0]) {
                                break;
                            }
                            if (pos.x > mouse[0]) end = target;
                            else if (pos.x < mouse[0]) beginning = target;
                            else break; //position found
                        }

                        d3.select(this).select('text')
                            .text(y.invert(pos.y).toFixed(2));

                        return "translate(" + mouse[0] + "," + pos.y + ")";
                    });

            });


    })
})



//---------------






/*


 // The following lines convert string numbers into integers:

var moneyint = realEstateData.forEach(function (data) {
    return Number(data.averagePrice1familyHome.replace(/[^0-9.-]+/g, ""))
});

*/

/*

var realEstateData = realEstateData.map(function (e) {
    e.averagePrice1familyHome = Number(e.averagePrice1familyHome.replace(/[^0-9.-]+/g, ""))
    return e;
});

*/











//---------------




function getYear(year, data) {
    return data.filter(x => x.year === year);
};


console.log("sssss", getYear(2016, realEstateData))



function createTable() {

    d3.selectAll("tr").remove()

    var filtered_year = document.getElementById("avgSalesTable").value;

    console.log(filtered_year)

    var filtered_data = realEstateData.filter(x => x.year === filtered_year)

    console.log(filtered_data)

    var header = d3.select('thead').append("tr");

    var boro_header = header.append('td').html("Borough");
    boro_header.style("font-size", "20px");
    boro_header.style("font-weight", "bold");

    var avg_price = header.append('td').html("Average Price 1 Family Home");
    avg_price.style("font-size", "20px");
    avg_price.style("font-weight", "bold");

    var avg_price = header.append('td').html("Maximum Sale Price ");
    avg_price.style("font-size", "20px");
    avg_price.style("font-weight", "bold");

    for (var i = 0; i < filtered_data.length; i++) {
        var row = d3.select('tbody').append('tr');
        row.append('td').html(filtered_data[i].Borough);
        row.append('td').html(filtered_data[i].averagePrice1familyHome);
        row.append('td').html(filtered_data[i].maximumsaleprice);

    }



}

//d3.selectAll("td").remove()

//createTable(2016)











/*

//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------

$(document).ready(function () {
    $.getJSON('/airbnb_data', function (data, status, xhr) {

        var WIDTH_ = 800;
        var HEIGHT_ = 600;


        var svgBarGraph = d3.select("#barGraph")
            .append("svg")
            .style('width', WIDTH_)
            .style('height', HEIGHT_)
            .attr("id", "svgForBarGraph");



        d3.select("#svgForBarGraph")
            .selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr("fill", "grey");

        var yScale = d3.scaleLinear();
        yScale.range([HEIGHT_ - 70, 30]);
        var yMin = d3.min(data, function (datum, index) {
            return datum.value;
        })
        var yMax = d3.max(data, function (datum, index) {
            return datum.value;
        })
        yScale.domain([yMin - 1, yMax]);


        d3.selectAll('rect')
            .attr('height', function (datum, index) {
                return HEIGHT_ - yScale(datum.value);
            });

        var xScale = d3.scaleLinear(); /////<--------------
        xScale.range([0, WIDTH_]);
        xScale.domain([0, data.length]); /////<--------------

        d3.selectAll('rect')
            .attr('x', function (datum, index) { return xScale(index); });


        d3.selectAll('rect')
            .attr('y', function (datum, index) {
                return yScale(datum.value);
            })


        d3.selectAll('rect')
            .attr('width', WIDTH_ / data.length - 1.5);


        var leftAxis = d3.axisLeft(yScale);
        d3.select('#svgForBarGraph')
            .append('g').attr('id', 'left-axis')
            .call(leftAxis);



        var dateScale = d3.scaleBand(); /////<--------------
        var dateDomain = data.map(function (d) {
            return d.date

        });


        dateScale.range([0, WIDTH_]);   /////<--------------
        dateScale.domain(dateDomain);




        var bottomAxis = d3.axisBottom(dateScale);  /////<--------------
        d3.select('#svgForBarGraph')
            .append('g').attr('id', 'bottom-axis')
            .call(bottomAxis)
            .attr('transform', 'translate(0,' + HEIGHT_ + ')');


    })

})

*/







//------------------------------------------------

//------------------------------------------------

//------------------------------------------------
var number_of_residential_sold_2018 = [
    {
        "geoID": "BX59",
        "residential_sales_2018": "Residential sales (2018): 58"
    },
    {
        "geoID": "BX10",
        "residential_sales_2018": "Residential sales (2018): 42"
    },
    {
        "geoID": "BX52",
        "residential_sales_2018": "Residential sales (2018): 359"
    },
    {
        "geoID": "BX33",
        "residential_sales_2018": "Residential sales (2018): 63"
    },
    {
        "geoID": "BX31",
        "residential_sales_2018": "Residential sales (2018): 50"
    },
    {
        "geoID": "BX08",
        "residential_sales_2018": "Residential sales (2018): 24"
    },
    {
        "geoID": "BX46",
        "residential_sales_2018": "Residential sales (2018): 64"
    },
    {
        "geoID": "BX55",
        "residential_sales_2018": "Residential sales (2018): 216"
    },
    {
        "geoID": "BX28",
        "residential_sales_2018": "--"
    },
    {
        "geoID": "BX41",
        "residential_sales_2018": "Residential sales (2018): 39"
    },
    {
        "geoID": "BX62",
        "residential_sales_2018": "Residential sales (2018): 207"
    },
    {
        "geoID": "BX07",
        "residential_sales_2018": "Residential sales (2018): 183"
    },
    {
        "geoID": "BX44",
        "residential_sales_2018": "Residential sales (2018): 294"
    },
    {
        "geoID": "BX98",
        "residential_sales_2018": "--"
    },
    {
        "geoID": "BX26",
        "residential_sales_2018": "Residential sales (2018): 73"
    },
    {
        "geoID": "BX22",
        "residential_sales_2018": "Residential sales (2018): 121"
    },
    {
        "geoID": "BX29",
        "residential_sales_2018": "Residential sales (2018): 52"
    },
    {
        "geoID": "BX27",
        "residential_sales_2018": "Residential sales (2018): 13"
    },
    {
        "geoID": "BX06",
        "residential_sales_2018": "Residential sales (2018): 24"
    },
    {
        "geoID": "BX09",
        "residential_sales_2018": "Residential sales (2018): 110"
    },
    {
        "geoID": "BX34",
        "residential_sales_2018": "Residential sales (2018): 56"
    },
    {
        "geoID": "BX39",
        "residential_sales_2018": "Residential sales (2018): 42"
    },
    {
        "geoID": "BX01",
        "residential_sales_2018": "Residential sales (2018): 37"
    },
    {
        "geoID": "BX35",
        "residential_sales_2018": "Residential sales (2018): 62"
    },
    {
        "geoID": "BX75",
        "residential_sales_2018": "Residential sales (2018): 34"
    },
    {
        "geoID": "BX40",
        "residential_sales_2018": "Residential sales (2018): 36"
    },
    {
        "geoID": "BX43",
        "residential_sales_2018": "Residential sales (2018): 37"
    },
    {
        "geoID": "BX05",
        "residential_sales_2018": "Residential sales (2018): 30"
    },
    {
        "geoID": "BX03",
        "residential_sales_2018": "Residential sales (2018): 278"
    },
    {
        "geoID": "BX13",
        "residential_sales_2018": "Residential sales (2018): 1"
    },
    {
        "geoID": "BX17",
        "residential_sales_2018": "Residential sales (2018): 54"
    },
    {
        "geoID": "BX49",
        "residential_sales_2018": "Residential sales (2018): 126"
    },
    {
        "geoID": "BX99",
        "residential_sales_2018": "Residential sales (2018): 1"
    },
    {
        "geoID": "BX37",
        "residential_sales_2018": "Residential sales (2018): 148"
    },
    {
        "geoID": "BX14",
        "residential_sales_2018": "Residential sales (2018): 23"
    },
    {
        "geoID": "BX63",
        "residential_sales_2018": "Residential sales (2018): 27"
    },
    {
        "geoID": "BX30",
        "residential_sales_2018": "Residential sales (2018): 43"
    },
    {
        "geoID": "BX36",
        "residential_sales_2018": "Residential sales (2018): 52"
    }
]









var data_median_home_price = [
    {
        "geoID": "BX59",
        "MedianHomePrice": "Median Home Price: $750K"
    },
    {
        "geoID": "BX10",
        "MedianHomePrice": "Median Home Price: $560K"
    },
    {
        "geoID": "BX52",
        "MedianHomePrice": "Median Home Price: $680K"
    },
    {
        "geoID": "BX33",
        "MedianHomePrice": "Median Home Price: $740K"
    },
    {
        "geoID": "BX31",
        "MedianHomePrice": "Median Home Price: $499K"
    },
    {
        "geoID": "BX08",
        "MedianHomePrice": "Median Home Price: $699K"
    },
    {
        "geoID": "BX46",
        "MedianHomePrice": "Median Home Price: $240K"
    },
    {
        "geoID": "BX55",
        "MedianHomePrice": "Median Home Price: $489.5K"
    },
    {
        "geoID": "BX28",
        "MedianHomePrice": "--"
    },
    {
        "geoID": "BX41",
        "MedianHomePrice": "Median Home Price: $760K"
    },
    {
        "geoID": "BX62",
        "MedianHomePrice": "Median Home Price: $327K"
    },
    {
        "geoID": "BX07",
        "MedianHomePrice": "Median Home Price: $745K"
    },
    {
        "geoID": "BX44",
        "MedianHomePrice": "Median Home Price: $589K"
    },
    {
        "geoID": "BX98",
        "MedianHomePrice": "--"
    },
    {
        "geoID": "BX26",
        "MedianHomePrice": "Median Home Price: $449K"
    },
    {
        "geoID": "BX22",
        "MedianHomePrice": "Median Home Price: $380K"
    },
    {
        "geoID": "BX29",
        "MedianHomePrice": "Median Home Price: $315K"
    },
    {
        "geoID": "BX27",
        "MedianHomePrice": "Median Home Price: $600K"
    },
    {
        "geoID": "BX06",
        "MedianHomePrice": "Median Home Price: $1M"
    },
    {
        "geoID": "BX09",
        "MedianHomePrice": "Median Home Price: $489.5K"
    },
    {
        "geoID": "BX34",
        "MedianHomePrice": "Median Home Price: $299.5K"
    },
    {
        "geoID": "BX39",
        "MedianHomePrice": "Median Home Price: $735K"
    },
    {
        "geoID": "BX01",
        "MedianHomePrice": "Median Home Price: $529k"
    },
    {
        "geoID": "BX35",
        "MedianHomePrice": "Median Home Price: $572K"
    },
    {
        "geoID": "BX75",
        "MedianHomePrice": "Median Home Price: $649K"
    },
    {
        "geoID": "BX40",
        "MedianHomePrice": "Median Home Price: $545K"
    },
    {
        "geoID": "BX43",
        "MedianHomePrice": "Median Home Price: $715K"
    },
    {
        "geoID": "BX05",
        "MedianHomePrice": "Median Home Price: $194.7K"
    },
    {
        "geoID": "BX03",
        "MedianHomePrice": "Median Home Price: $499K"
    },
    {
        "geoID": "BX13",
        "MedianHomePrice": "Median Home Price: $570K"
    },
    {
        "geoID": "BX17",
        "MedianHomePrice": "Median Home Price: $619.5K"
    },
    {
        "geoID": "BX49",
        "MedianHomePrice": "Median Home Price: $250K"
    },
    {
        "geoID": "BX99",
        "MedianHomePrice": "--"
    },
    {
        "geoID": "BX37",
        "MedianHomePrice": "Median Home Price: $739K"
    },
    {
        "geoID": "BX14",
        "MedianHomePrice": "Median Home Price: $277K"
    },
    {
        "geoID": "BX63",
        "MedianHomePrice": "Median Home Price: $550K"
    },
    {
        "geoID": "BX30",
        "MedianHomePrice": "Median Home Price: $299K"
    },
    {
        "geoID": "BX36",
        "MedianHomePrice": "Median Home Price: $257K"
    }
]






var data_for_toolip = [
    {
        "geoID": "BX59",
        "MedianIncome": "Median Household Income: 44.9k"
    },
    {
        "geoID": "BX62",
        "MedianIncome": "Median Household Income: 73.6k"
    },
    {
        "geoID": "BX44",
        "MedianIncome": "Median Household Income: 42.4k"
    },
    {
        "geoID": "BX08",
        "MedianIncome": "Median Household Income: 22.7k"
    },
    {
        "geoID": "BX63",
        "MedianIncome": "Median Household Income: 31.4k"
    },
    {
        "geoID": "BX37",
        "MedianIncome": "Median Household Income: 46.8k"
    },
    {
        "geoID": "BX28",
        "MedianIncome": "Median Household Income: 80.2k"
    },
    {
        "geoID": "BX36",
        "MedianIncome": " Median Household Income: 30.2k"
    },
    {
        "geoID": "BX29",
        "MedianIncome": " Median Household Income: 88.8k"
    },
    {
        "geoID": "BX09",
        "MedianIncome": " Median Household Income: 65.1k"
    },
    {
        "geoID": "BX55",
        "MedianIncome": "Median Household Income: 31.5k"
    },
    {
        "geoID": "BX52",
        "MedianIncome": "Median Household Income: 72.5k"
    },
    {
        "geoID": "BX98",
        "MedianIncome": "Median Household Income: 59.9k"
    },
    {
        "geoID": "BX49",
        "MedianIncome": "Median Household Income: 49.5k"
    },
    {
        "geoID": "BX10",
        "MedianIncome": "Median Household Income: 60.2k"
    },
    {
        "geoID": "BX46",
        "MedianIncome": "Median Household Income: 46.4k"
    },
    {
        "geoID": "BX99",
        "MedianIncome": "Median Household Income: 45.2k"
    },
    {
        "geoID": "BX43",
        "MedianIncome": " Median Household Income: 34.6k"
    },
    {
        "geoID": "BX22",
        "MedianIncome": "Median Household Income: 136.7k"
    },
    {
        "geoID": "BX41",
        "MedianIncome": "Median Household Income: 28.9k"
    },
    {
        "geoID": "BX39",
        "MedianIncome": "Median Household Income: 38.6k"
    },
    {
        "geoID": "BX35",
        "MedianIncome": "Median Household Income: 26.4k"
    },
    {
        "geoID": "BX34",
        "MedianIncome": "Median Household Income: 25.7k"
    },
    {
        "geoID": "BX33",
        "MedianIncome": "Median Household Income: 23.7k"
    },
    {
        "geoID": "BX30",
        "MedianIncome": "Median Household Income: 48.8k"
    },
    {
        "geoID": "BX27",
        "MedianIncome": "Median Household Income: 28.5k"
    },
    {
        "geoID": "BX26",
        "MedianIncome": "Median Household Income: 26.8k"
    },
    {
        "geoID": "BX40",
        "MedianIncome": "Median Household Income: 28.6k"
    },
    {
        "geoID": "BX03",
        "MedianIncome": "Median Household Income: 71.7k"
    },
    {
        "geoID": "BX17",
        "MedianIncome": " Median Household Income: 28.1k"
    },
    {
        "geoID": "BX14",
        "MedianIncome": "Median Household Income: 29.2k"
    },
    {
        "geoID": "BX75",
        "MedianIncome": "Median Household Income: 26.4k"
    },
    {
        "geoID": "BX13",
        "MedianIncome": "Median Household Income: 42.5k"
    },
    {
        "geoID": "BX01",
        "MedianIncome": "Median Household Income: 23.9k"
    },
    {
        "geoID": "BX07",
        "MedianIncome": "Median Household Income: 48.9k"
    },
    {
        "geoID": "BX06",
        "MedianIncome": "Median Household Income: 26.7k"
    },
    {
        "geoID": "BX05",
        "MedianIncome": "Median Household Income: 41.3k"
    },
    {
        "geoID": "BX31",
        "MedianIncome": "Median Household Income: 70.7k"
    }
]








var width = 1000;
var height = 530;
var db = d3.map(); // Looks for values by geoID.


//var sparkline = d3.charts.sparkline().height(300).width(138); // functiona that will draw the line.

var svg = d3.select("#map")
    .append("svg")
    .attr("id", "svgmap")
    .attr("width", width)
    .attr("height", height);


function chart(config) {
    return function () {
        config.width,
            config.height
    };
}

//var myChart = chart({ width: 720, height: 80 });

var geoID = function (d) { //returns unique IDs for each neighbrohood
    return d.properties.ntacode;
};


var hover = function (d) {
    var div = document.getElementById('tooltip');
    div.style.left = d3.event.pageX + 'px';
    div.style.top = d3.event.pageY + 'px';
    div.innerHTML = d.properties.ntaname;

    var id = geoID(d);

    var svg_for_tooltip = d3.select("#tooltip").datum(db.get(id))
        .append("svg")

        .attr("heigh", 100)
        .attr("width", 286.5)
        .attr("x", d3.event.pageX + "px")
        .attr("y", d3.event.pageY + "px")


    var filterResult = data_for_toolip.filter((x) => { return x.geoID === id; })

    var filterResultText = (filterResult.map(x => x.MedianIncome))

    var filterResultTextGeoID = (filterResult.map(x => x.MedianIncome))


    svg_for_tooltip.append("text")
        .attr("x", 30)
        .attr("y", 30)
        .text(filterResultText)



    var filterResultTest = data_median_home_price.filter((x) => { return x.geoID === id; })

    var filterResultTextTest = (filterResultTest.map(x => x.MedianHomePrice))

    svg_for_tooltip.append("text")
        .attr("x", 30)
        .attr("y", 60)
        .text(filterResultTextTest)




    var filterResultSales = number_of_residential_sold_2018.filter((x) => { return x.geoID === id; })

    var filterResultSalesText = (filterResultSales.map(x => x.residential_sales_2018))

    svg_for_tooltip.append("text")
        .attr("x", 30)
        .attr("y", 90)
        .text(filterResultSalesText)





};




var click = function (d) {
    console.log('d', d);
    d3.selectAll('path').attr('fill-opacity', 0.2)
    d3.select('#' + geoID(d)).attr('fill-opacity', 1);
};




$(document).ready(function () {
    $.getJSON('/data', function (data, status, xhr) {



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


        var color = d3.scaleLinear()
            .domain([0, 38])
            .range(['grey']);

        var map = svg.append('g').attr('class', 'boundary');

        u = map.selectAll('path').data(data.features);

        var u = d3.select('#svgmap') //////////////////////////////////////////
            .selectAll('path')
            .data(bronx_neighborhoods)

        u.enter()
            .append('path')
            .attr('d', geoGenerator)
            //.attr('fill', 'black')
            .on("mouseover", hover)
            .attr('fill-opacity', 0.7)
            .attr('fill', function (d, i) { return color(i); });

        u.attr('fill', '#eee');
        u.exit().remove();


        //d3.csv('neighborhoods-data.csv').then(setDb);

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









var modelData = [

    {
        type: "Different Neighborhood",
        sqft: 2000,
        totalUnits: 2,
        neighbrohood: "Bathgate",
        buildingCategory: 5,
        PredictedPrice: "$521.463"

    },

    {
        type: "Different Neighborhood",
        sqft: 2000,
        totalUnits: 2,
        neighbrohood: "Baychester",
        buildingCategory: 5,
        PredictedPrice: "$520.765"

    },

    {
        type: "Different Neighborhood",
        sqft: 2000,
        totalUnits: 2,
        neighbrohood: "Norwood",
        buildingCategory: 5,
        PredictedPrice: "$520.066"

    },

    {
        type: "Different Neighborhood",
        sqft: 2000,
        totalUnits: 2,
        neighbrohood: "Belmont",
        buildingCategory: 5,
        PredictedPrice: "$519.367"

    },
    {
        type: "Different Neighborhood",
        sqft: 2000,
        totalUnits: 2,
        neighbrohood: "Bronxdale",
        buildingCategory: 5,
        PredictedPrice: "$518.669"

    },

    //-------------------------------


    {
        type: "Different Sqft",
        sqft: 1300,
        totalUnits: 2,
        neighbrohood: "Crotona Park",
        buildingCategory: 5,
        PredictedPrice: "$492.321"

    },

    {
        type: "Different Sqft",
        sqft: 2500,
        totalUnits: 2,
        neighbrohood: "Crotona Park",
        buildingCategory: 5,
        PredictedPrice: "$531.501"

    },

    {
        type: "Different Sqft",
        sqft: 3300,
        totalUnits: 2,
        neighbrohood: "Crotona Park",
        buildingCategory: 5,
        PredictedPrice: "$557.620"

    },

    {
        type: "Different Sqft",
        sqft: 4000,
        totalUnits: 2,
        neighbrohood: "Crotona Park",
        buildingCategory: 5,
        PredictedPrice: "$580.475"

    },
    {
        type: "Different Sqft",
        sqft: 5000,
        totalUnits: 2,
        neighbrohood: "Crotona Park",
        buildingCategory: 5,
        PredictedPrice: "$613.125"

    },


    //-------------------------------


    {
        type: "Different Building Type",
        sqft: 2700,
        totalUnits: 2,
        neighbrohood: "Crotona Park",
        buildingCategory: 1,
        PredictedPrice: "$422.858"

    },

    {
        type: "Different Building Type",
        sqft: 2700,
        totalUnits: 2,
        neighbrohood: "Crotona Park",
        buildingCategory: 2,
        PredictedPrice: "$451.651"

    },

    {
        type: "Different Building Type",
        sqft: 2700,
        totalUnits: 2,
        neighbrohood: "Crotona Park",
        buildingCategory: 3,
        PredictedPrice: 480444

    },

    {
        type: "Different Building Type",
        sqft: 2700,
        totalUnits: 2,
        neighbrohood: "Crotona Park",
        buildingCategory: 4,
        PredictedPrice: "$509.237"

    },
    {
        type: "Different Building Type",
        sqft: 2700,
        totalUnits: 2,
        neighbrohood: "Crotona Park",
        buildingCategory: 5,
        PredictedPrice: "$538.030"

    },

]






function createTableforModel() {

    d3.selectAll("tr").remove()

    var filtered_data_model = document.getElementById("modelTable").value;

    // console.log(filtered_data_model)

    var filtered_data_model = modelData.filter(x => x.type === filtered_data_model)

    console.log(filtered_data_model)

    var header2 = d3.select('#tableModelHead').append("tr");

    var sqft_header2 = header2.append('td').html("Square Feet");
    sqft_header2.style("font-size", "20px");
    sqft_header2.style("font-weight", "bold");


    var total_units = header2.append('td').html("Number of Units");
    total_units.style("font-size", "20px");
    total_units.style("font-weight", "bold");


    var neighbrohood_header = header2.append('td').html("Neighborhood");
    neighbrohood_header.style("font-size", "20px");
    neighbrohood_header.style("font-weight", "bold");


    var building_category = header2.append('td').html("Building Category");
    building_category.style("font-size", "20px");
    building_category.style("font-weight", "bold");

    var predicted_price = header2.append('td').html("Predicted Price");
    predicted_price.style("font-size", "20px");
    predicted_price.style("font-weight", "bold");




    for (var i = 0; i < filtered_data_model.length; i++) {
        var row = d3.select('#modelTableBody').append('tr');
        row.append('td').html(filtered_data_model[i].sqft);
        row.append('td').html(filtered_data_model[i].totalUnits);
        row.append('td').html(filtered_data_model[i].neighbrohood);
        row.append('td').html(filtered_data_model[i].buildingCategory);
        row.append('td').html(filtered_data_model[i].PredictedPrice);



    }



}



//createTableforModel()
