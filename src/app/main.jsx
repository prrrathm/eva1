import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ListBox, processListBoxDragAndDrop } from '@progress/kendo-react-listbox';
import products from './products.json';

const App = () => {
  const [state, setState] = React.useState({
    notDiscontinued: products.filter(product => !product.Discontinued),
    discontinued: products.filter(product => product.Discontinued),
    draggedItem: {}
  });

  const handleDragStart = e => {
    setState({ ...state,
      draggedItem: e.dataItem
    });
  };

  const handleDrop = e => {
    let result = processListBoxDragAndDrop(state.notDiscontinued, state.discontinued, state.draggedItem, e.dataItem, 'ProductID');
    setState({ ...state,
      notDiscontinued: result.listBoxOneData,
      discontinued: result.listBoxTwoData
    });
  };

  return <div className="example">
      <div className="demo-section k-content wide">
        <div>
          <img src="https://demos.telerik.com/kendo-ui/content/web/listbox/arrow-left2right.png" alt="drag-indicator" className="arrow" />
          <br />
          <ListBox data={state.notDiscontinued} textField="ProductName" onDragStart={handleDragStart} onDrop={handleDrop} />
          <ListBox data={state.discontinued} textField="ProductName" style={{
          marginLeft: '12px'
        }} onDragStart={handleDragStart} onDrop={handleDrop} />
          <img src="https://demos.telerik.com/kendo-ui/content/web/listbox/arrow-right2left.png" alt="drag-indicator" className="arrow" />
        </div>
      </div>
    </div>;
};

ReactDOM.render(<React.Fragment>
    <App />
    <style>
      {`.arrow {
                padding: 8px 0 5px 238px;
            }        
            .example .demo-section {
                max-width: none;
                width: 640px;
            }
        
            .example .k-listbox {
                width: 275px;
                height: 310px;
            }`}
    </style>
  </React.Fragment>, document.querySelector('my-app'));