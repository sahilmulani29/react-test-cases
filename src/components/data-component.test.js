import { render,screen,waitFor  } from "@testing-library/react"
import DataComponent from "./data-component"
import { mockProductResponse } from "./mock";
import renderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import { mount, shallow } from "enzyme";

describe('Data Comp Test Cases' , ()=>{

    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve(mockProductResponse),
        })
    );

    beforeEach(() => {
        fetch.mockClear();
    });

    test('Product List header should present' , ()=>{
        render(<DataComponent/>)
        const element = screen.getByText(/Product List/i);
        expect(element).toBeInTheDocument();
    })

    test('Product List should present' , async ()=>{
        render(<DataComponent/>)
        const prodList = await screen.findByTestId("product_29");
        expect(prodList).toBeInTheDocument()
    })

    test('Shlould show Data not found if API does not work' ,async ()=>{
        fetch.mockImplementationOnce(() => Promise.reject("API is down"));
        render(<DataComponent/>)
        const element = await screen.findByTestId('data_not_found')
        expect(element).toBeInTheDocument();
    })

    test('Shlould show Data not found if API does not work' ,async ()=>{
        let wrapper = mount(<DataComponent/>);
        console.log('a : ' ,  wrapper.setState());
    })


})