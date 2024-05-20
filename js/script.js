let redirect_Page = () => {
    let tID = setTimeout(function () {
        window.location.href = "index.html";
        window.clearTimeout(tID);		// clear time out.
    }, 50);
}

// Using regular methods.
/* function redirect_Page () {
    var tID = setTimeout(function () {
        window.location.href = "https://www.encodedna.com/javascript/operators/default.htm";
        window.clearTimeout(tID);		// clear time out.
    }, 5000);
} */