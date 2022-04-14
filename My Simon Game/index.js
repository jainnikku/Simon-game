    var arr=[];
    var check=[];
    var right=false;
    $(document).keypress(function(event){
        nextbox();
        $("h1").text("Level 1");
    });
    $(".btn").on("click",function(){
            var x =this.id;
            var audio = new Audio("sounds/"+x+".mp3");
            audio.play();
            $("#"+x).addClass("pressed");
            setTimeout(function(){
                $("#"+x).removeClass("pressed");
            },100);
            check.push(x);
            checkarray();
            if(check.length==0){
                console.log("checked2");
                addnew();
            }
    });
    function addnew(){
        if(right){
            $("h1").text("Level "+(arr.length+1));
            setTimeout(function(){
                nextbox();
            },500);
        }
    }

    function nextbox(){
        var n=Math.random();
        n*=4;
        n= Math.floor(n);
        n+=1;
        safeandsound(n);
    }
    function safeandsound(n0){
        $(".btn")[n0-1].classList.add("pressed");
        setTimeout(function(){
            $(".btn")[n0-1].classList.remove("pressed");
        },100);
        var y= $(".btn")[n0-1].classList[1];
        var audio = new Audio("sounds/"+y+".mp3");
        audio.play();
        arr.push(y);
    }
    function checkarray(){
        if(check.length===arr.length){
            right=true;
            check.length=0;
        }
        else if(arr[check.length-1]==check[check.length-1] ){
            right=true;
        }
        else{
            right=false;
            var audio4 = new Audio('sounds/wrong.mp3');
            audio4.play();
            arr.length=0;
            check.length=0;
            $("h1").text("Game Over! Press any key to restart");
            $("body").addClass("game-over");
            setTimeout(function () {
                $("body").removeClass("game-over");
            }, 200);
        }
        console.log("checked");
    }
