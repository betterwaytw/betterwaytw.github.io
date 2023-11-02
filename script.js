window.onload = function () {
    if (window.innerWidth < 768) {
        document.querySelectorAll("div.detailcontent").forEach(el => {
            el.innerHTML = "";
        })

        document.querySelectorAll("div.chk").forEach(el => el.addEventListener("click", showPhoneDetail))

        function showPhoneDetail(evt) {
            const el = document.getElementById("phonedetail" + evt.currentTarget.title).style.display;
            document.getElementById("phonedetail" + evt.currentTarget.title).style.display = (el == "none" || el == "" || el == undefined) ? "block" : "none";
        }
    } else {
        document.querySelectorAll("div.phonedetail").forEach(el => {
            el.innerHTML = "";
        })

        document.querySelectorAll("li.main").forEach(el => el.addEventListener("click", showDetail))

        function showDetail(evt) {
            document.querySelectorAll("div.detail").forEach(el => el.style.display = "none")
            document.querySelectorAll("li.main").forEach(el => el.classList.remove("focus"))
            document.getElementById("main" + evt.currentTarget.title).classList.add("focus");
            document.getElementById("detail" + evt.currentTarget.title).style.display = "block";
        }

    }

}

window.addEventListener('load', function () {
    const loaderContainer = document.getElementById('loading');
    loaderContainer.parentElement.removeChild(loaderContainer);
})