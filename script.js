var questions=[
    {
    "quest" : "Which HTML tag is used to draw graphics via scripting ?",
    "op1":"draw",
    "op2":"paint",
    "op3":"canvas",
    "op4":"graphics",
    "ans":3
    },
    {
    "quest" : "Which CSS property is used to change the shape of a mouse cursor ?", 
    "op1":"arrow",
    "op2":"pointer",
    "op3":"cursor",
    "op4":"We can't change it's shape.",
    "ans":3
    },
    {
    "quest" : "Which CSS property specifies the stack order of an element ?", 
    "op1":"z-index",
    "op2":"order",
    "op3":"slide",
    "op4":"position",
    "ans":1
    },
    {
    "quest" : "Which tag is used to group related options in a dropdown list ?", 
    "op1":"select",
    "op2":"optgroup",
    "op3":"option",
    "op4":"label",
    "ans":2
    },
    {
    "quest" : "Which CSS property-value pair is used to display the hyperlink as a normal text ?", 
    "op1":"text-decoration : none ",
    "op2":"visibility : text",
    "op3":"display : text",
    "op4":"visibility : none",
    "ans":1
    },
    {
    "quest" : "Which attribute of input tag specifies the maximum number of characters allowed in an <input> element ?", 
    "op1":"max",
    "op2":"maxchar",
    "op3":"maxcharacter",
    "op4":"maxlength",
    "ans":4
    },
];

var yourChoice;
var questionNo = 0;
var score = 0;
var check = 0; 
var attempted = 0;
var total=questions.length;
var answer = new Array();
document.getElementById('que').innerHTML=total;


//Change Question

function loadQuestion(index){
    question.textContent= "Q. " + (questionNo+1) + ")  " + questions[index].quest;
    opt1.textContent="1) " + questions[index].op1;
    opt2.textContent="2) " + questions[index].op2;
    opt3.textContent="3) " + questions[index].op3;
    opt4.textContent="4) " + questions[index].op4;
}; 




//Next Button

function newQuestion(){ 
   // console.log(check)
     var uncheck= document.getElementsByName('choice');
     var i=0;
     for(i=0;i<uncheck.length;i++)
   		uncheck[i].checked=false;
    

    questionNo++; 
    if(questionNo>=1)
        btn1.style.display="inline";
    
    if(questionNo == total-1)
    {
        btn2.style.display="none";
        check++;
    }
    
    if(questionNo == total-1 && check==1)
        {
            var newBtn = document.createElement("span"); 
            var node = document.createTextNode("Finish");
            newBtn.appendChild(node);
            document.getElementById('controls').appendChild(newBtn); 
            newBtn.style.backgroundColor="rgba(180,20,20,0.8)";
            newBtn.style.borderBottom="4px solid rgba(200,200,50,0.4)";
            newBtn.style.borderRight="4px solid rgba(200,200,50,0.8)";
            newBtn.style.padding="10px 25px";
            newBtn.style.margin="35px";
            newBtn.style.borderRadius="5px";
            newBtn.style.cursor="pointer"; 
            newBtn.addEventListener("click",function(){
               
                for(var i=0;i<total;i++)
                    {
                        if(answer[i] == questions[i].ans) 
                        { 
                            score += 10; 
                            console.log(score);
                        }
                    }
                container.style.display="none";
                result.style.display="";
                document.getElementById('result').textContent="Your Score is "+ score;
                return;
            })
            btn2.style.display="none";
            btn2.style.borderRight="none";
        }
        
    loadQuestion(questionNo);
    
    
     var x = answer[questionNo];
   	if(x==1 || x==2 || x==3 || x==4)
   	uncheck[x-1].checked=true;
    
}

loadQuestion(0);

//Previous Button

function lastQuestion(){
    
   
    questionNo--;
    loadQuestion(questionNo); 
	
    
    btn2.style.display="";
    
    if(questionNo==0)
         { 
          btn1.style.display="none";
          btn2.style.marginLeft="10%";
         }
     
	

var check= document.getElementsByName('choice');
    	var x = answer[questionNo];
   	if(x!=0)
   	check[x-1].checked=true;
  /*see what to do if clicking next doesn't show selected option(your answer)
  stats table -> no. of que. attempted
  
    }*/
    
}

function submitAnswer(){

    
    if(questionNo>=0)
        btn1.style.display="inline";
    

    yourChoice = document.querySelector('input[type=radio]:checked');
    if(!yourChoice)
        {
            answer[questionNo]=0;
        }
    else
        answer[questionNo] = yourChoice.value;
 
    if(questionNo < total-1	)
			questionNo++; 

    if(questionNo == total-1)
    {
        btn2.style.display="none";
        check++;
    }


    
    if(questionNo == total-1 && check==1)
        {
            var newBtn = document.createElement("span"); 
            var node = document.createTextNode("Finish");
            newBtn.appendChild(node);
            document.getElementById('controls').appendChild(newBtn); 
            newBtn.style.backgroundColor="rgba(180,20,20,0.8)";
            newBtn.style.borderBottom="4px solid rgba(200,200,50,0.4)";
            newBtn.style.borderRight="4px solid rgba(200,200,50,0.8)";
            newBtn.style.padding="10px 25px";
            newBtn.style.margin="35px";
            newBtn.style.borderRadius="5px";
            newBtn.style.cursor="pointer";
            newBtn.addEventListener("click",function(){
               
                for(var i=0;i<total;i++)
                    {
                        if(answer[i] == questions[i].ans) 
                        { 
                            score += 10; 
                            console.log(score);
                        }
                    }
                container.style.display="none";
                result.style.display="";
                document.getElementById('result').textContent="Your Score is "+ score;
                return;
            })
            btn2.style.display="none";
            btn2.style.borderRight="none";
        }
   /* textPara.textContent;*/  	
    loadQuestion(questionNo);
    
    
    
    var uncheck= document.getElementsByName('choice');
     var i=0;
     for(i=0;i<uncheck.length;i++)
   		uncheck[i].checked=false;
         
     var x = answer[questionNo];
   	if(x==1 || x==2 || x==3 || x==4)
   	uncheck[x-1].checked=true;

    //console.log(answer[questionNo]);
}



