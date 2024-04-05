function addNewRow(){
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    
    if (firstname=="" ||lastname=="") {
        alert('Please fill out all fields');
        
    } else {
    
       let parent=document.createElement('tr');
            let col1=document.createElement('td');
            let col2=document.createElement('td');
            let text1=document.createTextNode(firstname);
            let text2=document.createTextNode(lastname);
            col1.appendChild(text1);
            col2.appendChild(text2);
            parent.appendChild(col1);
            parent.appendChild(col2);
     
            document.getElementById('result').appendChild(parent);
     
            document.getElementById('firstname').value="";
            document.getElementById('lastname').value=""; 
    }
    
    
    
    }
    function toPrint() {
        var el=document.getElementById("table");
        el.setAttribute('border', '1px');
        el.setAttribute('cellpadding', '10');
        el.setAttribute('class', 'table table-bordered');
        el.style.borderCollapse='collapse';
        
        newPrint=window.open("");
        newPrint.document.write(el.outerHTML);
        newPrint.print();
        newPrint.close();
    }