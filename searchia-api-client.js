  
class SearchiaBuilder {
   constructor(options = {}){
        Object.assign(this, {
     searchiaInstantSearchTemplate:"<tr><td>${this.position}</td><td>${this.docId}</td><td>${this.depth}</td><td>${this.title}</td></tr>",
     searchiaInstantSearchResultContainer:"searchia-res-container",
     searchiaSearchTemplate:"<tr><td>${this.position}</td><td>${this.docId}</td><td>${this.depth}</td><td>${this.title}</td></tr>",
     searchiaSearchResultContainer:"searchia-res-container",
     searchiaTotalHitsContainer:"searchia-total-hits",
     searchiaSearchTime:"searchia-search-time",
     searchiaIndexName:"yazd_uni",
     searchiaAPIKey:"WewDcp6ocko8ZY0",
     searchiaSearchInputId:'searchia-search-box',
     searciaFrom:0,
     searchiaNRPP:10,
     runSearchiaOnInputChange:true
        }, options);
      if (this.runSearchiaOnInputChange==true) {
         var self=this;
         document.getElementById(this.searchiaSearchInputId).addEventListener('input', function() {
             self.instantSearch();
         });
      }
    }
  fillTemplate(templateString, templateVars){
    return new Function("return `"+templateString +"`;").call(templateVars);
  }
  addToCart(docId){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("PUT", "https://Searchia.ir/api/cart/index/"+this.searchiaIndexName+"/doc/"+docId);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.setRequestHeader("APIKEY", this.searchiaAPIKey);
    xmlhttp.send();
  }

  click(docId,query,position){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("PUT", "https://Searchia.ir/api/click/index/"+this.searchiaIndexName+"/doc/"+docId+"?query="+query+"&position="+position);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.setRequestHeader("APIKEY", this.searchiaAPIKey);
    xmlhttp.send();
  }
  search(query,from=this.searchiaFrom,nrpp=this.searchiaNRPP){
    var self = this;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var resObj = JSON.parse(this.responseText);
          try {
            document.getElementById(self.searchiaTotalHitsContainer).innerHTML = resObj.entity.totalHits;
            document.getElementById(self.searchiaSearchTime).innerHTML = resObj.entity.searchTime;
          }catch(err) {}
          var resContainer = document.getElementById(self.searchiaSearchResultContainer);
          resContainer.innerHTML="";
          var ind=0;
          for (var elem in resObj.entity.results) {
            this.orgData=JSON.parse(resObj.entity.results[elem].source);
            this.orgData["docId"]=resObj.entity.results[elem].documentId;
            this.orgData["position"]=from+ind;
            resContainer.innerHTML+=self.fillTemplate(self.searchiaSearchTemplate,this.orgData);
            ind++;
          }
        
        }
      }
    xmlhttp.open("GET", "https://Searchia.ir/api/index/"+this.searchiaIndexName+"?query="+query+"&from="+this.searciaFrom+"&size="+nrpp);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.setRequestHeader("APIKEY", this.searchiaAPIKey);
    xmlhttp.send();
  }
  
  instantSearch(query=document.getElementById(this.searchiaSearchInputId).value,nrpp=this.searchiaNRPP){
    var self = this;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var resObj = JSON.parse(this.responseText);
         try {
            document.getElementById(self.searchiaTotalHitsContainer).innerHTML = resObj.entity.totalHits;
            document.getElementById(self.searchiaSearchTime).innerHTML = resObj.entity.searchTime;
          }catch(err) {}
          var resContainer = document.getElementById(self.searchiaInstantSearchResultContainer);
          resContainer.innerHTML="";
          var ind=0;
          for (var elem in resObj.entity.results) {
            this.orgData=JSON.parse(resObj.entity.results[elem].source);
            this.orgData["docId"]=resObj.entity.results[elem].documentId;
            this.orgData["position"]=ind;
            resContainer.innerHTML+=self.fillTemplate(self.searchiaInstantSearchTemplate,this.orgData);
            ind++;
          }
        
        }
      }
    xmlhttp.open("GET", "https://Searchia.ir/api/index/"+this.searchiaIndexName+"?query="+query+"&from="+this.searciaFrom+"&size="+nrpp);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.setRequestHeader("APIKEY", this.searchiaAPIKey);
    xmlhttp.send();
  }

  
  

}
