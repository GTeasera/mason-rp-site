let switchMode = document.getElementById("switchMode");

switchMode.onclick = function() {
    let theme = document.getElementById("themeMode");

    if(theme.getAttribute("href") == "light-mode.css"){
        theme.href = "dark-mode.css";
    }
    else{
        theme.href = "light-mode.css";
    }
}