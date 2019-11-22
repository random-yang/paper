const invertImgs = (function() {
  const invertImg = img => img.style.filter = img.style.filter !== "invert(100%)" ? "invert(100%)" : ""
  const invertImgs = imgs => Array.prototype.forEach.call(imgs, invertImg)
  return invertImgs
})()

// const addMixBlendModeMask = (color = '#000000', mode = 'screen') => {
//   let body = document.body
//   // create mask
//   let mask = document.createElement('div')
//   // set the mask css property
//   let maskCss = {
//       width: '100%',
//       height: '100%',
//       backgroundColor: color,
//       position: 'fixed',
//       top: '0',
//       left: '0',
//       mixBlendMode: mode,
//       zIndex: 10,
//       pointerEvents: 'none',
//       transition: 'background-color 0.3s ease-out'
//   }
//   for (property in maskCss) {
//     mask.style[property] = maskCss[property]
//   }
//   mask.id = 'darkmode-mask'
//   // insert the musk into the page body
//   body.append(mask);
// }

function Darkmode() {
  this.mask = document.getElementById('darkmode-mask')
  this.imgs = document.getElementsByTagName('img')
}
Darkmode.prototype.turnOnDarkmode = function() {
  // fix chrome bug
  document.querySelector('html').style.background = '#ffffff'
  this.mask.classList.add('darkmode-mask--dark');
  // invert the images color
  // so that they can render with the right color
  invertImgs(this.imgs)
}
Darkmode.prototype.turnOffDarkmode = function() {
  this.mask.classList.remove('darkmode-mask--dark');
  invertImgs(this.imgs)
}


window.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.querySelector('input[name=mode]');
  const darkmode = new Darkmode()
  checkbox.addEventListener('change', function() {
    if(this.checked) {
      darkmode.turnOnDarkmode()
    } else {
      darkmode.turnOffDarkmode()
    }
  })
})
