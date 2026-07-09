window.MapSystem = {
    gameInstance: null,

    init: function (game) {
        this.gameInstance = game;
        console.log("MapSystem initialized.");
    },

    showMap: function (promptObj) {
        console.log("Showing map...", promptObj);
        const mapLayer = document.getElementById("map-layer");
        const uiLayer = document.getElementById("ui-layer");

        if (!mapLayer || !uiLayer) return;

        // Hide normal UI and show map
        uiLayer.classList.add("hidden");
        mapLayer.classList.remove("hidden");
        mapLayer.classList.add("active");

        this.gameInstance.stopSkip();
        this.gameInstance.state.waiting = true;

        mapLayer.innerHTML = ""; // Clear old maps

        const title = document.createElement("h2");
        title.className = "map-title";
        title.innerText = promptObj.text || "選擇要去的地方";
        mapLayer.appendChild(title);

        const container = document.createElement("div");
        container.className = "map-container";

        const locations = promptObj.options || [];

        locations.forEach(loc => {
            const btn = document.createElement("div");
            btn.className = "map-location-btn";
            if (loc.color) {
                btn.style.borderLeftColor = loc.color;
            }
            btn.innerHTML = `<div class="map-loc-name">${loc.location || loc.name}</div>
                             <div class="map-loc-action">${loc.action || loc.desc}</div>`;

            btn.onclick = () => {
                this.selectLocation(loc);
            };
            container.appendChild(btn);
        });

        mapLayer.appendChild(container);
    },

    selectLocation: function (loc) {
        const mapLayer = document.getElementById("map-layer");
        const uiLayer = document.getElementById("ui-layer");

        document.getElementById('se-click').play().catch(e => { });

        // Hide map and show normal UI
        mapLayer.classList.add("hidden");
        mapLayer.classList.remove("active");
        uiLayer.classList.remove("hidden");

        this.gameInstance.state.waiting = false;

        if (loc.affection && loc.char) {
            this.gameInstance.updateAffection(loc.char, loc.affection);
        }

        if (loc.target) {
            this.gameInstance.loadScene(loc.target);
        } else {
            console.error("Map location missing target scene.");
            this.gameInstance.next();
        }
    }
};
