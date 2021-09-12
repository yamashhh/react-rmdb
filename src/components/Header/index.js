import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, RMDBLogoImg, TMDBLogoImg } from './Header.styles';

export default function Header() {
  return (
    <Wrapper>
      <Content>
        <RMDBLogoImg src={RMDBLogo} alt="rmdb-logo" />
        <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
      </Content>
    </Wrapper>
  );
}
