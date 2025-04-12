const apiUrl = "https://api.mymemory.translated.net/get";

const languages = {
    "en": "English",
    "de": "German",
    "fr": "French",
    "es": "Spanish",
    "it": "Italian",
    "ru": "Russian",
    "uzb": "Uzbek"
};

document.addEventListener("DOMContentLoaded", () => {
    const translate1 = document.getElementById("translate1");
    const translate2 = document.getElementById("translate2");
    const translateBtn = document.getElementById("translateBtn");
    const langSelect1 = document.getElementById("lang");
    const langSelect2 = document.getElementById("lang2");

    const translateText = async () => {
        const text = translate1.value.trim();
        const lang1 = langSelect1.value;
        const lang2 = langSelect2.value;

        if (text === "") {
            alert("Please enter some text to translate!");
            return;
        }

        try {
            const response = await fetch(`${apiUrl}?q=${text}&langpair=${lang1}|${lang2}`);
            const data = await response.json();

            if (data.responseData.translatedText) {
                translate2.value = data.responseData.translatedText;
            } else {
                alert("Error translating text. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    translateBtn.addEventListener("click", translateText);
});
