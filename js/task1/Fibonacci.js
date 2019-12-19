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

    forward=prompt('diraction');
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
function output(contin,n)
{
    
    m=parseInt(prompt('num')) 
    var f = ganarationFibonacci(); 
    if(contin=='true')
    {  
                
        for(i=n;i<m+n;i++)
        {
            console.log(f.next());   
        }
        contin=prompt('contin');
        return output(contin,m-1)
    } 
    else
    {
        return "Finsh"
    }
}
  

output('true',0);
    

