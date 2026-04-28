let v1 = 3;
let v2 = 4

        // FIX: removed comment slashes and removed undefined variable "equals"
        //      Now alert works correctly and shows the result of 3 * 4.
        alert("3 times 4 = " + (v1 * v2));

        // FIX: getElementsById --> getElementById (correct DOM method name)
        let section = document.getElementById("s1");

        section.style.width = "50%";
        section.style.textAlign = "center";
        section.style.fontFamily = "arial, serif";

        // FIX: stlye --> style (typo)
        section.style.fontWeight = "bold";

        section.style.fontStyle = "italic";
        section.style.fontSize = "20px";

        // RED
        // FIX: getelementById --> getElementById (case-sensitive)
        const red = document.getElementById("red");
        red.innerHTML = "RED";
        red.style.backgroundColor = "red";

        // ORANGE
        const orange = document.getElementById("orange");
        // FIX: innerhtml --> innerHTML (correct property name & casing)
        orange.innerHTML = "ORANGE";
        orange.style.backgroundColor = "orange";

        // YELLOW
        const yellow = document.getElementById("yellow");
        yellow.innerHTML = "YELLOW";
        yellow.style.backgroundColor = "yellow";
        yellow.style.color = "black"; // optional: yellow text on yellow bg is hard to read

        // GREEN
        // FIX: const purple = ... --> const green = ... (variable name matches element)
        const green = document.getElementById("green");
        green.innerHTML = "GREEN";
        green.style.backgroundColor = "green";

        // INDIGO
        const indigo = document.getElementById("indigo");
        indigo.innerHTML = "INDIGO";
        indigo.style.backgroundColor = "indigo";

        // VIOLET
        const violet = document.getElementById("violet");
        violet.innerHTML = "VIOLET";
        violet.style.backgroundColor = "violet";