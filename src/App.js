import Button from "./Button";
function App() {
  return (
  <div className="App">
    <div>
    <Button primary>Click here!</Button>
    </div>
    <div>
    <Button secondary outline>Buy Now!</Button>
    </div>
    <div>
    <Button success rounded>See Deal!</Button>
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

export default App;
