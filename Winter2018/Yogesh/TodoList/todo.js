var todo=(function () {
    "use strict";
    let d=0;
    let mainx=-1;
    let input=document.getElementById("myinput");
    let result=document.getElementById("box2");
    let button=document.getElementById("id001");
    let data={
        mydata : [],
        size : -1,
        strdata : [],
    };
    let data2={
        mydata : [],
    };
    let list = [];
    let list2 =[];
    let stringdata=[];
    let avail=0;
    function display() {
        let sdata=JSON.parse(localStorage.getItem('data'));
        let sdata2=JSON.parse(localStorage.getItem('data2'));
        if(sdata) {
            list = sdata.mydata;
            if(sdata2){
                list2=sdata2.mydata;
            }
            console.log(list2);
            avail = sdata.size;
            stringdata=sdata.strdata;
            for (let i = 0; i < avail; ++i) {
                if(list2[i]){
                    if(list2[i]===-1) {

                    } else {
                        result.innerHTML += `${list[i]}`;
                    }
                } else {
                    result.innerHTML += `${list[i]}`;
                }
            }
        }
    }
    window.startfun=display;
    function addToList() {
        if(d===1){
            let x=input.value;
            if(x!=''){
                let toadd='<div id=d'+mainx+'><input id=c' + mainx + ' onclick="strikeOn(id)" type="checkbox": ><p onclick="updatethis(id)" id=' + mainx + '>' + x + '</p><img onclick="removethis(id)" id=i' + mainx + ' src="Images/Red-x.png"></div>';
                stringdata[mainx]=x;
                list[mainx]=toadd;
                result.innerHTML='';
                saveData();
                display();
            }
            button.innerHTML='ADD';
            mainx=-1;
            input.value = '';
            d=0;
        } else {

            let x = input.value;
            if (x != '') {
                let toadd = '<div id=d'+avail+'><input id=c' + avail + ' onclick="strikeOn(id)" type="checkbox": ><p onclick="updatethis(id)" id=' + avail + '>' + x + '</p><img onclick="removethis(id)" id=i' + avail + ' src="Images/Red-x.png"></div>';
                stringdata[avail]=x;
                result.innerHTML += toadd;
                input.value = '';
                list[avail++] = toadd;
            }
            saveData();
        }
        input.value = '';
    }
    // window.removethings=removeupdateandall;
    function update(id) {
        let x=parseInt(id);
        let newid='d'+x;
        button.innerHTML='Update';
        d=1;
        mainx=x;
        input.value=stringdata[x];
        let el=document.getElementById(newid);
        for(let i=0;i<avail;++i){
            let ele=document.getElementById('d'+i);
            ele.style.border='2px solid black';
        }
        el.style.border='5px solid red';

    }
    window.updatethis=update;
    function remove(id) {
        console.log(id);
        let newid=id.substr(1);
        console.log(newid);
        let x=parseInt(newid);
        console.log(x);
        console.log(list[x]);
        list[x]='';
        console.log(list[x]);
        saveData();
        result.innerHTML='';
        display();
        button.innerHTML="ADD";
        d=0;
        let el=document.getElementById('d'+mainx);
        el.style.border='2px solid black';
        input.value='';
        mainx=-1;
        // display();
    }
    window.removethis=remove;
    function putStrike(id) {
        let newid=id.substr(1);
        let x=parseInt(newid);
        let el=document.getElementById(newid);
        console.log(id);
        console.log(newid);
        if(el.style.textDecoration=='line-through'){
            el.style.textDecoration='none';
            list2[x]=1;
        } else {
            el.style.textDecoration = 'line-through';
            list2[x]=-1;
        }
        data2.mydata=list2;
        localStorage.setItem('data2',JSON.stringify(data2));
        button.innerHTML="ADD";
        d=0;
        let ele=document.getElementById('d'+mainx);
        ele.style.border='2px solid black';
        input.value='';
        mainx=-1;
    }
    window.strikeOn=putStrike;
    function saveData() {
        data.mydata=list;
        data.size=avail;
        data.secndlist=list2;
        data.strdata=stringdata;
        localStorage.setItem('data',JSON.stringify(data));
    }
    window.adddata=addToList;
})();
startfun();
