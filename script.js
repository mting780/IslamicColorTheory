var csv_data;
var current;



var tusiData =
  {
    "name": "White",
    "color": "#e6e6e1",
        "description": "<p class='explain'> white is the symbol of Being which is the origin of all existence<sub>9</sub></p>",

    "children": [
      { 
        "name": "Straw",
        "color": "#ebcb8c",
            "description": "<p class='explain'>'First through the mixing of dense and fire, both in small amount, the straw-yellow is produced' --al Tusi</p>",


        "children": [
          { "name": "Lemon",
            "color": "#fcd03a",
                "description": "white gradually passes to black by three paths",

          "children": [
          { "name": "Saffron",
            "color": "#ffc100",
                "description": "white gradually passes to black by three paths",

            "children": [
          { "name": "Orange Yellow",
            "color": "#fa7400",
                "description": "white gradually passes to black by three paths",

            "children": [
          { "name": "Orange Yellow",
            "color": "#e86315",
                "description": "white gradually passes to black by three paths",

          "children": [
            { "name": "Pomegranate",
              "color": "#83001F",
                "description": "white gradually passes to black by three paths"}
                ]}
              ]}
            ]}
          ]}
        ]
      },
      { "name": "Rose",
        "color": "#c31828",
            "description": "white gradually passes to black by three paths",

        "children": [
          { "name": "Evening Red",
          "color": "#dc332d",
              "description": "white gradually passes to black by three paths",

        "children": [
          { "name": "Blood",
          "color": "#a31322",
              "description": "white gradually passes to black by three paths",

          "children": [
            { "name": "Purple",
            "color": "#93356d",
                "description": "white gradually passes to black by three paths",

            "children": [
              { "name": "Violet",
                "color": "#7a448e",
                  "description": "white gradually passes to black by three paths"
}

              ]}
            ]}
          ]}
        ]},
      { "name": "Pistachio",
        "color" : "#aeb680",
            "description": "white gradually passes to black by three paths",

        "children": [
          { "name": "Leek",
          "color" : "#418231",
              "description": "white gradually passes to black by three paths",

          "children": [
          { "name": "Verdigris",
          "color" : "#469357",
              "description": "<p class='explain'>According to tradition, the horizon would be covered by green light when revelation descended while during"+
                            "the Nocturnal Ascent (al-mi'raj)the Blessed Prophet was pulled up for the very last stage of the journey to the"+
                            "Divine Presence by a green cloth (rafraf) which descended from above<sub>8</sub></p>",

           "children": [
          { "name": "Walnut",
          "color" : "#a57640",
              "description": "white gradually passes to black by three paths",

            "children": [
          { "name": "Eggplant",
          "color" : "#85845c",
              "description": "the arrival of eggplant in Persia in the 7th and 8th centuries made it a popular plant for medicine and food<sub>5</sub>",

            "children": [
          { "name": "Nahptha",
          "color" : "#174167",
              "description": "white gradually passes to black by three paths",

            "children": [
          { "name": "Black",
            "color": "#202020",
          "description": "<p class='explain'>It is the colour of the family of the Blessed Prophet and is even important architecturally as the colour of the cloth (the kiswah) which covers the Ka'bah, it may be said to symbolize the supra-ontological Principle transcending even Being as usually understood. It symbolizes the Supreme Principle to which the Ka'bah is of course related in that it is in a sense the principle of all sacred architecture in Islam<sub>8</sub></p>"+
                          "<p class='explain'>In modern Islamic culture, the color black still maintains significance in representing divine darkness and black turbans are worn by descendents of Muhammad.</p>"
                    }
                  ]}
                ]}
              ]}
            ]}
          ]}
        ]},
      { "name": "Sapphire/Hyacinth" ,
        "color": "#88cbdc",
        "description": "white gradually passes to black by three paths",

        "children": [
          { "name": "Turkish Blue",
            "color": "#30c1bc",
            "description": "white gradually passes to black by three paths",

            "children": [
          { "name": "Azure Blue",
            "color": "#00689e",
            "description": "<p class='explain'>Blue is the color of the sky and water and signifies life and paradise in Islamic architecture.<sub>9</sub></p>",

            "children": [
          { "name": "Indigo Blue",
            "color": "#4e89be",
            "description": "white gradually passes to black by three paths",

            "children": [
          { "name": "Kohl",
            "color": "#0e3863",
          "description": "white gradually passes to black by three paths"

                }
              ]}
            ]}
          ]}
        ]},
      { "name": "Dust Grey",
        "color": "#9c9e9a",
        "description": "white gradually passes to black by three paths",
        "children": [
          { "name": "Darkish Dirty",
          "color": "#b1b3af",
          "description": "white gradually passes to black by three paths",
 
          "children": [
          { "name": "Dark",
            "color": "#3c3d3c",
          "description": "white gradually passes to black by three paths"

            }
          ]}
        ]}

    ]
  };

  var avicennaData = {
    "name": "White",
    "color": "#e6e6e1",
    "description": "<p class='explain'>'white gradually passes to black by three paths' --Ibn Sina</p>",
    "children": [{
        "name": "Pale",
        "color": "#b1b3af",
        "description": "white gradually passes to black by three paths",
        "children": [{
          "name": "Grey",
          "color": "#9c9e9a",
          "description": "white gradually passes to black by three paths"
        }]
      },

      {"name": "Red",
      "color": 'red',
        "description": "white gradually passes to black by three paths",
        "children":[{
          "name": "Red Brown",
          "color": '#A52A2A',
          "description": "white gradually passes to black by three paths",
          "children": [{
            "name": "Black",
            "color": '202020',
              "description": "<p class='explain'>'[grey] does not veer from gradually stretching towards blackness, until it becomes pure black' --Ibn Sina</p>"}]
    }] },
        
      
      {
        "name": "Green",
        "color": "#418231",
        "description": "white gradually passes to black by three paths",
        "children": [{
        "name": "Indigo",
        "color": "#00416A",
        "description": "white gradually passes to black by three paths"
          }]
      }]

  }



