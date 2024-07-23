import * as S from './styles';
import { useStorageState } from 'shared/hooks/useStorageState';

export const SidePanel = () => {
  const [counter, setCounter] = useStorageState('counter');

  return (
    <S.Container>
      <h3>SidePanel Page</h3>
      <h4>Count from Popup: {counter}</h4>
    </S.Container>
  );
};

export default SidePanel;
