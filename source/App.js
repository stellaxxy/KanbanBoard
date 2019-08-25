import React from 'react';
import {render} from 'react-dom';
import KanbanBoard from './KanbanBoard';
import dummyData from '../dummyData/dummyData';

render(<KanbanBoard cards={dummyData}/>, document.getElementById('root'));