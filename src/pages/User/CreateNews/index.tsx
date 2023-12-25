import React from "react";
import { Helmet } from "react-helmet";
import MarkdownEditor from "@uiw/react-markdown-editor";
import { Button, Container } from "@mui/material";
import Markdown from "react-markdown";
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable';
import style from './index.module.css'

const CreateNews = () => {
  const [markdown, setMarkdown] = React.useState<string>("");
  const [post, setPost] = React.useState<string[]>([]);
  const [options, setOptions] = React.useState([
    { value: '1', label: 'Sport' },
    { value: '2', label: 'Development' },
    { value: '3', label: 'All' }
  ]);

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
        <div className={style.dFlex}>
          <CreatableSelect styles={customStyles} isMulti options={options}  onCreateOption={handleCreateOption} />
          <Button variant="contained" color="error"  onClick={() => setPost([...post, markdown])}> add post </Button> 
        </div>
        <MarkdownEditor
          value={markdown}
          height="200px"
          onChange={(value, viewUpdate) => setMarkdown(value)}
        />
        {post &&
          post.map((item) => {
            return <Markdown key={item.id}>{item}</Markdown>;
          })}
      </Container>
    </>
  );
};

export default CreateNews;
