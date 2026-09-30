import { StyledTitle } from './styles';
import { Names } from '../../constants/Names';
const Title = props => {
	return (
		<>
			<StyledTitle color={props.color}>Hola pepe</StyledTitle>;
		</>
	);
};
export default Title;
