const url = "https://dvmptwdziademulaatzd.supabase.co"

const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2bXB0d2R6aWFkZW11bGFhdHpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg2OTc1MTMsImV4cCI6MTk5NDI3MzUxM30.89WAyrAnFikazYnvmF6-hyrpZt58wAyRMAw78SeHOhk"

//fetch(url+"/rest/v1/test_products?id=eq.1",{
fetch(url+"/rest/v1/test_products",{
    method: "GET",
    headers: {
    apikey: key
    }
})
.then(res=>res.json())
.then(showData)

function showData(items){
 console.log(items);
   items.forEach(element => {
       
        if (element.tags){

            if(element.tags.includes("vand"))
            console.log(element);

        }
  
     
 });

}