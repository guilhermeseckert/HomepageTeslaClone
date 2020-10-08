import React, { useCallback, useRef, useState } from 'react';
import ModelsContext, {CarModel} from '../ModelsContext';
import { Container, OverlaysRoot} from './styles';

import ModelOverlay from '../ModelOverlay';

const ModelsWrapper: React.FC = ({ children}) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [registeredModels, setRegisteredModels] = useState<CarModel[]>([])
  const registerModel = useCallback((model: CarModel) => {
    setRegisteredModels(state => [...state, model])
  }, [])
  const unRegisterModel = useCallback((modelName: string)=>{
    setRegisteredModels(state => state.filter(model => model.modelName !== modelName))
  }, [])

// take a look
  const getModelByName = useCallback(
    (modelName: string) => {
    return registeredModels.find(item => item.modelName === modelName || null)
  }, 
  [registeredModels]
  )

  return (
   <ModelsContext.Provider value={{
     wrapperRef,
     registeredModels,
     registerModel,
     unRegisterModel,
     getModelByName
   }}>
      <Container ref={wrapperRef}>
        <OverlaysRoot>
      {registeredModels.map(item => (
        <ModelOverlay key={item.modelName} model={item}  >{item.overlayNode}</ModelOverlay>
      ))}
        </OverlaysRoot>
      {children}
    </Container>
   </ModelsContext.Provider>
  );
};

export default ModelsWrapper;
