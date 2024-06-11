var accordData=[
    {
        title: "News Item 1",
        description: "Some data off Item 1",
        id: "Item1"
    },
    {
        title: "News Item 2",
        description: "Some data off Item 2",
        id: "Item2"
    },
    {
        title: "News Item 3",
        description: "Some data off Item 3",
        id: "Item3"
    },
    {
        title: "News Item 4",
        description: "Some data off Item 4",
        id: "Item4"
    },
    {
        title: "News Item 5",
        description: "Some data off Item 5",
        id: "Item5"
    }
];

var accordTemplate= "";

var getTemplate=()=>{
    $.ajax({
        url: "templates/accordTemplate.htm",
        method: 'GET',
        success: (data)=>{
            console.log(data);

            accordTemplate = data;
            loadAccordian();
        }
    });
}
getTemplate();

var loadAccordian=()=>{
    for(var i=0; i<accordData.length; i++){
        var result = Mustache.render(accordTemplate, accordData[i]);
        $("#accordionExample").append(result);
    }
}