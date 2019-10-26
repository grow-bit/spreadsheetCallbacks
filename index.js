function badgrBadsClassesAsJSON(name) {
  // Make a GET request and log the returned content.
  var badgeClass = 
      {
  "name": name,
  "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
  "description": "This is a tiny badge with a tiny little image. People who earn it might have done something tiny to deserve it.",
  "criteriaUrl": "https://tinybuddha.com/blog/30-accomplishments-to-be-proud-of/",
  "criteriaNarrative": "Do something both small and meaningful",
  "alignments": [
    {
      "targetName": "30 Accomplishments to Be Proud Of",
      "targetUrl": "https://tinybuddha.com/blog/30-accomplishments-to-be-proud-of/",
      "targetDescription": "Be proud of accomplishments like these"
    }
  ],
  "tags": [
    "test"
  ]
};
      
  var issuerId = "9IGmqFKgSiGdx5uhFcj4Ow";
    var bearer = "iJ60xGOf9jMkDWiy6w1RaxvkUHzYQT";
  var params = {
    "contentType": "application/json",
    "headers": {
      "Authorization" : "Bearer " + bearer
    },
    "method": "POST",
    "payload": badgeClass,
  };
    
  var response = UrlFetchApp.fetch("https://api.badgr.io/v2/issuers/" + issuerId + "/badgeclasses", params);
Logger.log(response.getContentText());
    msg = "HTTP 1.1 " + response.getResponseCode();
  
  var responseContent = response.getContent();
  var bufferized = Buffer.from(responseContent);
  var asJSON = JSON.parse(bufferized.toString("UTF-8"));
  msg += " " + (asJSON.result && asJSON.result.openBadgeId ? "unkown openBadgeId in response" : asJSON.result.openBadgeId)
  
  
                return msg
}
