const e = document.getElementById("rainBackgroundContainer");
        for (let n = 0; n < 50; n++) {
            const t = document.createElement("div");
            t.classList.add("raindrop");
            const a = 100 * Math.random(),
                o = 1.5 * Math.random(),
                r = 20 * Math.random() + 20,
                c = .4 * Math.random() + .3;
            t.style.left = `${a}%`,
            t.style.width = `${o}px`,
            t.style.height = `${r}px`,
            t.style.opacity = Math.random(),
            t.style.animationDuration = `${c}s`,
            t.style.animationDelay = `${2 * Math.random()}s`,
            e.appendChild(t);
        }