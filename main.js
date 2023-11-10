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
  const playSong = () => {
    musicContainer.classList.toggle('play')
    play.classList.add('fa-play')
    play.classList.remove('fa-pause')
    audio.pause()
  }

  const pauseSong = () => {
    musicContainer.classList.toggle('play')
    play.classList.add('fa-pause')
    play.classList.remove('fa-play')
    audio.play()
  }
  
  

  //Play-Pause Button
  const startSong =(e)=>{
    
    if(play.classList.contains('fa-pause')){
        playSong()
    }else{
        pauseSong()
    }
  }
  const play = playBtn.querySelector('i')
  play.addEventListener('click', startSong)


  //NEXT SONG
  const nextSong = () => {
    if(songIndex === songs.length-1){
    songIndex = 0
    loadSong(songs[songIndex])
    if(play.classList.contains('fa-pause')){
      audio.play()
    }else{
      audio.pause()
    }
  }else{
    songIndex++
    loadSong(songs[songIndex])
    if(play.classList.contains('fa-pause')){
      audio.play()
    }else{
      audio.pause()
    }
  }
  }

  nextBtn.addEventListener('click', nextSong)

  //PREV SONG
  
  const prevSong = () => {
    if(songIndex === 0){
      songIndex = songs.length -1
      loadSong(songs[songIndex])
      if(play.classList.contains('fa-pause')){
        audio.play()
      }else{
        audio.pause()
      }
    }else{
      songIndex--
      loadSong(songs[songIndex])
      if(play.classList.contains('fa-pause')){
        audio.play()
      }else{
        audio.pause()
      }
    }
  }

  prevBtn.addEventListener('click' , prevSong)

  //PROGRESS BAR STYLE
  const updateProgress = (e) => {
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime / duration)*100;
    progress.style.width = `${progressPercent}%`
  }

  audio.addEventListener('timeupdate', updateProgress)



  //GO TO A  CERTAİN POİNT IN PROGRESSBAR
  const setProgress = (e) => {
    const width = progressContainer.clientWidth; // Get the total width of the progress container
    const clickX = e.offsetX;
    const duration = audio.duration
    const newTime = (clickX/width)*duration
    audio.currentTime = newTime
  }
  

  progressContainer.addEventListener('click' , setProgress)

  //AFTER SONG ENDED
  function afterSong() {
    if(songIndex === songs.length-1){
      songIndex = 0
      loadSong(songs[songIndex])
      audio.play()
    }else{
      songIndex++
      loadSong(songs[songIndex])
      audio.play()
    }
  }

  audio.addEventListener('ended', afterSong)

})


