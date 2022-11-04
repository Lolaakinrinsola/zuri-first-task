import {Links} from './Links';
import { Profile__img } from './Profile-img';
import {Socials} from './Socials';
import {Footer} from './Footer';
import Contact_link from "./Contact_link";
import '../App.scss';

export function Homepage(){
    return(
    <body>
        <header>
          <Profile__img/>
        </header>

        <main>
          <Links title="Twitter Link" id="twitter" link="https://twitter.com/search?q=lolaakinrinsola&src=typed_query" />
          <Links title="Zuri Team" id="btn_zuri" link="https://training.zuri.team/" /> 
          <Links title="Zuri Books" id="books" link="http://books.zuri.team" />
          <Links title="Python Books" id="book_python" link="https://books.zuri.team/python-for-beginners?ref_id=lola-akinrinsola" />
          <Links title="Background Check for Coders" id="pitch" link="https://background.zuri.team" />
          <Links title="Design Books" id="book__design" link="https://books.zuri.team/design-rules" />
          <Contact_link title="Contact" id="contact" link="./contact"/>
          
          <div className="socials">
            <Socials/>
          </div>
        </main>

        <footer>
          <Footer/>
        </footer>
    </body>

    )
}
