const progress = document.querySelector("#progress")
const prev = document.querySelector("#prev")
const next = document.querySelector("#next")
const circles = document.querySelectorAll(".circle")

let currentActive = 1


function update () {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active")
    } else {
      circle.classLists.remove("active")
    }
  })

  const actives = document.querySelectorAll(".active")

  progress.style.width = `${((actives.length -1 ) / (circles.length - 1)*100)}%`

  if (currentActive === 1) {
    prev.disabled = true
  } else if (currentActive === circles.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}