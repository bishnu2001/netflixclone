import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getgenres, fetchmovies } from "../Redux/slice";
import { onAuthStateChanged } from 'firebase/auth';
import styled from 'styled-components';
import NotAvailble from"../pages/NotAvailble";
import Slider from '../components/Slider';
import { firebaseAuth } from '../utils/firebase-config';
import Navbar from '../components/Navbar';
import SelectGenres from '../components/SelectGenres';


const Movies = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const movies = useSelector((state) => state.netflix.movies);
    const genres = useSelector((state) => state.netflix.genres);
    const genresLoaded = useSelector((state) => state.netflix.genresLoaded);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getgenres());
    }, []);

    useEffect(() => {
      if (genresLoaded) {
        dispatch(fetchmovies({ genres, type: "movie" }));  //if error write genres
      }
    }, [genresLoaded]);

    onAuthStateChanged(firebaseAuth, (currentUser) => {
    //   if (!currentUser) navigate("/login");
    });

    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };
  return (
    <Container>
      <div className="navbar">
        <Navbar isScrolled={isScrolled} />
      </div>
      <div className="data">
        <SelectGenres genres ={genres} type="movie"/>
        {movies.length ? <Slider movies={movies} /> : <NotAvailble />}
      </div>
    </Container>
  );
}

const Container = styled.div`
  .data {
    margin-top: 8rem;
    .not-available {
      text-align: center;
      color: white;
      margin-top: 4rem;
    }
  }
`;

export default Movies;