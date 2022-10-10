const pimarkx =document.getElementById("pimarkx");
const pimarko =document.getElementById("pimarko");
const j =document.getElementById("j");
const tics = document.getElementsByClassName("tics")

const egcpu = document.getElementById("ewgamecpu");
const egpvp = document.getElementById("ewgamepvp");
const ff = document.getElementById("ff");
const gg = document.getElementById("gg");


egcpu.addEventListener("click",ewgame);
egpvp.addEventListener("click",ewgame);


function ewgame() {
	
ff.classList.replace("flex","hidden")
gg.classList.replace("hidden","flex")
pvp()
	
	
}
function pvp(){
	var x=0,o=0,fogg=0;
var f=["x","o"];
	var d=0;
	var t=0;tt=0,ty=0,tu=0,ti=0,tp=0,to=0,ttt=0,tttt=0,ttttt=0


	
tics[0].addEventListener("click", function(e){
	if(tt==0){if(f[d]=="x"){
		e.target.classList.add("x");
		e.target.innerHTML='<svg class="w-10 fill-[rgb(49,195,189)] " id="icon-x-default" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill-rule="evenodd" /></svg>'
		}
		else
		{
		e.target.classList.add("o");

			e.target.innerHTML='<svg class="w-10 fill-[rgb(242,177,55)]" id="icon-o-default" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" /></svg>'	
		}
	
		if(t%2!=0)
		{
			d=0;
		}
		else{
			d=1
		}
		console.log(f[d])
	
		t++
	tt++
	
	
	
check(e)}
})


tics [1].addEventListener("click", function(e){
	if(ttt==0){if(f[d]=="x"){
		e.target.classList.add("x");
		e.target.innerHTML='<svg class="w-10 fill-[rgb(49,195,189)] " id="icon-x-default" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill-rule="evenodd" /></svg>'
		}
		else
		{
		e.target.classList.add("o");

			e.target.innerHTML='<svg class="w-10 fill-[rgb(242,177,55)]" id="icon-o-default" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" /></svg>'	
		}
	
		if(t%2!=0)
		{
			d=0;
		}
		else{
			d=1
		}
		console.log(f[d])
	
		t++
	ttt++
	
	
	
check(e)}
})

tics [2].addEventListener("click", function(e){
	if(tttt==0){if(f[d]=="x"){
		e.target.classList.add("x");
		e.target.innerHTML='<svg class="w-10 fill-[rgb(49,195,189)] " id="icon-x-default" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill-rule="evenodd" /></svg>'
		}
		else
		{
		e.target.classList.add("o");

			e.target.innerHTML='<svg class="w-10 fill-[rgb(242,177,55)]" id="icon-o-default" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" /></svg>'	
		}
	
		if(t%2!=0)
		{
			d=0;
		}
		else{
			d=1
		}
		console.log(f[d])
	
		t++
	tttt++
	
	
	
check(e)}

})

tics [3].addEventListener("click", function(e){
	if(ttttt==0){if(f[d]=="x"){
		e.target.classList.add("x");
		e.target.innerHTML='<svg class="w-10 fill-[rgb(49,195,189)] " id="icon-x-default" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill-rule="evenodd" /></svg>'
		}
		else
		{
		e.target.classList.add("o");

			e.target.innerHTML='<svg class="w-10 fill-[rgb(242,177,55)]" id="icon-o-default" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" /></svg>'	
		}
	
		if(t%2!=0)
		{
			d=0;
		}
		else{
			d=1
		}
		console.log(f[d])
	
		t++
	ttttt++
	
	
	
check(e)}
})

tics [4].addEventListener("click", function(e){
	if(ty==0){if(f[d]=="x"){
		e.target.classList.add("x");
		e.target.innerHTML='<svg class="w-10 fill-[rgb(49,195,189)] " id="icon-x-default" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill-rule="evenodd" /></svg>'
		}
		else
		{
		e.target.classList.add("o");

			e.target.innerHTML='<svg class="w-10 fill-[rgb(242,177,55)]" id="icon-o-default" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" /></svg>'	
		}
	
		if(t%2!=0)
		{
			d=0;
		}
		else{
			d=1
		}
		console.log(f[d])
	
		t++
	ty++
	
	
	
check(e)}
	
	console.log(f[d])
})

tics [5].addEventListener("click", function(e){
	if(tu==0){if(f[d]=="x"){
		e.target.classList.add("x");
		e.target.innerHTML='<svg class="w-10 fill-[rgb(49,195,189)] " id="icon-x-default" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill-rule="evenodd" /></svg>'
		}
		else
		{
		e.target.classList.add("o");

			e.target.innerHTML='<svg class="w-10 fill-[rgb(242,177,55)]" id="icon-o-default" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" /></svg>'	
		}
	
		if(t%2!=0)
		{
			d=0;
		}
		else{
			d=1
		}
		console.log(f[d])
	
		t++
	tu++
	
	
	
check(e)}
})

tics [6].addEventListener("click", function(e){
	if(ti==0){if(f[d]=="x"){
		e.target.classList.add("x");
		e.target.innerHTML='<svg class="w-10 fill-[rgb(49,195,189)] " id="icon-x-default" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill-rule="evenodd" /></svg>'
		}
		else
		{
		e.target.classList.add("o");

			e.target.innerHTML='<svg class="w-10 fill-[rgb(242,177,55)]" id="icon-o-default" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" /></svg>'	
		}
	
		if(t%2!=0)
		{
			d=0;
		}
		else{
			d=1
		}
		console.log(f[d])
	
		t++
	ti++
	
	
	
check(e)}
})

tics [7].addEventListener("click", function(e){
	if(to==0){if(f[d]=="x"){
		e.target.classList.add("x");
		e.target.innerHTML='<svg class="w-10 fill-[rgb(49,195,189)] " id="icon-x-default" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill-rule="evenodd" /></svg>'
		}
		else
		{
		e.target.classList.add("o");

			e.target.innerHTML='<svg class="w-10 fill-[rgb(242,177,55)]" id="icon-o-default" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" /></svg>'	
		}
	
		if(t%2!=0)
		{
			d=0;
		}
		else{
			d=1
		}
		console.log(f[d])
	
		t++
	to++
	
	
	
check(e)}
})

tics [8].addEventListener("click", function(e){
	if(tp==0){
		if(f[d]=="x"){
		e.target.classList.add("x");
		e.target.innerHTML='<svg class="w-10 fill-[rgb(49,195,189)] " id="icon-x-default" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill-rule="evenodd" /></svg>'
		}
		else
		{
		e.target.classList.add("o");

			e.target.innerHTML='<svg class="w-10 fill-[rgb(242,177,55)]" id="icon-o-default" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" /></svg>'	
		}
		if(t%2!=0)
		{
			d=0;
		}
		else{
			d=1
		}
		console.log(f[d])
	
		t++
	tp++
	
	
	
check(e)}
})



function  check(e) {
	if((tics[0].innerHTML==tics[1].innerHTML && tics[1].innerHTML==tics[2].innerHTML))
	{
		if(e.target.classList.contains("x"))
		{document.getElementById("gg").classList.replace("flex","hidden")
	document.getElementById("rr").classList.replace("hidden","f")
	x++;
	
	}
		else{
		{document.getElementById("gg").classList.replace("flex","hidden")
	document.getElementById("rr").classList.replace("hidden","f")
	o++
	document.getElementById("tt").innerHTML='<svg class="w-20 fill-[rgb(242,177,55)]" id="icon-o-default" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" /></svg>'
	}

		}
	}
	else if((tics[3].innerHTML==tics[4].innerHTML && tics[4].innerHTML==tics[5].innerHTML)){
		if(e.target.classList.contains("x"))
		{document.getElementById("gg").classList.replace("flex","hidden")
	document.getElementById("rr").classList.replace("hidden","f")
	x++;
	
	}
		else{
		{document.getElementById("gg").classList.replace("flex","hidden")
	document.getElementById("rr").classList.replace("hidden","f")
	o++
	document.getElementById("tt").innerHTML='<svg class="w-20 fill-[rgb(242,177,55)]" id="icon-o-default" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" /></svg>'
	}

		}
	}
	else if((tics[6].innerHTML==tics[7].innerHTML && tics[7].innerHTML==tics[8].innerHTML)){
		if(e.target.classList.contains("x"))
		{document.getElementById("gg").classList.replace("flex","hidden")
	document.getElementById("rr").classList.replace("hidden","f")
	x++;
	
	}
		else{
		{document.getElementById("gg").classList.replace("flex","hidden")
	document.getElementById("rr").classList.replace("hidden","f")
	o++
	document.getElementById("tt").innerHTML='<svg class="w-20 fill-[rgb(242,177,55)]" id="icon-o-default" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" /></svg>'
	}

		}
	}
	else if((tics[0].innerHTML==tics[3].innerHTML && tics[3].innerHTML==tics[6].innerHTML)){if(e.target.classList.contains("x"))
	{document.getElementById("gg").classList.replace("flex","hidden")
	document.getElementById("rr").classList.replace("hidden","f")
	x++;
	
	}
	else{
	{document.getElementById("gg").classList.replace("flex","hidden")
	document.getElementById("rr").classList.replace("hidden","f")
	o++
	document.getElementById("tt").innerHTML='<svg class="w-20 fill-[rgb(242,177,55)]" id="icon-o-default" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" /></svg>'
	}

	}}
	else if( (tics[1].innerHTML==tics[4].innerHTML && tics[4].innerHTML==tics[7].innerHTML)){if(e.target.classList.contains("x"))
	{document.getElementById("gg").classList.replace("flex","hidden")
	document.getElementById("rr").classList.replace("hidden","f")
	x++;
	
	}
	else{
	{document.getElementById("gg").classList.replace("flex","hidden")
	document.getElementById("rr").classList.replace("hidden","f")
	o++
	document.getElementById("tt").innerHTML='<svg class="w-20 fill-[rgb(242,177,55)]" id="icon-o-default" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" /></svg>'
	}

	}}
	else if((tics[2].innerHTML==tics[5].innerHTML && tics[5].innerHTML==tics[8].innerHTML)){if(e.target.classList.contains("x"))
	{document.getElementById("gg").classList.replace("flex","hidden")
	document.getElementById("rr").classList.replace("hidden","f")
	x++;
	
	}
	else{
	{document.getElementById("gg").classList.replace("flex","hidden")
	document.getElementById("rr").classList.replace("hidden","f")
	o++
	document.getElementById("tt").innerHTML='<svg class="w-20 fill-[rgb(242,177,55)]" id="icon-o-default" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" /></svg>'
	}

	}}
	else if((tics[0].innerHTML==tics[4].innerHTML && tics[4].innerHTML==tics[8].innerHTML)){if(e.target.classList.contains("x"))
	{document.getElementById("gg").classList.replace("flex","hidden")
	document.getElementById("rr").classList.replace("hidden","f")
	x++;
	
	}
	else{
	{document.getElementById("gg").classList.replace("flex","hidden")
	document.getElementById("rr").classList.replace("hidden","f")
	o++
	document.getElementById("tt").innerHTML='<svg class="w-20 fill-[rgb(242,177,55)]" id="icon-o-default" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" /></svg>'
	}

	}}
	else if((tics[2].innerHTML==tics[4].innerHTML && tics[4].innerHTML==tics[6].innerHTML)){if(e.target.classList.contains("x"))
	{document.getElementById("gg").classList.replace("flex","hidden")
	document.getElementById("rr").classList.replace("hidden","f")
	x++
	
	
	}
	else{
	{document.getElementById("gg").classList.replace("flex","hidden")
	document.getElementById("rr").classList.replace("hidden","f")
	o++
	document.getElementById("tt").innerHTML='<svg class="w-20 fill-[rgb(242,177,55)]" id="icon-o-default" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" /></svg>'
	
}

	}}
	else{
		if(t==9)
		{document.getElementById("gg").classList.replace("flex","hidden")
		document.getElementById("rr").classList.replace("hidden","f")
	document.getElementById("tt").innerHTML='<svg id="logo" class="w-20 pt-5" viewBox="0 0 72 32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M8.562 1.634 16 9.073l7.438-7.439a3 3 0 0 1 4.243 0l2.685 2.685a3 3 0 0 1 0 4.243L22.927 16l7.439 7.438a3 3 0 0 1 0 4.243l-2.685 2.685a3 3 0 0 1-4.243 0L16 22.927l-7.438 7.439a3 3 0 0 1-4.243 0L1.634 27.68a3 3 0 0 1 0-4.243L9.073 16 1.634 8.562a3 3 0 0 1 0-4.243L4.32 1.634a3 3 0 0 1 4.243 0Z" fill="#31C3BD"/><path d="M56.1 0c8.765 0 15.87 7.106 15.87 15.87 0 8.766-7.105 15.871-15.87 15.871-8.765 0-15.87-7.105-15.87-15.87C40.23 7.106 47.334 0 56.1 0Zm0 9.405a6.466 6.466 0 1 0 0 12.931 6.466 6.466 0 0 0 0-12.931Z" fill="#F2B137" fill-rule="nonzero"/></g></svg>'
	document.getElementById("tdt").innerHTML='DRAW'

		}

	}
}


}


document.getElementById("fff").addEventListener("click",function(){
	location.reload();

})

