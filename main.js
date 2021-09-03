const z = new Zoom('.image', {
    zoom: 2,
    zoomCursor: '.zoom-cursor',
    wrapper: '.zoom-wrapper',
    imageSelector: '.zoom-image',
    css: {
        custom: false,
        width: '100px',
        height: '100px',
        border: '1px solid black',
        borderRadius: '50%'
    }
})

z.init()