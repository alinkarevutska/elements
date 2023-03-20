import Button from "./components/Button";
import Accordion from "./components/Accordion";

function App() {

  const items = [
    {
      id: 'yfrdkg',
      label: 'Can I use React on a project?',
      content: 'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.'
    },
    {
      id: '0978tfhdr',
      label: 'Can I use JavaScript on a project?',
      content: 'You can use JavaScript on any project you want. You can use JavaScript on any project you want. You can use JavaScript on any project you want. You can use JavaScript on any project you want.'
    },
    {
      id: '096fdfjyrdsr',
      label: 'Can I use Tailwind on a project?',
      content: 'You can use Tailwind on any project you want. You can use Tailwind on any project you want. You can use Tailwind on any project you want. You can use Tailwind on any project you want.'
    },
  ]
  
  return (
  <Accordion items={items}/>
  );
}

export default App;
