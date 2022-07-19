import CountDown from './Screens/Core/CountDown';
import MainLayout from './Screens/Layout/MainLayout';
import Form from './Screens/Core/Form';
function App() {
  return (
    <MainLayout>
      <Form />
      <CountDown />
    </MainLayout>
  );
}

export default App;
