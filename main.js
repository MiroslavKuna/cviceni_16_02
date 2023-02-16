const progressBar= document.getElementById('bar');
//load data through XMLhttpRequest and save them to localstorage from the following link https://datausa.io/api/data?drilldowns=Nation&measures=Population. In case of an error, write the error code to console.
function loadData() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://datausa.io/api/data?drilldowns=Nation&measures=Population", true);
    xhr.onload = function () {
        if (xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            localStorage.setItem("data", JSON.stringify(data.data));
        } else {
            console.log("Error code: " + xhr.status);
        }
    }
    xhr.send();
}
loadData();

//display the progress of loading data from the link https://datausa.io/api/data?drilldowns=Nation&measures=Population into progressBar. The progress bar should be with xhr.CallBack().
function progress() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://datausa.io/api/data?drilldowns=Nation&measures=Population", true);
    xhr.onprogress = function (event) {
        if (event.lengthComputable) {
            var percentComplete = event.loaded / event.total;
            progressBar.style.width = percentComplete * 100 + "%";
        }
    }
    xhr.send();
}
progress();

//write data tao console from localstorage
function writeData() {
    var data = JSON.parse(localStorage.getItem("data"));
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
    }
    }
writeData();

