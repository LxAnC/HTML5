let list = document.querySelectorAll('.li')

        function setActiveClass() {
            list.forEach((item) =>
                item.classList.remove('act'));
            this.classList.add('act');
        }
        list.forEach((item) =>
            item.addEventListener('mouseover', setActiveClass))

        window.onload = function () {
            var pionter = document.querySelector('#pionter');
            window.onmousemove = function (e) {
                pionter['style']['left'] = e.clientX + 'px';
                pionter['style']['top'] = e.clientY + 'px';
            };
        };