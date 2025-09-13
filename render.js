const fileInput = document.getElementById("selectedZip");
const slideShow = document.getElementById("slideShow");
const progress = document.getElementById("progress");
const defaultValue =
    "data:image/png;base64,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";
slideShow.src = defaultValue;
let slideNames = [];
let slideBase64 = [];
let slideIndex = 0;
fileInput.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const arrayBuffer = e.target.result;
            JSZip.loadAsync(arrayBuffer) // or data in Node.js
                .then(async function (zip) {
                    slideNames = [];
                    slideBase64 = [];
                    slideIndex = 0;
                    zip.forEach(function (relativePath, zipEntry) {
                        if (isImage(zipEntry.name)) {
                            slideNames.push(zipEntry.name);
                        }
                    });
                    slideNames = slideNames.sort((a, b) =>
                        a.toString().localeCompare(b.toString(), undefined, {
                            numeric: true,
                        })
                    );
                    progress.max = slideNames.length;
                    progress.value = 0;
                    for (let index in slideNames) {
                        await zip
                            .file(slideNames[index])
                            .async("base64")
                            .then(function (base64Data) {
                                populateBase64(
                                    "data:image/png;base64," + base64Data,
                                    index
                                );
                            });
                        progress.value = index;
                    }
                    progress.value = slideIndex + 1;
                })
                .catch(function (error) {
                    console.error("Error loading zip:", error);
                });
        };
        reader.readAsArrayBuffer(file);
    }
});

function populateBase64(value, index) {
    slideBase64.push(value);
    if (index == 0) {
        slideShow.src = slideBase64[slideIndex];
    }
}

const select = document.getElementById("select");
select.addEventListener("click", (e) => {
    fileInput.click();
});

slideShow.addEventListener("mousemove", (e) => {
    if (!slideBase64.length) {
        return;
    }
    const rect = slideShow.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    if (
        clickX < rect.width / 2 &&
        slideShow.style.cursor != 'url("assets/left.png"), auto'
    ) {
        slideShow.style.cursor = 'url("assets/left.png"), auto';
    }
    if (
        clickX > rect.width / 2 &&
        slideShow.style.cursor != 'url("assets/right.png"), auto'
    ) {
        slideShow.style.cursor = 'url("assets/right.png"), auto';
    }
});

slideShow.addEventListener("click", (e) => {
    if (!slideBase64.length) {
        return;
    }
    const rect = slideShow.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    if (clickX < rect.width / 2) {
        slideIndex--;
        if (slideIndex < 0) {
            slideIndex = slideBase64.length - 1;
        }
    }
    if (clickX > rect.width / 2) {
        slideIndex++;
        if (slideIndex > slideBase64.length - 1) {
            slideIndex = 0;
        }
    }
    slideShow.src = slideBase64[slideIndex];
    progress.value = slideIndex + 1;
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

function fileExtension(filename) {
    return filename.split(".").pop();
}

function isImage(url) {
    return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/i.test(url);
}
