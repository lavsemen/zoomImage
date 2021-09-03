class Zoom {
    constructor(selector, params) {
        this.selector = selector;
        this.params = params;
    }
    init () {
        const object = document.querySelector(this.selector),
              zoomCursor = object.querySelector(this.params.zoomCursor),
              zoomWrapper = object.querySelector(this.params.wrapper),
              zoomImage = this.params.imageSelector? object.querySelector(this.params.imageSelector): object.querySelector('img'),
              params = this.params;

        const cssParams = Object.entries(params.css);
        cssParams.forEach(item => {
            zoomCursor.style[item[0]] = item[1];
        })

        if (!params.custom) {
            setDefaultCss();
        }

        zoomWrapper.addEventListener('mousemove', initZoom);

        function initZoom(event) {
            const cursorHeight = zoomCursor.clientHeight / 2,
                  cursorWidth = zoomCursor.clientWidth / 2,
                  pos = getCursorPos(event),
                  zoom = params.zoom,
                  cursorPositionX = event.offsetX - cursorWidth + 'px',
                  cursorPositionY= event.offsetY - cursorHeight + 'px';

            event.preventDefault();
            zoomCursor.style.left = cursorPositionX;
            zoomCursor.style.top = cursorPositionY;
            zoomCursor.style.opacity = '1'
            zoomCursor.style.backgroundImage = `url('${zoomImage.src}')`
            zoomCursor.style.backgroundRepeat = "no-repeat";
            zoomCursor.style.backgroundSize = (zoomImage.width * zoom) + "px " + (zoomImage.height * zoom) + "px";
            zoomCursor.style.backgroundPosition = '-' + ((pos.x * zoom) - cursorWidth + zoom) + "px -" + ((pos.y * zoom) - cursorHeight + zoom) + "px"

        }

        function getCursorPos(event) {
            let a, x = 0, y = 0;
            event = event || window.event;
            a = object.getBoundingClientRect();
            x = event.pageX - a.left;
            y = event.pageY - a.top;
            x = x - window.pageXOffset;
            y = y - window.pageYOffset;
            return {x : x, y : y};
        }

        function setDefaultCss() {
            object.style.position = 'relative';
            zoomCursor.style.position = 'absolute';
            zoomCursor.style.zIndex = '2';
            zoomCursor.style.opacity = '0'


            zoomWrapper.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 3;
                cursor: none;
            `

        }

    }
}