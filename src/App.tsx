import { Card, Typography } from '@mui/material';
import CurrencyConverter from './components/CurrencyConverter';

const App = () => {
  return (
    <Card
      sx={{
        maxWidth: 400,
        padding: 5,
        boxShadow: 3,
        borderRadius: '15px',
        textAlign: 'center',
      }}
    >
      <Typography variant="h5" component="h1" sx={{ color: '#575757' }} gutterBottom>
        Currency Converter
      </Typography>
      <CurrencyConverter />
    </Card>
  );
};

export default App;
