function FibonacciSequence(a,b,diraction)
{
    if(diraction==true)
    {
        return a+b;
    }
    else
    {
        return a-b;
    }
}
function *ganarationFibonacci(forward)
{
    
    let a=0;
    let b=1;
    let c=0;
    yield a;
    yield b;
    for(let boolValue=true; true;)
        {                
            yield c = FibonacciSequence(a,b,forward)
            a=b;
            b=c;
        }        
}
function output(n,inputForward)
{
    
    var f = ganarationFibonacci(inputForward);
    for(i=0;i<n;i++)
    {
        console.log(f.next());   
    }
}
n=10;
output(n,false);
n=5;
output(n,true);


