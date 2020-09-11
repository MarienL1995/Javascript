const bijhorendeAfbeeldingen = document.querySelectorAll('#standbeelden img')

const hyperlink = document.getElementById("zonderOfMetAfbeeldingen")

hyperlink.onclick = function(){
    if(this.innerText === 'Met Afbeeldingen'){
        hyperlink.innerText = 'Zonder afbeeldingen'
        for (const afbeelding of bijhorendeAfbeeldingen ){
        
            afbeelding.hidden = false
        }
    }else{
        hyperlink.innerText = 'Met Afbeeldingen'
        for (const afbeelding of bijhorendeAfbeeldingen ){
        
            afbeelding.hidden = true
        }

    }
}
//Facepalm hier. wel de eerste oefening die zelf is gelukt.