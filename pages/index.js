import MyApp from './_app';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons';

library.add(fas, faTwitter, faFontAwesome);
export default function Home() {
  return (
    <MyApp/>
  )
}
