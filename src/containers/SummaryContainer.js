import {Container} from 'unstated'
import { runInThisContext } from 'vm';
import axios from 'axios';

export default class SummaryContainer extends Container{
    state= {
        loading: false,
        data: null,
        error: null

    }

    

    
}