import React, { useState, ChangeEvent } from 'react';
import { Button, Grid, Stack, TextField } from '@mui/material';

const Index: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [link, setLink] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [sum, setSum] = useState<number | undefined>(undefined);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setLoading(true);

      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile(reader.result as string);
        setLoading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Grid
      container
      display={"flex"}
      flexDirection={"column"}
      // alignItems={"center"}
      justifyContent={"center"}
      sx={{
        width: "50%",
        margin: '0 25%',
        padding: '20px',
      }}
    >
      <Stack spacing={2}>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Link for QR Code"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          multiline
          minRows={4}
          sx={{ width: '100%', minHeight: '100px' }}
        />
        <TextField
          label="Sum"
          type="number"
          value={sum === undefined ? '' : sum}
          onChange={(e) => setSum(Number(e.target.value))}
        />
      </Stack>
      <Grid 
        sx={{
          marginTop:'35px',
          display:"flex",
          flexDirection:'column  '
          
        }}
      >
        <label htmlFor="upload-input">
          <input
            id="upload-input"
            hidden
            accept="image/*"
            multiple
            type="file"
            onChange={handleFileChange}
          />
          <Button variant="contained" component="span"
          sx={{
            maxWidth:'100px'
          }}
        >
            Upload
          </Button>
        </label>
        
        {loading ? (
          <span>Loading...</span>
        ) : selectedFile ? (
          <img
            src={selectedFile}
            alt="Preview"
            style={{ width: '100px', height: '100px', marginTop: '10px' }}
          />
          
        ) : null}
        
     
      </Grid>
      <Button
      variant='contained'
      sx={{margin:'30px 0'}}
      >
        Create
      </Button>
     
    </Grid>
  );
};

export default Index;
