import { useCallback, useContext, useEffect } from "react";
import ModelsContext from "./ModelsContext";


export default function useModel(modelName: string) {
  const {registerModel, unRegisterModel, getModelByName } = useContext(
    ModelsContext
  )

  useEffect(() => () => unRegisterModel(modelName), [
    modelName,
    unRegisterModel
  ])

  const getModel = useCallback(() => getModelByName(modelName), [
    getModelByName,
    modelName
  ])

  return {registerModel, getModel}

}