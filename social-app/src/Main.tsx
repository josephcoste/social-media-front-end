import reactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

reactDOM.createRoot(document.getElementById('root')!).render(
<BrowserRouter>
<App/>
</BrowserRouter>


)