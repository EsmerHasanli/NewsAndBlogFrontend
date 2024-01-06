import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import MarkdownEditor from "@uiw/react-markdown-editor";
import { Button, Container, TextField } from "@mui/material";
import Markdown from "react-markdown";
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable';
import style from './index.module.css';
import { postNews } from '../../../services/api/News';
import { useFormik } from 'formik';
import newsSchema from '../../../validation/newsSchema';

const CreateNews = () => {
  const [options, setOptions] = React.useState([
    { value: '1', label: 'Sport' },
    { value: '2', label: 'Development' },
    { value: '3', label: 'All' }
  ]);

  const formik = useFormik({
    initialValues: {
      publisherId: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!).id : JSON.parse(localStorage.getItem('publisher')!).id,
      title: '',
      imageUrl: '',
      body: '',
      createdAt: new Date(),
      tags: []
    },
    validationSchema: newsSchema,
    onSubmit: async (values, actions) => {
      try{
        console.log(values);
        await postNews(values)
        actions.resetForm()
      }catch(err){
        console.error(err);
      }
    },
  });

  const handleCreateOption = (inputValue) => {
    const newOption = {
      id: Date.now().toString(),
      value: inputValue.toLowerCase(),
      label: inputValue.charAt(0).toUpperCase() + inputValue.slice(1)
    };

    setOptions([...options, newOption]);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: '300px',
    }),
  };

  return (
    <>
      <Helmet>
        <title>TIME | Create New Publish</title>
      </Helmet>
      <Container sx={{ marginTop: "50px", marginBottom: "50px" }}>
        <form onSubmit={formik.handleSubmit}>
          <div className={style.dFlex}>
            <CreatableSelect
              onChange={(value) => formik.setFieldValue('tags', value)}
              value={formik.values.tags}
              styles={customStyles}
              isMulti
              options={options}
              onCreateOption={handleCreateOption}
            />
            <Button type="submit" variant="contained" color="error">Add Post</Button>
          </div>

          <div className={style.dFlex1}>
            <TextField
              onChange={(e) => formik.handleChange(e)}
              value={formik.values.title}
              id="title"
              label="Title"
              variant="outlined"
            />
            <TextField
              onChange={(e) => formik.handleChange(e)}
              value={formik.values.imageUrl}
              id="imageUrl"
              label="Preview photo"
              variant="outlined"
            />
          </div>

          <MarkdownEditor
            onChange={(value) => formik.setFieldValue('body', value)}
            value={formik.values.body}
          />
        </form>
      </Container>
    </>
  );
};

export default CreateNews;
