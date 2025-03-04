"use strict"
{
    document.addEventListener("keydown", function(event) {
        const crewPages = [
            "crew-commander.html",
            "crew-pilot.html",
            "crew-specialist.html",
            "crew-engineer.html"
        ];
    
        // 現在のページURLを取得
        const currentPage = window.location.pathname.split("/").pop();
        const currentIndex = crewPages.indexOf(currentPage);
    
        if (currentIndex !== -1) {
            if (event.key === "ArrowRight") {
                // →キーで次のページへ移動
                const nextPage = crewPages[(currentIndex + 1) % crewPages.length];
                window.location.href = nextPage;
            } else if (event.key === "ArrowLeft") {
                // ←キーで前のページへ移動
                const prevPage = crewPages[(currentIndex - 1 + crewPages.length) % crewPages.length];
                window.location.href = prevPage;
            }
        }
    });
    
}