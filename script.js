var getApiCall = function(url)
{
   return $.ajax({
            url: url,
            dataType: "json",
            async: true, 
            beforeSend: function() {  }, //do something before send
            complete: function() {  }, //do something afer send     
        });        
};