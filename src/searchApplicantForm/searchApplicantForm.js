import React from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

const useStyles = (theme) => ({
    root: {
        maxWidth: 330,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        background: 'white',
        padding: 20,
        marginTop: 30
    }
});
const SearchApplicantForm = () => {
    const classes = useStyles();
    const [filter, setFilter] = React.useState();
    const [applicantList,setApplicantList] =  React.useState(localStorage.getItem("applicantList") ? JSON.parse(localStorage.getItem("applicantList")) :[])
    const [searchApplicantList,setSearchApplicantList] = React.useState(localStorage.getItem("applicantList") ? JSON.parse(localStorage.getItem("applicantList")) :[])

    const [open, setOpen] = React.useState(false);
    const handleChange = (event) => {
        setFilter(event.target.value);
        let filterValue = document.querySelector("#filterValue").value;
        let result = []
        if(event.target.value === 'noticePeriod'){
            
        }else{

        }
        if(applicantList.length > 0){
            applicantList.filter(obj => {
                if(obj[filter] <= filterValue){
                    result.push(obj)
                }
            })
        }
      };
      const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = (value) => {
        setOpen(false);
        // setSelectedValue(value);
      };
      function searchButton() {
        try{
            let searchTerm = document.querySelector("#searchTerm").value
            var result = [];
            
            if(applicantList.length > 0){
                applicantList.filter(obj => {
                    let isFind = false;
                    if(obj.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0){
                        result.push(obj)
                        isFind =true;
                    }
                    if(!isFind){
                        obj.technologies.filter(tech=>{
                            if(tech.title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0){
                                result.push(obj)
                            }
                      })
                    }
                  })
                
            }
     
            
              setSearchApplicantList(result)
        }catch(e){
            console.log(e)
        }
      }
    return(
        <div className={classes.root}>
            <div>
            <TextField id="searchTerm" label="Search by name, technology" variant="standard" /><br/>
            
            <FormControl  fullWidth>
            <InputLabel id="demo-simple-select-label">Filter</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filter}
            label="Filter"
            onChange={handleChange}
            >
            <MenuItem value={'noticePeriod'}>Notice Period</MenuItem>
            <MenuItem value={'salary'}>Salary</MenuItem>
            </Select>
            {/* <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={condition}
            label="Filter"
            onChange={handleChange}
            >
            <MenuItem value={'>='}>&gt;=</MenuItem>
            <MenuItem value={'<='}>&lt;=</MenuItem>
            </Select> */}
            {/* <TextField id="filterValue" label="Filter value" variant="standard" /><br/> */}
            
      </FormControl>
      <Button 
                  variant="contained"
                  fullWidth
                  color="primary"
                  onClick={searchButton}>
                      Search
                </Button><br/>
            </div>
      <br></br>
      <div className="main-content">
      {searchApplicantList.map((job) => {
          return (
            <Card key={job.jobId} >
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                <b>Applicant Name: {job.name}</b>
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" component="div">
              Applicant description: {job.notes}
              </Typography>
               <Typography sx={{ fontSize: 14 }}color="text.secondary">
              Applicant Technologies: <b>{job.technologies.map((tech) => {return tech.title}).join(',')}</b>
              </Typography>
              </CardContent>
            <CardActions>
              <Button onClick={handleClickOpen} size="small">View Profile</Button>
            </CardActions>
          </Card>)
      })}
      
      </div>
      <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Applicant Details</DialogTitle>
      {searchApplicantList.map((job) => {
          return (
            <Card key={job.jobId} >
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                <b>Applicant Name: {job.name}</b>
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" component="div">
              Applicant description: {job.notes}
              </Typography>
              <Typography sx={{ fontSize: 14 }}color="text.secondary">
              Applicant Technologies: <b>{job.technologies.map((tech) => {return tech.title}).join(',')}</b>
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" component="div">
              Applicant Salary: {job.salary}
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" component="div">
              Applicant Notice Period: {job.noticePeriod}
              </Typography>
            </CardContent>
            
          </Card>)
      })}
    </Dialog>
        </div>
    );
};

export default SearchApplicantForm;