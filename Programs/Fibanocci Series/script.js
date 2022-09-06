
// 13. Fibnocci series for n terms 

let i,n,f,fb,c;
fb=1;f=0;
n=parseInt(prompt("Enter the nth term u need to find fibanocci series"));
console.log(f);
document.write(f);
console.log(fb);
document.write(fb);

for (let i = 1; i<n-1; i++) {
    c=f+fb;
    f=fb;
    fb=c;
    console.log(c);
    document.write(c);
}