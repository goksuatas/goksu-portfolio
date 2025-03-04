// Karanlık Mod İşlevi
const darkModeToggle = document.getElementById("dark-mode-toggle");

// Butona tıklanınca karanlık mod aç/kapat
// Kullanıcının tercihini localStorage'a kaydediyoruz
// Böylece sayfa yenilendiğinde karanlık mod korunur
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

// Sayfa yüklendiğinde karanlık mod tercihini kontrol et
window.addEventListener("load", () => {
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }
});

// Form gönderildiğinde kullanıcıya bildirim göster
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Formun varsayılan gönderimini durduruyoruz
    
    // Kullanıcıya mesajın gönderildiğini bildiren bir uyarı çıkart
    alert("Mesajınız başarıyla gönderildi! En kısa sürede dönüş yapacağım.");
    
    // Gerçek gönderim işlemini gerçekleştiriyoruz
    form.submit();
});
