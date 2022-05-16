class Cat {
    constructor( ownerName, catName, catBirthday, catGender, foodBrand ) {
        this.ownerName = ownerName;
        this.catName = catName;
        this.catBirthday = catBirthday;
        this.catGender = catGender;
        this.foodBrand = foodBrand;
    }
}

const ownerNameElem = document.getElementById("owner-name");
const catNameElem = document.getElementById("cat-name");
const catBirthdayElem = document.getElementById("cat-birthday");
const catGenderElem = document.getElementsByName("cat-gender");
const foodBrandElem = document.getElementById("food-brand");

const buttonElem = document.getElementById("questionnaire__button");

buttonElem.addEventListener( "click", (event) => {

    let catGenderVal = "";
    for (let i of catGenderElem ) {
        if ( i.checked ) {
            catGenderVal = i.value;
            break;
        }
    }

    const tomcat = new Cat(
        ownerNameElem.value,
        catNameElem.value,
        catBirthdayElem.value,
        catGenderVal,
        foodBrandElem.value
    );

    console.log("tomcat ", tomcat);

    // отправка формы
    let formElem = document.getElementById("questionnaireFormId");
    console.log("form " + formElem);
    // event.preventDefault();

    fetch("https://httpbin.org/post",
                {
                    method: 'POST',
                    body: new FormData(formElem)
                })
                .then(response => response.json())
                .then(user => {
                    console.log("user " + user);
                    for ( let i in user ) {
                        console.log("i " + i + " -- " + user[i]);    
                    }
                })
                .catch(error => console.log("error " + error)
    );
    
});
