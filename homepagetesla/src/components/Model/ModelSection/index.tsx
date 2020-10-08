import React, { useEffect, useRef } from 'react';
import useModel from '../useModel';

import { Container } from './styles';
interface Props  extends React.HTMLAttributes<HTMLDivElement>  {
  modelName: string;
  overlayNode: React.ReactNode;
}
const ModelSection: React.FC<Props> = ({
  modelName, 
  overlayNode,
  children,
  ...Props

}) => {
const {registerModel}=  useModel(modelName)

const sectionRef = useRef<HTMLDivElement>(null)
useEffect(() => {
 if(sectionRef.current){
   registerModel({
     modelName,
     overlayNode,
     sectionRef
   })
 }
}, [modelName, overlayNode, registerModel])
  return (
    <Container ref={sectionRef} {...Props}>
     {children}
    </Container>
  );
};

export default ModelSection;
