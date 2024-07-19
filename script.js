//your JS code here. If required.
let s='';
for(int i=1;i<21;i++){
	let x=(i%3)?true:false,y=(i%5)?true;false;
	if(x && y){
		s+="FizzBuzz";
	}else if(x){
		s+="Fizz";
	else if(y){
		s+="Buzz";
	}else{
		s+=i;
	}
}
alert(s);