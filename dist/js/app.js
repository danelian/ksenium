$(document).ready(function () {

  // -------------------- Stages -------------------------
  const programStages = document.querySelectorAll('.program-stage')
  programStages.forEach((item) => {
    const programStageHeader = item.querySelector('.program-stage__header')
    programStageHeader.addEventListener('click', () => {
      const openItem = document.querySelector('.stage-open')
      toggleStage(item)
      if (openItem && openItem !== item) {
        toggleStage(openItem)
      }
    })
  })
  const toggleStage = (item) => {
    const programStageContent = item.querySelector('.program-stage__content')
    if (item.classList.contains('stage-open')) {
      programStageContent.removeAttribute('style')
      item.classList.remove('stage-open')
    } else {
      programStageContent.style.height = programStageContent.scrollHeight + 'px'
      item.classList.add('stage-open')
    }
  }

  // -------------------- Acordion FAQ -------------------------
  const accordeonItems = document.querySelectorAll('.accordeon-item')
  accordeonItems.forEach((item) => {
    const accordeonHeader = item.querySelector('.accordeon-header')
    accordeonHeader.addEventListener('click', () => {
      const openItem = document.querySelector('.accordeon-open')
      toggleItem(item)
      if (openItem && openItem !== item) {
        toggleItem(openItem)
      }
    })
  })
  const toggleItem = (item) => {
    const accordeonContent = item.querySelector('.accordeon-content')
    if (item.classList.contains('accordeon-open')) {
      accordeonContent.removeAttribute('style')
      item.classList.remove('accordeon-open')
    } else {
      accordeonContent.style.height = accordeonContent.scrollHeight + 'px'
      item.classList.add('accordeon-open')
    }
  }

});