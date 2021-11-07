import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Autocomplete from '@mui/material/Autocomplete';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
const CreateJobForm = () => {
    const classes = useStyles();
    const [job,setJob] =  useState({
        name : "",
        description : "",
        technologies : [],
        jobId:""
    })
    const [jobList,setJobList] =  useState(localStorage.getItem("jobList") ? JSON.parse(localStorage.getItem("jobList")) :[])
    const technologiesList = [
        { title: 'Java' },
        { title: 'Python' },
        { title: 'React JS' },
        { title: 'React Native'},
        { title: 'Javascript' },
        { title: "Angular" },
        { title: 'Angular JS' },
        { title: 'Cypress'},
        { title: 'Docker' },
        { title: 'GO' },
        { title: 'C'},
        { title: 'Php' },
        { title: 'Wordpress' },
        { title: 'AWS'},
        { title: '.Net' },
        { title: 'SQL' },
        { title: 'MySQL'},
        { title: 'Oracle' },
        { title: 'GNode JS' },
       
    ]
    function saveButtonClick() {
        try{
           console.log(job)
           job.jobId = "JOB_"+(jobList.length + 1)
           setJobList(jobList.push(job))

           console.log(jobList)
           localStorage.setItem("jobList",JSON.stringify(jobList))
           setTimeout(()=>{
            toast("Record saved successfully !",{
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
           },1000)
           setTimeout(()=>{window.location.reload();},2000)
            // alert("Job saved successfully")
            setJob({
                    name : "",
                    description : "",
                    technologies : [],
                    jobId:""
                })
        }catch(e){
            console.log(e)
        }
      }
      const handleTextInputChange = (event,field) => {
          try{
              switch(field){
                  case 'name':
                      job.name = event.target.value;
                      break;
                default:
                    job.description = event.target.value
                    break;
              }
          }catch(e){
              console.log(e)
          }
    };
    return(
        <div className={classes.root}>
            <Grid rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            alignItems="center"
            container
            justify="space-between"
            spacing={3}>
            <Grid item xs={12}>
            <TextField required style={{ width: "100%" }} label="Name" name="name" defaultValue={job.name} onChange= {(e)=>handleTextInputChange(e,'name')} /><br /><br />
            </Grid>
            <Grid item xs={12}>
            <TextareaAutosize required
                aria-label="minimum height"
                minRows={3}
                placeholder="Description"
                name="description"
                style={{ width: "100%" }}
                defaultValue={job.description}
                onChange= {(e)=>handleTextInputChange(e,'desc')}
                />
            </Grid>
            <Grid item xs={12}>
            <Autocomplete
                    multiple
                    onChange={(event, value) => job.technologies= value} 
                    id="tags-outlined"
                    options={technologiesList}
                    getOptionLabel={(option) => option.title}
                    filterSelectedOptions
                    defaultValue={job.technologies}
                    renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Technologies"
                    />
                    )}
                />
            </Grid>
            <Grid item xs={12}>
            <Button 
                  variant="contained"
                  fullWidth
                  color="primary"
                  onClick={saveButtonClick}>
                      Save
                </Button>
            </Grid>
            </Grid>
            <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
{/* Same as */}
<ToastContainer />
        </div>
        
    );
};

export default CreateJobForm;