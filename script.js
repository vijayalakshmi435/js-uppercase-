const show=()=>{
    let a = document.getElementById('fst').value;
    let b = document.getElementById('lst').value;


    // console.log(a,b)
    console.log(a.toUpperCase());
    let c =a.toUpperCase()
    document.getElementById('fname').innerHTML=c;

    
    let d =b.toUpperCase()
    document.getElementById('lname').innerHTML=d;
    
    
    // document.getElementById('fname').innerHTML=a;
    // document.getElementById('lname').innerHTML=b;
}