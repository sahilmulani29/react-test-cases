import { render,screen,fireEvent } from "@testing-library/react"
import FilterComponent from "./filter-component";

describe('Filter Component Tests' , ()=>{

    test('Search text box should be visible' , ()=>{
        render(<FilterComponent/>);
        const element = screen.getByPlaceholderText('Search..');
        expect(element).toBeInTheDocument();
    })

    test('Typed value should be visible in text box', ()=>{
        render(<FilterComponent getQuery={()=>{}}/>);
        const element = screen.getByPlaceholderText('Search..');
        fireEvent.change(element , {target : {value : 'iphone'}})
        expect(element.value).toEqual('iphone');
    })

    test('On Search string change getQuery should get called', ()=>{
        let props = {
            getQuery: jest.fn() 
        };
        render(<FilterComponent {...props}/>);
        const element = screen.getByPlaceholderText('Search..');
        fireEvent.change(element , {target : {value : 'iphone'}})
        expect(props.getQuery).toBeCalled();
    })

    test('On Mount of FIlter getQuery should not have been called', ()=>{
        const props = {
            getQuery : jest.fn()
        }
        render(<FilterComponent {...props}/>)
        expect(props.getQuery).not.toHaveBeenCalled();
    })


})