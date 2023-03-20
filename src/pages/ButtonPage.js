import Button from "../components/Button";
import { GoBell, GoPlus, GoChevronRight} from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {
    console.log('click!')
  }
  const onMouseEnter = () => {
    console.log('mouse enter!')
  }
  return (
  <div className="App">
    <div>
    <Button primary onClick={handleClick} className="mb-5"> 
      <GoBell/> 
      Click here!
    </Button>
    </div>
    <div>
    <Button secondary outline onMouseEnter={onMouseEnter}>
      <GoPlus/>
      Buy Now!
    </Button>
    </div>
    <div>
    <Button success rounded onMouseLeave={handleClick}>
      <GoChevronRight/>
      See Deal!
    </Button>
    </div>
    <div>
    <Button danger>Hide Ads!</Button>
    </div>
    <div>
    <Button warning outline>Subscribe!</Button>
    </div>
  </div>
  );
}

export default ButtonPage;