// set the dimensions and margins of the diagram
var margin = {top: 80, right: 90, bottom: 50, left: 50},
    width = 560 - margin.left - margin.right,
    height = 900 - margin.top - margin.bottom,
    Aheight = 600 - margin.top - margin.bottom,
    Awidth = 500 - margin.left - margin.right;

// declares a tree layout and assigns the size
var treemap = d3.tree()
    .size([width, height]);
var tooltip = d3.select("body").append("div").attr("class", "toolTip");





// ********TREE FOR IBN SINA COLOR *****//
function avicenna (treeData){
//  assigns the data to a hierarchy using parent-child relationships
var nodes = d3.hierarchy(treeData);
var treemap = d3.tree().size([400,400])
// maps the node data to the tree layout
nodes = treemap(nodes);

// append the svg object to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("#avicenna").append("svg")
      .attr("width", Awidth + margin.left + margin.right)
      .attr("height", Aheight + margin.top + margin.bottom),
    g = svg.append("g")
      .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

// adds the links between the nodes
var link = g.selectAll(".link")
    .data( nodes.descendants().slice(1))
  .enter().append("path")
    .attr("class", "link")
    .attr("d", function(d) {
       return "M" + d.x + "," + d.y
         + "C" + d.x + "," + (d.y + d.parent.y) / 2
         + " " + d.parent.x + "," +  (d.y + d.parent.y) / 2
         + " " + d.parent.x + "," + d.parent.y;
       });

// adds each node as a group
var node = g.selectAll(".node")
    .data(nodes.descendants())
  .enter().append("g")
    .attr("class", function(d) { 
      return "node" + 
        (d.children ? " node--internal" : " node--leaf"); })
    .attr("transform", function(d) { 
      return "translate(" + d.x + "," + d.y + ")"; })
    .attr("name", function(d) {
    return d.data.name
  }).attr("description", function(d){
      return d.data.description
    });

var base = g.selectAll(".node").data(nodes.descendants())
            .enter().append("g").attr("class",function(d) {
              return "node"
            })
            .attr("transform",function(d){
              return "translate(" + 100 + "," + 100 + ")"; });


base.append("circle").attr("r",20).attr("name", function() {return "BLACK"})

base.append("text")
  .attr("dy", ".15em")
  .attr("y", function(d) { return d.children ? -100 : -100; })
  .style("text-anchor", "middle")
  .text(function(d) { return d.data.name; });

// adds the circle to the node
node.append("circle")
  .attr("r", 35)
  .attr("name", function(d) {
    return d.data.name
  })
  .style("fill",function(d) { return d.data.color;})


// adds the text to the node
// node.append("text")
//   .attr("dy", ".25em")
//   .attr("y", function(d) { return d.children ? 5 : 5; })
//   .style("text-anchor", "middle")
//   .text(function(d) { return d.data.name; });

node.attr("fill",function(d) { return d.data.color;})

node.on("click", function () {
    d3.select("#a_d").remove()
    d3.select(this).select("circle").style("stroke","#123fff");
    var current = d3.select(this).attr('name')
    var content = d3.select(this).attr('description')
    d3.select("#a_details").append("g").attr("id","a_d").style("width",200).style("height",300).html(function(){return "<p class='content'>" + "<style='text-decoration:underline'>"+current + "</style>"+"<br>" 
                                                                                                                + content + "</p>"})

})

node.on("mouseover",function() {
  d3.select(this).select("circle").style("stroke","#888")
            tooltip
              .style("left", d3.event.pageX + 50 +"px")
              .style("top", d3.event.pageY + "px")
              .style("display", "inline-block")
              .html(d3.select(this).attr('name')
                );
})

.on("mouseout",function() {
  d3.select(this).select("circle").style("stroke","#fff")
  tooltip.style("display", "none");

})

}





