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
     runSearchiaOnInputChange:true,
     //do not touch below
     sISLastReqTimeStamp:0
        }, options);
      if (this.runSearchiaOnInputChange==true) {
         var self=this;
         document.getElementById(this.searchiaSearchInputId).addEventListener('input', function() {
             self.searchiaInstantSearch();
         });
      }
    }
  fillTemplate(templateString, templateVars){
    return new Function("return `"+templateString +"`;").call(templateVars);
  }
  searchiaAddToCart(docId){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("PUT", "https://Searchia.ir/api/cart/index/"+this.searchiaIndexName+"/doc/"+docId);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.setRequestHeader("APIKEY", this.searchiaAPIKey);
    xmlhttp.send();
  }

  searchiaClick(query,docId,position){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("PUT", "https://Searchia.ir/api/click/index/"+this.searchiaIndexName+"/doc/"+docId+"?query="+query+"&position="+position);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.setRequestHeader("APIKEY", this.searchiaAPIKey);
    xmlhttp.send();
  }
  searchiaSearch(query,from=this.searchiaFrom,nrpp=this.searchiaNRPP){
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
  searchiaInstantSearch(query=document.getElementById(this.searchiaSearchInputId).value,nrpp=this.searchiaNRPP){
    let ts=new Date().getTime();
    this.sISLastReqTimeStamp=ts;
    if(!query){
      try {
                document.getElementById(this.searchiaInstantSearchResultContainer).innerHTML ="";
                document.getElementById(this.searchiaTotalHitsContainer).innerHTML ="";
                document.getElementById(this.searchiaSearchTime).innerHTML = "";
              }catch(err) {}
      return
    }
    var self = this;
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open("GET", "https://Searchia.ir/api/index/"+this.searchiaIndexName+"?query="+query+"&from="+this.searciaFrom+"&size="+nrpp);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.setRequestHeader("APIKEY", this.searchiaAPIKey);
    xhr.send();
    xhr.onreadystatechange = function() {
      let responseObj = xhr.response;
        if (this.readyState ==4) {
            if (ts<self.sISLastReqTimeStamp)
              return;
            if (this.status == 200) {
             self.sISLastReqTimeStamp=self.ts;
             try {
                document.getElementById(self.searchiaTotalHitsContainer).innerHTML =responseObj.entity.totalHits;
                document.getElementById(self.searchiaSearchTime).innerHTML = responseObj.entity.searchTime;
              }catch(err) {}
              var resContainer = document.getElementById(self.searchiaInstantSearchResultContainer);
              resContainer.innerHTML="";
              var ind=0;
              for (var elem in responseObj.entity.results) {
                this.orgData=JSON.parse(responseObj.entity.results[elem].source);
                this.orgData["docId"]=responseObj.entity.results[elem].documentId;
                this.orgData["position"]=ind;
                resContainer.innerHTML+=self.fillTemplate(self.searchiaInstantSearchTemplate,this.orgData);
                ind++;
              }
            }
            else 
              console.log(responseObj.message);
            
        }
      
      };
  }

  
  

}
