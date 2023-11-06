window.onload = function () {
    if (window.innerWidth < 768) {
        document.querySelectorAll("div.detailcontent").forEach(el => {
            el.innerHTML = "";
        })

        document.querySelectorAll("div.chk").forEach(el => el.addEventListener("click", showPhoneDetail))

        function showPhoneDetail(evt) {
            const el = document.getElementById("phonedetail" + evt.currentTarget.title).style.display;
            if (el == "none" || el == "" || el == undefined) {
                document.getElementById("chk" + evt.currentTarget.title).style.fontSize =  "24px";
                document.getElementById("phonedetail" + evt.currentTarget.title).style.display =  "block";
            } else {
                document.getElementById("chk" + evt.currentTarget.title).style.fontSize =  "20px";
                document.getElementById("phonedetail" + evt.currentTarget.title).style.display =  "none";
            }
        }

        document.getElementById("sitetitle").addEventListener("click", showPhoneMainDetail);

        function showPhoneMainDetail(evt) {
            const status = document.getElementById("phonemain").style.display;
            console.log(status);
            document.getElementById("phonemain").style.display = (status == '' || status == 'none' || status == undefined)?"block":"none";
        }

    } else {
        document.querySelectorAll("div.phonedetail").forEach(el => {
            el.innerHTML = "";
        })

        document.querySelectorAll("li.main").forEach(el => el.addEventListener("click", showDetail))

        function showDetail(evt) {
            clearObj();
            document.getElementById("main" + evt.currentTarget.title).classList.add("focus");
            document.getElementById("detail" + evt.currentTarget.title).style.display = "block";
        }

        document.getElementById("detailmain").style.display = "block";
        document.getElementById("sitetitle").addEventListener("click", showMainDetail);

        function showMainDetail(evt) {
            clearObj();
            document.getElementById("detailmain").style.display = "block";
        }

        function clearObj() {
            document.querySelectorAll("div.detail").forEach(el => el.style.display = "none");
            document.querySelectorAll("li.main").forEach(el => el.classList.remove("focus"));
            window.scroll(0, 0);
        }

    }

}

window.addEventListener('load', function () {
    const loaderContainer = document.getElementById('loading');
    loaderContainer.parentElement.removeChild(loaderContainer);
})