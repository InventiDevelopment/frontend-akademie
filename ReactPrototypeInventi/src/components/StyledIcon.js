import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};
`;

export default StyledIcon;
