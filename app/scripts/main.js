var PLUGINS = ['./plugins/greet', './plugins/weather'];
var Rei;
requirejs(['./rei'], function(rei) {
    Rei = rei
    Rei.initializePlugins(PLUGINS);

});

function handleQuery() {
    var cmd = jQuery("#q").val();
    $("#conversation").append('Person: <div class="user">'+cmd+'</div>');
    var response = Rei.handleQuery(cmd);
    $("#conversation").append('Bot: <div class="rei">'+JSON.stringify(response)+'</div>');
        
} 

jQuery("#q").on("blur", function() {
    handleQuery();

});