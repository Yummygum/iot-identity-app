const forceRepaint = () => {
  document.body.style.transform = 'translateZ(0)'

  requestAnimationFrame(() => {
    document.body.style.transform = ''
  })
}

export default forceRepaint
