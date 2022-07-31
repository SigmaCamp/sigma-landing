import CustomThemeProvider from '@contexts/CustomThemeProvider';
import { GlobalStyles } from 'styles/globalStyles';


function MyApp({ Component, pageProps }) {
  return (
    <CustomThemeProvider>
      <GlobalStyles/>
      <Component {...pageProps} />
    </CustomThemeProvider>)
}

export default MyApp;
