import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';
import { Wrapper, Content, RMDBLogoImg, TMDBLogoImg } from './Header.styles';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <RMDBLogoImg src={RMDBLogo} alt="rmdb-logo" />
        </Link>
        <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
      </Content>
    </Wrapper>
  );
}
