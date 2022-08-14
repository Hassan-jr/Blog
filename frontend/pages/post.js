import React from "react";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";

const initialValues = {
  mainTitle: "",
  mainUrl: "",
  category: "",
  metaData: "",
  friends: [
    {
      name: "",
      email: "",
    },
  ],
};

const post = () => {
  return (
    <div>
      <h1>Invite friends</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
          // console.log(values);
        }}
      >
        {({ values }) => (
          <Form>
            {/* mainTitle */}

            <div className="col">
              <label htmlFor="mainTitle">MainTitle</label>
              <Field name="mainTitle" placeholder="mainTitle" type="text" />
              <ErrorMessage
                name="mainTitle"
                component="div"
                className="field-error"
              />
            </div>

            {/* mainUrl */}

            <div className="col">
              <label htmlFor="mainUrl">MainUrl</label>
              <Field name="mainUrl" placeholder="mainUrl" type="text" />
              <ErrorMessage
                name="mainUrl"
                component="div"
                className="field-error"
              />
            </div>

            {/* category */}
            <div className="col">
              <label htmlFor="category">category</label>
              <Field name="category" placeholder="category" type="text" />
              <ErrorMessage
                name="category"
                component="div"
                className="field-error"
              />
            </div>

            {/* metaData */}
            <div className="col">
              <label htmlFor="metaData">MetaData</label>
              <Field name="metaData" placeholder="metaData" type="text" />
              <ErrorMessage
                name="metaData"
                component="div"
                className="field-error"
              />
            </div>
                 
                 {/* array of paragraphs or posts */}
            <FieldArray name="friends">
              {({ insert, remove, push }) => (
                <div>
                  {values.friends.length > 0 &&
                    values.friends.map((friend, index) => (
                      // main on div
                      <div className="row" key={index}>
                        {/* each object wthin the array */}

                        {/* name */}
                        <div className="col">
                          <label htmlFor={`friends.${index}.name`}>Name</label>
                          <Field
                            name={`friends.${index}.name`}
                            placeholder="Jane Doe"
                            type="text"
                          />
                          <ErrorMessage
                            name={`friends.${index}.name`}
                            component="div"
                            className="field-error"
                          />
                        </div>

                               {/* email */}
                        <div className="col">
                          <label htmlFor={`friends.${index}.email`}>
                            Email
                          </label>
                          <Field
                            name={`friends.${index}.email`}
                            placeholder="jane@acme.com"
                            type="email"
                          />
                          <ErrorMessage
                            name={`friends.${index}.name`}
                            component="div"
                            className="field-error"
                          />
                        </div>
                        {/* END */}
                        <div className="col">
                          <button
                            type="button"
                            className="secondary"
                            onClick={() => remove(index)}
                          >
                            X
                          </button>
                        </div>
                      </div>
                    ))}
                  <button
                    type="button"
                    className="secondary"
                    onClick={() => push({ name: "", email: "" })}
                  >
                    Add Friend
                  </button>
                </div>
              )}
            </FieldArray>
            <button type="submit">Invite</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default post;
