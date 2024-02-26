import { createContext, useState } from "react";

export const MusicContext = createContext();

function MusicContextProvider({ children }) {

 

  const [songs, setsongs] = useState([]);
  const [isPlaying, setisPlaying] = useState(false);
  const [currentSong, setcurrentSong] = useState(null);
  const [searchedSongs, setSearchedSongs] = useState([]);
  const [isLoading, setisLoading] = useState(true)


  const playMusic = async (
    music,
    name,
    duration,
    image,
    id,
    primaryArtists
  ) => {
    if (currentSong && currentSong.id === id) {
      if (isPlaying) {
        setisPlaying(false);
        currentSong.audio.pause();
      } else {
        setisPlaying(true);
        await currentSong.audio.play();
      }
    } else {
      if (currentSong) {
        currentSong.audio.pause();
        setisPlaying(false);
      }
      const newAudio = new Audio(music[4].link);
      setcurrentSong({
        name,
        duration,
        image: image[2].link,
        id,
        audio: newAudio,
        primaryArtists,
      });
      setisPlaying(true);
      console.log(currentSong);
      await newAudio.play();
    }
  };

  const nextSong = () => {
    if (currentSong) {
      const index = songs.findIndex((song) => song.id === currentSong.id);
      if (index === songs.length - 1) {
        const { downloadUrl, name, duration, image, id, primaryArtists } = songs[0];
        playMusic(downloadUrl, name, duration, image, id, primaryArtists);
      }
      else {
        const { downloadUrl, name, duration, image, id, primaryArtists } = songs[index + 1];
        playMusic(downloadUrl, name, duration, image, id, primaryArtists);
      }
    }
  };
  const prevSong = () => {
    if (currentSong) {
      const index = songs.findIndex((song) => song.id === currentSong.id);
      if (index === 0) {
        const { downloadUrl, name, duration, image, id, primaryArtists } = songs[songs.length - 1];
        playMusic(downloadUrl, name, duration, image, id, primaryArtists);
      }
      else {
        const { downloadUrl, name, duration, image, id, primaryArtists } = songs[index - 1];
        playMusic(downloadUrl, name, duration, image, id, primaryArtists);
      }
    }
  };

  const value = {
    songs, setsongs,
    isPlaying, setisPlaying,
    currentSong, setcurrentSong,
    playMusic,nextSong,prevSong,
    searchedSongs, setSearchedSongs,
    isLoading, setisLoading,
    
  }

  return <MusicContext.Provider value={value}>
    {children}
  </MusicContext.Provider>
}
export default MusicContextProvider;