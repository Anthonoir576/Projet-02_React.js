
/* ######  IMPORT / DECLARATION  ###### */
import Countries from "../components/Countries";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
/* #################################### */



/* #########   FONCTION   ############# */
const Home = () => {

    return (

        <div className="Home">
            <Logo />
            <Navigation />
            <Countries />
        </div>

    );

};
/* #################################### */



/* ###########  EXPORT  ############### */
export default Home;
/* #################################### */