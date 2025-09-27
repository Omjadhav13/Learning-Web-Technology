function getdatas() {
    let obj1 = new XMLHttpRequest();
    obj1.onload = function () {
        let dataobj = JSON.parse(this.responseText);
        let show = document.getElementById("d1");
        for (let d of dataobj) {
            let newd = document.createElement("tr");
            newd.innerHTML = `<td>${d.id}</td>
            <td>${d.ename}</td>
            <td>${d.epost}</td>
            <td>${d.esalary}</td>
            <td>${d.eaddress}</td>
            <td>${d.ecompany}</td>
            `;
            show.append(newd);
        }
    };
    obj1.open("GET", "http://localhost:8888/employe");
    obj1.send();
}
function deled() {
    let id = document.getElementById("pid").value;
    console.log(id);
    let obj = new XMLHttpRequest();

    obj.open("DELETE", `http://localhost:8888/employe/${id}`);
    obj.send();
};

   let id;
function fetch() {
     id = document.getElementById("int").value;

    let obj = new XMLHttpRequest();
    obj.onload = function () {
        let ob = JSON.parse(this.responseText);
        document.getElementById("nme").value = ob.ename,
        document.getElementById("pos").value = ob.epost,
        document.getElementById("sal").value = ob.esalary,
        document.getElementById("ad").value = ob.eaddress,
        document.getElementById("cmp").value = ob.ecompany
    };
    obj.open("GET", `http://localhost:8888/employe/${id}`);

    obj.send();

}

function upDATES(){
    //  let id = document.getElementById("i1").value;
    let ups={
        ename:document.getElementById("nme").value,
        epost:document.getElementById("pos").value ,
        esalary:document.getElementById("sal").value ,
        eaddress:document.getElementById("ad").value ,
        ecompany:document.getElementById("cmp").value 
    }
    let convert=JSON.stringify(ups);

    let obj=new XMLHttpRequest();

    obj.onload=function(){
        document.getElementById("nme").value="";
        document.getElementById("pos").value="";
        document.getElementById("sal").value="";
        document.getElementById("ad").value="";
        document.getElementById("cmp").value="";
    };
    obj.open("PUT",`http://localhost:8888/employe/${id}`);
    obj.send(convert);
}