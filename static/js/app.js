

var realEstateData = [

    {
        year: "2018",
        Borough: "Bronx",
        averagePrice1familyHome: 499060
    },

    {
        year: "2016",
        Borough: "Bronx",
        averagePrice1familyHome: 478379
    },

    {
        year: "2014",
        Borough: "Bronx",
        averagePrice1familyHome: 418437
    },

    {
        year: "2012",
        Borough: "Bronx",
        averagePrice1familyHome: 438315
    },

    {
        year: "2010",
        Borough: "Bronx",
        averagePrice1familyHome: 407253
    },

    {
        year: "2008",
        Borough: "Bronx",
        averagePrice1familyHome: 441962
    },


    //--------------
    {
        year: "2018",
        Borough: "Manhattan",
        averagePrice1familyHome: 8235346
    },

    {
        year: "2016",
        Borough: "Manhattan",
        averagePrice1familyHome: 8176576
    },

    {
        year: "2014",
        Borough: "Manhattan",
        averagePrice1familyHome: 9180342
    },

    {
        year: "2012",
        Borough: "Manhattan",
        averagePrice1familyHome: 7481470
    },

    {
        year: "2010",
        Borough: "Manhattan",
        averagePrice1familyHome: 6587094
    },

    {
        year: "2008",
        Borough: "Manhattan",
        averagePrice1familyHome: 8926012
    },

    //--------------
    {
        year: "2018",
        Borough: "Brooklyn",
        averagePrice1familyHome: 980737
    },


    {
        year: "2016",
        Borough: "Brooklyn",
        averagePrice1familyHome: 876864
    },

    {
        year: "2014",
        Borough: "Brooklyn",
        averagePrice1familyHome: 792853
    },


    {
        year: "2012",
        Borough: "Brooklyn",
        averagePrice1familyHome: 681672
    },

    {
        year: "2010",
        Borough: "Brooklyn",
        averagePrice1familyHome: 620904
    },

    {
        year: "2008",
        Borough: "Brooklyn",
        averagePrice1familyHome: 642727
    },



    //--------------

    {
        year: "2018",
        Borough: "Queens",
        averagePrice1familyHome: 645921
    },

    {
        year: "2016",
        Borough: "Queens",
        averagePrice1familyHome: 613139
    },

    {
        year: "2014",
        Borough: "Queens",
        averagePrice1familyHome: 559955
    },

    {
        year: "2012",
        Borough: "Queens",
        averagePrice1familyHome: 490878
    },

    {
        year: "2010",
        Borough: "Queens",
        averagePrice1familyHome: 462265
    },

    {
        year: "2008",
        Borough: "Queens",
        averagePrice1familyHome: 513661
    },


    //--------------

    {
        year: "2018",
        Borough: "Staten Island",
        averagePrice1familyHome: 520214
    },

    {
        year: "2016",
        Borough: "Staten Island",
        averagePrice1familyHome: 483340
    },

    {
        year: "2014",
        Borough: "Staten Island",
        averagePrice1familyHome: 435757
    },

    {
        year: "2012",
        Borough: "Staten Island",
        averagePrice1familyHome: 456373
    },


    {
        year: "2010",
        Borough: "Staten Island",
        averagePrice1familyHome: 423258
    },

    {
        year: "2008",
        Borough: "Staten Island",
        averagePrice1familyHome: 429639
    },


    //--------------
];



/*

var margin = { top: 10, right: 30, bottom: 30, left: 60 },
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var svg = d3.select("#linechart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");


var x = d3.scaleLinear()
    .domain([2016, 2018])
    .range([0, width]);




svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));



var yDomain = d3.extent(realEstateData, function (datum, index) {
    return datum.averagePrice1familyHome;

})

var y = d3.scaleLinear()
    .domain([0, 13])
    .range([height, 0]);



svg.append("g")
    .call(d3.axisLeft(y));


svg
    .append("path")
    .datum(realEstateData)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr("d", d3.line()
        .x(function (d) { return x(d.year) })
        .y(function (d) { return y(d.averagePrice1familyHome) })
    )




*/




function getYear(year, data) {
    return data.filter(x => x.year === year);
};


console.log("sssss", getYear(2016, realEstateData))



