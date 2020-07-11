// dark mode utils
const invertImgs = (function() {
  const invertImg = img =>
    (img.style.filter =
      img.style.filter !== 'invert(100%)' ? 'invert(100%)' : '')
  const invertImgs = imgs => Array.prototype.forEach.call(imgs, invertImg)
  return invertImgs
})()

function Darkmode() {
  this.mask = document.getElementById('darkmode-mask')
  this.imgs = document.getElementsByTagName('img')
  this.metaThemeColor = document.querySelector('meta[name=theme-color]')
  this.metaThemeColorCatch = ''
}
Darkmode.prototype.turnOnDarkmode = function() {
  // fix chrome bug
  document.querySelector('html').style.background = '#ffffff'
  this.mask.classList.add('darkmode-mask--dark')
  // invert the images color
  // so that they can render with the right color
  invertImgs(this.imgs)

  // set <meta name="theme-color" content="xxxx">
  this.metaThemeColorCatch = this.metaThemeColor.content
  this.metaThemeColor.setAttribute('content', '#333') // dark-mode tab color #333
}
Darkmode.prototype.turnOffDarkmode = function() {
  this.mask.classList.remove('darkmode-mask--dark')
  invertImgs(this.imgs)
  this.metaThemeColor.content = this.metaThemeColorCatch
}

window.addEventListener('DOMContentLoaded', () => {
  // darkmode
  ;(() => {
    const darkmode = new Darkmode()
    const { isDarkMode } = localStorage
    const checkbox = document.querySelector('input[name=mode]')
    if (isDarkMode && JSON.parse(isDarkMode)) {
      darkmode.turnOnDarkmode()
      checkbox.checked = true
    }
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        darkmode.turnOnDarkmode()
        localStorage.setItem('isDarkMode', true)
      } else {
        darkmode.turnOffDarkmode()
        localStorage.setItem('isDarkMode', false)
      }
    })
  })()

  // sidebar
  ;(() => {
    let toggle = true
    const sidebar = document.querySelector('.sidebar')
    const sidebarButton = document.querySelector('.sidebar__button')
    sidebarButton && sidebarButton.addEventListener('click', function() {
      toggle
        ? sidebar.classList.add('sidebar--expend')
        : sidebar.classList.remove('sidebar--expend')
      toggle
        ? sidebarButton.classList.add('sidebar__button--expend')
        : sidebarButton.classList.remove('sidebar__button--expend')
      toggle = !toggle
    })
  })()
})
