
const button = document.querySelector('.panels-settings__button');
const settings = document.querySelector('.panels-settings');
// Color picker
Coloris({
    themeMode: 'dark',
    alpha: false
});
button.addEventListener('click', () => {
    settings.classList.add('none');
    const panels = document.querySelector('.panels');
    let valueInput = document.querySelector('.panels-settings__input').value;
    // console.log(valueInput)
    if (valueInput <= 1000) {
        // Присвоение обычного цвета клеткам
        let colorPanelDef = document.querySelector('.panels-settings__color-picker-default').value;
        // Присвоение активного цвета клеткам
        let colorPanelAct = document.querySelector('.panels-settings__color-picker-active').value;
        // console.log(colorPanelAct)
        if (colorPanelDef == "")
            colorPanelDef = "grey";
        if (colorPanelAct == "")
            colorPanelAct = "#788cff";
        document.documentElement.style.cssText =
        `--default-color: ${colorPanelDef};
         --active-color: ${colorPanelAct};
        `;
        // document.documentElement.style.cssText = `--active-color: ${colorPanelAct} `;
        for (i = 1; i <= valueInput; i++) {
            panels.insertAdjacentHTML(
                "beforeend",
                `<div class="panel">${i}</div>`
            );
        };


        let myBtns = document.querySelectorAll('.panel');
        myBtns.forEach(function (btn) {
            btn.addEventListener('click', () => {
                // myBtns.forEach(b => b.classList.remove('active'));
                btn.classList.toggle('active');
            });
        });

    } else {
        panels.after(
            `Ошибка 1: Слишком большое значение(Введите от 1 до 1000)`
        );
    };
    // console.log(panels)
});