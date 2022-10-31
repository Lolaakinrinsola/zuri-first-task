
import './App.scss';
import {Link} from './components/Link';
import { Profile__img } from './components/Profile-img';
import {Socials} from './components/Socials';
import {Footer} from './components/Footer';

function App() {
  return (
    <body>
      <header>
        <Profile__img/>
      </header>

      <main>
        <Link title="Twitter Link" id="twitter" link="https://twitter.com/search?q=lolaakinrinsola&src=typed_query" />
        <Link title="Zuri Team" id="btn_zuri" link="https://training.zuri.team/" /> 
        <Link title="Zuri Books" id="books" link="http://books.zuri.team" />
        <Link title="Python Books" id="book_python" link="https://books.zuri.team/python-for-beginners?ref_id=lola-akinrinsola" />
        <Link title="Background Check for Coders" id="pitch" link="https://background.zuri.team" />
        <Link title="Design Books" id="book__design" link="https://books.zuri.team/design-rules" />

        <div className="socials">
          <Socials/>
        </div>
      </main>

      <footer>
        <Footer/>
      </footer>
    </body>
  );
}

export default App;
