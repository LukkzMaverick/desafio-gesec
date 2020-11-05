import { ListGroup } from "react-bootstrap"

const List = ({itemsList, setList, otherList, setOtherList}) => {
    const showItemsList = (itemsList) => itemsList.map((item, index) => <li key={index}><ListGroup.Item >{item}</ListGroup.Item></li>)
    
    function clickHandler(listItem){
        if(listItem.classList.contains('list-group-item')){
            removeItem()
            addItemToOtherList()
        }        
        function removeItem(){
            const array = [...itemsList]
            const index = array.indexOf(listItem.textContent);
            if (index > -1) {
                array.splice(index, 1);
            }
            setList(array)
        }
        function addItemToOtherList(){
            const array = [...otherList]
            array.push(listItem.textContent)
            setOtherList(array)
        }
    }

  return (
    <ul>
        <ListGroup onClick={(event) => clickHandler(event.target)}>
            {showItemsList(itemsList)}
        </ListGroup>    
    </ul>
  )
}

export default List
