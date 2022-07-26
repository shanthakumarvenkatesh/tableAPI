
    

async function DataTable(url,table){
    const tableHead=document.querySelector("thead");
    const tableBody=document.querySelector("tbody");
    const response = await fetch(url)
    const data=await response.json();
    console.log(data)

    for(let i=0;i<data.length;i++){
        const obj=Object.values(data[i])
        const rowElement = document.createElement("tr")
        for(const text of obj){
            const cellElement =document.createElement("td")
            cellElement.textContent= text
            rowElement.appendChild(cellElement)
        }
        tableBody.appendChild(rowElement)
    }
}
DataTable("https://dgldigital.com/api/Country", document.getElementById("table"))