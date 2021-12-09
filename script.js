document.getElementById("submit").addEventListener("click",clicked);
function clicked(){
    var value = document.getElementById("input").value;
    var url = `https://api-thirukkural.vercel.app/api?num=${value}`
    let fetchData = async ()=>{
                let response = await fetch(url);
                let data = await response.json();
                let num = data.number;
                let athigaram = data.sect_tam
                let title= data.chap_tam
                let lin1 = data.line1
                let lin2 = data.line2
                let exp = data.tam_exp
                let main = document.createElement("div")
                main.className="container"
                main.innerHTML = `<strong>Thirukural Number:</strong><i>${num}</i><br><br>
                <strong>Athikaram:   </strong><i>${athigaram}</i><br><br>
                <strong>Thalipu:   </strong><i>${title}</i><br><br>
                <strong>Thirukural:   <br></strong><i>${lin1},<br>${lin2}</i><br><br>
                <strong>Thirukural Vilakkam:   </strong><i>${exp}</i><br><br>
                `
                document.body.append(main)
    }
    fetchData();
}

clicked();
