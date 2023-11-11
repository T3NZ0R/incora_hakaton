import React, { useState, ChangeEvent } from 'react';
import { Button, Grid, Stack } from '@mui/material';

const Index: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

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
    sx={{
        border:"1px solid black",
        margin:"0 30%",
    }}>
        <Grid>
            
        </Grid>
      <Stack direction="row" alignItems="center" spacing={2}>
        <label htmlFor="upload-input">
          <Button variant="contained" component="span">
            Upload
          </Button>
          <input
            id="upload-input"
            hidden
            accept="image/*"
            multiple
            type="file"
            onChange={handleFileChange}
          />
        </label>
        {loading ? (
          <span>Loading...</span>
        ) : selectedFile ? (
          <img
            src={selectedFile}
            alt="Preview"
            style={{ width: '100px', height: '100px', marginLeft: '10px' }}
          />
        ) : null}
      </Stack>
    </Grid>
  );
};

export default Index;
