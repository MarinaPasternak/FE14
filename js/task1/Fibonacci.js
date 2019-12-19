function FibonacciSequence(a,b,diraction)
{
    console.log(diraction)
    if(diraction=='true')
    {
        return a+b;
    }
    else
    {
        return a-b;
    }
}
function *ganarationFibonacci()
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
        a=b;
        b=c;
           
}

function output(contin,n)
{
    
    m=parseInt(prompt('num sequence')) 
    forward=prompt('diraction of sequence ');
    if(contin=='true')
    {  
                
        for(i=n;i<m+n;i++)
        {
            console.log(f.next(forward));   
        }
        contin=prompt('continue print?');
        return output(contin,m-1)
    } 
    else
    {
        return "Finsh"
    }
}
var f = ganarationFibonacci();   
output('true',0);
    

