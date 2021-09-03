const z = new Zoom('.image', {
    zoom: 2,
    zoomCursor: '.zoom-cursor',
    wrapper: '.zoom-wrapper',
    imageSelector: '.zoom-image',
    hideCursor: true,

})

z.init()