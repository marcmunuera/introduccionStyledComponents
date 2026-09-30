import Nomres from './components/nomres/Nomres';
import Title from './components/title/Title';
import { Names } from './constants/Names';

const App = () => {
	return (
		<>
			{Names.map(nombre => (
				<Nomres key={nombre.id} title={nombre.nameTitle} />
			))}
			<Title color='red' />
			<Title color='blue' />
			<Title color='orange' />
			<Title color='pink' />
		</>
	);
};

export default App;
