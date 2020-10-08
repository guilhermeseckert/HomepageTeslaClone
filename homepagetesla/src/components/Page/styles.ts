import styled from 'styled-components';
import car from '../../img/5078.jpg'
import car2 from '../../img/4025.jpg'
export const Container = styled.div`
.colored:nth-child(1) {
background-image: url(${car});
background-position: center;
background-size: cover;
}
.colored:nth-child(2) {
background-image: url(${car2});
background-position: center;
background-size: cover;
}
.colored:nth-child(3) {
background: #cdfeca;
}
.colored:nth-child(4) {
background: #bbfebb;
}
.colored:nth-child(5) {
background: #a9fdac;
}
.colored:nth-child(6) {
background: #90f29c;
}
.colored:nth-child(7) {
background: #77e68c;
}
`;

export const Spacer = styled.div`
  height: 15vh;
  background: #77e68c;
`