avicenna(avicennaData)


function tusi (treeData){
//  assigns the data to a hierarchy using parent-child relationships
var nodes = d3.hierarchy(treeData);
var treemap = d3.tree().size([500,700])

// maps the node data to the tree layout
nodes = treemap(nodes);

// append the svg object to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("#tusi").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom),
    g = svg.append("g")
      .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

// adds the links between the nodes
var link = g.selectAll(".link")
    .data( nodes.descendants().slice(1))
  .enter().append("path")
    .attr("class", "link")
    .attr("d", function(d) {
       return "M" + d.x + "," + d.y
         + "C" + d.x + "," + (d.y + d.parent.y) / 2
         + " " + d.parent.x + "," +  (d.y + d.parent.y) / 2
         + " " + d.parent.x + "," + d.parent.y;
       });

// adds each node as a group
var node = g.selectAll(".node")
    .data(nodes.descendants())
  .enter().append("g")
    .attr("class", function(d) { 
      return "node" + 
        (d.children ? " node--internal" : " node--leaf"); })
    .attr("transform", function(d) { 
      return "translate(" + d.x + "," + d.y + ")"; })
    .attr("name", function(d) {
    return d.data.name
  })
    .attr("description", function(d){
      return d.data.description
    });

var base = g.selectAll(".node").data(nodes.descendants())
            .enter().append("g").attr("class",function(d) {
              return "node"
            })
            .attr("transform",function(d){
              return "translate(" + 100 + "," + 100 + ")"; });


base.append("circle").attr("r",20).attr("name", function() {return "BLACK"})

base.append("text")
  .attr("dy", ".15em")
  .attr("y", function(d) { return d.children ? -100 : -100; })
  .style("text-anchor", "middle")
  .text(function(d) { return d.data.name; });

// adds the circle to the node
node.append("circle")
  .attr("r", 35)
  .attr("name", function(d) {
    return d.data.name
  })
  .style("fill",function(d) { return d.data.color;})


// adds the text to the node
// node.append("text")
//   .attr("dy", ".25em")
//   .attr("y", function(d) { return d.children ? 5 : 5; })
//   .style("text-anchor", "middle")
//   .text(function(d) { return d.data.name; });

node.attr("fill",function(d) { return d.data.color;})

node.on("click", function () {
    d3.select("#t_d").remove()
    d3.select(this).select("circle").style("stroke","#123fff");
    var current = d3.select(this).attr('name')
    var content = d3.select(this).attr('description')
    console.log(this)
    d3.select("#details").append("g").attr("id","t_d").style("width",200).style("height",300).html(function(){return "<p class='content'>" + "<style='text-decoration:underline'>"+current + "</style>"+"<br>" 
                                                                                                                + content + "</p>"})


})

node.on("mouseover",function() {
  d3.select(this).select("circle").style("stroke","#888")
            tooltip
              .style("left", d3.event.pageX + 50 +"px")
              .style("top", d3.event.pageY + "px")
              .style("display", "inline-block")
              .html(d3.select(this).attr('name')
                );
})

.on("mouseout",function() {
  d3.select(this).select("circle").style("stroke","#fff")
  tooltip.style("display", "none");

})

}

tusi(tusiData);