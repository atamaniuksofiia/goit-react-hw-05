import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const SearchBar = ({ handleSetQuery }) => {
  const handleSubmit = (values) => {
    console.log(values);
    handleSetQuery(values.query);
  };

  const initialValues = {
    query: "",
  };

  const validationSchema = Yup.object({
    query: Yup.string().required("Please enter a search term"),
  });

  return (
    <div>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="query" placeholder="Search for movies" />
            {errors.query && touched.query ? <div>{errors.query}</div> : null}
            <button type="submit">Search</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearchBar;
