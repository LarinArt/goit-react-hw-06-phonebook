import { Report } from 'notiflix';
import { StyledForm, Label, Title, StyledInput } from './ContactsForm.style';
import { Button } from 'components/ui/Button';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, getContacts } from 'store/contacts-slice';
import { Formik } from 'formik';
import * as yup from 'yup';

function ContactsForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const validationSchema = yup.object({
    number: yup
      .string()
      .required('')
      .test({
        test: value => /^[\d+][\d()-]{4,16}\d$/i.test(value),
        name: yup.string().required(''),
      }),
  });

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    contacts.find(
      ({ name }) => name.toLowerCase() === values.name.toLowerCase()
    )
      ? Report.warning(
          `${values.name}`,
          'This user is already in the contact list.',
          'OK'
        )
      : dispatch(addContact(values));

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <StyledForm>
        <Label>
          <Title>Name</Title>
          <StyledInput type="text" name="name" />
        </Label>
        <Label>
          <Title>Number</Title>
          <StyledInput type="tel" name="number" />
        </Label>
        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
}

export default ContactsForm;
