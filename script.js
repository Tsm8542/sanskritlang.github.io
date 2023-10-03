function create_option(option_value,inner_html,start,limit){
    let x ="";
    for(let i=start;i<limit+1;i++){
        let a = '<option value="'+String(option_value+i)+'">'+inner_html+i+'</option>';
        x += a;
    }
    return x;
}
function create_pr(std,limit){
    let x="";
    let m = 1;
    let n=30;
    for(let i=1;i<limit+1;i++){
        let mn = m+'-'+n;
        let a = '<option value="std_'+std+'_pr_'+mn+'">'+mn+'</option>';
        x+=a;
        m+=30;n+=30;
    }
    x+='<option value="all'+std+'">All</option>';
    return x;
}
function s(){
    var a = document.querySelector("#genre").value;
    var m = document.querySelector("#standard");
    switch(a){
        case 'sanskrit_composite':
            m.innerHTML = create_option("std","Std ",8,10);
            break;
        case 'sanskrit_full':
            m.innerHTML = create_option("std","Std ",8,10);
            break;
        case 'sanskrit':
            m.innerHTML = create_option("std","Std ",11,12);
            break;
        case 'download':
            tg("false");
            break;
        default:
            m.innerHTML = create_option("std","Std ",8,10);
            break;
    }
    x();
}
function x(){
    var s = document.querySelector("#standard").value;
    var t = document.querySelector("#page_range");
    if(document.querySelector("#genre").value=="sanskrit_composite"){
        switch(s){
            case 'std8':
                t.innerHTML = create_pr(8,3);
                break;
            case 'std9':
                t.innerHTML = create_pr(9,4);
                break;
            case 'std10':
                t.innerHTML = create_pr(10,4);
                break;
            default:
                t.innerHTML = create_pr(8,3);
                break;
        }
        z();
    }
    else if(document.querySelector("#genre").value=="sanskrit_full"){
        switch(s){
            case 'std8':
                tg("true");
                t.innerHTML = create_pr(8,4);
                break;
            case 'std9':
                tg("true");
                t.innerHTML = create_pr(9,4);
                break;
            case 'std10':
                tg("true");
                t.innerHTML = create_pr(10,5);
                break;
            default:
                tg("true");
                t.innerHTML = create_pr(8,4);
                break;
        }
        z();
    }
    else if(document.querySelector("#genre").value=="sanskrit"){
        switch(s){
            case 'std11':
                tg("true");
                t.innerHTML = create_pr(11,5);
                break;
            case 'std12':
                tg("true");
                t.innerHTML = create_pr(12,5)
                break;
            default:
                tg("true");
                t.innerHTML = create_pr(11,5);
                break;
        }
        z();
    }
}

function z(){
    var n = document.querySelector("#page_range").value;
    var y = document.querySelector("#frame");
    let genre = document.querySelector("#genre").value;
    if(genre=="sanskrit_composite")genre="Sanskrit Composite";
    else if(genre=="sanskrit_full")genre="Sanskrit Full";
    else if(genre=="sanskrit")genre="Sanskrit";
    let m="";
    for(let i=0;i<n.length;i++){
        if(n[i]=='p'){
            for(let z=i;z<n.length;z++){
                m+=n[z];
            }
            break;
        }
        else if(n[i]=='a'){
            m="main";
            break;
        }
    }
    let x = document.querySelector("#standard").value;
    let std ="";
    for(let i=3;i<x.length;i++){
        std += x[i];
    }
    y.src = genre+' Std '+std+'/'+m+'.html';
}

function tg(v){
    if(v=="true"){
        document.querySelector("#standard").style.display="inline-block";
        document.querySelector("#page_range").style.display="inline-block";
        document.querySelector("#frame").style.display="block"
    }
    else{
        document.querySelector("#frame").style.display="none";
        document.querySelector(".download").style.display="block";
        document.querySelector("#standard").style.display="none";
        document.querySelector("#page_range").style.display="none";
    }
}
