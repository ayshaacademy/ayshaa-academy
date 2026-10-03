document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;

    const age =
        document.getElementById("age").value;

    const country =
        document.getElementById("country").value;

    const phone =
        document.getElementById("phone").value;

    const email =
        document.getElementById("email").value;

    const studentType =
        document.getElementById("studentType").value;

    const course =
        document.getElementById("course").value;

    const timezone =
        document.getElementById("timezone").value;


    const message =

        "Assalamu Alaikum Aysha Academy! 🌙\n\n" +

        "NEW REGISTRATION\n\n" +

        "Name: " + name + "\n" +

        "Age: " + age + "\n" +

        "Country: " + country + "\n" +

        "WhatsApp: " + phone + "\n" +

        "Email: " + email + "\n" +

        "Student: " + studentType + "\n" +

        "Course: " + course + "\n" +

        "Time Zone: " + timezone + "\n\n" +

        "CLASS DETAILS\n" +

"🗓️ Class Days: Monday – Saturday\n" +

"🕐 Class Time: 4:30 PM – 5:00 PM IST\n" +

"💻 Platform: Google Meet\n" +

"🌙 Weekly Holiday: Sunday\n\n" +

        "FEES\n" +

        "🇮🇳 India: ₹500 per month\n" +

        "🌍 International Students: Affordable fee based on country\n\n" +

        "JazakAllahu Khairan.";


    
        const whatsappNumber =
    "919335276518";


    const whatsappURL =
    "https://wa.me/" +
    whatsappNumber +
    "?text=" +
    encodeURIComponent(message);

window.open(
    whatsappURL,
    "_blank"
);

});