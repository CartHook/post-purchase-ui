import { useContext } from 'react';
import { LabelledContext } from './context';
export function useLabelled() {
  var labelled = useContext(LabelledContext);
  if (labelled == null) {
    throw new Error('No labelled in context');
  }
  return labelled;
}