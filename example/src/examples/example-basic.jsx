import React from 'react';
import { ValidatedForm, FormGuard, validators } from 'react-formguards'

const ExampleBasic = () => {
  return (
    <ValidatedForm onSubmit={(e, formVals) => console.log(formVals)}>
      <label htmlFor='example1-name'>Name:</label>
      <input type='text' name='name' id='example1-name' />

      <label htmlFor='example1-email'>Email:</label>
      <FormGuard watches='email' validatesWith={validators.required} >
                Email is required
      </FormGuard>
      <FormGuard watches='email' validatesWith={validators.email} >
                Please enter a valid email address
      </FormGuard>
      <input type='email' name='email' id='example1-email' />

      <label htmlFor='example1-phone'>Telephone:</label>
      <FormGuard watches='phone' validatesWith={validators.phone} >
                Please enter a valid phone number
      </FormGuard>
      <input type='tel' name='phone' id='example1-phone' />

      <label htmlFor='example1-comments'>Comments:</label>
      <FormGuard watches='comments' validatesWith={validators.maxLength(80)} >
                Maximum length (80 characters) exceeded
      </FormGuard>
      <textarea name='comments' id='example1-comments' />

      <FormGuard watches='radioButtons' validatesWith={validators.required} >
                Pick One!
      </FormGuard>

      <input type='radio' name='radioButtons' value='Radio 1' id='example1-radioButtons1' />
      <label htmlFor='example1-radioButtons1'>Radio 1</label>
      <br />
      <input type='radio' name='radioButtons' value='Radio 2' id='example1-radioButtons2' />
      <label htmlFor='example1-radioButtons2'>Radio 2</label>
      <br />
      <input type='radio' name='radioButtons' value='Radio 3' id='example1-radioButtons3' />
      <label htmlFor='example1-radioButtons3'>Radio 3</label>
      <br /><br />

      <FormGuard
        watches={['checkBox1', 'checkBox2', 'checkBox3']}
        validatesWith={(cb1, cb2, cb3) => { return cb1 || cb2 || cb3 }} >
                Pick One!
      </FormGuard>
      
      <input type='checkbox' name='checkBox1' id='example1-checkbox1' />
      <label htmlFor='example1-checkbox1'>Check 1</label>
      <br />
      <input type='checkbox' name='checkBox2' id='example1-checkbox2' />
      <label htmlFor='example1-checkbox2'>Check 2</label>
      <br />
      <input type='checkbox' name='checkBox3' id='example1-checkbox3' />
      <label htmlFor='example1-checkbox3'>Check 3</label>
      <br /><br />

      <input type='submit' value='Check the console for onSubmit' />
    </ValidatedForm>
  );
}

export default ExampleBasic;
