import { useTransform } from 'framer-motion';
import React from 'react';
import useWrapperScroll from '../Model/useWrapperScroll';

import { Container, Header, Logo, Burger, Footer } from './styles';

const UniqueOverlay: React.FC = () => {
const {scrollProgress} = useWrapperScroll();

const opacity = useTransform(scrollProgress, [0.9, 1], [0, 1])

  return (
    <Container>
      <Header>
        <Logo/>
        <Burger/>
      </Header>

      <Footer style={{opacity}}>
        <ul>
          <li>
            <a href="#index">Ui Clone</a>

          </li>
          <li>
            <a href="#index">Ui Clone</a>

          </li>
          <li>
            <a href="#index">Ui Clone</a>

          </li>
          <li>
            <a href="#index">Ui Clone</a>

          </li>
          <li>
            <a href="#index">Guilherme Eckert</a>

          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
