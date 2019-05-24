/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable padded-blocks */
import ValidatedForm, { FormGuard } from './index';
import { render, cleanup, fireEvent } from 'react-testing-library';
import React from 'react';

afterEach(cleanup);

describe('ValidatedForm', () => {

  it('is truthy', () => {
    expect(ValidatedForm).toBeTruthy()
  });

  it('Allows form elements and guards to be arbitrarily nested in other dom nodes', () => {
    const expectedValue = 'Expected Value';
    const onSubmit = jest.fn();

    const { getByText, queryByText, getByLabelText, container } = render(
      <ValidatedForm onSubmit={onSubmit}>
        <span>
          <label htmlFor='theInput'>Test:</label>
          <p>
            <FormGuard
              watches='theInput'
              validatesWith={(val) => val === expectedValue }>
              Error Message
            </FormGuard>
          </p>
          <div>
            <span><input type='text' id='theInput' name='theInput' /></span>
          </div>
          <input type='submit' value='Submit' />
        </span>
      </ValidatedForm>
    );

    const input = getByLabelText('Test:', container);

    fireEvent.change(input, { target: { value: 'Some Text' } });
    expect(getByText('Error Message', container)).toBeTruthy();

    fireEvent.change(input, { target: { value: expectedValue } });
    expect(queryByText('Error Message', container)).toBe(null);
  });

  describe('Passes non-validated input values through onSubmit', () => {
    it('<input type=text />', () => {

      const expectedValue = 'Some Text';
      const onSubmit = jest.fn();
  
      const { getByText, getByLabelText, container } = render(
        <ValidatedForm onSubmit={onSubmit}>
          <label htmlFor='theInput'>Test:</label>
          <input type='text' id='theInput' name='theInput' />
          <input type='submit' value='Submit' />
        </ValidatedForm>
      );
  
      const input = getByLabelText('Test:', container);
      const submit = getByText('Submit', container);
  
      fireEvent.change(input, { target: { value: expectedValue } });
      fireEvent.click(submit);
  
      expect(onSubmit.mock.calls.length).toBe(1);
      expect(onSubmit.mock.calls[0][1]).toEqual({ theInput: expectedValue });
    });
  
    it('<select />', () => {
  
      const expectedValue = 'Some Different Text';
      const onSubmit = jest.fn();
  
      const { getByText, getByLabelText, container } = render(
        <ValidatedForm onSubmit={onSubmit}>
          <label htmlFor='theInput'>Test:</label>
          <select id='theInput' name='theInput'>
            <option value='Some Text'>Some Text</option>
            <option value='Some Different Text'>Some Different Text</option>
            <option value='Some Other Text'>Some Other Text</option>
          </select>
          <input type='submit' value='Submit' />
        </ValidatedForm>
      );
  
      const select = getByLabelText('Test:', container);
      const submit = getByText('Submit', container);
  
      fireEvent.change(select, { target: { value: 'Some Different Text' } });
      fireEvent.click(submit);
  
      expect(onSubmit.mock.calls.length).toBe(1);
      expect(onSubmit.mock.calls[0][1]).toEqual({ theInput: expectedValue });
    });
  
    it('<select-multiple />', () => {
  
      const expectedValues = ['Some Text', 'Some Different Text'];
      const onSubmit = jest.fn();
  
      const { getByText, getByLabelText, container } = render(
        <ValidatedForm onSubmit={onSubmit}>
          <label htmlFor='theInput'>Test:</label>
          <select multiple id='theInput' name='theInput'>
            <option value='Some Text'>Some Text</option>
            <option value='Some Different Text'>Some Different Text</option>
            <option value='Some Other Text'>Some Other Text</option>
          </select>
          <input type='submit' value='Submit' />
        </ValidatedForm>
      );
  
      const select = getByLabelText('Test:', container);
      const submit = getByText('Submit', container);
  
      Array.from(select.children, (option, i) => {
        if (i === 0 || i === 1) { option.selected = true; }
      });
  
      fireEvent.change(select);
      fireEvent.click(submit);
  
      expect(onSubmit.mock.calls.length).toBe(1);
      expect(onSubmit.mock.calls[0][1]).toEqual({ theInput: expectedValues });
    });
  
    it('<input type="radio" />', () => {
  
      const onSubmit = jest.fn();
  
      const { getByText, getByLabelText, container } = render(
        <ValidatedForm onSubmit={onSubmit}>
          <label htmlFor='value_1'>Value 1</label>
          <input type='radio' id='value_1' name='theInput' value='Value 1' />
          <label htmlFor='value_2'>Value 2</label>
          <input type='radio' id='value_2' name='theInput' value='Value 2' />
          <label htmlFor='value_3'>Value 3</label>
          <input type='radio' id='value_3' name='theInput' value='Value 3' />
          <input type='submit' value='Submit' />
        </ValidatedForm>
      );
  
      const rad1 = getByLabelText('Value 1', container);
      const rad2 = getByLabelText('Value 2', container);
      const submit = getByText('Submit', container);
  
      fireEvent.click(rad2);
      fireEvent.click(submit);
  
      expect(onSubmit.mock.calls.length).toBe(1);
      expect(onSubmit.mock.calls[0][1]).toEqual({ theInput: 'Value 2' });
  
      fireEvent.click(rad1);
      fireEvent.click(submit);
  
      expect(onSubmit.mock.calls.length).toBe(2);
      expect(onSubmit.mock.calls[1][1]).toEqual({ theInput: 'Value 1' });
    });
  
    it('<input type="checkbox" /> - Passes values when value is specified', () => {

      const onSubmit = jest.fn();
      const { getByText, getByLabelText, container } = render(
        <ValidatedForm onSubmit={onSubmit}>
          <label htmlFor='value_1'>Value 1</label>
          <input type='checkbox' id='value_1' name='theInput1' value='Value 1' />
          <label htmlFor='value_2'>Value 2</label>
          <input type='checkbox' id='value_2' name='theInput2' value='Value 2' />
          <label htmlFor='value_3'>Value 3</label>
          <input type='checkbox' id='value_3' name='theInput3' value='Value 3' />
          <input type='submit' value='Submit' />
        </ValidatedForm>
      );
  
      const submit = getByText('Submit', container);
      const cb1 = getByLabelText('Value 2', container);
      const cb2 = getByLabelText('Value 3', container);
  
      fireEvent.click(cb1);
      fireEvent.click(cb2);
      fireEvent.submit(submit);
  
      expect(onSubmit.mock.calls.length).toBe(1);
      expect(onSubmit.mock.calls[0][1]).toEqual({ 
        theInput2: 'Value 2', 
        theInput3: 'Value 3' 
      });
    });

    it('<input type="checkbox" /> - Passes Boolean when no value is specified', () => {

      const onSubmit = jest.fn();
      const { getByText, getByLabelText, container } = render(
        <ValidatedForm onSubmit={onSubmit}>
          <label htmlFor='value_1'>Value 1</label>
          <input type='checkbox' id='value_1' name='theInput1' />
          <label htmlFor='value_2'>Value 2</label>
          <input type='checkbox' id='value_2' name='theInput2' />
          <label htmlFor='value_3'>Value 3</label>
          <input type='checkbox' id='value_3' name='theInput3' />
          <input type='submit' value='Submit' />
        </ValidatedForm>
      );
  
      const submit = getByText('Submit', container);
      const cb1 = getByLabelText('Value 2', container);
      const cb2 = getByLabelText('Value 3', container);
  
      fireEvent.click(cb1);
      fireEvent.click(cb2);
      fireEvent.submit(submit);
  
      expect(onSubmit.mock.calls.length).toBe(1);
      expect(onSubmit.mock.calls[0][1]).toEqual({ 
        theInput2: true, 
        theInput3: true 
      });
    });

    it('<textarea />', () => {
      const expectedValue = 'Some Text';
      const onSubmit = jest.fn();
  
      const { getByText, getByLabelText, container } = render(
        <ValidatedForm onSubmit={onSubmit}>
          <label htmlFor='theInput'>Test:</label>
          <textarea id='theInput' name='theInput' />
          <input type='submit' value='Submit' />
        </ValidatedForm>
      );
  
      const input = getByLabelText('Test:', container);
      const submit = getByText('Submit', container);
  
      fireEvent.change(input, { target: { value: expectedValue } });
      fireEvent.click(submit);
  
      expect(onSubmit.mock.calls.length).toBe(1);
      expect(onSubmit.mock.calls[0][1]).toEqual({ theInput: expectedValue });
    });  
  });

  describe('Shows error message when input is invalid', () => {
    it('<input type="text" />', () => {
      const expectedValue = 'Expected Value';
      const onSubmit = jest.fn();

      const { getByText, queryByText, getByLabelText, container } = render(
        <ValidatedForm onSubmit={onSubmit}>
          <label htmlFor='theInput'>Test:</label>
          <FormGuard
            watches='theInput'
            validatesWith={(val) => val === expectedValue}>
            Error Message
          </FormGuard>
          <input type='text' id='theInput' name='theInput' />
          <input type='submit' value='Submit' />
        </ValidatedForm>
      );

      const input = getByLabelText('Test:', container);

      fireEvent.change(input, { target: { value: 'Some Text' } });
      expect(getByText('Error Message', container)).toBeTruthy();

      fireEvent.change(input, { target: { value: expectedValue } });
      expect(queryByText('Error Message', container)).toBe(null);
    });

    it('<select />', () => {

      const onSubmit = jest.fn();

      const { getByText, queryByText, getByLabelText, container } = render(
        <ValidatedForm onSubmit={onSubmit}>
          <label htmlFor='theInput'>Test:</label>
          <FormGuard
            watches='theInput'
            validatesWith={val => val !== undefined && val.length > 0}>
            Error Message
          </FormGuard>
          <select id='theInput' name='theInput'>
            <option value='1'>1</option>
            <option value='2'>2</option>
          </select>
          <input type='submit' value='Submit' />
        </ValidatedForm>
      );

      const input = getByLabelText('Test:', container);
      const submit = getByText('Submit', container);

      fireEvent.click(submit);
      expect(getByText('Error Message', container)).toBeTruthy();

      fireEvent.change(input, { target: { value: '1' } });
      expect(queryByText('Error Message', container)).toBe(null);
    });

    it('<select multiple />', () => {

      const onSubmit = jest.fn();
  
      const { getByText, queryByText, getByLabelText, container } = render(
        <ValidatedForm onSubmit={onSubmit}>
          <label htmlFor='theInput'>Test:</label>
          <FormGuard
            watches='theInput'
            validatesWith={val => val !== undefined && val.length > 0}>
            Error Message
          </FormGuard>
          <select multiple id='theInput' name='theInput'>
            <option value='1'>1</option>
            <option value='2'>2</option>
          </select>
          <input type='submit' value='Submit' />
        </ValidatedForm>
      );
  
      const select = getByLabelText('Test:', container);
      const submit = getByText('Submit', container);
  
      fireEvent.click(submit);
      expect(getByText('Error Message', container)).toBeTruthy();
      
      Array.from(select.children, (option, i) => {
        if (i === 0 || i === 1) { option.selected = true; }
      });
  
      fireEvent.change(select);
      expect(queryByText('Error Message', container)).toBe(null);
    });

    it('<input type="radio" />', () => {
      const onSubmit = jest.fn();

      const { getByText, queryByText, getByLabelText, container } = render(
        <ValidatedForm onSubmit={onSubmit}>
          <FormGuard
            watches='theInput'
            validatesWith={(val) => val === '1' || val === '2'}>
            Error Message
          </FormGuard>
          <label htmlFor='theInput1'>Test1:</label>
          <input type='radio' id='theInput1' name='theInput' value='1' />
          <label htmlFor='theInput2'>Test2:</label>
          <input type='radio' id='theInput2' name='theInput' value='2' />
          <input type='submit' value='Submit' />
        </ValidatedForm>
      );

      const rad1 = getByLabelText('Test1:', container);
      const rad2 = getByLabelText('Test2:', container);
      const submit = getByText('Submit', container);

      fireEvent.click(submit);
      expect(getByText('Error Message', container)).toBeTruthy();
      
      fireEvent.click(rad1);
      expect(queryByText('Error Message', container)).toBe(null);

      fireEvent.click(rad2);
      expect(queryByText('Error Message', container)).toBe(null);
    });

    it('<input type="checkbox" />', () => {
      const onSubmit = jest.fn();

      const { getByText, queryByText, getByLabelText, container } = render(
        <ValidatedForm onSubmit={onSubmit}>
          <FormGuard
            watches='theInput1'
            validatesWith={(val) => val === '1' || val === '2'}>
            Error Message
          </FormGuard>
          <label htmlFor='theInput1'>Test1:</label>
          <input type='checkbox' id='theInput1' name='theInput1' value='1' />
          <input type='submit' value='Submit' />
        </ValidatedForm>
      );

      const cb1 = getByLabelText('Test1:', container);
      const submit = getByText('Submit', container);

      fireEvent.click(submit);
      expect(getByText('Error Message', container)).toBeTruthy();
      
      fireEvent.click(cb1);
      expect(queryByText('Error Message', container)).toBe(null);

      fireEvent.click(cb1);
      expect(queryByText('Error Message', container)).toBeTruthy();
    });

    it('<input type="text" />', () => {
      const expectedValue = 'Expected Value';
      const onSubmit = jest.fn();

      const { getByText, queryByText, getByLabelText, container } = render(
        <ValidatedForm onSubmit={onSubmit}>
          <label htmlFor='theInput'>Test:</label>
          <FormGuard
            watches='theInput'
            validatesWith={(val) => val === expectedValue}>
            Error Message
          </FormGuard>
          <textarea id='theInput' name='theInput' />
          <input type='submit' value='Submit' />
        </ValidatedForm>
      );

      const input = getByLabelText('Test:', container);

      fireEvent.change(input, { target: { value: 'Some Text' } });
      expect(getByText('Error Message', container)).toBeTruthy();

      fireEvent.change(input, { target: { value: expectedValue } });
      expect(queryByText('Error Message', container)).toBe(null);
    });
  });

  describe('Only calls onSubmit when input is valid', () => {
    it('<input type="text" />', () => {

      const expectedValue = 'Expected Value';
      const onSubmit = jest.fn();

      const { getByText, getByLabelText, container } = render(
        <ValidatedForm onSubmit={onSubmit}>
          <label htmlFor='theInput'>Test:</label>
          <FormGuard
            watches='theInput'
            validatesWith={(val) => val === expectedValue}>
            Error Message
          </FormGuard>
          <input type='text' id='theInput' name='theInput' />
          <input type='submit' value='Submit' />
        </ValidatedForm>
      );

      const input = getByLabelText('Test:', container);
      const submit = getByText('Submit', container);

      fireEvent.change(input, { target: { value: 'Some Text' } });
      fireEvent.click(submit);

      expect(onSubmit.mock.calls.length).toBe(0);
    
      fireEvent.change(input, { target: { value: expectedValue } });
      fireEvent.click(submit);

      expect(onSubmit.mock.calls.length).toBe(1);
      expect(onSubmit.mock.calls[0][1]).toEqual({ theInput: expectedValue });
    });

    it('<select />', () => {

      const onSubmit = jest.fn();

      const { getByText, getByLabelText, container } = render(
        <ValidatedForm onSubmit={onSubmit}>
          <label htmlFor='theInput'>Test:</label>
          <FormGuard
            watches='theInput'
            validatesWith={val => val !== undefined && val.length > 0}>
            Error Message
          </FormGuard>
          <select id='theInput' name='theInput'>
            <option value='1'>1</option>
            <option value='2'>2</option>
          </select>
          <input type='submit' value='Submit' />
        </ValidatedForm>
      );

      const input = getByLabelText('Test:', container);
      const submit = getByText('Submit', container);

      fireEvent.click(submit);

      expect(onSubmit.mock.calls.length).toBe(0);
    
      fireEvent.change(input, { target: { value: '1' } });
      fireEvent.click(submit);

      expect(onSubmit.mock.calls.length).toBe(1);
      expect(onSubmit.mock.calls[0][1]).toEqual({ theInput: '1' });
    });

    it('<select multiple/>', () => {

      const onSubmit = jest.fn();

      const { getByText, getByLabelText, container } = render(
        <ValidatedForm onSubmit={onSubmit}>
          <label htmlFor='theInput'>Test:</label>
          <FormGuard
            watches='theInput'
            validatesWith={val => val !== undefined && val.length > 0}>
            Error Message
          </FormGuard>
          <select multiple id='theInput' name='theInput'>
            <option value='1'>1</option>
            <option value='2'>2</option>
          </select>
          <input type='submit' value='Submit' />
        </ValidatedForm>
      );

      const select = getByLabelText('Test:', container);
      const submit = getByText('Submit', container);

      fireEvent.click(submit);

      expect(onSubmit.mock.calls.length).toBe(0);
 
      Array.from(select.children, (option, i) => {
        if (i === 0 || i === 1) { option.selected = true; }
      });
  
      fireEvent.change(select);
      fireEvent.click(submit);

      expect(onSubmit.mock.calls.length).toBe(1);
      expect(onSubmit.mock.calls[0][1]).toEqual({ theInput: ['1', '2'] });
    });

    it('<input type="radio" />', () => {
      const onSubmit = jest.fn();

      const { getByText, getByLabelText, container } = render(
        <ValidatedForm onSubmit={onSubmit}>
          <FormGuard
            watches='theInput'
            validatesWith={(val) => val === '1' || val === '2'}>
            Error Message
          </FormGuard>
          <label htmlFor='theInput1'>Test1:</label>
          <input type='radio' id='theInput1' name='theInput' value='1' />
          <label htmlFor='theInput2'>Test2:</label>
          <input type='radio' id='theInput2' name='theInput' value='2' />
          <input type='submit' value='Submit' />
        </ValidatedForm>
      );

      const rad1 = getByLabelText('Test1:', container);
      const rad2 = getByLabelText('Test2:', container);
      const submit = getByText('Submit', container);

      fireEvent.click(submit);
      expect(onSubmit.mock.calls.length).toBe(0);
      
      fireEvent.click(rad1);
      fireEvent.click(submit);
      expect(onSubmit.mock.calls.length).toBe(1);
      expect(onSubmit.mock.calls[0][1]).toEqual({ theInput: '1' });

      fireEvent.click(rad2);
      fireEvent.click(submit);
      expect(onSubmit.mock.calls.length).toBe(2);
      expect(onSubmit.mock.calls[1][1]).toEqual({ theInput: '2' });
    });

    it('<textarea />', () => {

      const expectedValue = 'Expected Value';
      const onSubmit = jest.fn();

      const { getByText, getByLabelText, container } = render(
        <ValidatedForm onSubmit={onSubmit}>
          <label htmlFor='theInput'>Test:</label>
          <FormGuard
            watches='theInput'
            validatesWith={(val) => val === expectedValue}>
            Error Message
          </FormGuard>
          <textarea id='theInput' name='theInput' />
          <input type='submit' value='Submit' />
        </ValidatedForm>
      );

      const input = getByLabelText('Test:', container);
      const submit = getByText('Submit', container);

      fireEvent.change(input, { target: { value: 'Some Text' } });
      fireEvent.click(submit);

      expect(onSubmit.mock.calls.length).toBe(0);
    
      fireEvent.change(input, { target: { value: expectedValue } });
      fireEvent.click(submit);

      expect(onSubmit.mock.calls.length).toBe(1);
      expect(onSubmit.mock.calls[0][1]).toEqual({ theInput: expectedValue });
    });
  });
});
