const tabs = [...document.querySelectorAll(".library-tab")];

function selectTab(selectedTab) {
    tabs.forEach((tab) => {
        const isSelected = tab === selectedTab;
        const panel = document.getElementById(
            tab.getAttribute("aria-controls")
        );

        tab.setAttribute("aria-selected", String(isSelected));
        tab.tabIndex = isSelected ? 0 : -1;
        panel.hidden = !isSelected;
    });
}

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        selectTab(tab);
    });

    tab.addEventListener("keydown", (event) => {
        let nextIndex;

        switch (event.key) {
            case "ArrowRight":
                nextIndex = (index + 1) % tabs.length;
                break;
            case "ArrowLeft":
                nextIndex = (index - 1 + tabs.length) % tabs.length;
                break;
            case "Home":
                nextIndex = 0;
                break;
            case "End":
                nextIndex = tabs.length - 1;
                break;
            default:
                return;
        }

        event.preventDefault();
        selectTab(tabs[nextIndex]);
        tabs[nextIndex].focus();
    });
});