import {useState} from 'react'
import List from './components/List';
function App() {

  const [list1, setList1] = useState(["Cras justo odio", "Dapibus ac facilisis in", "Morbi leo risus", "Porta ac consectetur ac", "Vestibulum at eros"])
  const [list2, setList2] = useState(["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"])
  
  return (
    <div className='container'>
      <p>Lista 1</p>
      <List itemsList={list1} setList={setList1} otherList={list2} setOtherList={setList2}/>
      <p>Lista 2</p>
      <List itemsList={list2} setList={setList2} otherList={list1} setOtherList={setList1}></List>
    </div>
  );
}

export default App;
