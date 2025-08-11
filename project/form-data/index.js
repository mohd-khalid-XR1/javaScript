const form = document.getElementById("form")
const username = document.getElementById("username")
// const email = document.getElementById("email")
const file = document.getElementById("profile")


form.addEventListener("submit", submitForm)

username.addEventListener("input", function (e) {
    let name = e.target.value
    e.target.value = name.toLowerCase().replaceAll(" ", "-")
    // console.log(e.target.value);
})

file.addEventListener("input", function (e) {
    console.log(e.target);
    console.log("change");
})



function submitForm(e) {
    e.preventDefault()
    const fd = new FormData(form)
    let username = fd.get("username")
    let password = fd.get("password")
    let email = fd.get("email")
    let dob = fd.get("dob")
    let gender = fd.get("gender")
    let hobbies = fd.getAll("hobbies")
    let file = fd.getAll("profile")
    let country = fd.get("country")
    let bio = fd.get("bio")


    console.log("username : ", username);
    console.log("password : ", password);
    console.log("dob : ", dob);
    console.log("gender :", gender);
    console.log("hobbies :", hobbies);
    console.log("file :", file);
    console.log("country :", country);
    console.log("bio", bio);

    if (username.length <= 5) {
        alert("username must be greater than 5 digit")
        return
    }

    if (!email.includes("@gmail.com")) {
        alert("include @gmail.com")
        return
    }

}