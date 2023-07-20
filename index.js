window.addEventListener('load', scrollPage)

function scrollPage() {
  document.getElementById('btnScrollHome').addEventListener('click', clickAndScroll)
  document.getElementById('btnScrollInfo').addEventListener('click', clickAndScroll)
  document.getElementById('btnScrollServices').addEventListener('click', clickAndScroll)
  document.getElementById('btnScrollProjects').addEventListener('click', clickAndScroll)
  document.getElementById('btnScrollTeam').addEventListener('click', clickAndScroll)
  document.getElementById('btnScrollClients').addEventListener('click', clickAndScroll)
  document.getElementById('BtnScrollContact').addEventListener('click', clickAndScroll)
}

function clickAndScroll (ev) {
  ev.preventDefault()

  const addressSection = ev.currentTarget.dataset.home
  console.log(addressSection)
  document.getElementById(addressSection).scrollIntoView()
}

