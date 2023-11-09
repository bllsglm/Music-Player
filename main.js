document.addEventListener('DOMContentLoaded' , ()=>{
  const musicContainer = document.querySelector('.music-container')
  const playBtn = document.querySelector('#play')
  const prevBtn = document.querySelector('#prev')
  const nextBtn = document.querySelector('#next')
  const audio = document.querySelector('audio')
  const progress = document.querySelector('.progress')
  const progressContainer = document.querySelector('.progress-container')
  const title = document.querySelector('#title')
  const cover = document.querySelector('#cover')


  //Song  titles
  const songs = ['hey' , 'summer', 'ukulele']

  //keep track of the songs
  let songIndex = 1

  //Initially load song info
  loadSong(songs[songIndex])

  //Update song Details
  function loadSong(song){
    title.innerText =song
    audio.src = `/music/${song}.mp3`
    cover.src = `/images/${song}.jpg`
  }

//eventListeners
  const play = playBtn.querySelector('i')

  //Play-Pause Button
  play.addEventListener('click', ()=>{
    if(play.classList.contains('fa-pause')){
      musicContainer.classList.toggle('play')
      play.classList.add('fa-play')
      play.classList.remove('fa-pause')
      audio.pause()      
    }else{
      musicContainer.classList.toggle('play')
      play.classList.add('fa-pause')
      play.classList.remove('fa-play')
      audio.play()
    }
  })

  //Next Button
  const next = nextBtn.querySelector('i');
  next.addEventListener('click', ()=>{
  if(songIndex === songs.length-1){
    songIndex = 0
    loadSong(songs[songIndex])
    audio.play()
  }else{
    songIndex++
    loadSong(songs[songIndex])
    audio.play()
  }
  
  })

  //Prev Button
  const prev = prevBtn.querySelector('i');
  prev.addEventListener('click', ()=>{
  if(songIndex === 0){
    songIndex = songs.length -1
    loadSong(songs[songIndex])
    audio.play()
  }else{
    songIndex--
    loadSong(songs[songIndex])
    audio.play()
  }
  })

  //Progress Bar Style
  const updateProgress = (e) => {
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime / duration)*100;
    progress.style.width = `${progressPercent}%`
  }

  audio.addEventListener('timeupdate', updateProgress)



  const setProgress = (e) => {

  }

  progressContainer.addEventListener('click' , setProgress)

})


