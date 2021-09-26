import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';
import { Wrapper, Content, RMDBLogoImg, TMDBLogoImg } from './Header.styles';
import { Link } from 'react-router-dom';
import { Context, UserContext } from '../../context';
import { useContext } from 'react';

export default function Header() {
  const [user] = useContext(Context) as UserContext;

  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <RMDBLogoImg src={RMDBLogo} alt="rmdb-logo" />
        </Link>
        {user ? (
          <span>Logged in as {user.username}</span>
        ) : (
          <Link to="/login">Log in</Link>
        )}
        <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
      </Content>
    </Wrapper>
  );
}
