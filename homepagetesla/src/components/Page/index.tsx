import React from 'react';
import {ModelSection, ModelsWrapper} from '../Model';
import DefaultOverlayContent from '../DefaultOverlayContent';
import { Container } from './styles';
import UniqueOverlay from '../UniqueOverlay';
const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Model One',
            'Model Two',
            'Model Three',
            'Model Four',
            'Model Five',
            'Model Six',
            'Model Seven',


          ].map(modelName => (
            <ModelSection
            key={modelName}
            className="colored"
            modelName= {modelName}
            overlayNode = {
              <DefaultOverlayContent
              label={modelName}
              description="Order Online for Delivery"
              
              />
            }
            />
          ))
           
          }
        </div>
        <UniqueOverlay/>
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
