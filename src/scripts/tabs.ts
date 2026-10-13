// Pestañas accesibles (patrón tabs de WAI-ARIA) para cada [data-tabs]: Inventario y Niveles.
// La pestaña inicial es la que viene con aria-selected="true" en el HTML.
// Sin JS el tablist queda oculto y se ven todos los paneles.
for (const root of document.querySelectorAll<HTMLElement>("[data-tabs]")) {
    const tablist = root.querySelector<HTMLElement>("[role=tablist]")!;
    const tabs = [...tablist.querySelectorAll<HTMLElement>("[role=tab]")];
    const panels = tabs.map((tab) => document.getElementById(tab.getAttribute("aria-controls")!)!);

    const select = (index: number, focus = false) => {
        tabs.forEach((tab, i) => {
            const active = i === index;
            tab.setAttribute("aria-selected", String(active));
            tab.tabIndex = active ? 0 : -1;
            panels[i].hidden = !active;
        });
        if (focus) tabs[index].focus();
    };

    tabs.forEach((tab, i) => {
        tab.addEventListener("click", () => select(i));
        // Flechas, Inicio y Fin mueven entre pestañas
        tab.addEventListener("keydown", (event) => {
            const last = tabs.length - 1;
            const next = {
                ArrowRight: i === last ? 0 : i + 1,
                ArrowLeft: i === 0 ? last : i - 1,
                Home: 0,
                End: last,
            }[event.key];
            if (next === undefined) return;
            event.preventDefault();
            select(next, true);
        });
    });

    tablist.hidden = false;
    root.classList.add("is-tabbed");
    select(
        Math.max(
            0,
            tabs.findIndex((tab) => tab.getAttribute("aria-selected") === "true"),
        ),
    );
}
