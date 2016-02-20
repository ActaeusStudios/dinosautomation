hmi = {};

/* 

   Configure me here!
   List the output name, and the corresponding pin, for each output.
   
 */
var endpoint = 'http://build.ecliptiq.co.uk:8080';
var url = 'http://build.ecliptiq.co.uk:8080/caps';
// get available data
var ajaxOptions = {
  url: url,
  dataType: 'json',
  success: parseData,
  error: printError
};
$.ajax(ajaxOptions);





//hmi.pins = {"mouth":12,"head":16,"breathing":18,"tail":22};
