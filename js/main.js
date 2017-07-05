button.addEventListener("click", drink)

function drink() {
    var button = document.getElementById("usr")
 
 
$.ajax({

        url: "http://www.thecocktaildb.com/api/json/v1/1/random.php", //+ usr.value,
        
        dataType: "json",
        success: function(data) {
            // test the data!!!
            // console.log(data.items);
           




            for ( var  i = 0; i < data.drinks.length; i++){
                // image
                var image = document.createElement("img")
                image.src = data.drinks[i].strDrinkThumb
                body.appendChild(image)
                
                // drink name
                var name = document.createElement("h2")
                name.textContent = data.drinks[i].strDrink
                body.appendChild(name)

                var instructions = document.createElement("h3")
                instructions.textContent = data.drinks[i].strInstructions
                body.appendChild(instructions)

                var mea1 = data.drinks[i].strMeasure1
                var ing1 = data.drinks[i].strIngredient1 
                var both = mea1 + ing1
                var drink1 = document.createElement("h4")
                drink1.textContent = both
                body.appendChild(drink1)

                 var mea2 = data.drinks[i].strMeasure2
                var ing2 = data.drinks[i].strIngredient2
                var both2 = mea2 + ing2
                var drink2 = document.createElement("h4")
                drink2.textContent = both2
                body.appendChild(drink2)

                var mea3 = data.drinks[i].strMeasure3
                var ing3 = data.drinks[i].strIngredient3
                var both3 = mea3 + ing3
                var drink3 = document.createElement("h4")
                drink3.textContent = both3
                body.appendChild(drink3)

                var mea4 = data.drinks[i].strMeasure4
                var ing4 = data.drinks[i].strIngredient4
                var both4 = mea4 + ing4
                var drink4 = document.createElement("h4")
                drink4.textContent = both4
                body.appendChild(drink4)

                var mea5 = data.drinks[i].strMeasure5
                var ing5 = data.drinks[i].strIngredient5
                var both5 = mea5 + ing5
                var drink5 = document.createElement("h4")
                drink5.textContent = both5
                body.appendChild(drink5)

                var mea6 = data.drinks[i].strMeasure6
                var ing6 = data.drinks[i].strIngredient6
                var both6 = mea6 + ing6
                var drink6 = document.createElement("h4")
                drink6.textContent = both6
                body.appendChild(drink6)

                var mea7 = data.drinks[i].strMeasure7
                var ing7 = data.drinks[i].strIngredient7
                var both7 = mea7 + ing7
                var drink7 = document.createElement("h4")
                drink7.textContent = both7
                body.appendChild(drink7)

                var mea8 = data.drinks[i].strMeasure8
                var ing8 = data.drinks[i].strIngredient8
                var both8 = mea8 + ing8
                var drink8 = document.createElement("h4")
                drink8.textContent = both8
                body.appendChild(drink8)


          

        }

}
    })
}