function createTable(year) {

    d3.selectAll("tr").remove()

    var filtered_year = document.getElementById("avgSalesTable").value;

    console.log(filtered_year)

    var filtered_data = realEstateData.filter(x => x.year === filtered_year)

    console.log(filtered_data)

    for (var i = 0; i < filtered_data.length; i++) {
        var row = d3.select('tbody').append('tr');
        row.append('td').html(filtered_data[i].Borough);
        row.append('td').html(filtered_data[i].averagePrice1familyHome);

    }



}

d3.selectAll("td").remove()

createTable(2016)













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
        neighbrohood: 1,
        buildingCategory: 5,
        PredictedPrice: 521463

    },

    {
        type: "Different Neighborhood",
        sqft: 2000,
        totalUnits: 2,
        neighbrohood: 2,
        buildingCategory: 5,
        PredictedPrice: 520765

    },

    {
        type: "Different Neighborhood",
        sqft: 2000,
        totalUnits: 2,
        neighbrohood: 3,
        buildingCategory: 5,
        PredictedPrice: 520066

    },

    {
        type: "Different Neighborhood",
        sqft: 2000,
        totalUnits: 2,
        neighbrohood: 4,
        buildingCategory: 5,
        PredictedPrice: 519367

    },
    {
        type: "Different Neighborhood",
        sqft: 2000,
        totalUnits: 2,
        neighbrohood: 5,
        buildingCategory: 5,
        PredictedPrice: 518669

    },

    //-------------------------------


    {
        type: "Different Sqft",
        sqft: 1300,
        totalUnits: 2,
        neighbrohood: 10,
        buildingCategory: 5,
        PredictedPrice: 492321

    },

    {
        type: "Different Sqft",
        sqft: 2500,
        totalUnits: 2,
        neighbrohood: 10,
        buildingCategory: 5,
        PredictedPrice: 531501

    },

    {
        type: "Different Sqft",
        sqft: 3300,
        totalUnits: 2,
        neighbrohood: 10,
        buildingCategory: 5,
        PredictedPrice: 557620

    },

    {
        type: "Different Sqft",
        sqft: 4000,
        totalUnits: 2,
        neighbrohood: 10,
        buildingCategory: 5,
        PredictedPrice: 580475

    },
    {
        type: "Different Sqft",
        sqft: 5000,
        totalUnits: 2,
        neighbrohood: 10,
        buildingCategory: 5,
        PredictedPrice: 613125

    },


    //-------------------------------


    {
        type: "Different Building Type",
        sqft: 2700,
        totalUnits: 2,
        neighbrohood: 10,
        buildingCategory: 1,
        PredictedPrice: 422858

    },

    {
        type: "Different Building Type",
        sqft: 2700,
        totalUnits: 2,
        neighbrohood: 10,
        buildingCategory: 2,
        PredictedPrice: 451651

    },

    {
        type: "Different Building Type",
        sqft: 2700,
        totalUnits: 2,
        neighbrohood: 10,
        buildingCategory: 3,
        PredictedPrice: 480444

    },

    {
        type: "Different Building Type",
        sqft: 2700,
        totalUnits: 2,
        neighbrohood: 10,
        buildingCategory: 4,
        PredictedPrice: 509237

    },
    {
        type: "Different Building Type",
        sqft: 2700,
        totalUnits: 2,
        neighbrohood: 10,
        buildingCategory: 5,
        PredictedPrice: 538030

    },

]






function createTableforModel(category) {

    d3.selectAll("tr").remove()

    var filtered_data_model = document.getElementById("modelTable").value;

    // console.log(filtered_data_model)

    var filtered_data_model = modelData.filter(x => x.type === filtered_data_model)

    console.log(filtered_data_model)

    for (var i = 0; i < filtered_data_model.length; i++) {
        var row = d3.select('#modelTableBody').append('tr');
        row.append('td').html(filtered_data_model[i].sqft);
        row.append('td').html(filtered_data_model[i].totalUnits);
        row.append('td').html(filtered_data_model[i].neighbrohood);
        row.append('td').html(filtered_data_model[i].buildingCategory);
        row.append('td').html(filtered_data_model[i].PredictedPrice);



    }



}



createTableforModel()
