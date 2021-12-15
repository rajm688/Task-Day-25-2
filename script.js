document.getElementById("submit").addEventListener("click",clicked); //selecting the submit button and adding Event listener
function clicked(){ // function for eventlistener
    var value = document.getElementById("input").value; // collecting the entered number
    var url = `https://api-thirukkural.vercel.app/api?num=${value}`
    let fetchData = async ()=>{
                let response = await fetch(url); //fetching Data
                let data = await response.json();
                let num = data.number;
                let athigaram = data.sect_tam // collecting Necessary data from API
                let title= data.chap_tam
                let lin1 = data.line1
                let lin2 = data.line2
                let exp = data.tam_exp
                let main = document.createElement("div") //creating the Div elements
                main.className="container" //appending the datas
                main.innerHTML = `<strong>Thirukkural Number:</strong><i>${num}</i><br><br>
                <strong>Adhikaram:   </strong><i>${athigaram}</i><br><br>
                <strong>Thallipu:   </strong><i>${title}</i><br><br>
                <strong>ThirukKural:   <br></strong><i>${lin1},<br>${lin2}</i><br><br>
                <strong>ThirukKural Vilakkam:   </strong><i>${exp}</i><br><br>
                `
                document.body.append(main)
    }
    fetchData();
}

clicked();
