function getdata(){
    var xhr=new XMLHttpRequest();
    xhr.open("GET","http://localhost:3000/RFMO/Support/support_faq_handler.php",true);
    xhr.onload=function(){
        if(xhr.status===200){
            var data=JSON.parse(xhr.responseText);
            show(data);
        }
    };
    xhr.onerror=function(){
        console.log("error occured");
    };
    xhr.send();
}
function show(faq){
    const pairsContainer=document.getElementById("faqs");
    faq.forEach((pair) =>
    {
        const faq=document.createElement('div');
        faq.className="faq";
        const question=document.createElement('h3');
        let text=document.createTextNode(pair[0]);
        question.appendChild(text);
        const answer=document.createElement('p');
        text=document.createTextNode(pair[1]);
        answer.appendChild(text);
        faq.appendChild(question);
        faq.appendChild(answer);
        pairsContainer.appendChild(faq);
    });
}

getdata();