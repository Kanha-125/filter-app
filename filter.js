
        let allB1 = document.getElementById("button1");
        let allB2 = document.getElementById("button2");
        let allB3 = document.getElementById("button3");
        let allB4 = document.getElementById("button4");
        let allB5 = document.getElementById("button5");

        let sweet1 = document.getElementsByClassName("image1")[0];
        let sweet2 = document.getElementsByClassName("image5")[0];
        let sweet3 = document.getElementsByClassName("image9")[0];
        let cupcake1 = document.getElementsByClassName("image2")[0];
        let cupcake2 = document.getElementsByClassName("image6")[0];
        let cupcake3 = document.getElementsByClassName("image10")[0];
        let cake1 = document.getElementsByClassName("image3")[0];
        let cake2 = document.getElementsByClassName("image7")[0];
        let cake3 = document.getElementsByClassName("image11")[0];
        let doughnut1 = document.getElementsByClassName("image4")[0];
        let doughnut2 = document.getElementsByClassName("image8")[0];
        let doughnut3 = document.getElementsByClassName("image12")[0];

        let currElement = document.getElementsByClassName("store")[0];

        allB1.addEventListener('click', () => {

            while (currElement.firstChild) {
                currElement.removeChild(currElement.firstChild)
            }

            currElement.appendChild(sweet1);
            currElement.appendChild(cupcake1);
            currElement.appendChild(cake1);
            currElement.appendChild(doughnut1);
            currElement.appendChild(sweet2);
            currElement.appendChild(cupcake2);
            currElement.appendChild(cake2);
            currElement.appendChild(doughnut2);
            currElement.appendChild(sweet3);
            currElement.appendChild(cupcake3);
            currElement.appendChild(cake3);
            currElement.appendChild(doughnut3);


        })

        allB2.addEventListener('click', () => {

            while (currElement.firstChild) {
                currElement.removeChild(currElement.firstChild)
            }

            currElement.appendChild(cake1);
            currElement.appendChild(cake2);
            currElement.appendChild(cake3);

        })


        allB3.addEventListener('click', () => {

            while (currElement.firstChild) {
                currElement.removeChild(currElement.firstChild)
            }
            currElement.appendChild(cupcake1);
            currElement.appendChild(cupcake2);
            currElement.appendChild(cupcake3);
           

        })


        allB4.addEventListener('click', () => {

            while (currElement.firstChild) {
                currElement.removeChild(currElement.firstChild)
            }
            currElement.appendChild(sweet1);
            currElement.appendChild(sweet2);
            currElement.appendChild(sweet3);


        })


        allB5.addEventListener('click', () => {

            while (currElement.firstChild) {
                currElement.removeChild(currElement.firstChild)
            }

            currElement.appendChild(doughnut1);
            currElement.appendChild(doughnut2);
            currElement.appendChild(doughnut3);


        })


        let arr =[sweet1, sweet2, sweet3, cupcake1, cupcake2,cupcake3,cake1,cake2,cake3,doughnut1,doughnut2,doughnut3];

        let textInputElement =document.getElementById("textInput");
        
        textInputElement.addEventListener('keyup', ()=>{
            let textInputValue = textInputElement.value.toUpperCase();
            while (currElement.firstChild) {
                currElement.removeChild(currElement.firstChild)
            }
            for(let i=0;i<arr.length;i++){
             var variable =arr[i].children[2].firstElementChild.innerText.toUpperCase();
             
             if((variable.indexOf(textInputValue))>-1){
                 currElement.appendChild(arr[i]);

             }

                
            }

    })


        
