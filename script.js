let fizzBuzz=(n)=>{
let s="";
for(let i=1;i<=n;i++){
	let x=(i%3==0)?true:false;
	let y=(i%5==0)?true:false;
	if(x&&y){
		s+="FizzBuzz\n";
	}else if(x){
		s+="Fizz\n";
	}else if(y){
		s+="Buzz\n";
	}else{
		s+=i+"\n";
	}
} return s;
}
alert(fizzBuzz(20));
