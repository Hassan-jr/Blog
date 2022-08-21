import React from "react";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import axios from "axios";

const initialValues = {
  mainTitle: "",
  mainUrl: "",
  category: "",
  metaData: "",
  posts: [
    {
      title: "",
      content: "",
      url: "",
    },
  ],
};

const Post = () => {
  return (
    <div className="flex flex-col  items-center justify-items-end  text-white space-x-2 post">
      <h1 className="text-3xl text-bold">MAKE A BLOG</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { resetForm }) => {
          await new Promise((r) => setTimeout(r, 500));
          //  post request
          axios
            .post("http://localhost:5000/post/", {
              ...values,
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
          // reset
          resetForm({ values: "" });
        }}
      >
        {({ values }) => (
          <Form className="flex flex-col">
            {/* mainTitle */}

            <div className="col my-5 space-x-5">
              <Field
                name="mainTitle"
                placeholder="mainTitle"
                type="text"
                className="w-80 text-stone-900"
              />
              <ErrorMessage
                name="mainTitle"
                component="div"
                className="field-error"
              />
            </div>

            {/* mainUrl */}

            <div className="col my-5 space-x-5">
              <Field
                name="mainUrl"
                placeholder="mainUrl"
                type="text"
                className="w-80 text-stone-900"
              />
              <ErrorMessage
                name="mainUrl"
                component="div"
                className="field-error"
              />
            </div>

            {/* category */}
            <div className="col my-5 space-x-5">
              <Field
                name="category"
                placeholder="category"
                type="text"
                className="w-80 text-stone-900"
              />
              <ErrorMessage
                name="category"
                component="div"
                className="field-error"
              />
            </div>

            {/* metaData */}
            <div className="col my-5 space-x-5">
              <Field
                name="metaData"
                placeholder="metaData"
                type="text"
                className="w-80 text-stone-900"
              />
              <ErrorMessage
                name="metaData"
                component="div"
                className="field-error"
              />
            </div>

            {/* array of paragraphs or posts */}
            <FieldArray name="posts">
              {({ insert, remove, push }) => (
                <div>
                  {values.posts.length > 0 &&
                    values.posts.map((post, index) => (
                      // main on div
                      <div className="col" key={index}>
                        {/* each object wthin the array */}
                        <h1 className="text-3xl text-bold">
                          Paragraph {index + 1}
                        </h1>

                        {/* title */}
                        <div className="col my-5 space-x-5">
                          <Field
                            name={`posts.${index}.title`}
                            placeholder="Enter The Paragraph Title"
                            type="text"
                            className="w-80 text-stone-900"
                          />
                          <ErrorMessage
                            name={`post.${index}.title`}
                            component="div"
                            className="field-error"
                          />
                        </div>

                        {/* content */}
                        <div className="col my-5 space-x-5">
                          <Field
                            as="textarea"
                            name={`posts.${index}.content`}
                            placeholder="Enter The paragraphs content"
                            className="w-80 h-40 text-stone-900"
                          />
                          <ErrorMessage
                            name={`posts.${index}.content`}
                            component="div"
                            className="field-error"
                          />
                        </div>

                        {/* url */}
                        <div className="col my-5 space-x-5">
                          <Field
                            name={`posts.${index}.url`}
                            placeholder="Enter The Paragraph image url"
                            type="text"
                            className="w-80 text-stone-900"
                          />
                          <ErrorMessage
                            name={`post.${index}.url`}
                            component="div"
                            className="field-error"
                          />
                        </div>

                        {/* END  button to cancel below*/}
                        <div className="col">
                          <button
                            type="button"
                            onClick={() => remove(index)}
                            className="bg-red-700 p-5 rounded "
                          >
                            X
                          </button>
                        </div>
                      </div>
                    ))}
                  <button
                    type="button"
                    onClick={() => push({ title: "", content: "", url: "" })}
                    className="bg-sky-700 p-5 rounded m-5 "
                  >
                    Add Paragraph
                  </button>
                </div>
              )}
            </FieldArray>
            <button type="submit" className="bg-green-700 p-5 rounded m-5">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Post;
